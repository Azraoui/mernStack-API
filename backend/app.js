// import modules
import * as dotenv from 'dotenv'
import colors from 'colors'
import express from 'express'

// import routers
import appRouter from './routers/appRouter.js'

// import db.js to connect to databases
import {connectDB} from './config/db.js'

// set env
dotenv.config();
const port = process.env.PORT || 5000;

// connect to db
connectDB();

// init express
const app = express()

// midlware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))
app.use("/api/profile", appRouter)

// server start listening
app.listen(port, () => {
    console.log("server start listen port ".blue, port.yellow)
})