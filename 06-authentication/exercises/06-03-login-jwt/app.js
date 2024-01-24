import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import { User } from "./models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const app = express();
const port = 8000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(helmet());
app.use(morgan("dev"));

console.log(process.env.JWT_SECRET_KEY);

app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
  const existingUser = User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: { message: "user already exists" } });
  }

  // Hash password
  const saltRounds = 12;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  // Store new user in database with hashed password
  const user = new User({ email, password: hashedPassword });
  user.save();

  res.json({
    data: {
      email: user.email,
    },
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Fetch user from database
  const user = User.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .send({ error: { message: "Invalid email or password" } });
  }

  // Check password
  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    return res
      .status(400)
      .send({ error: { message: "Invalid email or password" } });
  }

  // 🍎 Implement: 5.1. Instead of `{"status": "ok"}`,
  //    return `{ token: "..." }` with JWT inside.
  res.send({ token: createJwt(email) });
});

function createJwt(email) {
  // 🍎 Implement: 4.1. Store the value from `process.env.JWT_SECRET_KEY` in .env to `jwtSecretKey`.
  const jwtSecretKey = process.env.JWT_SECRET_KEY;

  // 🍎 Implement: 4.2. Create a JWT with `jwt.sign(..)`. The token must expire in 3 hours.
  const token = jwt.sign({ id: email }, jwtSecretKey, {
    expiresIn: "3h",
  });
  ;

  return token;
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
