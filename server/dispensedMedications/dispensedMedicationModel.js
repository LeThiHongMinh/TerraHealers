import { DataTypes } from "sequelize";

function defineDispensedMedicationModel(sequelize) {
  const DispensedMedication = sequelize.define('DispensedMedication', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      min: 1
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      equals: ['Dispensed', 'Returned', 'Reused', 'Recycled', 'Disposed'],
      isEmpty: false
    },
    quantityReturned: {
      type: DataTypes.INTEGER,
      allowNull: false,
      min: 0
    },
  });

  return DispensedMedication;
}

export default defineDispensedMedicationModel;
