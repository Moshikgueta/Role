// Configuração do app. No GitHub Pages (github.io) não há servidor, então o app
// roda em modo demonstração. No Worker da Cloudflare ele usa a API de verdade.
window.ROLE_CONFIG = {
  demo: /\.github\.io$/.test(location.hostname),
  // Chave do Google Maps (é pública; proteja no Google Cloud limitando aos endereços do app).
  // Vazio = usa o mapa gratuito do OpenFreeMap.
  googleMapsKey: "",
};
