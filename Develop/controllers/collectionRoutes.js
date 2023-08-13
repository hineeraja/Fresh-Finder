const router = require('express').Router();
const { col } = require('sequelize');
const Collection = require('../models/collection');

router.get('/', async (req, res) => {
    try {
        const collectionData = await Collection.findAll();
        res.status(200).json(collectionData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const collectionData = await Collection.findByPk(req.params.id);
        //const collection = collectionData.get({ plain: true });

        if (!collectionData) {
            res.status(404).json({ message: 'No collection found with this id' });
            return;
        }
        res.status(200).json(collectionData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;