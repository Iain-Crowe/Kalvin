const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv").config();

const connectDB = require("./config/database");

const PORT = process.env.PORT || 5000;

connectDB();

const { errorHandler } = require("./handlers/errorHandler");

// Setting headers config
const app = express();
app.use(cors());
// app.use(errorHandler);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

// Routes
app.use('/api/user', require('./routes/userRoutes'));

// Deployment
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "../client/build", "index.html")
        );
    });
} else {
    app.get("/", (req, res) => res.send("Please set to production"));
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));