       /* let map = L.map('map').setView([0, 0], 19); // Inicializa o mapa em uma posição padrão
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        let marker = L.marker([0, 0]).addTo(map) // Cria um marcador inicialmente com uma posição padrão
            .bindPopup("<p>Você está aqui</p>")
            .openPopup();*/

        


/*if ('geolocation' in navigator) {
    

    navigator.geolocation.watchPosition(function (pos) {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        

        // Atualiza a vista do mapa para a nova posição
        map.setView([lat, lon], 20);

        // Atualiza a posição do marcador existente
        //marker.setLatLng([lat, lon]);

        // Criar rota (opcional, se precisar)
        controleRota = L.Routing.control({
            waypoints: [
                L.latLng(lat, lon),
                L.latLng(-1.4560646164723035, -48.501267232480984)
            ]
        }).addTo(map);*/

        /*L.Routing.control({
            waypoints: [
            L.latLng(pos.coords.latitude, pos.coords.longitude),
            L.latLng(-1.4560646164723035, -48.501267232480984)
            ]
        }).addTo(map);*/

        



        //var newLat = controleRota.options.waypoints[0].lat+0.01;
        //var newLng = controleRota.options.waypoints[0].lng+0.01;
        /*setTimeout(function () {
        controleRota.options.waypoints=[
            L.latLng(newLat, newLng),
            controleRota.options.waypoints[1]
        ];
        }, 10000);*/

 /*       setInterval(function () {
            var newWaypoint = controleRota.getWaypoints()[0].latLng;
            var newLat = newWaypoint.lat;
            var newLng = newWaypoint.lng;
            controleRota.setWaypoints([
               L.latLng(newLat, newLng),
               controleRota.options.waypoints[1]
             ]);
        }, 10000);



    }, function () {
        alert("Não foi possível obter sua localização");
        map.setView([0, 0], 19);
    });
} else {
    alert("Geolocalização não é suportada pelo seu navegador");
}*/


/*routingControl = L.Routing.control({
    waypoints: [
        L.latLng(43.12, 11.99),
        L.latLng(43.37, 12.08)
    ]
    /*createMarker: function() { return null; },
    routeWhileDragging: false,
    draggableWaypoints: false,
    reverseWaypoints: false,
    fitSelectedRoutes: true,
    addWaypoints: false*/
//}).addTo(OSM_Map);//

/*let map = L.map('map').setView([0, 0], 19); // Inicializa o mapa em uma posição padrão
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    let marker = L.marker([0, 0]).addTo(map) // Cria um marcador inicialmente com uma posição padrão
        .bindPopup("<p>Você está aqui</p>")
        .openPopup();*/


if('geolocation' in navigator){

   

    var watchID = navigator.geolocation.watchPosition(function(position){
        //do_something(position.coords.latitude, position.coords.longitude);
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;

        let map = L.map('map').setView([0,0], 19);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        controleRota = L.Routing.control({
            waypoints:[
                L.latLng(lat, lon),
                L.latLng(-1.4560646164723035, -48.501267232480984)
            ]

        }).on('routesfound',function(e){
            e.routes[0].coordinates.forEach(function(coord, index){
                setTimeout(function(){
                    marker.setLatLng([coord.lat,coord.lon])
                },100 * index)
            })
        }).addTo(map)
        
        
        let marker = L.marker([lat, lon]).addTo(map) // Cria um marcador inicialmente com uma posição padrão
            .bindPopup("<p>Você está aqui</p>")
            .openPopup();

    }, function() {
        let map = L.map('map').setView([0, 0], 19); // Inicializa o mapa em uma posição padrão
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        let marker = L.marker([-1.4636558451642132, -48.505248617139024]).addTo(map) // Cria um marcador inicialmente com uma posição padrão
            .bindPopup("<p>Mangal das Garças</p>")
            .openPopup();
        
    } )

}


