import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import Message from '../models/Message.js';
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
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('subject').trim().notEmpty().withMessage('Subject is required'),
    body('message').trim().notEmpty().withMessage('Message is required'),
  ],
  async (req, res, next) => {
    try {
      if (!validate(req, res)) return;

      const { name, email, phone, subject, message } = req.body;
      const msg = await Message.create({ name, email, phone, subject, message });

      res.status(201).json({ success: true, message: 'Message sent successfully', data: msg });
    } catch (error) {
      next(error);
    }
  }
);

router.get('/', protect, authorize('admin'), async (req, res, next) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, messages });
  } catch (error) {
    next(error);
  }
});

router.put('/:id/read', protect, authorize('admin'), async (req, res, next) => {
  try {
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    if (!message) {
      return res.status(404).json({ success: false, error: 'Message not found' });
    }
    res.json({ success: true, message });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', protect, authorize('admin'), async (req, res, next) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({ success: false, error: 'Message not found' });
    }
    res.json({ success: true, message: 'Message deleted' });
  } catch (error) {
    next(error);
  }
});

export default router;
