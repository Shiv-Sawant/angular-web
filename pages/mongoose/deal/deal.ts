import mongoose from 'mongoose';
import './product';

export const DealSchema = new mongoose.Schema({
  User: String,
  Product: String,
  Amount: Number,
  Consultant: String,

});

module.exports = mongoose.model('Deal', DealSchema);
