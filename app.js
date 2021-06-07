// imports
const express = require('express');
const app = express();
let port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const DownTown = require('./models/place');

//Connects to MongoDB
const dbURI = 'mongodb+srv://tulsaMapsUser:thereare4ofus!@cluster0.91cna.mongodb.net/LocallyOwned?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });


// Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))


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


// Listen on port
app.listen(port, () => {
  console.info(`App is listening on part http://localhost:${port}`);
});
