const mongoose = require('mongoose');

const TravlrSchema = new mongoose.Schema({
  // Define your schema fields here
  code: { type: String, required: true , index: true},
  name: { type: String, required: true , index: true},
  length: { type: String, required: true },
  start: { type: Date, required: true },
  resort: { type: String, required: true },
  perPerson: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

const Trip = mongoose.model('trips', TravlrSchema);
module.exports = Trip;