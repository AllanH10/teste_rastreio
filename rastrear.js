function success(pos){
    console.log(pos.coords.latitude, pos.coords.longitude);

    // centralizar mapa
    var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 20);
    
    if (map === undefined){
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 20);
    } else{
        map.remove();
        map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 20);
    }


    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // criar e apontar icone do local
    var marker = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map);
    marker.bindPopup("<p>Você está aqui</p>").openPopup();

    L.Routing.control({
        waypoints: [
          L.latLng(pos.coords.latitude, pos.coords.longitude),
          L.latLng(-1.4560646164723035, -48.501267232480984)
        ]
      }).addTo(map);
}




navigator.geolocation.getCurrentPosition(success);