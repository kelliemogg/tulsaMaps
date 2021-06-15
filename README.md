# tulsaMaps

## Description
Hi there! Thanks for stopping by and checking out our project page for tulsaMaps.
Our web application, tulsaMaps, is a map containing locally owned businesses near the downtown Tulsa area. We have provided a search query that takes key words and finds related businesses through our NoSQL MongoDB database. The places pulled from the database originally come from Google Places API. This project is still in development.
We as a group (please see Authors section) want to bring awareness to local businesses as they are often overlooked by bigger franchises. This project was based on the sole fact that localizing the Oklahoma economy would be beneficial to everyone and we feel passionate about giving the world an easily accessible map with a plethora of places to look at. You might be surprised by the amount of places you come across just within downtown Tulsa alone.
To utilize our localized map, all our application needs to gather up some suggestions for the user is a quick keyword (or even specific business) in the search bar and then a click of the search button to the right of the search bar. This will populate many places straight from our database.
We mostly used JavaScript to build this application, along with CSS and HTML for our front-end work, and Node.js to add a real-time experience for the user.

## Languages
HTML, CSS, Node.js, JavaScript

## Technologies Used
MongoDB database, Heroku hosting platform

## General Use
1. Clone this repository.
2. Once the repository is cloned, run the command as follows:
``` bash
node app.js
```
3. Locate the browser and run **localhost:5000**

## Installation
Using npm:
``` bash
npm install axios
```
``` bash
npm install express --save
```

## **Repository Contents by File**
#### /tulsaMaps/app.js
- The main file that contains the connection string, static files, and the search GET request

#### /tulsaMaps/public/js/index.js
- Adds the search bar, markers, and displays the information window when the user clicks a marker

#### /tulsaMaps/public/css/styles.css
- Contains the front-end styles of our application

#### /tulsaMaps/views/home.html
- All HTML for this application can be found in this file

## GET Request for the Search Engine
```
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
```

## Axios.get Method (to render markers)
```
    const searchBar = document.getElementById('searchBar');
    axios.get(`https://tulsamaps.herokuapp.com/search?search=${searchBar.value}`)
      .then(function (response) {
        // console.log(response);
        let marker;
        var infowindow = new google.maps.InfoWindow({
          maxWidth: 240,
        });
        for (x = 0; x < response.data.length; x++) {
          currentPlace = response.data[x];
          currentCoords = currentPlace.googlegeoJSONcoordinates.coordinates;
          console.log(currentCoords);
          currentLat = currentCoords[1];
          currentLon = currentCoords[0];
          coords = { lat: currentLat, lng: currentLon };
          marker = new google.maps.Marker({
            position: coords,
            map: map,
            icon: {                             
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"                           }
          });
        google.maps.event.addListener(marker, 'click', (function(marker, x) {
          return function() {
            //Filter out the response data. Get name, address, website of each Place
            Name = JSON.stringify(response.data[x].Name);
            Address = JSON.stringify(response.data[x].googlePlaceInfo.formatted_address);
            Website = JSON.stringify(response.data[x].googlePlaceInfo.website);
            const contentString = 
              "<div> <b>" + Name +"</b>" + "<br>" +
              "<b>Address:</b>" + Address + "<br>" +
              "<a href=" + Website + ">" + "<b>" + Website + "</b>" + "</a>" +
              "</div>";
            // infowindow.setContent(JSON.stringify(response.data[x]));
            infowindow.setContent(contentString);
            infowindow.open(map, marker);
            // console.log(response.data[x])
          }
          })(marker, x));
        }
```

## Notes
#### Full-text Search
- User input must be spelled correctly and can be either a keyword (coffee, food, gym, etc.) or a business name itself
- User clicks the search button after entering a keyword or business into the search bar and this will prompt the markers
- Once a marker is clicked on by a user, the information window will then be displayed
- Fuzzy search is in progress
- Autocomplete search is in progress

## Authors
- Jasmine Choi
- Allen Nicholson
- Kellie Mogg
- Lauren Dobratz