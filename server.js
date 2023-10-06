const express = require('express')
const app = express()
const mongoose = require('mongoose');
require('dotenv').config()

const { error } = require('console');

// var mysql = require('mysql');


// var con = mysql.createConnection({
//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASS,
//     database: process.env.DATABASE_NAME
// });
// const db = con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");

// });


mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection

db.on('error', (error) => console.log(error));
db.once('open', () => console.log("connected to database"))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers');
app.use("/subscribers", subscribersRouter)



const userRouter = require('./routes/user');
app.use("/user", userRouter)


const jobRouter = require('./routes/job');
app.use("/job", jobRouter)

const jobListArchiveRouter = require('./routes/jobListArchive')
app.use("/jobListArchive", jobListArchiveRouter)

const messageRouter = require('./routes/message')
app.use("/message", messageRouter)


const messageListRouter = require('./routes/messageList')
app.use("/messageList", messageListRouter)


app.listen(3000, () => console.log("server started"))