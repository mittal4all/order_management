const mongoose = require("mongoose");
const URI = "Your Database Url";
const connectDB = async () => {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('database connected');
}

module.exports = connectDB;

