const Subcategory = require('./subcategory');
const Category = require('./category');
const User = require('./user');
const Order = require('./order');
const Product = require('./product');

//product table
Product.belongsTo(Subcategory,
  {
    foreignKey: 'subcategory_id'
  });
Subcategory.hasMany(Product);

// subcategory
Subcategory.belongsTo(Category,
  {
    foreignKey: 'category_id'
  });
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