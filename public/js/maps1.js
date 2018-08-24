var apiKey = "AIzaSyBLxYdbneHjnVzBy5VSvtXohHFKRaMh8jk";
var placeSearch, autocomplete;
var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
};

var coordinates;
var userLocation;
var queryUrl1;
var map;
var marker;
var options;
var userIcon;
var infoWindow;
var iconImage;
var iconImage2;
var myLatlng;
var content;


// Here would need to search db for stored bathrooms that are within 5 mile radius of this location
//---------------------------DB SEARCH GOES HERE--- GET REQUEST WITH SEARCH QUERY WITH WHERE CLAUSE-------------------
// FAKE data is going below to represent the response from the db
// Include a url to the info page in db and query it here
var bathroomArray = [];

function autocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        { types: ['geocode'] });

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);

    // Get value entered in location search box
    $("#searchBtn").on("click", function () {
        userLocation = $("#autocomplete").val();
        console.log(userLocation);
        // Get the location's coordinates using Google Geolocation
        queryUrl1 = `https://maps.googleapis.com/maps/api/geocode/json?address=${userLocation}&key=${apiKey}`;

        $.ajax({
            url: queryUrl1,
            method: "GET"
        }).then(function (response) {
            coordinates = {
                lat: response.results[0].geometry.location.lat,
                lng: response.results[0].geometry.location.lng
            };
            console.log(coordinates);
            initMap();

            function initMap() {
                // Map options
                options = {
                    zoom: 8,
                    center: coordinates
                }

                // Create new instance of map object from Google API
                map = new google.maps.Map(document.getElementById('map'), options)

                // Set custom icon for user's location
                userIcon = {
                    url: "/images/gottaGo.png",
                    scaledSize: new google.maps.Size(30, 50)
                };

                // Create a marker for user location
                marker = new google.maps.Marker({
                    position: coordinates,
                    map: map,
                    icon: userIcon
                });

                // Function to dynamically add markers for each bathroom
                function addMarker(lat, long, contentName, contentRating) {
                    // Image for map bathroom markers
                    iconImage2 = {
                        url: "/images/pooEmoji.png",
                        scaledSize: new google.maps.Size(35, 35) // scaled size
                    };
                    
                    infoWindow = new google.maps.InfoWindow({
                        disableAutoPan: true
                    });

                    myLatlng = new google.maps.LatLng(parseFloat(lat), parseFloat(long));

                    marker2 = new google.maps.Marker({
                        position: myLatlng,
                        map: map,
                        icon: iconImage2,
                        content: `<b>Name:  </b>${contentName}<br>
                        <b>Rating:  </b>${contentRating}`,
                        // Create pop up window for each bathroom location
                        // Need to go back and add a dynamic variable that will show name and rating from the database
                        noPan: {disableAutoPan: true}
                    });

                    // Add listener to the marker so that when user clicks on it, pop up window comes up
                    // Can I change this to mouse over??
                    marker2.addListener('mouseover', function () {
                        infoWindow.setContent(this.content);
                        infoWindow.open(map, this);
                    });

                    marker2.addListener('mouseout', function () {
                        infoWindow.close(map, this);
                    })

                    marker2.addListener('click', function () {
                        window.location.href = 'http://www.google.com';
                        // marker.url 
                    })
                } // end of addMarker function

            bathroomArray = [
                { id: 1, content: { name: 'bath1', aveRating: 4, pageInfoUrl: '#' }, coords: { lat: 30.025630773317125, lng: -95.51854848861696 } },
                { id: 2, content: { name: 'bath2', aveRating: 1, pageInfoUrl: '#' }, coords: { lat: 30.023512848679754, lng: -95.51979303359987 } },
                { id: 3, content: { name: 'bath3', aveRating: 1, pageInfoUrl: '#' }, coords: { lat: 28.0247249, lng: -95.5464706 } },
                { id: 4, content: { name: 'bath4', aveRating: 2, pageInfoUrl: '#' }, coords: { lat: 30.9247249, lng: -95.3164706 } },
                { id: 5, content: { name: 'bath5', aveRating: 3, pageInfoUrl: '#' }, coords: { lat: 31.0007249, lng: -95.3164706 } }
            ]

            // Create a loop so that the addMarker function is called and executed for each bathroom from the database that
            // is within 10 mile radius of user location
            for (var i = 0; i < bathroomArray.length+1; i++) {
                var resultLat = parseFloat(bathroomArray[i].coords.lat);
                var resultLong = parseFloat(bathroomArray[i].coords.lng);
                var contentName = bathroomArray[i].content.name;
                var contentRating = bathroomArray[i].content.aveRating;
                addMarker(resultLat, resultLong, contentName, contentRating)
            }
        } // end of initMap function
    }) // end of ajax call
        .catch(function (error) {
            console.log(error);
        }); // end of error handling in ajax call
}); // end on click event


function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

    for (var component in componentForm) {
        document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;
    }

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            document.getElementById(addressType).value = val;
        }
    }
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
        });
    };
}
} // end of autocomplete
