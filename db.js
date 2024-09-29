const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://dheeraj:SmokeTreeDheeraj@cluster0.nhtxl.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log("Database connection established successfully");
  } catch (e) {
    console.log("Error in establishment of database connection", e);
    process.exit(1);
  }
};

module.exports = connectDB;
