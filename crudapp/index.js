import express  from "express";
let app =express()
import dotenv from 'dotenv';
dotenv.config({path :'config.env'})
const port = process.env.PORT || 3000;

import connectDB  from "./database/connection.js";
import router from "./route/route.js";

app.set('view engine','ejs')

connectDB()

app.use(express.urlencoded())
app.use(express.json())
app.use(express.static('public'))

app.use('/',router)
app.listen(port,()=>{
    console.log('server running')
})