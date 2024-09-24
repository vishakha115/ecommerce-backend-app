const connectToDatabase = require("../config/database");
const app = require("../app.js");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();
connectToDatabase();
app.listen(process.env.PORT, () => {
  console.log(`App is running on PORT ${process.env.PORT}`);
});
