import express from 'express';
import web from './routes/web.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import dotenv from 'dotenv';
import connectDB from './db/connectdb.js';
import MongoStore from 'connect-mongo';
const app = express();
app.use(cookieParser());

// Environmental file setup...
dotenv.config();
const PORT = process.env.PORT ;
const URL = process.env.DATABASE_URL ;

// Data Base Connection...
connectDB(URL);

//MongoDB Session...
const sessionStorage = MongoStore.create({
    mongoUrl:URL, 
    dbName:'schooldb',
    collectionName:'sessions',
    ttl:14*24*60*60,
    autoRemove:'native'
})
// Session...
app.use(session({
    name:'Ravi',
    secret:process.env.secretString,
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:1000000},
    store:sessionStorage
}))

// Make routes Working
app.use('/' , web);

app.listen(PORT , () =>{
    console.log(`App listen on http://127.0.0.1:${PORT}`);
});