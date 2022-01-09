import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/auth";
import jwt from "jsonwebtoken";
import AWS from "aws-sdk";
import { nanoid } from "nanoid";

const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: process.env.AWS_API_VERSION,
};

const SES = new AWS.SES(awsConfig);

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

// const sendEmail = async (req, res) => {
//   // console.log("send email");
//   // res.json({ok : true})
//   const params = {
//     Source: process.env.EMAIL_SENDER,
//     // destination must be verified in dev mode
//     Destination: { ToAddresses: ["tammy.batubo@gmail.com"] },
//     ReplyToAddresses: [process.env.EMAIL_SENDER],
//     Message: {
//       Subject: {
//         Charset: "UTF-8",
//         Data: "Password Reset",
//       },
//       Body: {
//         Html: {
//           Charset: "UTF-8",
//           Data: `
//             <h1>Reset Password</h1>
//             <p>Please click the following link to reset your password</p>
//             <p>
//               <a href="http://localhost:4000/reset-password">Reset Password</a>
//             </p>
//           `,
//         },
//       },
//     },
//   };

//   try {
//     const email = await SES.sendEmail(params).promise();
//     console.log(email);
//     res.json({
//       ok: true,
//     });
//   } catch (error) {
//     console.log(error);
//     res.json({
//       ok: false,
//     });
//   }
// };

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const shortCode = nanoid(6);
  try {
    const user = await User.findOneAndUpdate({ email }, { passwordResetCode: shortCode });
    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
      });
    }

    const params = {
      Source: process.env.EMAIL_SENDER,
      Destination: { ToAddresses: [email] },
      ReplyToAddresses: [process.env.EMAIL_SENDER],
      Message: {
        Subject: {
          Charset: "UTF-8",
          Data: "Password Reset",
        },
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: `
              <h1>Reset Password</h1>
              <p>Please use the following code to reset your password</p>
              <h4 style="fontWeight: bold;">
                ${shortCode}
              </p>
            `,
          },
        },
      },
    };

    await SES.sendEmail(params).promise();

    return res.status(200).json({
      message: "Email sent successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error sending email" });
  }
};



export { register, login, logout, currentUser, forgotPassword };
