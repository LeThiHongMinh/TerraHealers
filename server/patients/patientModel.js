import { DataTypes } from "sequelize";
import db from "../config/db";

const Patient = db.define('Patient', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Patient;
