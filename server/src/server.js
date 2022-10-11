import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { estadoRouter } from './routes/estado.js';
import { router as mainRouter } from './routes/main.js'
import { cidadeRouter } from './routes/cidades.js';
import { userRouter } from './routes/users.js';

dotenv.config();

const PORT = process.env.PORT || 5555;

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use(mainRouter);
app.use(estadoRouter);
app.use(cidadeRouter);
app.use(userRouter);

app.listen(PORT, () => {
    console.log(`[Server] Running on port ${PORT}`);
});