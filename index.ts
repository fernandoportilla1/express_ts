import dotenv from 'dotenv';
import app from './src/app';

// Config .env
dotenv.config();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`),
);
