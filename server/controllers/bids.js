import Bids from "../models/bids.js";

export const getBids = async (req, res) => {
  try {
    const bids = await Bids.find();
    res.status(200).json(bids);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
