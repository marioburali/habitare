import express from "express";
import cors from "cors";

const app = express();
const port = Number(process.env.PORT ?? 3001);

app.use(cors());
app.use(express.json());

app.get("/health", (_request, response) => {
  response.json({ ok: true });
});

app.get("/api/condominiums", (_request, response) => {
  response.json([]);
});

app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});