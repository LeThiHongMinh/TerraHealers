const { DataTypes } = require("sequelize");

function defineDispensedMedicationModel(sequelize) {
  const DispensedMedication = sequelize.define('DispensedMedication', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      min: 1,
      required: true
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      equals: ['Dispensed', 'Returned', 'Reused', 'Recycled', 'Disposed'],
      isEmpty: false,
      required: true
    },
    quantityReturned: {
      type: DataTypes.INTEGER,
      allowNull: false,
      min: 0,
      required: true
    },
  });

  return DispensedMedication;
}

module.exports = defineDispensedMedicationModel;
