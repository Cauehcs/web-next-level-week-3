const map = L.map('mapid').setView([-8.1390384,-34.9299734], 15);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

const icon = L.icon({
    iconUrl: "./public/src/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [175,8]
});

let marker;

map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    marker && map.removeLayer(marker); 

    marker = L.marker([lat,lng], {icon})
        .addTo(map);

});


function OpenOnWeekends(event) {
    const button = event.currentTarget;

    const buttons = document.querySelectorAll(".button-select button");
    buttons.forEach(removeActiveClass);

    function removeActiveClass(button) {
        button.classList.remove("active");
    }

    button.classList.add("active");
}