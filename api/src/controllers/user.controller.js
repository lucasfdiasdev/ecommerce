import generateToken from "../config/jwtToken.config.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const test = (req, res) => {
  res.json({
    message: "Hello World!",
  });
};

export const signUp = async (req, res) => {
  const { firstname, lastname, mobile, email, password } = req.body;

  if (!firstname || !lastname || !mobile || !email === "" || !password === "") {
    res.status(400).json({ message: "All fields are required." });
  }

  const hashPassword = bcrypt.hashSync(password, 12);

  const newUser = new User({
    firstname,
    lastname,
    mobile,
    email,
    password: hashPassword,
  });

  try {
    await newUser.save();
    res.json({
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    // User already exists
    res.json({
      message: "User already exists",
      success: false,
    });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password === "") {
    res.status(400).json({ message: "All fields are required." });
  }

  try {
    // check if user exists or not
    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "User not found." });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      res.status(400).json({ message: "Invalid password." });
    }

    const token = generateToken(user._id);

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json({
        message: "User logged in successfully",
        success: true,
      });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      success: false,
    });
  }
};

export const updatedUser = async (req, res) => {
  const { id } = req.params;

  try {
    const userUpdate = await User.findByIdAndUpdate(
      id,
      {
        firstname: req?.body?.firstname,
        lastname: req?.body?.lastname,
        mobile: req?.body?.mobile,
        email: req?.body?.email,
      },
      {
        new: true,
      }
    );
    res.json(userUpdate);
  } catch (error) {
    res.json({
      message: "Something went wrong",
      success: false,
    });
  }
};

//get all users
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({
      message: "Something went wrong",
      success: false,
    });
  }
};

// get single user by id
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.json({
      message: "Something went wrong",
      success: false,
    });
  }
};

// delete single user by id
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
  } catch (error) {
    res.json({
      message: "Something went wrong",
      success: false,
    });
  }
};
