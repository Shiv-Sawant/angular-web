import mongoose, { Schema, Types } from 'mongoose';
import './product';
import User from '../user';

export const DealSchema = new mongoose.Schema({
  User: String,
  Product: String,
  Amount: Number,
  Consultant: String,

});

module.exports = mongoose.model('Deal', DealSchema);
