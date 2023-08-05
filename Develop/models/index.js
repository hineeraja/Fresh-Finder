const Product = require('./product');
const Subcategory = require('./subcategory');
const Category = require('./category');
const User = require('./user');
const Order = require('./order');
const Product = require('./product');

//product table
Product.belongsTo(Subcategory);
Subcategory.hasMany(Product);

// subcategory
Subcategory.belongsTo(Category);
Category.hasMany(Subcategory);

//user table
User.hasMany(Order);

//order table
Order.belongsTo(User);

//orderdetails table 
Orderdetail.belongsTo(Order);
Orderdetail.belongsTo(Product);

//collection table
Collection.hasMany(Product);

module.exports = {
    Product,
    Subcategory,
    Category,
  };