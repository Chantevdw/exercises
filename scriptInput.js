
document.addEventListener('DOMContentLoaded', function(event) {
    initMap();
}) 

function initMap() {
  console.log("123");
  var myLatLng = {lat: -33.8552281, lng: 18.5078126};
  var yourLatLng = {lat: -34.0218, lng: 18.4764773} 
  //var lat = document.getElementById("latitude").value;
  //var lng = document.getElementById("longitude").value; 

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: myLatLng
  });
  console.log("var map");

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Your marker'
  });
  console.log("456")
}

//function LatLng() {
//  document.getElementById("mapForm").submit();
//}
 