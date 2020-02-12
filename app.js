function initMap() {
  // "Map Options/GeographicalArea"
  var options = {
    zoom: 8,
    center: { lat: 23.8103, lng: -90.4125 }
  };
  // New Map
  var map = new google.maps.Map(document.getElementById("map"), options);
  var marker = new google.maps.Marker({
    postion: { lat: 23.7106, lng: -90.4349 },
    map: map
  });
}
