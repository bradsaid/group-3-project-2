var db = require("../models");

module.exports = function (app) {
  // Get all examples (test DB)
  app.get("/api/examples", function (req, res) {
    db.Potties.findAll({}).then(function (dbPotties) {
      res.json(dbPotties);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Potties.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Potties.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Potties DB 
  app.get("/api/potties", function (req, res) {
    db.Potties.findAll({}).then(function (potties_db) {
      res.json(potties_db);
    });
  });

  app.post("/api/potties", function (req, res) {
    db.Potties.create(req.body).then(function (potties_db) {
      res.json(potties_db);
    });
  });

  app.delete("/api/potties/:id", function (req, res) {
    db.Potties.destroy({ where: { id: req.params.id } }).then(function (potties_db) {
      res.json(potties_db);
    });
  });

  //Put request for new review

  app.put("/api/potties/:id", function (req, res) {
    db.Potties.update ({ 
      keyRequired: req.body.keyRequired,
    },
    {
       where: { 
         id: req.params.id }
         }).then(function (potties_db) {
           console.log("wnet through!")
      res.json(potties_db);
    });
  });



};
