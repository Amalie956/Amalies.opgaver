//Exercise 1.Using leaflet.js visualise all the ufo sightings in Denmark in 2021
const map = L.map("map").setView([56, 11.6], 6);

const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

//Besvarelse
for( let i = 0; i <ufoSightingsLatLng.length; i++) {
    L.circle([ufoSightingsLatLng[i].lat, ufoSightingsLatLng[i].lng]).addTo(map);
console.log(i);
}

/*
console.log(ufoSightingsLatLng[0]);
console.log(ufoSightingsLatLng[0].lat);
console.log(ufoSightingsLatLng[0].lng);
 */

