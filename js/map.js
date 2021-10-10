var map = L.map('map').setView([10.4869, -66.5287], 14); // Comuna Ecosocialista Valle Arriba 

var osmBase = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="www.openstreetmap.org/copyright">OpenStreetMap</a> contributors Long Art Digital'
}).addTo(map);


  //-----------MARCADOR INDICADOR-------------------------------------------
    let iconMarker = L.icon({ //Agrega nuestro marcador
        iconUrl: 'assets/marker.png',
        iconSize: [35, 60],
        iconAnchor: [30, 60]
    })

let marker2 = L.marker([10.4769721, -66.5322674], { icon: iconMarker }).addTo(Map)
//------------------------------------------------------

//-------------SELECCIONAR CONJUNTO COMUNAL-----------------------------------------

document.getElementById('select-location').addEventListener('change', function(e) {
  console.log(e.target.value)
  let coords = e.target.value.split(",");
  map.flyTo(coords, 18);
})
//------------------------------------------------------



 







