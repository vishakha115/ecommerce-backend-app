const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, { serverSelectionTimeoutMS: 50000 }) // paste your mongoDB Connection string above with password
    .then((data) => console.log(`Node.js Connected to MongoDB`))
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
