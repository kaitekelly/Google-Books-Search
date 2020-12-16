const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();

//react access the api key in the .env
process.env.REACT_APP_API_KEY
process.env.dbuser
process.env.dbpassword

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
//comment this out to launch

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
//this will be part of the code that we leave in to deploy on heroku
app.use(express.static("client/build"));

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://migration_user:Whitecat11@cluster-n8n7xbb4.nytr9.mongodb.net/<dbname>?retryWrites=true&w=majority`);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});