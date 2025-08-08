import { homeRoute } from "../services/homeRoute.js";

export const endpoints = (app) => {
  app.get("/", homeRoute);
};
