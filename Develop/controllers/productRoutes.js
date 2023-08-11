const router = require('express').Router();
const Product = require('../models/product');

router.get('/', async (req, res) => {
    try {
        const productData = await Product.findAll();
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const productData = await Product.findByPk(req.params.id);
        //const product = productData.get({ plain: true });

        if (!productData) {
            res.status(404).json({ message: 'No product found with this id'});
            return;
        }
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;