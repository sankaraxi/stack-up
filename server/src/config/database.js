const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_DB_URI)
}

module.exports = connectDB;
