const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())

app.get('/api', (req, res) => {
  res.send([{"id": 1, "name":"Alice"}, {"id": 2, "name":"Bob"}]);});

app.listen(5000, () => {
  console.log('Server is running on port 5000.');
})

