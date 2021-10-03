//---------------------------------------------------
var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

    let myMap = L.map('myMap').setView([10.4869, -66.5287], 14)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { //Fondo del mapa
    	maxZoom: 90, attribution: '&copy; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>  contributors - Long Art Digital',

    }).addTo(myMap);

//---------------------------------------------------
//Agrega nuestro marcador
    let iconMarker = L.icon({ 
        iconUrl: 'assets/marker.png',
        iconSize: [35, 60],
        iconAnchor: [30, 60]
    })

    let marker2 = L.marker([10.4819, -66.5297], { icon: iconMarker }).addTo(myMap)
L.control.scale().addTo(myMap); 








