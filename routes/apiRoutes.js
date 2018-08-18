var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/potties", function(req, res) {
    db.Potties.findAll({}).then(function(potties_db) {
      res.json(potties_db);
    });
  });

  // Create a new Example
  app.post("/api/potties", function(req, res) {
    db.Potties.create(req.body).then(function(potties_db) {
      res.json(potties_db);
    });
  });

  // Delete an Example by id
  app.delete("/api/potties/:id", function(req, res) {
    db.Potties.destroy({ where: { id: req.params.id } }).then(function(potties_db) {
      res.json(potties_db);
    });
  });
};
