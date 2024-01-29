import { DataTypes } from "sequelize";
import db from "../config/db";

const Medication = db.define('Medication', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    isEmpty: false
  },
  dose: {
    type: DataTypes.STRING,
    allowNull: false,
    isEmpty: false
  },
  supplier: {
    type: DataTypes.STRING,
    allowNull: false,
    isEmpty: false
  },
  unit_selling_price: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
    min: 0.00
  }
});

export default Medication;
