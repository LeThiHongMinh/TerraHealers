const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const medicationRouter = require("./medications/medicationRoutes");
const app = express();

const PORT = 5000;

const corsOptions = {
  origin: 'http://localhost:3000'
};

// app.get('/api', (req, res) => {
//   res.send([{"id": 1, "name":"Alice"}, {"id": 2, "name":"Bob"}]);});

async function setUpDb() {
  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
  
    await db.sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

setUpDb();

app.use(cors(corsOptions));
app.use(express.json());

// routes
app.use('/api', medicationRouter);

app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});
