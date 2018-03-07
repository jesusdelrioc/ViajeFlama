const mongoose = require('mongoose');
require('dotenv').config();

module.exports = {
    dbURL: process.env.MONGODB_URI,
}