const dotenv = require("dotenv");
dotenv.config();
const connectToDb=require('./config/connectToDb')
const express = require("express");
const bodyParser = require("body-parser");



// Apply body-parser middleware

const app = express();
// app.use(bodyParser.json());

const mongoose = require("mongoose");
//middlewares
app.use(express.json());
connectToDb()
// mongoose.connect(process.env.MONGO_URL).then(() => console.log("Connected! to mongoDB ^-^"));

//ROUTES
app.use("/api/auth",require("./routes/authRoute"))
app.use("/api/users", require("./routes/usersRoute"));


app.get("/", (req, res) => {
  res.send("Hello, World!");
});
const port = process.env.PORT || 8000; 
app.listen(port, () => {
  console.log(`Server is listening in ${process.env.NODE_ENV} mode on port${port}`);
});
