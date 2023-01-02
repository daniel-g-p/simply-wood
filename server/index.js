import express from "express";
import compression from "compression";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import historyApiFallback from "connect-history-api-fallback";

import config from "./config/index.js";

import { connectToDatabase } from "./utilities/database.js";
import { errorHandler, catchAllRoute } from "./middleware/errors.js";

import usersRouter from "./routes/users.js";
import imagesRouter from "./routes/images.js";
import contactRouter from "./routes/contact.js";

const app = express();

app.get("/health-check", (req, res) => {
  return req.status(200).json({ id: Date.now() });
});

app.use(compression());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser(config.cookieSecret));
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/images", imagesRouter);
app.use("/api/contact", contactRouter);

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(historyApiFallback());
app.use(express.static(path.join(__dirname, "views")));
app.get((req, res, next) => res.sendFile("index.html"));

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
