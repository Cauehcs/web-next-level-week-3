const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
};

const map = L.map('mapid', options).setView([-8.1390384,-34.9299734], 16);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

const icon = L.icon({
    iconUrl: "./public/src/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [175,8]
});

L
.marker([-8.1390384,-34.9299734], { icon })
.addTo(map);

// Image Gallery

function selectImage(event) {
    const button = event.currentTarget;

    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removeActiveClass);

    function removeActiveClass(button) {
        button.classList.remove("active");
    }
    
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    imageContainer.src = image.src;

    button.classList.add("active");
}
