import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    userID: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'accounts'
    },
    date: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
});

export default mongoose.model('Note', TaskSchema);
