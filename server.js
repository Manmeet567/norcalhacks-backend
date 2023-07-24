const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')


const userRoutes = require('./routes/userRoutes');
const createRoutes = require('./routes/createRoutes');


const app = express()

const PORT = 4000 || process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

const corsOptions = {
   origin: "https://tiny-hummingbird-8f6e3f.netlify.app/"
}

//middlewares
app.use(express.json())
app.use(cors(corsOptions));

//routes
app.use('/api/user', userRoutes);
app.use('/api', createRoutes);

mongoose.set('strictQuery', true);
mongoose.connect(MONGODB_URI)
 .then(() => {
    app.listen(PORT, () => {
        console.log("Server Listening on PORT",PORT)
    });
 })
 .catch((err) => {
    console.log(err);
  });