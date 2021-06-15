# Tulsa Maps

## Description
Hi there! Thanks for stopping by and checking out our project page for Tulsa Maps.  

Our web application, Tulsa Maps, is a web mapping platform featuring locally owned business in the Tulsa area. We have provided a search query that takes key words and finds related businesses through our NoSQL MongoDB database. The places pulled from the database originally come from Google Places API. This project is still in development, and as of June 2020, our focus has primarily been the downtown Tulsa area.  

We as a group (please see Authors section) want to bring awareness to local businesses as they are often overlooked by bigger franchises. This project was based on the sole fact that localizing the Oklahoma economy would be beneficial to everyone and we feel passionate about giving the world an easily accessible map with a plethora of places to look at. You might be surprised by the amount of places you come across just within downtown Tulsa alone.  

To utilize our localized map, all our application needs to gather up some suggestions for the user is a quick keyword (or even specific business) in the search bar and then a click of the search button to the right of the search bar. This will populate many places straight from our database.  

We mostly used JavaScript to build this application, along with CSS and HTML for our front-end work, and Node.js to add a real-time experience for the user.

## Languages
HTML, CSS, Node.js, JavaScript

## Technologies Used
MongoDB database, Heroku hosting platform

## Installation
To set up and install `express` web-framework, use `npm init` and `npm install express --save`

## **Repository Contents by File**
#### /tulsaMaps/app.js
- The main file that contains the connection string, static files, and the search GET request

#### /tulsaMaps/public/js/index.js
- Adds the search bar, markers, and displays the information window when the user clicks a marker

#### /tulsaMaps/public/css/styles.css
- Contains the front-end styles of our application

#### /tulsaMaps/views/home.html
- All HTML for this application can be found in this file

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