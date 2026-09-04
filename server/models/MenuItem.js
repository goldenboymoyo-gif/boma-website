import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: 150,
  },
  description: {
    type: String,
    trim: true,
  },
  section: {
    type: String,
    default: 'mainCourse',
  },
  price: {
    type: String,
  },
  dietary: {
    type: [String],
    default: [],
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  sortOrder: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

export default MenuItem;
