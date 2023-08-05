const router = require('express').Router();
const Collection = require('../models/collection');

router.get('/collections/:id', async (req, res) => {
    try {
        const collectionData = await Collection.findByPk(req.params.id);
        const collection = collectionData.get({ plain: true });

        res.render('collection', collection);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;