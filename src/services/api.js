export async function buscarComentarios() {

    const url = import.meta.env.VITE_API_URL;

    try {
        //1. O pedido sai (fech) e o código pausa (await) até voltar
        const resposta = await fetch(url);

        //2. Se a API responder erro
        if (!resposta.ok) {
            throw new Error (`Erro ao buscar comentários: ${resposta.status}`);
        }

        //3. O dado chega como texto, e será convertido para json
        const dados = await resposta.json();

        //delay de 1 segundo para simular tempo de resposta do servidor
        await new Promise (resolve => setTimeout (resolve, 1000));

        //4. retorna os dados
        return dados;

    } catch (error) {
        console.error("falha ao buscar comentários:", error);
        return []; // Retorna um array vazio em caso de erro
    }
}