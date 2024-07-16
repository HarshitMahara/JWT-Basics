import express from "express";
import "dotenv/config";
import dbConnect from "./dbConnect.js";
import "express-async-errors";
import notFound from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>JWT BASICS</h1>");
});

app.use(notFound)
app.use(errorHandler)

(async () => {
  try {
    await dbConnect(process.env.MONGO_URL);
    console.log(`Database Connected...`);
    app.listen(port, console.log(`Server is running...`));
  } catch (error) {
    console.log("Error in DB Connect", error);
  }
})();
