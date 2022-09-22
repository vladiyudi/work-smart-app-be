const mongoose = require("mongoose");

const connectDB = async (callback) => {
  try {
    const DATABASE = process.env.DATABASE;
    if (!DATABASE) throw new Error("DATABASE_URL not found.");
    const conn = await mongoose.connect(DATABASE);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    return callback();
  } catch (err) {
    return callback(err);
  }
};

module.exports = connectDB;
