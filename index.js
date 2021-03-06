const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the home page');
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connect to DB');
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch((err) => console.log(err));
