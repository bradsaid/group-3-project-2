function initMap() {
    var centerPoint = $("#start").val();
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var map = new google.maps.Map(document.getElementById("drivingMap"), {
    zoom: 7,
    center: {lat: 30.002380799999997, lng: -95.53510399999999}
  });
  directionsDisplay.setMap(map);

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route(
    {
      origin: "8310 Bon Hill Court",
      destination: "4835 Hillswick Drive",
      travelMode: "DRIVING"
    },
    function(response, status) {
      if (status === "OK") {
        directionsDisplay.setDirections(response);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
}
}
