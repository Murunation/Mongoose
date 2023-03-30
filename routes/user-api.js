import express, { json } from "express";

import { getUsers, postUser, deleteUser } from "../services/user-service.js";

const usersRouter = express.Router();

usersRouter.get("/getUser", async (req, res) => {
  const result = await getUsers();
  res.status(200).json(result);
  console.log(result);
});

usersRouter.post("/addUser", async (req, res) => {
  const newUser = {
    ...JSON.parse(req.body.details),
  };
  console.log("new user: ", newUser);
  postUser(newUser);
});

export default usersRouter;
