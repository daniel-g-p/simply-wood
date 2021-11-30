import config from "../config/index.js";

export const tryCatch = (controllerFunction) => {
  return async (req, res, next) => {
    try {
      return controllerFunction(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export const errorHandler = (error, req, res, next) => {
  if (config.nodeEnv === "development") {
    console.log(error);
  }
  return res.status(500).send("Une erreur s'est produite.");
};

export const catchAllRoute = (req, res, next) => {
  return res.status(400).send("URL non valide");
};
