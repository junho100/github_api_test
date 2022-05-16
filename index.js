const ghrepos = require("ghrepos");
const axios = require("axios");
require("dotenv").config();

const authOptions = {
  user: "junho100",
  token: process.env.GIT_TOKEN,
};

ghrepos.listUser(authOptions, "junho100", async (err, repos) => {
  const now = repos[0];
  const a = await axios.get(now.languages_url);
  console.log(a.data);
});
