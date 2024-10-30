const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
    {
        sender: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        text: {
            type: String, 
            required: true
        }, 
        isRead: {
            type: Boolean, 
            default: false, 
        }
    }, 
    { timestamps: true },
);

module.exports = mongoose.model('Message', messageSchema);