const { DataTypes } = require("sequelize");

function defineBatchModel(sequelize) {
  const Batch = sequelize.define('Batch', {
    batchNumber: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
      required: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      min: 0,
      required: true
    }
  });

  return Batch;
};

module.exports = defineBatchModel;
