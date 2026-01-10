// Seleciona os elementos que a função de loading precisa
const loader = document.getElementById('loader');
const feedContainer = document.getElementById('feed-container'); 

export function toggleLoading(visivel) {
    if (visivel) {
        loader.style.display = 'block';
        // garantir que o feed fique transparente enquanto carrega.
        feedContainer.style.opacity = '0.5'; 
    } else {
        loader.style.display = 'none';  
        feedContainer.style.opacity = '1';
    }
}