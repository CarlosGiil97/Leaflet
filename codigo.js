var map = L.map('map', { zoomControl:false }).setView([37.144229, -3.622781], 16);
map.dragging.disable();
mapLink = 
        '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18,
        }).addTo(map);
