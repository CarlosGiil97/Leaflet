var map = L.map('map', { zoomControl:false }).setView([37.144229, -3.622781], 15);
map.dragging.disable();
map.scrollWheelZoom.disable();
map.doubleClickZoom.disable();
mapLink =
        '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18,
        }).addTo(map);

var restaurante = L.icon({
    iconUrl: 'imagenes/restaurante.png',
    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
});
/* Funciones de las capas */
function OtroMapa(){
	/* Esta es la capa de pintura */
	var tiles = new
		L.tileLayer(
			'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png')
			.addTo(map);
}
function MapaPrincipal(){
	/* Esta es la capa de carreteras */
	L.tileLayer(
        	'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        	attribution: '&copy; ' + mapLink + ' Contributors',
        	maxZoom: 18,
        	}).addTo(map);
}

/*	      */

L.marker([37.141217, -3.627584], {icon: restaurante}).bindPopup("Pizzeria Voy Volando<img width='50%' src='imagenes/voy.jpg'></img><br/>15€<br/>(4,2)").addTo(map);
L.marker([37.140002, -3.628696], {icon: restaurante}).bindPopup("Jinou Restaurante <img width='50%' src='imagenes/jinou.jpg'></img><br/>15€<br/>(4,0)").addTo(map);
L.marker([37.141878, -3.619252], {icon: restaurante}).bindPopup("La Abuela Pepa <img width='50%' src='imagenes/abuela.jpg'></img><br/>10-50€<br/>(4,2)").addTo(map);
L.marker([37.142550, -3.620231], {icon: restaurante}).bindPopup("Bar los Pepes <img width='50%' src='imagenes/pepes.jpg'></img><br/><br/>(3,9)").addTo(map);
L.marker([37.139192, -3.623105], {icon: restaurante}).bindPopup("Asadero Don Pollo <img width='50%' src='imagenes/don.jpg'></img><br/>8€<br/>(4,2)").addTo(map);
