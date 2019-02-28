var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect(
  "your could mlab link",{ 
    poolSize: 10
    // other options can go here
  },
  () => {
    console.log("connected to mongoDB");
  }
);

module.exports = { mongoose };
