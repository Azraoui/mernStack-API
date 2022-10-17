// import modules
import * as dotenv from 'dotenv'
import colors from 'colors'
import express from 'express'
import bodyParser from 'body-parser'

// import routers
import appRouter from './routers/appRouter.js'


// set env
dotenv.config();
const port = process.env.PORT || 5000;

// init express
const app = express()

// midlware
app.use(bodyParser.json());
app.use("/api/test", appRouter)

// server start listening
app.listen(port, () => {
    console.log("server start listen port ".blue, port.yellow)
})