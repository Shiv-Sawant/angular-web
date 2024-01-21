import mongoose, { Schema, Types } from 'mongoose';

export const EnrollmentSchema = new mongoose.Schema({
  _id: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  type: String,
  stage: Number,
  data: Object
});

export default mongoose.models.Enrollment ||
  mongoose.model('Enrollment', EnrollmentSchema, 'enrollments');
