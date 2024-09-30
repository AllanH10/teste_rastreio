
/*var lat = document.getElementById('latitude');
var long = document.getElementById('longitude');
var button = document.getElementById('botao');*/

// function success(pos){
    //console.log(pos.coords.latitude, pos.coords.longitude);

    // centralizar mapa
//     var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 20);
    
//     if (map === undefined){
//         map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 20);
//     } else{
//         map.remove();
//         map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 20);
//     }


//     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 19,
//         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//     }).addTo(map);

//     L.Routing.control({
//         waypoints: [
//         L.latLng(pos.coords.latitude, pos.coords.longitude),
//         L.latLng(-1.4560646164723035, -48.501267232480984)
//         ]
//     }).addTo(map);

//     // criar e apontar icone do local
//     var marker = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map);
//     marker.bindPopup("<p>Você está aqui</p>").openPopup();

   
// }



// navigator.geolocation.getCurrentPosition(success);


if ('geolocation' in navigator) {
    let map = L.map('map').setView([0, 0], 2); // Inicializa o mapa em uma posição padrão
    let marker; // Declare o marcador fora da função para poder atualizá-lo

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    navigator.geolocation.watchPosition(function (pos) {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        // Atualiza a vista do mapa para a nova posição
        map.setView([lat, lon], 20);

        // Se o marcador ainda não existir, cria-o
        if (!marker) {
            marker = L.marker([lat, lon]).addTo(map)
                .bindPopup("<p>Você está aqui</p>")
                .openPopup();
        } else {
            // Caso o marcador já exista, atualiza sua posição
            marker.setLatLng([lat, lon]);
        }

        // Criar rota (opcional, se precisar)
        L.Routing.control({
            waypoints: [
                L.latLng(lat, lon),
                L.latLng(-1.4560646164723035, -48.501267232480984)
            ]
        }).addTo(map);

    }, function () {
        alert("Não foi possível obter sua localização");
        map.setView([0, 0], 19);
    });
} else {
    alert("Geolocalização não é suportada pelo seu navegador");
}