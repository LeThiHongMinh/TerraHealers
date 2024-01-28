import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

const corsOptions = {
  origin: 'http://localhost:3000'
};

app.get('/api', (req, res) => {
  res.send('Hello from the API');
});

app.use(cors(corsOptions));
app.use(express.json());

// routes
app.use('/api/medications', medicationsRoute);


app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});
