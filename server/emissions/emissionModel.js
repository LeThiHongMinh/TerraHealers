import { DataTypes } from "sequelize";

function defineEmissionModel(sequelize) {
  const Emission = sequelize.define('Emission', {
    medicationId: {
      type: DataTypes.STRING,
      primaryKey: TransitionEvent,
      references: {
        model: 'Medications',
        key: 'id'
      }
    },
    disposalType: {
      type: DataTypes.STRING,
      primaryKey: true,
      equals: ['Reused', 'Recycled', 'Disposed'],
      isEmpty: false
    },
    productionEmissions: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    disposalEmissions: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  });

  return Emission;
}

export default defineEmissionModel;
