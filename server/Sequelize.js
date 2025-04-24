const { Sequelize } = require("sequelize");
require("dotenv").config(); //volám konfiguraci z .env souboru

const sequelize = new Sequelize({
  //vytvářím parametry pro připojení k databázi

  dialect: "postgres", // Říkám balíčku sequelize jaký databázový model používám
  host: process.env.DB_HOST, //zde si beru ip adresu se kterým se připojím na databázi z .env souboru
  port: process.env.DB_PORT, //zde si beru port se kterým se připojím na databázi z .env souboru
  username: process.env.DB_USER, //zde si beru uživatelské jméno se kterým se připojím na databázi z .env souboru
  password: process.env.DB_PASSWORD + "", //zde si beru heslo se kterým se připojím na databázi z .env souboru
  database: process.env.DB_DATABASE, //zde si beru nazev databaze se kterým se připojím na databázi z .env souboru
  logging: console.log,
});

sequelize
  .authenticate() //zde se pokusím připojit na databazí
  .then(() => {
    console.log("Připojeno na databázi"); //pokud je uspešné připojení vypíšu do konzole
  })
  .catch((err) => {
    console.error("Připojení selhalo");
  });

module.exports = sequelize;
