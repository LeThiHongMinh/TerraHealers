const { DataTypes } = require("sequelize");

function defineIndicationModel(sequelize) {
  const Indication = sequelize.define('Indication', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmpty: false,
      required: true
    }
  });
  
  return Indication;
}

module.exports = defineIndicationModel;
