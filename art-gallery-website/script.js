/* data-text-before

   add this data attribute to any element and it will be populated with
   the innerText of the specified element.  This can be used to create
   custom effects on text elements that require access to the text in
   a psueudo element class.
*/
Array.from(document.querySelectorAll("[data-text-before]")).forEach((el) => {
  el.setAttribute("data-text-before", el.innerText);
});

/* location-map

    add id='location-map' to the element to contain the leaflet map to the gallery.
 */

const coord = [41.481413, -71.31035]; /* Gallery GPS coordinates */

/* create the map object attaching it to the specified id of location-map */
const map = L.map("location-map", {
  center: coord,
  dragging: true,
  zoom: 16,
  zoomControl: true,
});

/* attach a tile layer to the map from which the graphics are pulled during display */
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

/* add a marker at the center coordinate of the map */
const marker = L.marker(coord).addTo(map);
