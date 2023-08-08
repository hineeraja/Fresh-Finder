const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const categoryRoutes = require('./categoryRoutes');
const subcategoryRoutes = require('./subcategoryRoutes');

router.use('/', homeRoutes);
router.use('/categories', categoryRoutes);
router.use('./subcategories', subcategoryRoutes);

module.exports = router;