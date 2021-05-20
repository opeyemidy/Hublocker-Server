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
const rndInt = () => Math.floor(Math.random() * 9) + 1;
const lockers = [
  {
    name: 'H295*W460*D520mm',
    description: 'N450 per Item/mo N20,000 XX no of orders Online only price',
    size: 'small',
    firstPrice: rndInt(),
    quantity: rndInt(),
    city: 'abuja',
    state: 'fct',
  },
  {
    name: 'H295*W460*D520mm',
    description: 'N450 per Item/mo N15,000 XX no of orders Online only price',
    size: 'small',
    firstPrice: rndInt(),
    city: 'ikorodu',
    quantity: rndInt(),
    state: 'lagos',
  },
  {
    name: 'H295*W460*D520mm',
    description: 'N450 per Item/mo N15,000 XX no of orders Online only price',
    size: 'medium',
    firstPrice: rndInt(),
    city: 'lekki',
    quantity: rndInt(),
    state: 'lagos',
  },
  {
    name: 'H295*W460*D520mm',
    description: 'N450 per Item/mo N15,000 XX no of orders Online only price',
    size: 'small',
    firstPrice: rndInt(),
    city: 'lekki',
    quantity: rndInt(),
    state: 'lagos',
  },
  {
    name: 'H295*W460*D520mm',
    description: 'N450 per Item/mo N12,000 XX no of orders Online only price',
    size: 'medium',
    firstPrice: rndInt(),
    quantity: rndInt(),
    city: 'ibadan',
    state: 'oyo',
  },
  {
    name: 'H295*W460*D520mm',
    description: 'N450 per Item/mo N15,000 XX no of orders Online only price',
    size: 'large',
    firstPrice: rndInt(),
    quantity: rndInt(),
    city: 'ikeja',
    state: 'lagos',
  },
  {
    name: 'H295*W460*D520mm',
    description: 'N450 per Item/mo N10,000 XX no of orders Online only price',
    size: 'large',
    firstPrice: rndInt(),
    quantity: rndInt(),
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
