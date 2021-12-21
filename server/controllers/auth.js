import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/auth";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please provide all fields",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).send({ message: "Error registering user" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide all fields",
      });
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({
        message: "User does not exists",
      });
    }

    const isPasswordValid = await comparePassword(
      password,
      existingUser.password
    );

    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    // create jwt
    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
    });
    const data = {
      name: existingUser.name,
      email: existingUser.email,
      avatar: existingUser.avatar,
      role: existingUser.role,
      id: existingUser._id,
    };

    return res.status(200).json({
      message: "Login successful",
      user: data,
    });
  } catch (error) {
    res.status(500).send({ message: "Error Logging in user" });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      message: "Logout successful!",
    });
  } catch (error) {
    console.log(error);
  }
};

const currentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    console.log(user);
    res.status(200).json({
      ok: true,
    });
  } catch (error) {
    res.status(500).send({ message: "Error getting current user" });
  }
};

export { register, login, logout, currentUser };
