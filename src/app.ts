import express from 'express';
import cors from 'cors';

import apiRoutes from './routes/api';

const app = express();

// Config App Express
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api', apiRoutes);

export default app;
