var map = L.map('map').setView([36.65 , -4.33], 12); // Málaga

var osmBase = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
}).addTo(map);

/// ---- Línea  ----
var geojsonFeatureLine = [
  {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -4.388694763183594,
          36.660157049319785
        ],
        [
          -4.375648498535156,
          36.64528344930188
        ],
        [
          -4.357452392578125,
          36.66070786821854
        ],
        [
          -4.3512725830078125,
          36.64528344930188
        ]
      ]
    }
  }
];

function styleLine(feature) {
  return {
    weight: 3.3,
    color: 'orange',
    opacity: 1.0,
    dashArray: '5, 5, 1, 5'
  };
};

var line = new L.geoJson(geojsonFeatureLine, {
  style: styleLine
}).addTo(map);

/// ---- Polígono  ----

var geojsonFeaturePolygon = [
  {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            -4.339256286621094,
            36.660157049319785
          ],
          [
            -4.28192138671875,
            36.66070786821854
          ],
          [
            -4.2826080322265625,
            36.63894752503843
          ],
          [
            -4.304237365722656,
            36.64748712688497
          ],
          [
            -4.319343566894531,
            36.63949849566231
          ],
          [
            -4.34131622314453,
            36.64583437460881
          ],
          [
            -4.339256286621094,
            36.660157049319785
          ]
        ]
      ]
    }
  }
];

function stylePolygon(feature) {
  return {
    weight: 1.3, // grosor de línea
    color: 'green', // color de línea
    opacity: 1.0, // tansparencia de línea
    fillColor: 'red', // color de relleno
    fillOpacity: 1.0 // transparencia de relleno
  };
};

var polygon = new L.geoJson(geojsonFeaturePolygon, {
  style: stylePolygon
}).addTo(map);

var baseMaps = {
  "OSM": osmBase
};

var overlayMaps = {
  "Línea": line,
  "Polígono": polygon
};

L.control.layers(baseMaps, overlayMaps,{
  position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
  collapsed: false // true
}).addTo(map);