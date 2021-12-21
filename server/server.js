import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import mongooose from "mongoose";
import csrf from "csurf";
import cookieParser from "cookie-parser";
const morgan = require("morgan");
require("dotenv").config();
const csrfProtection = csrf({ cookie: true });

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// Routes
readdirSync("./routes").forEach((file) => {
  const route = require(`./routes/${file}`);
  app.use("/api", route);
});

app.use(csrfProtection);

app.get('/api/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// Connect to MongoDB
mongooose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
