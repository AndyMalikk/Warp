const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Sequelize");

const project_type = sequelize.define("Project_Type", {
  id_project_type: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = project_type;
