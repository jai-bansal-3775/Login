// import express  from 'express'
// const app = express();
import mongoose from 'mongoose'

// const DB_URL = "mongodb://0.0.0.0/octa";

const connectdb = async (DATABASE_URL) =>{
    try{
        const DB_OPTIONS = {
            dbName : 'login_resdb',
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Connected Successfully");

    }
    catch(err){
        console.log(err);
    }
}

export default connectdb;
