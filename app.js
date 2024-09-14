import express from 'express'
// import { connection } from 'mongoose'
const app = express()
const port = process.env.PORT ||'3000'
import connectdb from './db/connections.js'
import web from './routes/web.js'
//  Database connection

const DB_URL = "mongodb://0.0.0.0/octa";
connectdb(DB_URL)

//Set engine
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}));
app.use('/',web)


app.get('/' ,(req,res)=>{
    res.send("Hello World")
})
app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`)
})