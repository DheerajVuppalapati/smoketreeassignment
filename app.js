const express = require('express')
const bodyParser = require('body-parser')
const connectDb = require('./db')
const userRoutes = require('./routes/userRoutes')

const app = express();

//connect to mongoDb
connectDb()

//Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

//Routes
app.use('/user',userRoutes)

//start the server
app.listen(3000,() => {
    console.log("Server is running at port 3000")
})