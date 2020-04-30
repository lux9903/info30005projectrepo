const express = require("express");
const bodyParser = require("body-parser");

const app = express();

require("./models");


// Body parser middleware
app.use(bodyParser.json());
// support parsing of urlencoded bodies (e.g. for forms)
app.use(bodyParser.urlencoded({ extended: true }));

// GET home page
app.get("/", (req, res) => {
  res.send("<H1>Team Name: Cosmos</H1>");
});

// setting up routes
const userRoute = require("./routes/userRoute");

// assign routes
app.use("/routes/user", userRoute);


app.listen(process.env.PORT || 3000, () => {
  console.log("StudySpot app is running!");
});

