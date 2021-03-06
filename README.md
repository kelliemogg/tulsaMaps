# Tulsa Maps

![Image of TulsaMap](https://i.imgur.com/pZYqwlK.png)

## Description
Our web application, Tulsa Maps, is a web mapping platform featuring locally owned businesses in the Tulsa area. We have provided a search query that takes key words and finds related businesses through our NoSQL MongoDB database. The places pulled from our database originally come from Google Places API. This project is still in development, and as of June 2021, our focus has primarily been the downtown Tulsa area.  

We as a group (please see Authors section) want to bring awareness to local businesses as they are often overlooked by bigger franchises. This project was based on the sole fact that localizing the Oklahoma economy would be beneficial to everyone and we feel passionate about giving our community an easily accessible map with a plethora of places to find. You might be surprised by the amount of places you come across just within downtown Tulsa alone.  

To utilize our localized map, all our application needs to gather up some suggestions for the user is a quick keyword (or even specific business) in the search bar and then a click of the search button to the right of the search bar. This will populate relevant businesses straight from our database.  

We mostly used JavaScript to build this application, along with CSS and HTML for our front-end work, and Node.js to add a real-time experience for the user. 

## Goals
To further this project, we plan on adding autocomplete and a feature that corrects misspelled words on the search bar. We also plan on creating a way to search for a business by category (E.g. Black-owned businesses, women-owned businesses, etc). Another goal is to display more information in the info window and/or display more infomation at the bottom of the page underneath our map for easier reading.  

Additionally, we have some goals for customizing the web mapping experience based on big events happening in our community throughout the year. Imagine having gps access to find where your favorite artists and makers are temporarily set up at an arts fair (like Mayfest here in Tulsa), or being able to easily check out the bicycle race routes when getting prepped for a rowdy weekend at Tulsa Tough. We have so many stretch goals that will be great additions to our application, so stay tuned!

View our site here --> [Tulsa Maps.](http://tulsamaps.herokuapp.com/)

Check out our showcase video:
[Tulsa Maps - A Local Web Mapping Platform](https://youtu.be/axqKgtl8WJE)

Or read a little more about this project, [Our Journey Making Tulsa Maps](https://medium.com/@kellie_mogg/my-journey-making-tulsa-maps-ea528a006502).

## Packages / Prerequisites
- HTML
- CSS
- JavaScript
- Node.js
- Bootstrap

## Technologies
- MongoDB database
- Heroku 

## Installation
To set up and install `express` web-framework, use `npm init` and `npm install express --save`

## Usage
```node app.js```

## Repository Contents by File
`/tulsaMaps/app.js`
- The main file that contains the connection string, static files, and the search GET request

`/tulsaMaps/public/js/index.js`
- Adds the search bar, markers, and displays the information window when the user clicks a marker

`/tulsaMaps/public/css/styles.css`
- Contains the front-end styles of our application

`/tulsaMaps/views/home.html`
- All HTML for our landing page can be found in this file

## Contributing
#### Full-text Search
- User input must be spelled correctly and can be either a keyword (coffee, food, gym, etc.) or a specific business name
- User clicks the search button after entering a keyword or business into the search bar and this will prompt the markers
- Once a marker is clicked on by a user, the information window will then be displayed
- Fuzzy search is in progress
- Autocomplete search is in progress

## License
Node.js is available under the [MIT license](https://opensource.org/licenses/MIT)

## Challenges
Some of the challenges in this project were:
- Finding a way to save the data of only local businesses from Google Places API in a way that was time efficient.
- Learning how to make Heroku and MongoDB play nice.
- Returning the correct list of data when the user clicks places on the map.
- Understanding the structure of node.js and MongoDB to set up the database and import the client via MongoDB Altas.
- Connecting the search bar to the data in our MongoDB database.

## Authors
##### - Jasmine Choi <a href="https://github.com/jashjchoi">Github</a>
Highly motivated, starting web developer seeking to launch career building web applications and services.
Eager to obtain a position that will expand her learning and build upon her developer skills.

##### - Allen Nicholson <a href="https://github.com/ranicholson">Github</a> | <a href="https://www.linkedin.com/in/allen-nicholson/">LinkedIn</a> | <a href="https://twitter.com/allencodes2020">Twitter</a>
Allen is an amateur software engineer trying to find his way in this strange new world. Everyday he tries to learn a little bit more. Hoping to go pro someday soon.

##### - Kellie Mogg <a href="https://github.com/kelliemogg">Github</a> | <a href="https://www.linkedin.com/in/kelliemogg/">LinkedIn</a> | <a href="https://twitter.com/KellieMogg">Twitter</a>
Kellie is studying to be a Web and XR Developer and has a great passion for supporting a small business ecosystem. She enjoyed working with MongoDB and Google Maps API to help bring this project to fruition.

##### - Lauren Dobratz <a href="https://github.com/laurendobratz00">Github</a> | <a href="https://www.linkedin.com/in/lauren-dobratz-a82a441b7/">LinkedIn</a> | <a href="https://twitter.com/DobratzLauren">Twitter</a>
Lauren is an aspiring software developer focusing on AR/VR. She hopes to bring creativity and out-of-the-box ideas to the table in her future.
