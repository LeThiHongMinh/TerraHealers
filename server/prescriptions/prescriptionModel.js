import { DataTypes } from "sequelize";

function definePrescriptionModel(sequelize) {
  const Prescription = sequelize.define('Prescription', {
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      min: 1
    },
    price: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
      min: 0.00
    }
  });
  
  return Prescription;
};

export default definePrescriptionModel;
