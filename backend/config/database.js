const mongoose = require("mongoose");

require("dotenv").config()

console.log("process.env.mongoURL", process.env.MONGODB_URI)
const connection = mongoose.connect(process.env.MONGODB_URI)

module.exports = {
  connection
}