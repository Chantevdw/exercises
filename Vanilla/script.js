document.addEventListener('DOMContentLoaded', function(event) {
    initMap();
})

var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var map, infoWindow;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 0, lng: 0},
        zoom: 3
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: position.coords.latitude, lng: position.coords.longitude},
                zoom: 6
            });
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

document.addEventListener('DOMContentLoaded', function(event) {
    addMarker();
})

var center = new google.maps.LatLng(0,0);

var mapOptions = {
    zoom: 3,
    center: center,
};

var map = new google.maps.Map(document.getElementById("map"), mapOptions);

function addMarker() {

    // DOM event listener for the center map form submit
    google.maps.event.addDomListener(document.getElementById('mapForm'), 'submit', function(e) {
        e.preventDefault();

        // Get lat and lng values from input fields
        var lat = document.getElementById('lat').value;
        var lng = document.getElementById('lng').value;

        // Replace input values
        document.getElementById('lat').value = lat;
        document.getElementById('lng').value = lng;

        // Create LatLng object
        var mapCenter = new google.maps.LatLng(lat, lng);

        new google.maps.Marker({

            position: mapCenter,
            title: 'Marker',
            map: map
        });

        // Center map
        map.setCenter(mapCenter);
    });
}

addMarker();

