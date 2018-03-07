const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    temperature: Number,
    WeatherText: String

}, {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    });

const Producto = mongoose.model('Product', productSchema);
module.exports = Producto;
