const express = require('express');
const { body } = require('express-validator');
const {
  createOrder,
  getUserOrders,
  getOrderById,
  updateOrderStatus,
  cancelOrder,
  getAllOrders
} = require('../controllers/orderController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Validation rules
const createOrderValidation = [
  body('items').isArray().withMessage('Items must be an array'),
  body('items.*.product').isMongoId().withMessage('Invalid product ID'),
  body('items.*.quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1'),
  body('totalAmount').isNumeric().withMessage('Total amount must be a number'),
  body('shippingAddress.address').notEmpty().withMessage('Address is required'),
  body('shippingAddress.city').notEmpty().withMessage('City is required'),
  body('shippingAddress.postalCode').notEmpty().withMessage('Postal code is required'),
  body('shippingAddress.country').notEmpty().withMessage('Country is required'),
  body('paymentMethod').notEmpty().withMessage('Payment method is required')
];

const updateOrderValidation = [
  body('status').isIn(['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'])
    .withMessage('Invalid order status')
];

// All order routes require authentication
router.use(protect);

// @route   POST /api/orders
// @desc    Create new order
// @access  Private
router.post('/', createOrderValidation, createOrder);

// @route   GET /api/orders
// @desc    Get user's orders
// @access  Private
router.get('/', getUserOrders);

// @route   GET /api/orders/:id
// @desc    Get single order
// @access  Private
router.get('/:id', getOrderById);

// @route   PUT /api/orders/:id
// @desc    Update order status (admin only)
// @access  Private/Admin
router.put('/:id', authorize('admin'), updateOrderValidation, updateOrderStatus);

// @route   PUT /api/orders/:id/cancel
// @desc    Cancel order
// @access  Private
router.put('/:id/cancel', cancelOrder);

// @route   GET /api/orders/admin/all
// @desc    Get all orders (admin only)
// @access  Private/Admin
router.get('/admin/all', authorize('admin'), getAllOrders);

module.exports = router;
