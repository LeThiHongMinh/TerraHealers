import { DataTypes } from "sequelize";
import db from "../config/db";

const Prescription = db.define('Prescription', {
  group_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    min: 1
  },
  price: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
    min: 0.00
  }
});

export default Prescription;
