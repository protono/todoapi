import express, { Express } from 'express'
import mongoose, { ConnectOptions, Mongoose } from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'

const app: Express = express()

const MONGO_PORT: string | number = process.env.MONGO_PORT || 4000

app.use(cors())
app.use(todoRoutes)

const uri: string = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1`

mongoose
    .connect(uri)
    .then(() =>
        app.listen(MONGO_PORT, () => console.log(`Server running on http://localhost:${MONGO_PORT}`)))
    .catch(error => { throw error })