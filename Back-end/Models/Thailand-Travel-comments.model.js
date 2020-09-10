const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const comment = new Schema({
    name: String,
    email: String,
    year: String,
    month: String,
    day: String,
    comment: String,
    replies: [Array],
    hour: String,
    minute: String,
})

const ThailandTravelCommentSchema = mongoose.model("ThailandTravelComment", comment)
module.exports = ThailandTravelCommentSchema;