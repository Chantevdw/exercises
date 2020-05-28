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
    console.log("111111")

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

