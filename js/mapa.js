// Crear la variable mapa con coordenadas de centro y zoom
let map = L.map('map').setView([10.4869, -66.5287], 14)

// Agregar mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Volar a coordenadas de los sitios de la Lista desplegable
document.getElementById('select-location').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,18);
})


// Agregar mapa base para el Mini Mapa
var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});

// Agregar plugin MiniMap
var minimap = new L.Control.MiniMap(carto_light,
    {
        toggleDisplay: true,
        minimized: false,
        position: "bottomleft"
    }).addTo(map);

// Agregar escala
 new L.control.scale({imperial: false}).addTo(map);

// Configurar PopUp
function popup(feature,layer){
    if(feature.properties && feature.properties.BARRIO){
        layer.bindPopup("<strong>Barrio: </strong>" + feature.properties.BARRIO + "<br/>" + "<strong>Localidad: </strong>" + feature.properties.LOCALIDAD);
    }
}


// Agregar coordenadas para dibujar una polilinea
var coord_camino = [
    [10.488138000, -66.96250400], [10.488002800, -66.926213900], [10.487768800, -66.926210400], [10.487669100, -66.926311800], [10.487616900, -66.926451300]
];

var camino = L.polyline(coord_camino, {
    color: 'red'
}).addTo(map);

//----------------------- Agregar un marcador
var marker_cerro = L.circleMarker(L.latLng(10.494369700, -66.528557900), {
    radius: 6,
    fillColor: "#ff0000",
    color: "blue",
    weight: 2,
    opacity: 1,
    fillOpacity: 0.6,
}).addTo(map);



//------------------------------ Agregar la leyenda
const legend = L.control.Legend({
    position: "bottomright",
    collapsed: false,
    symbolWidth: 24,
    opacity:1,
    column:1,
    legends: [
        {
            label: "Sede Comuna EVA",
            type: "circle",
            radius: 6,
            color: "blue",
            fillColor: "#FFD966",
            fillOpacity: 0.6,
            weight: 2,
            layers: [marker_cerro],
            inactive: false,
        }, {
            label: "Canalización Aguas Negras",
            type: "polyline",
            color: "#FF0000",
            fillColor: "#FF0000",
            weight: 2,
            layers: camino
        },  
        //----{ label: "Barrios", type: "rectangle", color: "#0074f0", fillColor: "#009ff0",  weight: 2, layers: barriosJS,barrios }, 
        //----{  label: "Marcador", type: "image", url: "Leaflet.Legend-master/examples/marker/purple.png" },
        //----{  label: "Linea Punteada",  type: "polyline",  color: "#0000FF",  fillColor: "#0000FF",  dashArray: [5, 5],  weight: 2 }, 
        //----{ label: "Poligono", type: "polygon", sides: 5, color: "#FF0000", weight: 2 }
        ]
}).addTo(map);

// Agregar control para ver los datos al pasar el puntero

var info = L.control();

// Crear un div con una clase info
info.onAdd = function(map){
    this._div = L.DomUtil.create('div','info');
    this.update();
    return this._div;
};

// Agregar el metodo que actualiza el control segun el puntero vaya pasando
info.update = function(props){
    this._div.innerHTML = '<h4>Total Viviendas por Consejo Comunal</h4>' + 
                            (props ? '<b>' + props.BARRIO + '</b><br/>' + props.TOT_VIVIEN + ' viviendas</sup>'
                            : 'Pase el puntero por un Consejo Comunal');
};

info.addTo(map);

// Generar rangos de colores de acuerdo con el atributo o campo TOT_VIVIEN
function getColor(d){
    return  d > 9000 ? '#137fd9' :
            d > 7500 ? '#2196f3' :
            d > 6000 ? '#009846' :
            d > 4500 ? '#48c26c' :
            d > 2500 ? '#e28000' :
            d > 1000 ? '#ff9800' :
            d > 0    ? '#ffc340' :
                       '#0000FF';
}

// Crear la funcion para mostrar la simbologia de acuerdo al campo TOT_VIVIEN

function style(feature){
    return {
        fillColor: getColor(feature.properties.TOT_VIVIEN),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.4
    };
}

// AGregar interaccion del puntero con la capa para resaltar el objeto
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.5
    });

    info.update(layer.feature.properties);
}

// Configurar los cambios de resaltado y zoom de la capa

var barriosJS;

function resetHighlight(e){
    barriosJS.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e){
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer){
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}



// Agregar capa en formato GeoJson
barriosJS = L.geoJson(barrios,{
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);




//-------------AGREGAR UN MARCADOR-----------------------------------------
L.marker([10.4968300, -66.5304963]).addTo(map)
    .bindPopup('Comuna Ecosocialista<br> Valle Arriba.')
    .openPopup();


// Agregar atribucion
map.attributionControl.addAttribution('Municipio Zamora, Miranda &copy; HCL Digital.EPS');