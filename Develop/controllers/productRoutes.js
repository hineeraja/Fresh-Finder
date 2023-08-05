const router = require('express').Router();
const Product = require('../models/product');

router.get('/products/:id', async (req, res) => {
    try {
        const productData = await Product.findByPk(req.params.id);
        const product = productData.get({ plain: true });

        res.render('product', product);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;