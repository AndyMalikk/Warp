const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Sequelize");

const user_roles = sequelize.define("User_Roles", {
  id_role: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = user_roles;
