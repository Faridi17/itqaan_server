import { Sequelize } from "sequelize";

const db = new Sequelize({
    username: 'root',
    password: 'SkULodufCnctBYtTncIQyjaPZnrneAZe',
    database: 'railway',
    dialect: 'mysql',
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
})

export default db
