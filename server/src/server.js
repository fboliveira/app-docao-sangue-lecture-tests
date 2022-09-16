import express from 'express';
import cors from 'cors';
import { estadoRouter } from './routes/estado.js';
import { router as mainRouter } from './routes/main.js'
import { cidadeRouter } from './routes/cidades.js';

const PORT = 4000;

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use(mainRouter);
app.use(estadoRouter);
app.use(cidadeRouter);

app.listen(PORT, () => {
    console.log(`[Server] Running on port ${PORT}`);
});