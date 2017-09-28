var map = L.map('map', { zoomControl:false }).setView([37.144229, -3.622781], 14);
map.dragging.disable();
mapLink = 
        '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18,
        }).addTo(map);
var LeafIcon = L.Icon.extend({
		options: {
			iconSize:     [20, 30],/*Estas son las propedades del icono*/
			iconAnchor:   [22, 94],
			popupAnchor:  [-3, -76]
		}
	});

	var marcador = new LeafIcon({iconUrl: 'imagenes/cerveza.png'}); /*creamo la variable marcador que es un nuevo objeto de LeafIcon */

	L.marker([37.1432893, -3.6301321], {icon: marcador}).bindPopup('<p>Cerveceria jamoneria el Asadero</p><p align="center"><img align="center" height="50px" width="50px" src="imagenes/secadero.jpg"</p>').addTo(map); /* Añade el marcador con nombre "icono al mapa,coon las coordenadas que queremos*/

