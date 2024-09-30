if ('geolocation' in navigator) {
    let map = L.map('map').setView([0, 0], 2); // Inicializa o mapa em uma posição padrão
    let marker = L.marker([0, 0]).addTo(map) // Cria o marcador inicialmente em uma posição padrão

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
        marker.setLatLng([lat, lon]).bindPopup("<p>Você está aqui</p>").openPopup();
        
    }, function () {
        alert("Não foi possível obter sua localização");
        map.setView([0, 0], 2);
    });
} else {
    alert("Geolocalização não é suportada pelo seu navegador");
}
