const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users")
const movieRoute= require("./routes/movies")
const listRoute= require("./routes/lists")

dotenv.config();

app.use(express.json())

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL),
      {
        useUnifiedTopology: true,
        useCreateIndex: true,
      };
    console.log("mongo connected");
  } catch (error) {
    console.log(error);
  }
};

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute)
app.use("/api/movies", movieRoute)
app.use("/api/lists", listRoute)

connect();

app.listen(8800, () => {
  console.log("back is runnig");
});

