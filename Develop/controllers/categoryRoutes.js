const router = require('express').Router();
const { Subcategory, Product } = require('../models');
const Category = require('../models/category');

router.get('/categories', async (req, res) => {
    try {
        const categoryData = await Category.findAll({
            include: [Subcategory, Product]
        });
        res.render('category', category);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/categories/:id', async(req, res) => {
    try {
        const categoryData = await Category.findByPk(req.params.id, {
            include: [Subcategory, Product]
        });
        res.render('category', category);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;