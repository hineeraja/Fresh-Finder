const sequelize = require('../config/connection');
const Category = require('../models/category');
const catData = require('./category-seeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Category.bulkCreate(catData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();