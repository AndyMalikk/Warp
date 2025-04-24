const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Sequelize");
const user_roles = require("../models/user_rolesModel");

const user = sequelize.define("User", {
  id_user: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  //relace uzivatel - role
  id_role: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: user_roles,
      key: "id_role",
    },
  },
});

module.exports = user;
