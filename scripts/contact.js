/*Geolocation*/
//If geolocation services are available
if(navigator.geolocation){
    //Get current position
    navigator.geolocation.getCurrentPosition(function(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        //Initialize the map with geolocation of the user
        var map = L.map('map', {
            center: [latitude, longitude],
            zoom: 12
        });

        //Apply layer map
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        //Define initial marker
        var initial = L.icon({
            iconUrl: '../assets/img/map/leaf-green.png',
            shadowUrl: '../assets/img/map/leaf-shadow.png',

            iconSize:     [38, 95], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

        //Define final marker
        var final = L.icon({
            iconUrl: '../assets/img/map/leaf-red.png',
            shadowUrl: '../assets/img/map/leaf-shadow.png',

            iconSize:     [38, 95], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

        //Define intermediate marker
        var track = L.icon({
            iconUrl: '../assets/img/map/leaf-orange.png',
            shadowUrl: '../assets/img/map/leaf-shadow.png',

            iconSize:     [38, 95], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

        //Routing map
        var control = L.Routing.control({
            waypoints: [
                L.latLng(latitude, longitude),
                L.latLng(41.11708, 1.25510) //Coords geolocation Manao Coffee
            ],
            language: 'en',
            createMarker: function(i, wp, nWps) {
                switch (i) {
                    case 0:
                    return L.marker(wp.latLng, {
                        icon: initial,
                        draggable: true
                    }).bindPopup("<b>" + "Starting 🚗" + "</b>");
                    case nWps - 1:
                    return L.marker(wp.latLng, {
                        icon: final,
                        draggable: true
                    }).bindPopup("<b>" + "Destination 😎" + "</b>");
                    default:
                    return L.marker(wp.latLng, {
                        icon: track,
                        draggable: true
                    }).bindPopup("<b>" + "Break 😴" + "</b>");
                }
            }
        }).addTo(map);
    });
}else{
    var map = L.map('map', {
        center: [37.17059, -3.60552],
        zoom: 17
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
}