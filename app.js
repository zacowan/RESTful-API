const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Setup the express app
const app = express();
const port = 3000;

//Middleware for processing a request body into JSON
app.use(bodyParser.json());

//Import routes
const dataRoute = require('./routes/data');
app.use('/data', dataRoute);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true});
//Error handling
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to DB.');
});

//Home directory
app.get('/', (req, res) => res.send('Successful connection.'));

app.listen(port, () => console.log(`Backend app on port ${port}.`));
