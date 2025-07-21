import { homeRoute } from "../controller/homeRoute.js";

export const endpoints = (app) => {
  app.get("/", homeRoute);
};
