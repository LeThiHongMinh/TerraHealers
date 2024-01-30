import { DataTypes } from "sequelize";

function defineBatchModel(sequelize) {
  const Batch = sequelize.define('Batch', {
    batchNumber: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      min: 0
    }
  });

  return Batch;
};

export default defineBatchModel;
