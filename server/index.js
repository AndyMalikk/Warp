const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const userRoute = require("./routes/userRoute");

app.use(express.json());

app.use(cors());
app.use("/login", userRoute);

init();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function init() {
  require("./models/userModel");
  require("./models/user_rolesModel");
  require("./models/projectsModel");
  require("./models/projectTypeModel");
  const sequelize = require("./Sequelize");

  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("Uspesne vytvoreni tabulek.");
    })
    .catch((err) => {
      console.error("Neuspech, ", err);
    });
}
