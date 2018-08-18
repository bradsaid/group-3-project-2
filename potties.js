module.exports = function(sequelize, DataTypes) {
  let Potties = sequelize.define("Potties", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Potties;
};
