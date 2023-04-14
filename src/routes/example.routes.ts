import { Router } from "express";
import { indexExample } from "../controllers/example.controller";

const routes = Router();

routes.get("/", indexExample);

export default routes;
