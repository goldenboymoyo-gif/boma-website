import { Router } from 'express';
import { body } from 'express-validator';
import MenuItem from '../models/MenuItem.js';
import { protect, authorize } from '../middleware/auth.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const items = await MenuItem.find().sort({ sortOrder: 1, createdAt: 1 });
    res.json({ success: true, count: items.length, items });
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  protect,
  authorize('admin'),
  [body('name').trim().notEmpty().withMessage('Name is required')],
  async (req, res, next) => {
    try {
      const { name, description, section, price, dietary, isAvailable, sortOrder } = req.body;
      const item = await MenuItem.create({
        name,
        description,
        section,
        price,
        dietary: dietary || [],
        isAvailable: isAvailable !== false,
        sortOrder: sortOrder || 0,
      });
      res.status(201).json({ success: true, item });
    } catch (error) {
      next(error);
    }
  }
);

router.put('/:id', protect, authorize('admin'), async (req, res, next) => {
  try {
    const { name, description, section, price, dietary, isAvailable, sortOrder } = req.body;
    const update = {};
    if (name !== undefined) update.name = name;
    if (description !== undefined) update.description = description;
    if (section !== undefined) update.section = section;
    if (price !== undefined) update.price = price;
    if (dietary !== undefined) update.dietary = dietary;
    if (isAvailable !== undefined) update.isAvailable = isAvailable;
    if (sortOrder !== undefined) update.sortOrder = sortOrder;

    const item = await MenuItem.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
    if (!item) {
      return res.status(404).json({ success: false, error: 'Menu item not found' });
    }
    res.json({ success: true, item });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', protect, authorize('admin'), async (req, res, next) => {
  try {
    const item = await MenuItem.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, error: 'Menu item not found' });
    }
    res.json({ success: true, message: 'Menu item deleted' });
  } catch (error) {
    next(error);
  }
});

export default router;
