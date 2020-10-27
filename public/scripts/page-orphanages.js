const map = L.map('mapid').setView([-8.1390384,-34.9299734], 15);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

const icon = L.icon({
    iconUrl: "./public/src/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [175,8]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeigth: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src"./public/images/arrow-white.svg"></a>')

L
.marker([-8.1390384,-34.9299734], { icon })
.addTo(map)
.bindPopup(popup)