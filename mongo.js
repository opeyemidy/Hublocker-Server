const mongoose = require('mongoose');
require('dotenv').config();
const password = process.env.PASSWORD;

const url = `mongodb+srv://root:${password}@amazon-clone-hk4ff.mongodb.net/hublocker?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const lockerSchema = new mongoose.Schema({
  name: String,
  description: String,
  size: String,
  firstPrice: Number,
  quantity: Number,
  city: String,
  state: String,
});

const Locker = mongoose.model('Locker', lockerSchema);
const lockers = [
  {
    name: 'H295*W460*D520mm',
    description: 'N450 per Item/mo N15,000 XX no of orders Online only price',
    size: 'small',
    firstPrice: 2,
    quantity: 2,
    city: 'garki',
    state: 'abuja',
  },
  {
    name: 'H295*W460*D520mm',
    description: 'N450 per Item/mo N15,000 XX no of orders Online only price',
    size: 'small',
    firstPrice: 3,
    quantity: 2,
    city: 'ibadan',
    state: 'oyo',
  },
  {
    name: 'H295*W460*D520mm',
    description: 'N450 per Item/mo N15,000 XX no of orders Online only price',
    size: 'small',
    firstPrice: 1,
    quantity: 2,
    city: 'ikeja',
    state: 'lagos',
  },
  {
    name: 'H295*W460*D520mm',
    description: 'N450 per Item/mo N15,000 XX no of orders Online only price',
    size: 'small',
    firstPrice: 1,
    quantity: 2,
    city: 'ilorin',
    state: 'kwara',
  },
];
lockers.forEach((item) => {
  const locker = new Locker(item);

  locker.save().then((response) => {
    console.log('locker saved!');
  });
});
// mongoose.connection.close()

// Locker.find({ city: 'ikorodu' }).then((result) => {
//   result.forEach((locker) => {
//     console.log(locker);
//   });
//   mongoose.connection.close();
// });
