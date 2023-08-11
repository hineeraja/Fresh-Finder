const router = require('express').Router();
const { Product } = require('../models');
const Subcategory = require('../models/subcategory');

router.get('/', async (req, res) => {
    try {
        const subcategoryData = await Subcategory.findAll({
            include: [Product]
        });
        res.status(200).json(subcategoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async(req, res) => {
    try {
        const subcategoryData = await Subcategory.findByPk(req.params.id, {
            include: [Product]
        });

        if (!subcategoryData) {
            res.status(404).json({ message: 'No subcategory found with this id'});
            return;
        }
        res.status(200).json(subcategoryData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;