const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const categoryRoutes = require('./categoryRoutes');
const subcategoryRoutes = require('./subcategoryRoutes');
const productRoutes = require('./productRoutes');

router.use('/categories', categoryRoutes);
router.use('/subcategories', subcategoryRoutes);
router.use('/products', productRoutes);
router.use('/', homeRoutes);

module.exports = router;