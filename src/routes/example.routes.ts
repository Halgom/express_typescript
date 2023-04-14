import { Router } from "express";
import { indexExample } from "../controllers/example.controller";

const router = Router();

router.get("/", indexExample);

export default router;
