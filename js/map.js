
var map = L.map('map').setView([10.4869, -66.5287], 14); // Comuna Ecosocialista Valle Arriba 

var osmBase = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="www.openstreetmap.org/copyright">OpenStreetMap</a> contributors Long Art Digital'
}).addTo(map);



    let myMap = L.map('myMap').setView([10.4757721, -66.5309073], 16)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { //Fondo del mapa
      maxZoom: 60, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors - Long Art Digital',

    }).addTo(myMap);

    let iconMarker = L.icon({ //Agrega nuestro marcador
        iconUrl: 'img/marker.png',
        iconSize: [35, 60],
        iconAnchor: [30, 60]
    })





 







