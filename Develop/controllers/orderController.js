const OrderItem = require("../models/order_item.js");

// Create a new order item
const createOrderItem = async (orderItemData) => {
    try {
        const newOrderItem = await OrderItem.create(orderItemData);
        return newOrderItem;
    } catch (error) {
        throw new Error("Error creating order item: " + error.message);
    }
};

const updateOrderItem = async (orderItemId, updates) => {
    try {
        const [rowsUpdated, [updatedOrderItem]] = await OrderItem.update(updates, {
            where: { ID: orderItemId },
            returning: true,
        });
        return updatedOrderItem;
    } catch (error) {
        throw new Error("Error updating order item: " + error.message);
    }
};

const deleteOrderItem = async (orderItemId) => {
    try {
        const rowsDeleted = await OrderItem.destroy({
            where: { ID: orderItemId },
        });
        return rowsDeleted;
    } catch (error) {
        throw new Error("Error deleting order item: " + error.message);
    }
};

module.exports = {
    createOrderItem,
    updateOrderItem,
    deleteOrderItem,
};
