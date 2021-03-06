let map;
// Loading map for google maps API request
// Blocks default businesses loading on map
function initAutocomplete () {
  const map = new google.maps.Map(document.getElementById('map'), {
    // Center map on Tulsa consisting mmainly of downtown Tulsa which is where
    // most of the businesses are located from our MongoDB database
    center: { lat: 36.1516, lng: -95.9885 },
    zoom: 15,
    mapTypeId: 'roadmap'
  });
  const styles = {
    hide: [
      {
        featureType: 'poi.business',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'transit',
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }]
      }
    ]
  };

  map.setOptions({ styles: styles.hide });
}


// After search is clicked the map is reloaded with the search results marked
document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('click').addEventListener('click', function (event) {
    const tulsaCenter = { lat: 36.15839520000001, lng: -95.9946482 };
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: tulsaCenter
    });
    const styles = {
    hide: [
      {
        featureType: 'poi.business',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'transit',
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }]
      }
    ]
  };

  map.setOptions({ styles: styles.hide });
    // storing the id of user input entered in the search bar
    const searchBar = document.getElementById('searchBar');
// axios GET request for markers and information windows to display details
    axios.get(`https://tulsamaps.herokuapp.com/search?search=${searchBar.value}`)
      .then(function (response) {
        let marker;
        var infowindow = new google.maps.InfoWindow({
          maxWidth: 240,
        });
        for (x = 0; x < response.data.length; x++) {
          currentPlace = response.data[x];
          // currentCoords gets the JSON coordinates that are returned from the
          // database and is used to create the marker on the map
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
            infowindow.setContent(contentString);
            infowindow.open(map, marker);
          }
          })(marker, x));
        }
      });
  });
});
