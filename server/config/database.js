const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const client = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "Kalvin",
        });

        console.log(`MongoDB connected: ${client.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;
