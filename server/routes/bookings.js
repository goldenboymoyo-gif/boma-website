import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import Booking from '../models/Booking.js';
import { protect, authorize } from '../middleware/auth.js';

const router = Router();

const validate = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ success: false, error: errors.array().map((e) => e.msg).join(', ') });
    return false;
  }
  return true;
};

router.post(
  '/',
  protect,
  [
    body('date').notEmpty().withMessage('Date is required'),
    body('time').trim().notEmpty().withMessage('Time is required'),
    body('adults').isInt({ min: 1 }).withMessage('At least 1 adult is required'),
    body('contactName').trim().notEmpty().withMessage('Contact name is required'),
    body('contactEmail').isEmail().withMessage('Valid contact email is required'),
  ],
  async (req, res, next) => {
    try {
      if (!validate(req, res)) return;

      const {
        date, time, adults, children, childAges,
        dietaryPreferences, specialRequests,
        contactName, contactEmail, contactPhone,
      } = req.body;

      const booking = await Booking.create({
        user: req.user._id,
        date, time, adults, children: children || 0,
        childAges: childAges || [],
        dietaryPreferences: dietaryPreferences || [],
        specialRequests,
        contactName, contactEmail, contactPhone,
      });

      res.status(201).json({ success: true, booking });
    } catch (error) {
      next(error);
    }
  }
);

router.get('/', protect, async (req, res, next) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json({ success: true, count: bookings.length, bookings });
  } catch (error) {
    next(error);
  }
});

router.get('/all', protect, authorize('admin'), async (req, res, next) => {
  try {
    const bookings = await Booking.find()
      .populate('user', 'name email phone')
      .sort({ createdAt: -1 });
    res.json({ success: true, count: bookings.length, bookings });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', protect, async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('user', 'name email phone');
    if (!booking) {
      return res.status(404).json({ success: false, error: 'Booking not found' });
    }
    if (booking.user._id.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, error: 'Not authorized to view this booking' });
    }
    res.json({ success: true, booking });
  } catch (error) {
    next(error);
  }
});

router.put('/:id/status', protect, authorize('admin'), async (req, res, next) => {
  try {
    const { status } = req.body;
    if (!['pending', 'confirmed', 'cancelled', 'completed'].includes(status)) {
      return res.status(400).json({ success: false, error: 'Invalid status value' });
    }

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!booking) {
      return res.status(404).json({ success: false, error: 'Booking not found' });
    }
    res.json({ success: true, booking });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', protect, async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ success: false, error: 'Booking not found' });
    }
    if (booking.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, error: 'Not authorized to cancel this booking' });
    }

    booking.status = 'cancelled';
    await booking.save();

    res.json({ success: true, message: 'Booking cancelled', booking });
  } catch (error) {
    next(error);
  }
});

export default router;
