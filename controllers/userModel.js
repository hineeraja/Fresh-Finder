const User = require("../models/users");
const createUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

const updateUser = async (userId, updates) => {
  try {
    const [rowsUpdated, [updatedUser]] = await User.update(updates, {
      where: { ID: userId },
      returning: true,
    });
    return updatedUser;
  } catch (error) {
    throw new Error("Error updating user: " + error.message);
  }
};

const deleteUser = async (userId) => {
  try {
    const rowsDeleted = await User.destroy({
      where: { ID: userId },
    });
    return rowsDeleted;
  } catch (error) {
    throw new Error("Error deleting user: " + error.message);
  }
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
};
