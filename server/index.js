import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import postRoutes from "./routers/bids.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.json({
    author: "mongoose",
    message: "Connected..",
  });
});
app.use("/bids", postRoutes);

mongoose
  .connect(process.env.CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Running on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error(error.message);
  });
mongoose.set("useFindAndModify", false);
