// imports
const { MongoClient, ObjectID } = require('mongodb');
const express = require('express');
const Cors = require('cors');
//const BodyParser = require('body-parser');

//Connects to MongoDB
const client = new MongoClient('mongodb+srv://tulsaMapsUser:thereare4ofus!@cluster0.91cna.mongodb.net/LocallyOwned?retryWrites=true&w=majority', { useUnifiedTopology: true });
const app = express();

let port = process.env.PORT || 5000;


//Connects to Mongoose
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
app.get('', (req, res) => {
  res.sendFile(__dirname + '/views/home.html')
});

// Get ALL places
app.get('/all-places', (req, res) => {
  DownTown.find({ })
    .then((result) => {
      res.send(result);
      console.log("hello world");
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Get a place by Id (Saturn Room)
app.get('/single-place', (req, res) => {
  DownTown.findById('60ba78f5650b7c69b4f57a17')
    .then((result) => {
      res.send(result);
      console.log('Search by ID works');
    })
    .catch((err) => {
      console.log(err);
    });
});


//Search places by keywords
app.get('/show-cafes', (req, res) => {
  DownTown.find({"googlePlaceInfo.types": "cafe"})
    .then((result) => {
      res.send(result);
      console.log("Search by Keyword: CAFE working!!!");
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});


app.get('/show-bars', (req, res) => {
  DownTown.find({"googlePlaceInfo.types": "bar"})
    .then((result) => {
      res.send(result);
      console.log("Search by Keyword: BARS working!!!");
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});


app.get('/show-food', (req, res) => {
  DownTown.find({"googlePlaceInfo.types": "food"})
    .then((result) => {
      res.send(result);
      console.log("Search by Keyword: FOOD working!!!");
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});


app.get('/show-stores', (req, res) => {
  DownTown.find({"googlePlaceInfo.types": "store"})
    .then((result) => {
      res.send(result);
      console.log("Search by Keyword: STORE working!!!");
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});


app.get('/show-gym', (req, res) => {
  DownTown.find({"googlePlaceInfo.types": "gym"})
    .then((result) => {
      res.send(result);
      console.log("Search by Keyword: GYM working!!!");
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
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
    let result = await collection.aggregate([
      {
        "$search": {
        "index": 'default',
          "text": {
            "query": '${coffee}',
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

app.get("/get/:id", async (request, response) => {
  try {
    let result = await collection.findOne({ "_id": ObjectID(request.params.id) });
    response.send(result);
  } catch (e) {
    response.status(500).send({ message: e.message });
  }
});
});
