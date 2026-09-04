import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: 200,
  },
  slug: {
    type: String,
    trim: true,
  },
  excerpt: {
    type: String,
    maxlength: 500,
  },
  content: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
    default: 'general',
  },
  isPublished: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

newsSchema.pre('validate', function (next) {
  if (!this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

const News = mongoose.model('News', newsSchema);

export default News;
