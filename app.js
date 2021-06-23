// imports
const { MongoClient, ObjectID } = require('mongodb');
const express = require('express');
const Cors = require('cors');
//const BodyParser = require('body-parser');

//Connects to MongoDB
const client = new MongoClient('mongodb+srv://tulsaMapsUser:thereare4ofus!@cluster0.91cna.mongodb.net/LocallyOwned?retryWrites=true&w=majority', { useUnifiedTopology: true });
const app = express();

// Assigning port for Heroku
let port = process.env.PORT || 5000;


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

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html')
});

let collection;

app.listen(port, async () => {
  try {
    await client.connect();
    collection = client.db('LocallyOwned').collection('Downtown');
    console.info(`App is listening on port http://localhost:${port}`);
  } catch (e) {
    console.error(e);
  }
});


// Searching mongodb database
app.get('/search', async (request, response) => {
  try {
    input = request.query.search
    let result = await collection.aggregate([
      {
        "$search": {
// creating an aggregation pipeline with a single search stage
        "index": 'default',
          "text": {
            "query": `${input}`,
// using the user-provided data as the query
            "path": {
               'wildcard': '*'
// using a wildcard as the path field to search in all fields
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
