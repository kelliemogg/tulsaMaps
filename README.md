# tulsaMaps

## Description
Our web application, tulsaMaps, is a map containing locally owned businesses near the downtown Tulsa area. We have provided a search query that takes key words and finds related businesses through our NoSQL MongoDB database. The places pulled from the database originally come from Google Places API. This project is still in development.

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
![image]
(https://user-images.githubusercontent.com/61027706/121940522-d06fe980-cd13-11eb-81a2-16abb53149f2.png)

## Axios.get Method (to render markers)
![image]
(https://user-images.githubusercontent.com/61027706/121941305-b682d680-cd14-11eb-9a45-ebcea3b80ddd.png)
![image]
(https://user-images.githubusercontent.com/61027706/121941514-ffd32600-cd14-11eb-8420-28ff3003337f.png)

## Notes
#### Full-text Search
- User input must be spelled correctly and can be either a keyword (coffee, food, gym, etc.) or a business name itself
- User clicks the search button after entering a keyword or business into the search bar and this will prompt the markers
- Once a marker is clicked on by a user, the information window will then be displayed
- Fuzzy search is in progress
- Autocomplete search is in progress
