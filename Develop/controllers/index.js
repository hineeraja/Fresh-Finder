const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/categories', categoryRoutes);
router.use('/', homeRoutes);

module.exports = router;