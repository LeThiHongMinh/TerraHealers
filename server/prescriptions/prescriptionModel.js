const { DataTypes } = require("sequelize");

function definePrescriptionModel(sequelize) {
  const Prescription = sequelize.define('Prescription', {
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      required: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      min: 1,
      required: true
    },
    price: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
      min: 0.00,
      required: true
    }
  });
  
  return Prescription;
};

module.exports = definePrescriptionModel;
