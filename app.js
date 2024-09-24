const express = require("express");
const homeRoute = require("./route/homeRoute");
const userSigninRoute = require("./route/userSigninRoute");
const userLoginRoute = require("./route/userLoginRoute");
const showAllProducts = require("./route/showAllProducts");
const newcollections = require("./route/newCollectionsRoute");
const popularinwomen = require("./route/popularinwomen");
const relatedProducts = require("./route/relatedproducts");
const addtoCartRoute = require("./route/addtoCartRoute");
const getCartRoute = require("./route/getCartRoute");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(cors());

app.use("/", homeRoute);
app.use("/api/v1", userSigninRoute);
app.use("/api/v1", userLoginRoute);
app.use("/api/v1", showAllProducts);
app.use("/api/v1", newcollections);
app.use("/api/v1", popularinwomen);
app.use("/api/v1", relatedProducts);
app.use("/api/v1", addtoCartRoute);
app.use("/api/v1", getCartRoute);
module.exports = app;
