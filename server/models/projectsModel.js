const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Sequelize");
const projectType = require("../models/projectTypeModel");
const user = require("../models/userModel");

const projects = sequelize.define("Projects", {
  id_project: {
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
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: user,
      key: "id_user",
    },
  },
  //relace projekt - typ projektu
  project_type: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: projectType,
      key: "id_project_type",
    },
  },
});

module.exports = projects;
