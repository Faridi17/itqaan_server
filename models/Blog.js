import { Sequelize } from "sequelize";
import db from '../config/database.js'

const { DataTypes } = Sequelize

const Blog = db.define('Blog', {
    title: {
        type: DataTypes.STRING
    },
    summary: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.TEXT
    },
    cover: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
});

export default Blog;