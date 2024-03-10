const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');
dotenv.config();

//connecting to database
const connectToMongo = require('./db.js');
connectToMongo();

const app = express();
const port = 5000;

//middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello welcome to weather app api!!!!!')
});

app.use('/api/auth/' , require('./routes/auth.js'));
app.use('/api/cities', require('./routes/cities.js'));

app.listen(port, () => {
  console.log(`listening on port at http://localhost:${port}`)
});