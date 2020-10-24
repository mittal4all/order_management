const express = require("express");
const cors = require('cors');

//calling express
const app = express();
const port = 5000 || process.env.port;

const connectDB = require("../order_portal_backend/DB/connection");
const orderRouter = require('./routes/order_filed');
//require('dotenv').config();
//calling database
connectDB();
app.use(cors());
app.use(express.json());

//order middleware
app.use(orderRouter);

app.listen(port, () => {
    console.log("ready to take order");
})