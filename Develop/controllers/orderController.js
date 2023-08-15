const router = require('express').Router();
const Order = require("../models/orders.js");
const Product = require("../models/product.js");
router.get('/order/:orderId', async (req, res) => {
    try {
        const orderId = req.params.orderId;

        const order = await Order.findOne({
            where: { id: orderId },
            include: [Product] 
        });

        if (!order) {
            return res.render('order_details', { orders: null });
        }

        return res.render('order_details', { orders: order });
    } catch (error) {
        console.error("Error fetching order:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Here, you can also define routes for creating, updating, and deleting orders, if needed.

// router.post('/order', async (req, res) => {
//     try {
//         const newOrder = await Order.create(req.body);
//         res.json(newOrder);
//     } catch (error) {
//         console.error("Error creating orders item:", error);
//         res.status(500).send("Internal Server Error");
//     }
// });

// router.put('/order/:orderId', async (req, res) => {
//     try {
//         const [rowsUpdated, [updatedOrder]] = await Order.update(req.body, {
//             where: { ID: req.params.orderId },
//             returning: true,
//         });
//         res.json(updatedOrder);
//     } catch (error) {
//         console.error("Error updating orders item:", error);
//         res.status(500).send("Internal Server Error");
//     }
// });

// router.delete('/order/:orderId', async (req, res) => {
//     try {
//         const rowsDeleted = await Order.destroy({
//             where: { ID: req.params.orderId },
//         });
//         res.json({ deletedRows: rowsDeleted });
//     } catch (error) {
//         console.error("Error deleting orders item:", error);
//         res.status(500).send("Internal Server Error");
//     }
// });

module.exports = router;
