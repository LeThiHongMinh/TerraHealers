import { DataTypes } from "sequelize";

function defineIndicationModel(sequelize) {
  const Indication = sequelize.define('Indication', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmpty: false
    }
  });
  
  return Indication;
}

export default defineIndicationModel;
