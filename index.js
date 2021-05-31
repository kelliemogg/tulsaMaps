let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.1516, lng: 95.9885 },
    zoom: 8,
  });
}
