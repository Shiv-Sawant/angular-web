import mongoose, { Schema, Types } from 'mongoose';

export const DealProductSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    name: String
});

export default mongoose.models.DealProduct ||
    mongoose.model('DealProduct', DealProductSchema, 'deal_products');
