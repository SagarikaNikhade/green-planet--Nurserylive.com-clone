const express = require('express');
const { body } = require('express-validator');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getCategories
} = require('../controllers/productController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Validation rules for product creation/update
const productValidation = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Product title is required')
    .isLength({ max: 200 })
    .withMessage('Title cannot be more than 200 characters'),
  body('price')
    .isNumeric()
    .withMessage('Price must be a number')
    .isFloat({ min: 0 })
    .withMessage('Price cannot be negative'),
  body('image')
    .notEmpty()
    .withMessage('Product image is required'),
  body('category')
    .isIn(['plant', 'seed', 'bulb', 'herb', 'tool', 'accessory'])
    .withMessage('Invalid category'),
  body('info')
    .trim()
    .notEmpty()
    .withMessage('Product information is required')
    .isLength({ max: 1000 })
    .withMessage('Info cannot be more than 1000 characters'),
  body('common')
    .trim()
    .notEmpty()
    .withMessage('Common names are required')
    .isLength({ max: 200 })
    .withMessage('Common names cannot be more than 200 characters'),
  body('height')
    .trim()
    .notEmpty()
    .withMessage('Plant height is required'),
  body('fcolor')
    .trim()
    .notEmpty()
    .withMessage('Flower color is required'),
  body('bloom')
    .trim()
    .notEmpty()
    .withMessage('Bloom time is required'),
  body('level')
    .isIn(['Easy', 'Medium', 'Hard', 'Easy to grow', 'Moderately difficult'])
    .withMessage('Invalid care level'),
  body('stock')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Stock must be a non-negative integer')
];

// @route   GET /api/products
router.get('/', getProducts);

// @route   GET /api/products/categories
router.get('/categories', getCategories);

// @route   GET /api/products/:id
router.get('/:id', getProduct);

// @route   POST /api/products
router.post('/', protect, authorize('admin'), productValidation, createProduct);

// @route   PUT /api/products/:id
router.put('/:id', protect, authorize('admin'), productValidation, updateProduct);

// @route   DELETE /api/products/:id
router.delete('/:id', protect, authorize('admin'), deleteProduct);

module.exports = router;
