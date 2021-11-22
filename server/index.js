import express from "express";
import compression from "compression";
import cors from "cors";
import cookieParser from "cookie-parser";

import config from "./config/index.js";

const app = express();

app.use(compression());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser(config.cookieSecret));
app.use(express.json());

app.all("/", (req, res, next) => {
  return res.send("Hello World");
});

const start = async () => {
  try {
    app.listen(config.port, () => {
      if (config.nodeEnv === "development") {
        console.log(`Server running on http://localhost:${config.port}`);
      }
    });
  } catch (error) {
    if (config.nodeEnv === "development") {
      console.log(error);
    }
    process.exit();
  }
};

start();
