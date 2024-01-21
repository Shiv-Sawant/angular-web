import mongoose, { Schema, Types } from 'mongoose';
import './enrollment';
const UserSchema = new mongoose.Schema({
  _id: String,
  enrollments: {
    demand: {
      ref: 'Enrollment',
      type: Schema.Types.ObjectId
    },
    supply: {
      ref: 'Enrollment',
      type: Schema.Types.ObjectId
    }
  }
});
export default mongoose.models.User ||
  mongoose.model('User', UserSchema, 'users');
