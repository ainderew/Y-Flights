const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reply = new Schema({
    name: String,
    repliedToName: String,
    email: String,
    year: String,
    month: String,
    day: String,
    comment: String,
    replies: [Array],
    hour: String,
    minute: String,
    replyIndex: Number,
    
})

const PattayaReplySchema = mongoose.model("PattayaReply",reply);
module.exports = PattayaReplySchema