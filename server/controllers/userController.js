const { Sequelize, where } = require("sequelize");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      where: { username },
    });

    if (!user) {
      return res.status(404).json("Invalid username or password");
    }

    const isValidPassword = password == user.password;

    if (!isValidPassword) {
      return res.status(400).json("Invalid username or password");
    }

    return res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

module.exports = { login };
