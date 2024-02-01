const { DataTypes } = require("sequelize");

function definePatientModel(sequelize) {
  const Patient = sequelize.define('Patient', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmpty: false,
      required: true
    }
  });

  return Patient;
}

module.exports = definePatientModel;
