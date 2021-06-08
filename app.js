// imports
const { MongoClient, ObjectID } = require('mongodb');
const express = require('express');
const Cors = require('cors');
//const BodyParser = require('body-parser');

//Connects to MongoDB
const client = new MongoClient('mongodb+srv://tulsaMapsUser:thereare4ofus!@cluster0.91cna.mongodb.net/LocallyOwned?retryWrites=true&w=majority', { useUnifiedTopology: true });
const app = express();

let port = process.env.PORT || 5000;


// Connects to Mongoose
// const mongoose = require('mongoose');
// const DownTown = require('./models/place');
// const dbURI = 'mongodb+srv://tulsaMapsUser:thereare4ofus!@cluster0.91cna.mongodb.net/LocallyOwned?retryWrites=true&w=majority';
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });


// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Cors());


// Get and Response
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html')
});

let collection;

app.listen('5000', async () => {
  try {
    await client.connect();
    collection = client.db('LocallyOwned').collection('Downtown');
  } catch (e) {
    console.error(e);
  }
});

app.get('/search', async (request, response) => {
  try {
    input = request.query.search
    let result = await collection.aggregate([
      {
        "$search": {
        "index": 'default',
          "text": {
            "query": `${input}`,
            "path": {
               'wildcard': '*'
            }
          }
        }
      }
    ]).toArray();
    response.send(result);
  } catch (e) {
    response.status(500).send({ message: e.message });
  }
});
