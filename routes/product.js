import express from "express";

const Router = express.Router();

Router.get("./products", (req, res) => {
  console.log("Get request");
  res.status(200).send("Success");
});

export default Router;
