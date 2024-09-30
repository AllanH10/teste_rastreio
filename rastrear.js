if ('geolocation' in navigator) {
    let map = L.map('map').setView([0, 0], 2); // Inicializa o mapa em uma posição padrão
    let marker = L.marker([0, 0]).addTo(map) // Cria um marcador inicialmente com uma posição padrão
        .bindPopup("<p>Você está aqui</p>")
        .openPopup();

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    navigator.geolocation.watchPosition(function (pos) {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        // Atualiza a vista do mapa para a nova posição
        map.setView([lat, lon], 20);

        // Atualiza a posição do marcador existente
        marker.setLatLng([lat, lon]);

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
