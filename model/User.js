import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    lastname: { type: String, required: true },
    firstname: { type: String, required: true },
    password: { type: String },
    role: { type: String },
    phone_number: { type: Number, required: true },
    email: { type: String, required: true },
    created_date: { type: String, required: true },
  },
  {
    collection: "users",
  }
);

const Users = mongoose.model("Users", userSchema, "users");

export default Users;
