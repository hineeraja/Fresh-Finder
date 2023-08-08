const router = require('express').Router();
const { Product } = require('../models');
const Subcategory = require('../models/subcategory');

router.get('/subcategories', async (req, res) => {
    try {
        const subcategoryData = await Subcategory.findAll({
            include: [Product]
        });
        res.render('subcategory', subcategory);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/subcategories/:id', async(req, res) => {
    try {
        const subcategoryData = await Subcategory.findByPk(req.params.id, {
            include: [Product]
        });
        res.render('subcategory', subcategory);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;