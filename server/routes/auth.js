import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import User from '../models/User.js';
import { protect } from '../middleware/auth.js';
import { verifyIdToken } from '../config/firebaseAdmin.js';

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
  '/register',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  async (req, res, next) => {
    try {
      if (!validate(req, res)) return;

      const { name, email, password, phone } = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, error: 'User already exists with this email' });
      }

      const user = await User.create({ name, email, password, phone });

      const token = user.generateJwtToken();

      res.status(201).json({
        success: true,
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          isVerified: user.isVerified,
          avatar: user.avatar,
          createdAt: user.createdAt,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  async (req, res, next) => {
    try {
      if (!validate(req, res)) return;

      const { email, password } = req.body;

      const user = await User.findOne({ email }).select('+password');
      if (!user) {
        return res.status(401).json({ success: false, error: 'Invalid credentials' });
      }

      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        return res.status(401).json({ success: false, error: 'Invalid credentials' });
      }

      const token = user.generateJwtToken();

      res.json({
        success: true,
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          isVerified: user.isVerified,
          avatar: user.avatar,
          createdAt: user.createdAt,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get('/me', protect, async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        isVerified: user.isVerified,
        avatar: user.avatar,
        provider: user.provider,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
});

// Social sign-in (Google/Facebook): the browser signs in with Firebase and
// sends the resulting ID token here. We verify it, then create or fetch a
// matching user in MongoDB and issue our own JWT.
router.post(
  '/social',
  [
    body('idToken').notEmpty().withMessage('ID token is required'),
    body('provider').isIn(['google', 'facebook']).withMessage('Valid provider is required'),
  ],
  async (req, res, next) => {
    try {
      if (!validate(req, res)) return;

      const { idToken, provider } = req.body;
      let fbUser;
      try {
        fbUser = await verifyIdToken(idToken);
      } catch {
        return res.status(401).json({ success: false, error: 'Unable to verify social sign-in' });
      }

      const email = (fbUser.email || '').toLowerCase();
      const name = fbUser.name || (fbUser.email ? fbUser.email.split('@')[0] : '');
      const avatar = fbUser.picture || '';
      const firebaseUid = fbUser.uid;

      let user = await User.findOne({ firebaseUid });
      if (!user && email) {
        user = await User.findOne({ email });
      }

      if (!user) {
        user = await User.create({
          name,
          email: email || `${firebaseUid}@social.local`,
          password: undefined,
          provider,
          firebaseUid,
          avatar,
        });
      } else {
        user.provider = provider;
        user.firebaseUid = firebaseUid;
        if (avatar && !user.avatar) user.avatar = avatar;
        if (name && !user.name) user.name = name;
        await user.save();
      }

      const token = user.generateJwtToken();

      res.json({
        success: true,
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          isVerified: user.isVerified,
          avatar: user.avatar,
          provider: user.provider,
          createdAt: user.createdAt,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/update-profile',
  protect,
  [
    body('name').optional().trim().notEmpty().withMessage('Name cannot be empty'),
    body('email').optional().isEmail().withMessage('Please provide a valid email'),
  ],
  async (req, res, next) => {
    try {
      if (!validate(req, res)) return;

      const { name, email, phone } = req.body;
      const updateFields = {};
      if (name) updateFields.name = name;
      if (email) updateFields.email = email;
      if (phone !== undefined) updateFields.phone = phone;

      const user = await User.findByIdAndUpdate(req.user._id, updateFields, {
        new: true,
        runValidators: true,
      });

      res.json({
        success: true,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          isVerified: user.isVerified,
          avatar: user.avatar,
          createdAt: user.createdAt,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/update-password',
  protect,
  [
    body('currentPassword').notEmpty().withMessage('Current password is required'),
    body('newPassword').isLength({ min: 6 }).withMessage('New password must be at least 6 characters'),
  ],
  async (req, res, next) => {
    try {
      if (!validate(req, res)) return;

      const user = await User.findById(req.user._id).select('+password');
      const isMatch = await user.matchPassword(req.body.currentPassword);
      if (!isMatch) {
        return res.status(401).json({ success: false, error: 'Current password is incorrect' });
      }

      user.password = req.body.newPassword;
      await user.save();

      const token = user.generateJwtToken();

      res.json({ success: true, token, message: 'Password updated successfully' });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
