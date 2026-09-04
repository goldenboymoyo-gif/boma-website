import { Router } from 'express';
import { body } from 'express-validator';
import Event from '../models/Event.js';
import { protect, authorize } from '../middleware/auth.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const items = await Event.find().sort({ createdAt: -1 });
    res.json({ success: true, count: items.length, items });
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  protect,
  authorize('admin'),
  [body('title').trim().notEmpty().withMessage('Title is required')],
  async (req, res, next) => {
    try {
      const {
        title, slug, description, date, time, location,
        image, category, capacity, contactEmail, contactPhone, isPublished,
      } = req.body;
      const item = await Event.create({
        title,
        slug,
        description,
        date,
        time,
        location,
        image,
        category,
        capacity,
        contactEmail,
        contactPhone,
        isPublished: isPublished !== false,
      });
      res.status(201).json({ success: true, item });
    } catch (error) {
      next(error);
    }
  }
);

router.put('/:id', protect, authorize('admin'), async (req, res, next) => {
  try {
    const {
      title, slug, description, date, time, location,
      image, category, capacity, contactEmail, contactPhone, isPublished,
    } = req.body;
    const update = {};
    if (title !== undefined) update.title = title;
    if (slug !== undefined) update.slug = slug;
    if (description !== undefined) update.description = description;
    if (date !== undefined) update.date = date;
    if (time !== undefined) update.time = time;
    if (location !== undefined) update.location = location;
    if (image !== undefined) update.image = image;
    if (category !== undefined) update.category = category;
    if (capacity !== undefined) update.capacity = capacity;
    if (contactEmail !== undefined) update.contactEmail = contactEmail;
    if (contactPhone !== undefined) update.contactPhone = contactPhone;
    if (isPublished !== undefined) update.isPublished = isPublished;

    const item = await Event.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
    if (!item) {
      return res.status(404).json({ success: false, error: 'Event not found' });
    }
    res.json({ success: true, item });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', protect, authorize('admin'), async (req, res, next) => {
  try {
    const item = await Event.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, error: 'Event not found' });
    }
    res.json({ success: true, message: 'Event deleted' });
  } catch (error) {
    next(error);
  }
});

export default router;
