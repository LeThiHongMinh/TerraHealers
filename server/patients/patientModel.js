import { DataTypes } from "sequelize";

function definePatientModel(sequelize) {
  const Patient = sequelize.define('Patient', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmpty: false
    }
  });

  return Patient;
}

export default definePatientModel;
