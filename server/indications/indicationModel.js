import { DataTypes } from "sequelize";
import db from "../config/db";

const Indication = db.define('Indication', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    isEmpty: false
  }
});

export default Indication;
