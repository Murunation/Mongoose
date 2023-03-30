import Users from "../model/User.js";
import "../config/mongoose-config.js";

export async function getUsers() {
  return await Users.find();
}

export async function postUser(newUser) {
  return await Users.insertMany({
    ...newUser,
  });
}

export async function deleteUser(deleteUserName) {
  return await Users.deleteOne({ firstname: deleteUserName });
}
