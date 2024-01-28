import { DataTypes } from "sequelize";
import db from "../config/db";

const Emission = db.define('Emission', {
  medication_id: {
    type: DataTypes.STRING,
    primaryKey: TransitionEvent,
    references: {
      model: 'Medications',
      key: 'id'
    }
  },
  disposal_type: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  production_emissions: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  disposal_emissions: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
});

export default Emission;
