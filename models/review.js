const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
    comment: {
    type: String,
    required: [true, "Comment cannot be empty"], // Validation
  },
    rating: {
       type: Number,
       min: 1,
       max: 5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model("Review", reviewSchema);
