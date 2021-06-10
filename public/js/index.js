let map;

// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function initAutocomplete () {
  const map = new google.maps.Map(document.getElementById('map'), {
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

  // const uluru = { lat: 36.15839520000001, lng: -95.9946482 };
  // const marker = new google.maps.Marker({
  //   position: uluru,
  //   map: map,
  // });
}

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('click').addEventListener('click', function (event) {
    // let data = fetch(`http://localhost:5500/search?search=${request.term}`)
    //     .then(results => results.json())
    // response(data);
    // console.log(results)
    // let map = document.getElementById('map')
    const uluru = { lat: 36.15839520000001, lng: -95.9946482 };
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
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
    const searchBar = document.getElementById('searchBar');
    axios.get(`https://tulsamaps.herokuapp.com/search?search=${searchBar.value}`)
      .then(function (response) {
        console.log(response);
        let marker;
        for (x = 0; x < response.data.length; x++) {
          currentPlace = response.data[x];
          currentCoords = currentPlace.googlegeoJSONcoordinates.coordinates;
          console.log(currentCoords);
          currentLat = currentCoords[1];
          currentLon = currentCoords[0];
          coords = { lat: currentLat, lng: currentLon };
          marker = new google.maps.Marker({
            position: coords,
            map: map
          });
        }
      });
  });
});
