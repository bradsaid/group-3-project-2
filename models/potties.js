module.exports = function(sequelize, DataTypes) {
  let Potties = sequelize.define("Potties", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    addr: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picLink: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cleanliness: {
      type: DataTypes.NUMBER,
      allowNull: false,
      min: 1,
      max: 5
    },
    singleStall: { 
      type: Sequelize.BOOLEAN, 
      allowNull: true, 
      defaultValue: true
    },
    handicapAccess: { 
      type: Sequelize.BOOLEAN, 
      allowNull: true, 
      defaultValue: false
    },
    FamBath: { 
      type: Sequelize.BOOLEAN, 
      allowNull: true, 
      defaultValue: false
    },
    ChangeTable: { 
      type: Sequelize.BOOLEAN, 
      allowNull: true, 
      defaultValue: false
    },
    Unisex: { 
      type: Sequelize.BOOLEAN, 
      allowNull: true, 
      defaultValue: false
    },
    keyRequired: { 
      type: Sequelize.BOOLEAN, 
      allowNull: true, 
      defaultValue: false
    }
  });
  return Potties;
};
