import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 4
    },
    normalizedUsername: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 8
    }
},{
    timestamps: true
});

export default mongoose.model('Account', AccountSchema);
