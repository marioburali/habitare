import { Router } from "express";
import type { Condo } from "../types/condo.types.js";

export const condoRouter = Router();

const condos: Condo[] = [];

condoRouter.get("/", (_request, response) => {
	response.status(200).json(condos);
});
