import express from 'express';
import cors from 'cors';
import { db } from './config/db';

const app = express();
const PORT = 5000;

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.get('/api', (req, res) => {
  res.send('Hello from the API');
});

try {
  await db.sequelize.authenticate();
  console.log('Connection has been established successfully.');

  await sequelize.sync();
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.use(cors(corsOptions));
app.use(express.json());

// routes
// app.use('/api/medications', medicationsRouter);

app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});
