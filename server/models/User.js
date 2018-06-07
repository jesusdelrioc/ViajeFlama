const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  imgUrl: { type: String, default: "http://www.visit-pontevedra.com/files/imagenes/item_483_53b2ded05736d.jpg" },
  description: String
}, {
    timestamps: {
      createdAt: 'created_at', updatedAt: 'updated_at'
    }
  });

const User = mongoose.model('User', userSchema);
module.exports = User;