const { DataTypes } = require("sequelize");

function defineEmissionModel(sequelize) {
  const Emission = sequelize.define('Emission', {
    disposalType: {
      type: DataTypes.STRING,
      equals: ['Reused', 'Recycled', 'Disposed'],
      isEmpty: false,
      required: true
    },
    productionEmissions: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    disposalEmissions: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    }
  });

  return Emission;
}

module.exports = defineEmissionModel;
