import "reflect-metadata"
import { DataSource } from "typeorm"
import { config } from "dotenv"
import { Entities } from "../entities"

config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    logging: true,
    entities: [...Entities],
})