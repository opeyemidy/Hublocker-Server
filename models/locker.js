const mongoose = require('mongoose');
const lockerSchema = new mongoose.Schema({
  name: String,
  description: String,
  size: String,
  firstPrice: Number,
  quantity: Number,
  city: String,
  state: String,
});

lockerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Locker = mongoose.model('Locker', lockerSchema);

module.exports = Locker;
