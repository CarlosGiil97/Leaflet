var map = L.map('map', { zoomControl:false }).setView([37.144229, -3.622781], 15);
map.dragging.disable();
map.scrollWheelZoom.disable();
mapLink =
        '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18,
        }).addTo(map);

var restaurante = L.icon({
    iconUrl: 'restaurante.png',
    iconSize:     [20, 20], // size of the icon
    iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
});


L.marker([37.141217, -3.627584], {icon: restaurante}).bindPopup('Pizzeria Voy Volando (4,2)').addTo(map);
L.marker([37.140002, -3.628696], {icon: restaurante}).bindPopup('Jinou Restaurante (4,0)').addTo(map);
L.marker([37.141878, -3.619252], {icon: restaurante}).bindPopup('La Abuela Pepa (4,2)').addTo(map);
L.marker([37.142550, -3.620231], {icon: restaurante}).bindPopup('Bar los Pepes (3,9)').addTo(map);
L.marker([37.139192, -3.623105], {icon: restaurante}).bindPopup('Asadero Don Pollo (4,2)').addTo(map);

