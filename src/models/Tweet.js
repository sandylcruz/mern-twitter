const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },

  text: {
    type: String,
    required: true,
  },

  data: {
    type: Date,
    defaut: Date.now,
  },
});

module.exports = Tweet = mongoose.model("tweet", TweetSchema);
