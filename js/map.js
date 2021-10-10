
var map = L.map('map').setView([10.4869, -66.5287], 14); // Comuna Ecosocialista Valle Arriba 

var osmBase = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="www.openstreetmap.org/copyright">OpenStreetMap</a> contributors Long Art Digital'
}).addTo(map);



//-------------SELECCIONAR CONJUNTO COMUNAL-----------------------------------------

document.getElementById('select-location').addEventListener('change', function(e) {
  console.log(e.target.value)
  let coords = e.target.value.split(",");
  map.flyTo(coords, 18);
})




 







