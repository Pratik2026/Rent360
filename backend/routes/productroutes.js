const express = require('express');
const { getAllProducts, addProduct, getProductById, getFilteredProducts, getUserProducts } = require('../controllers/productcontroller');
const router = express.Router();

router.post('/', getAllProducts);
router.post('/add', addProduct);
router.post('/product', getProductById);
router.post('/filtered', getFilteredProducts);
router.post('/user', getUserProducts);

module.exports = router;
