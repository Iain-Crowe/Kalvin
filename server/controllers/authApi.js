const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const Users = require("../models/user");

// @desc    Login
// @route   POST /api/user/login
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).send("Email/Password Field(s) Empty");
    }

    const user = await Users.findOne({ email });

    if (!user) {
        res.status(401).send("Invalid Email/Password");
    }

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                firstName: user.name.firstName,
                lastName: user.name.lastName,
                email: user.email,
                token: generateToken(user._id),
            },
        });
    } else {
        res.status(401).send("Invalid Email/Password");
    }
});

// @desc    Register
// @route   POST /api/user/register
const register = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        res.status(400).send("Required Field(s) Empty");
    }

    if (await Users.findOne({ email })) {
        res.status(400).send("Email is already in use");
    }

    const salt = await bcrypt.genSalt(12);

    const user = await Users.create({
        email: email,
        password: await bcrypt.hash(password, salt),
        name: {
            firstName: firstName,
            lastName: lastName,
        },
    });

    if (user) {
        res.status(201).json({
            message: "Registration successful",
            user: {
                id: user._id,
                firstName: user.name.firstName,
                lastName: user.name.lastName,
                email: user.email,
                token: generateToken(user._id),
            },
        });
    } else {
        res.status(400).send("Registration failed, try again");
    }
});

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

module.exports = {
    register,
    login,
};
