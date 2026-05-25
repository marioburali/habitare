import { Router } from "express";
import { getCondosController } from "../controllers/condo.controller.js";

export const condoRouter = Router();

condoRouter.get("/", getCondosController);

