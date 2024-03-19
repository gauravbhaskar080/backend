const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

const githubData = {
  login: "gauravbhaskar080",
  id: 97628596,
  node_id: "U_kgDOBdGxtA",
  avatar_url: "https://avatars.githubusercontent.com/u/97628596?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/gauravbhaskar080",
  html_url: "https://github.com/gauravbhaskar080",
  followers_url: "https://api.github.com/users/gauravbhaskar080/followers",
  following_url:
    "https://api.github.com/users/gauravbhaskar080/following{/other_user}",
  gists_url: "https://api.github.com/users/gauravbhaskar080/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/gauravbhaskar080/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/gauravbhaskar080/subscriptions",
  organizations_url: "https://api.github.com/users/gauravbhaskar080/orgs",
  repos_url: "https://api.github.com/users/gauravbhaskar080/repos",
  events_url: "https://api.github.com/users/gauravbhaskar080/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/gauravbhaskar080/received_events",
  type: "User",
  site_admin: false,
  name: "Gaurav Bhaskar",
  company: "IIIT Sri City ",
  blog: "https://www.iiits.ac.in/",
  location: "Andhra Pradesh",
  email: null,
  hireable: null,
  bio: "👨‍💻 Full-Stack Developer | MERN Enthusiast | Open Source Contributor",
  twitter_username: null,
  public_repos: 59,
  public_gists: 0,
  followers: 1,
  following: 4,
  created_at: "2022-01-12T18:47:43Z",
  updated_at: "2024-02-18T07:00:49Z",
};
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>Chai aur code</h1>");
});
app.get("/github", (req, res) => {
  res.json({githubData});
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
