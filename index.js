const ghrepos = require("ghrepos");
const axios = require("axios");
require("dotenv").config();

const authOptions = {
  user: "junho100",
  token: process.env.GIT_TOKEN,
};

ghrepos.listUser(authOptions, "junho100", function (err, repolist) {
  axios.get();
});
