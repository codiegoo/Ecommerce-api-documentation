
const mongoose = require('mongoose')

const collectionName = 'sessions'

const collectionSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  age: Number,
  password: String,
  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart',
  },
  role: {
    type: String,
    enum: ['administrador', 'usuario', 'premium'],
    default: 'usuario',
  },
  document: [
    {
      name: String,
      reference:String
    }
  ],
  last_conection: Boolean

})

const Users = mongoose.model(collectionName, collectionSchema)

module.exports = Users