import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import Gallery from '../models/Gallery.js';
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

router.get('/', async (req, res, next) => {
  try {
    const { category } = req.query;
    const filter = {};
    if (category) {
      filter.category = category;
    }
    const items = await Gallery.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: items.length, items });
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  protect,
  authorize('admin'),
  [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('image').trim().notEmpty().withMessage('Image URL is required'),
    body('category')
      .isIn(['venue', 'dining', 'entertainment', 'experience'])
      .withMessage('Valid category is required'),
  ],
  async (req, res, next) => {
    try {
      if (!validate(req, res)) return;

      const { title, image, category, isFeatured } = req.body;
      const item = await Gallery.create({ title, image, category, isFeatured });

      res.status(201).json({ success: true, item });
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', protect, authorize('admin'), async (req, res, next) => {
  try {
    const item = await Gallery.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, error: 'Gallery item not found' });
    }
    res.json({ success: true, message: 'Gallery item deleted' });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', protect, authorize('admin'), async (req, res, next) => {
  try {
    const { title, image, category, isFeatured } = req.body;
    const update = {};
    if (title !== undefined) update.title = title;
    if (image !== undefined) update.image = image;
    if (category !== undefined) update.category = category;
    if (isFeatured !== undefined) update.isFeatured = isFeatured;

    const item = await Gallery.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
    if (!item) {
      return res.status(404).json({ success: false, error: 'Gallery item not found' });
    }
    res.json({ success: true, item });
  } catch (error) {
    next(error);
  }
});

export default router;
