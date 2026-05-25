import cors from "cors";
import express from "express";
import { condoRouter } from "./routes/condo.route.js";

export function App() {
	const app = express();

	app.use(cors());
	app.use(express.json());

	app.get("/health", (_request, response) => {
		response.json({ ok: true });
	});

	app.use("/api/condominiums", condoRouter);

	return app;
}
