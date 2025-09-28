const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Product title is required']
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price cannot be negative']
  },
  image: {
    type: String,
    required: [true, 'Product image is required']
  },
  rating: {
    type: Number,
    min: [0, 'Rating cannot be less than 0'],
    max: [5, 'Rating cannot be more than 5'],
    default: 0
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
    enum: ['plant', 'seed', 'bulb', 'herb', 'tool', 'accessory'],
    lowercase: true
  },
  info: {
    type: String,
    required: [true, 'Product information is required'],
  },
  common: {
    type: String,
    required: [true, 'Common names are required'],
  },
  height: {
    type: String,
    required: [true, 'Plant height is required']
  },
  fcolor: {
    type: String,
    required: [true, 'Flower color is required']
  },
  bloom: {
    type: String,
    required: [true, 'Bloom time is required']
  },
  level: {
    type: String,
    required: [true, 'Care level is required'],
    enum: ['Easy', 'Medium', 'Hard', 'Easy to grow', 'Moderately difficult']
  },
  stock: {
    type: Number,
    required: [true, 'Stock quantity is required'],
    min: [0, 'Stock cannot be negative'],
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  images: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update updatedAt field
productSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Index for better search performance
productSchema.index({ title: 'text', info: 'text', common: 'text' });
productSchema.index({ category: 1 });
productSchema.index({ price: 1 });

module.exports = mongoose.model('Product', productSchema);
