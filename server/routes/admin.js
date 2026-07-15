import { Router } from 'express';
import Booking from '../models/Booking.js';
import User from '../models/User.js';
import { protect, authorize } from '../middleware/auth.js';

const router = Router();

router.get('/dashboard', protect, authorize('admin'), async (req, res, next) => {
  try {
    const totalBookings = await Booking.countDocuments();
    const totalUsers = await User.countDocuments({ role: 'user' });

    const revenueResult = await Booking.aggregate([
      { $match: { status: { $in: ['confirmed', 'completed'] } } },
      { $group: { _id: null, total: { $sum: '$totalPrice' }, totalGuests: { $sum: { $add: ['$adults', '$children'] } } } },
    ]);

    const totalRevenue = revenueResult.length > 0 ? revenueResult[0].total : 0;
    const totalGuests = revenueResult.length > 0 ? revenueResult[0].totalGuests : 0;

    const recentBookings = await Booking.find()
      .populate('user', 'name email')
      .sort({ createdAt: -1 })
      .limit(5);

    const pendingBookings = await Booking.countDocuments({ status: 'pending' });

    res.json({
      success: true,
      stats: {
        totalBookings,
        totalUsers,
        totalRevenue,
        totalGuests,
        pendingBookings,
        recentBookings,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.get('/bookings', protect, authorize('admin'), async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    const total = await Booking.countDocuments();
    const bookings = await Booking.find()
      .populate('user', 'name email phone')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.json({
      success: true,
      count: bookings.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      bookings,
    });
  } catch (error) {
    next(error);
  }
});

router.get('/customers', protect, authorize('admin'), async (req, res, next) => {
  try {
    const users = await User.find({ role: 'user' }).sort({ createdAt: -1 });
    res.json({ success: true, count: users.length, users });
  } catch (error) {
    next(error);
  }
});

export default router;
