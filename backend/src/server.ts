import { App } from './app.js';

const app = App();
const port = Number(process.env.PORT ?? 3001);

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
