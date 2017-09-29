var map = L.map('map', { zoomControl:false }).setView([37.144229, -3.622781], 15);
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
			iconSize:     [20, 20],/*Estas son las propedades del icono*/
			popupAnchor:  [-3, -76]
		}
	});
var LeafIcon1 = L.Icon.extend({
                options: {
                        iconSize:     [35, 35],/*Estas son las propedades del icono*/
                        popupAnchor:  [-3, -76]
                }
        });

	var marcador = new LeafIcon({iconUrl: 'imagenes/cerveza.png'}); /*creamo la variable marcador que es un nuevo objeto de LeafIcon */
	var metro = new LeafIcon1({iconUrl: 'imagenes/metro.png'});

	L.marker([37.1432893, -3.6301321], {icon: marcador}).bindPopup('<p>Cerveceria jamoneria el Asadero</p><p align="center"><img align="center" height="70px" width="70px" src="imagenes/secadero.jpg"</p>').addTo(map); /* Añade el marcador con nombre "icono al mapa,coon las coordenadas que queremos*/
	L.marker([37.144958,-3.626471], {icon: marcador}).bindPopup('<p>Bar Boulevard 45</p><p align="center"><img align="center" height="70px" width="70px" src="imagenes/45.png"</p>').addTo(map); 
	L.marker([37.1438791,-3.6233805], {icon: marcador}).bindPopup('<p>Meson Bar La Bota</p><p align="center"><img align="center" height="70px" width="70px" src="imagenes/mesonbota.jpg"</p>').addTo(map);
	L.marker([37.137147,-3.628093], {icon: marcador}).bindPopup('<p>Bar Alameda</p><p align="center"><img align="center" height="70px" width="70px" src="imagenes/quinto.jpg"</p>').addTo(map);
	L.marker([37.1432594,-3.6265424], {icon: marcador}).bindPopup('<p>Bar El Rubio</p><p align="center"><img align="center" height="70px" width="70px" src="imagenes/elrubio.jpg"</p>').addTo(map);

	/*Añadir lineas de metro y paradas de buses*/
	L.marker([37.1439416,-3.6140823], {icon: metro}).bindPopup('<p>PARADA SIERRA NEVADA</p><p align="center">').addTo(map);
	L.marker([37.1476162,-3.6209161], {icon: metro}).bindPopup('<p>PARADA FERNANDO DE LOS RIOS</p>').addTo(map);
	L.marker([37.1436151,-3.6275123], {icon: metro}).bindPopup('<p>PARADA ARMILLA</p>').addTo(map);
