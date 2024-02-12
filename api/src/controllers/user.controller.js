import User from "../models/user.model.js";

export const test = (req, res) => {
  res.json({
    message: "Hello World!",
  });
};

export const createUser = async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    // Create a new user
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    // User already exists
    res.json({
      message: "User already exists",
      success: false,
    });
  }
};
