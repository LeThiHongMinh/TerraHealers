import { DataTypes } from "sequelize";
import db from "../config/db";

const Medication = db.define('Medication', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  dose: {
    type: DataTypes.STRING,
    allowNull: false
  },
  supplier: {
    type: DataTypes.STRING,
    allowNull: false
  },
  unit_selling_price: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false
  }
});

export default Medication;
