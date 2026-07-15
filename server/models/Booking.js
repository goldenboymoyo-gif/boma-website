import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    required: [true, 'Booking date is required'],
  },
  time: {
    type: String,
    required: [true, 'Booking time is required'],
  },
  adults: {
    type: Number,
    required: [true, 'Number of adults is required'],
    min: [1, 'At least 1 adult is required'],
  },
  children: {
    type: Number,
    default: 0,
    min: 0,
  },
  childAges: {
    type: [Number],
    default: [],
  },
  dietaryPreferences: {
    type: [String],
    default: [],
  },
  specialRequests: {
    type: String,
    maxlength: 500,
  },
  contactName: {
    type: String,
    required: [true, 'Contact name is required'],
    trim: true,
  },
  contactEmail: {
    type: String,
    required: [true, 'Contact email is required'],
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
  },
  contactPhone: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending',
  },
  totalPrice: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

bookingSchema.pre('save', function (next) {
  if (this.isNew || this.isModified('adults') || this.isModified('children')) {
    this.totalPrice = this.adults * 65 + this.children * 35;
  }
  next();
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
