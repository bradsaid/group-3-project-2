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
    db.Potties.findAll({
      attributes: [
        [sequelize.fn("AVG", sequelize.col("cleanliness")), "cleanAvg"]
      ]
    }).then(function (dbPotties) {
      res.json(dbPotties);
      console.log(cleanAvg);
    });
  });

  app.post("/api/potties", function (req, res) {
    db.Potties.create(req.body).then(function (dbPotties) {
      res.json(dbPotties);
    });
  });

  app.delete("/api/potties/:id", function (req, res) {
    db.Potties.destroy({ where: { id: req.params.id } }).then(function (dbPotties) {
      res.json(dbPotties);
    });
  });


  //Put request for new review

  app.put("/api/potties/:id", function (req, res) {
    db.Potties.update({
      keyRequired: req.body.keyRequired,
      name: req.body.name,
      cleanliness: req.body.cleanliness,
      addr: req.body.addr,
      singleStall: req.body.singleStall,
      handicapAccess: req.body.handicapAccess,
      famBath: req.body.famBath,
      ChangeTable: req.body.ChangeTable,
      Unisex: req.body.Unisex,
    },
      {
        where: {
          id: req.body.id
        }
      }).then(function (potties_db) {
        console.log("wnet through!")
        console.log(req.body.id)
        res.json(potties_db);
      });
  });




};
