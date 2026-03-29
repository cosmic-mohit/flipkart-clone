const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/categories', productController.getCategories);
router.put('/:id/stock', productController.updateProductStock);
router.get('/:id', productController.getProductById);
router.get('/', productController.getProducts);

module.exports = router;
