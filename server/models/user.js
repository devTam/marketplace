import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
    },
    role: {
        type: [String],
        default: ['Subscriber'],
        enum: ['Subscriber', 'Admin', 'Instructor']
    }, 
    stripeId: {
        type: String
    },
    stripeSellerId: {
        type: String
    },
    stripeSessionId: {
        type: String
    },
    passwordResetCode: {
        type: String
    },
}, {  timestamps: true });

export default mongoose.model('User', UserSchema);
