const feedContainer = document.getElementById('feed-container');
const loader = document.getElementById('loader');

//função auxiliar: cria o html de um card
const criarHTMLCard = (comentario) => {
    //extraindo variáveis limpas do objeto
    const { name, email, body } = comentario;

    //gerador de avatar aleatório baseado no nome
    const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=64`;

    return `
    <article class="card">
        <div class="card-header">
            <img class="avatar" src="${avatar}" alt="Avatar">
            <div>
                <h3>${email.split('@')[0]}</h3>
                <span>Participante</span>
            </div>
        </div>
            <p>${body}</p>
    </article> `;

};

//função principal: recebe a lista e joga na tela
export function renderizarFeed(comentarios) {
    //o map transforma o objeto em html
    const htmlFinal = comentarios.map(criarHTMLCard).join('');

    //joga o html na tela
    feedContainer.innerHTML = htmlFinal;
}

//Controla se o aviso "carregado" aparece ou não
export function toggleLoading(visivel) {
    if (visivel) {
        loader.style.display = 'block';
    } else {
        loader.style.display = 'none';  
        feedContainer.style.opacity = '1';
    }
}