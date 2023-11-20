const express = require("express");
const router = express.Router();

// colocar las rutas aquí
router.get("/", (req, res) => {
  res.render("home");
});

router.get("/projects", (req, res) => {
  res.render("projects");
});

router.get("/team", (req, res) => {
  res.render("team");
});

router.get("/team/:name", (req, res) => {
  const { name } = req.params;
  res.render("team-member", { name });
});

router.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  res.render("projects", { id });
});

router.get("/about-me", (req, res) => {
  res.render("about-me");
});

module.exports = router;
