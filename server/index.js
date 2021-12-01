import express from "express";
import compression from "compression";
import cors from "cors";
import cookieParser from "cookie-parser";

import config from "./config/index.js";

import { connectToDatabase } from "./utilities/database.js";

import usersRouter from "./routes/users.js";

import { errorHandler, catchAllRoute } from "./middleware/errors.js";

const app = express();

app.use(compression());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser(config.cookieSecret));
app.use(express.json());

app.use("/api/users", usersRouter);

app.use(errorHandler);
app.use(catchAllRoute);

const start = async () => {
  try {
    await connectToDatabase();
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
