module.exports = function(sequelize, DataTypes) {
    let Potties = sequelize.define("Potties", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "none"
      },
      addr: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "none"
      },
      picLink: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "none"
      },
      cleanliness: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: true,
        min: 1,
        max: 5
      },
      singleStall: { 
        type: DataTypes.BOOLEAN, 
        allowNull: true, 
        defaultValue: true,
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