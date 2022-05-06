const mongoose = require("mongoose")

exports.db = async () => {
    await mongoose.connect('mongodb://localhost:27017/react');
}