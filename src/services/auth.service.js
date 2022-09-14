import User from "../models/User.js";

const loginService = (email) =>
  User.findOne({ email: email }).select("+password");

export { loginService };
