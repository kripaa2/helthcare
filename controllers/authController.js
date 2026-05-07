const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
  createUser,
  findUserByEmail,
} = require("../models/userModel");

const register = async (req, res) => {

  const {
    name,
    email,
    password,
    role,
  } = req.body;

  if (
    !name ||
    !email ||
    !password ||
    !role
  ) {
    return res.status(400).json({
      message: "All fields required",
    });
  }

  const hashedPassword =
    await bcrypt.hash(password, 10);

  createUser(
    name,
    email,
    hashedPassword,
    role,
    (err) => {

      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      res.status(201).json({
        message:
          "User registered successfully",
      });
    }
  );
};

const login = (req, res) => {

  const { email, password } = req.body;

  findUserByEmail(
    email,
    async (err, user) => {

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      const validPassword =
        await bcrypt.compare(
          password,
          user.password
        );

      if (!validPassword) {
        return res.status(401).json({
          message:
            "Invalid credentials",
        });
      }

      const token = jwt.sign(
        {
          id: user.id,
          role: user.role,
        },

        process.env.JWT_SECRET,

        {
          expiresIn: "1d",
        }
      );

      res.json({
        token,
        role: user.role,
      });
    }
  );
};

module.exports = {
  register,
  login,
};