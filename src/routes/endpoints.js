import { homeRoute } from "../services/route-services/home-route.js";

export const endpoints = (app) => {
  app.get("/", homeRoute);
};
