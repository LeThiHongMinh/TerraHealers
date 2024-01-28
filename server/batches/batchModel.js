import { DataTypes } from "sequelize";
import db from "../config/db";

const Batch = db.define('Batch', {
  batch_number: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  expires_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Batch;
