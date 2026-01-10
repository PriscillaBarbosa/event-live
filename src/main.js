import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/main.css';
import { buscarComentarios } from './services/api.js';
import { renderizarFeed } from './components/CommentCard.js';
import { toggleLoading } from './components/Loader.js';

async function iniciarMural() {
    console.log("Iniciando mural de comentários...");

    //1.avisa o usuário que está carregando
    toggleLoading(true);

    //2. busca os dados (assync/await)
    const comentarios = await buscarComentarios();

    //3. renderiza os comentários na tela
    renderizarFeed(comentarios);

    //4. esconde o carregando   
    toggleLoading(false);
}

//Botão de atualizar manual 
document.getElementById('btn-refresh').addEventListener('click', iniciarMural);

//Inicia o mural ao abrir a página
