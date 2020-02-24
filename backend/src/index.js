const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

//database connection
const { username, password } = require("../../credentials/mongodb-atlas.json");
const MONGODB_URI = `mongodb+srv://${username}:${password}@cluster0-euas3.mongodb.net/spreadsheet?retryWrites=true&w=majority`;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

// enable transactions with react in a different port
// app.use(cors({origin: 'http://localhost:3000'})) 
app.use(cors())   // enable transactions from everywhere 
app.use(express.json());
app.use(routes)

app.listen(3333);


