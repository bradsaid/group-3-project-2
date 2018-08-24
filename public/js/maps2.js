// Get coordinates from maps1.js
// var userLocation = require('/maps1.js');
var userLocation = require('/maps1.js');
 
console.log(userLocation);
    // Here would need to search db for stored bathrooms that are within 5 mile radius of this location
    //---------------------------DB SEARCH GOES HERE--- GET REQUEST WITH SEARCH QUERY WITH WHERE CLAUSE-------------------
// FAKE data is going below to represent the response from the db
// Include a url to the info page in db and query it here
var bathroomArray = [
    {id: 1, content: {name: 'bath1', aveRating: 4, pageInfoUrl: '#'}, coords: {lat: 30.025630773317125, lng: -95.51854848861696}},
    {id: 2, content: {name: 'bath2', aveRating: 1, pageInfoUrl: '#'}, coords: {lat: 30.023512848679754, lng: -95.51979303359987}},
    {id: 3, content: {name: 'bath3', aveRating: 1, pageInfoUrl: '#'}, coords: {lat: 28.0247249, lng: -95.5464706}},
    {id: 4, content: {name: 'bath4', aveRating: 2, pageInfoUrl: '#'}, coords: {lat: 30.9247249, lng: -95.3164706}},
    {id: 5, content: {name: 'bath5', aveRating: 3, pageInfoUrl: '#'}, coords: {lat: 31.0007249, lng: -95.3164706}}
]


function initMap() {
    // Map options
    var options = {
        zoom: 8,
        center: userLocation
    }
    
    // Create new instance of map object from Google API
    var map = new google.maps.Map(document.getElementById('map'), options)
    
    // Set custom icon for user's location
    var userIcon = {
        url: "/images/gottaGo.png",
        scaledSize: new google.maps.Size(30,50)
    };
    
    // Create a marker for user location
    var marker = new google.maps.Marker({
        position: userLocation,
        map: map,
        icon: userIcon
    });

    // Create a loop so that the addMarker function is called and executed for each bathroom from the database that
    // is within 10 mile radius of user location
    for (var i = 0; i < bathroomArray.length; i++) {
        var resultLat = parseFloat(bathroomArray[i].coords.lat);
        var resultLong = parseFloat(bathroomArray[i].coords.lng);
        var contentName = bathroomArray[i].content.name;
        var contentRating = bathroomArray[i].content.aveRating;
        addMarker(resultLat, resultLong, contentName, contentRating)
        console.log(resultLat);
        console.log(resultLong);
    }
    
    // Function to dynamically add markers for each bathroom
    function addMarker(lat, long, contentName, contentRating) {
        // Image for map bathroom markers
        var iconImage = {
            url: "/images/pooEmoji.png",
            scaledSize: new google.maps.Size(35, 35) // scaled size
        };
        var myLatlng = new google.maps.LatLng(parseFloat(lat),parseFloat(long));
        var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                icon: iconImage,
            });

            // Only create pop up window if bathroom contains rating and name info
            if(contentName || contentRating) {
                // Create pop up window for each bathroom location
                // Need to go back and add a dynamic variable that will show name and rating from the database
                var infoWindow = new google.maps.InfoWindow({
                    content: `<b>Name:  </b>${contentName}<br>
                    <b>Rating:  </b>${contentRating}`
                });

                // Add listener to the marker so that when user clicks on it, pop up window comes up
                // Can I change this to mouse over??
                marker.addListener('mouseover', function() {
                    infoWindow.open(map, marker);
                });

                marker.addListener('mouseout', function() {
                    infoWindow.close(map, marker);
                })

                marker.addListener('click', function() {
                    window.location.href = 'http://www.google.com';
                    // marker.url 
                })

            

        }
    }
}

