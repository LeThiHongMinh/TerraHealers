const { DataTypes } = require("sequelize");

function defineMedicationModel(sequelize) {
  const Medication = sequelize.define('Medication', {
    // imprint serves as sort of serial number for the medication type
    // irl only applies to pills, but can assume this applies to non-pill meds
    imprint: {
      type: DataTypes.STRING,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmpty: false,
      required: true
    },
    dose: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmpty: false,
      required: true
    },
    supplier: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmpty: false,
      required: true
    },
    unitSellingPrice: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
      min: 0.00,
      required: true
    }
  });
  
  return Medication;
};

module.exports = defineMedicationModel;
