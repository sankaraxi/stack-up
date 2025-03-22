const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://sankarfrompalani:HUUpgrCLWe8b998w@nodejsescapade.6skti.mongodb.net/stackUp")
}

module.exports = connectDB;
