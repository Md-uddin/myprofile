const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const DB = process.env.DATABASE_ACCESS;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err + "connection not succesful");
  });
