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
        type: DataTypes.INTEGER,
        allowNull: false,
        min: 1,
        max: 5
      },
      singleStall: { 
        type: DataTypes.BOOLEAN, 
        allowNull: true, 
        defaultValue: true
      },
      handicapAccess: { 
        type: DataTypes.BOOLEAN, 
        allowNull: true, 
        defaultValue: false
      },
      FamBath: { 
        type: DataTypes.BOOLEAN, 
        allowNull: true, 
        defaultValue: false
      },
      ChangeTable: { 
        type: DataTypes.BOOLEAN, 
        allowNull: true, 
        defaultValue: false
      },
      Unisex: { 
        type: DataTypes.BOOLEAN, 
        allowNull: true, 
        defaultValue: false
      },
      keyRequired: { 
        type: DataTypes.BOOLEAN, 
        allowNull: true, 
        defaultValue: false
      }
    });
    return Potties;
  };