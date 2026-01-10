const feedContainer = document.getElementById('feed-container');

//função auxiliar: cria o html de um card
const criarHTMLCard = (comentario) => {
    // ... (mantenha o código do criarHTMLCard igual estava)
    const { name, email, body } = comentario;
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

//função principal
export function renderizarFeed(comentarios) {
    const htmlFinal = comentarios.map(criarHTMLCard).join('');
    feedContainer.innerHTML = htmlFinal;
}

