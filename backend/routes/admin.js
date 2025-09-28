const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getOrderStats,
  getProductStats,
  getUserStats
} = require('../controllers/adminController');

const router = express.Router();

// All admin routes are protected and require admin role
router.use(protect);
router.use(authorize('admin'));

// @route   GET /api/admin/users
// @desc    Get all users
// @access  Private/Admin
router.get('/users', getAllUsers);

// @route   GET /api/admin/users/:id
// @desc    Get user by ID
// @access  Private/Admin
router.get('/users/:id', getUserById);

// @route   PUT /api/admin/users/:id
// @desc    Update user
// @access  Private/Admin
router.put('/users/:id', updateUser);

// @route   DELETE /api/admin/users/:id
// @desc    Delete user
// @access  Private/Admin
router.delete('/users/:id', deleteUser);

// @route   GET /api/admin/stats/orders
// @desc    Get order statistics
// @access  Private/Admin
router.get('/stats/orders', getOrderStats);

// @route   GET /api/admin/stats/products
// @desc    Get product statistics
// @access  Private/Admin
router.get('/stats/products', getProductStats);

// @route   GET /api/admin/stats/users
// @desc    Get user statistics
// @access  Private/Admin
router.get('/stats/users', getUserStats);

module.exports = router;
