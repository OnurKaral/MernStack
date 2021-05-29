import mongoose from "mongoose";
const postSchema = mongoose.Schema({
  title: String,
  image: String,
  tags: String,
  //prices: int,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Bids = mongoose.model("Bids", postSchema);

export default Bids;
