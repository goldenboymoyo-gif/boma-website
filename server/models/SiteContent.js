import mongoose from 'mongoose';

const siteContentSchema = new mongoose.Schema({
  key: {
    type: String,
    required: [true, 'Content key is required'],
    unique: true,
    trim: true,
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const SiteContent = mongoose.model('SiteContent', siteContentSchema);

export default SiteContent;
