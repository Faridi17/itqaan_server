import { Sequelize } from "sequelize";
import db from '../config/database.js'

const { DataTypes } = Sequelize

const Admin = db.define('Admin', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [4, Infinity]
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Admin;