import { Router } from 'express';
import SiteContent from '../models/SiteContent.js';
import { protect, authorize } from '../middleware/auth.js';

const router = Router();

// Returns content grouped by section key: { items: { hero: {...}, booking: {...}, ... } }
router.get('/', async (req, res, next) => {
  try {
    const docs = await SiteContent.find();
    const items = {};
    docs.forEach((d) => {
      items[d.key] = { _id: d._id, ...d.data, updatedAt: d.updatedAt };
    });
    res.json({ success: true, items });
  } catch (error) {
    next(error);
  }
});

router.get('/:key', async (req, res, next) => {
  try {
    const doc = await SiteContent.findOne({ key: req.params.key });
    if (!doc) {
      return res.json({ success: true, item: null });
    }
    res.json({ success: true, item: { _id: doc._id, ...doc.data, updatedAt: doc.updatedAt } });
  } catch (error) {
    next(error);
  }
});

router.put('/:key', protect, authorize('admin'), async (req, res, next) => {
  try {
    const updates = req.body || {};
    const existing = await SiteContent.findOne({ key: req.params.key });
    if (existing) {
      existing.data = { ...existing.data, ...updates };
      existing.updatedAt = new Date();
      await existing.save();
      res.json({ success: true, item: { _id: existing._id, ...existing.data, updatedAt: existing.updatedAt } });
    } else {
      const created = await SiteContent.create({
        key: req.params.key,
        data: updates,
        updatedAt: new Date(),
      });
      res.status(201).json({ success: true, item: { _id: created._id, ...created.data, updatedAt: created.updatedAt } });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
