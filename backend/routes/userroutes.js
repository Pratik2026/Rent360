const express = require('express');
const { showWishlist, addWishlist, checkWishlist } = require('../controllers/userController');
const router = express.Router();

router.post('/wishlist', showWishlist);
router.post('/wishlist/add', addWishlist);
router.post('/wishlist/check', checkWishlist);

module.exports = router;