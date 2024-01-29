import { DataTypes } from "sequelize";
import db from "../config/db";

const DispensedMedication = db.define('DispensedMedication', {
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
  quantity_returned: {
    type: DataTypes.INTEGER,
    allowNull: false,
    min: 0
  },
});

export default DispensedMedication;
