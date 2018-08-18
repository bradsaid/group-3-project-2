let db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Potties.findAll({}).then(function(potties_db) {
      res.render("index", {
        msg: "Welcome!",
        examples: potties_db
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/potties/:id", function(req, res) {
    db.Potties.findOne({ where: { id: req.params.id } }).then(function(potties_db) {
      res.render("potties", {
        example: potties_db
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
