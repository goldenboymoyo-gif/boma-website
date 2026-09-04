import { Router } from 'express';
import { body } from 'express-validator';
import News from '../models/News.js';
import { protect, authorize } from '../middleware/auth.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const items = await News.find().sort({ createdAt: -1 });
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
      const { title, slug, excerpt, content, image, category, isPublished } = req.body;
      const item = await News.create({
        title,
        slug,
        excerpt,
        content,
        image,
        category,
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
    const { title, slug, excerpt, content, image, category, isPublished } = req.body;
    const update = {};
    if (title !== undefined) update.title = title;
    if (slug !== undefined) update.slug = slug;
    if (excerpt !== undefined) update.excerpt = excerpt;
    if (content !== undefined) update.content = content;
    if (image !== undefined) update.image = image;
    if (category !== undefined) update.category = category;
    if (isPublished !== undefined) update.isPublished = isPublished;

    const item = await News.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
    if (!item) {
      return res.status(404).json({ success: false, error: 'Article not found' });
    }
    res.json({ success: true, item });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', protect, authorize('admin'), async (req, res, next) => {
  try {
    const item = await News.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, error: 'Article not found' });
    }
    res.json({ success: true, message: 'Article deleted' });
  } catch (error) {
    next(error);
  }
});

export default router;
