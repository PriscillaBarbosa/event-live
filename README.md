# EventLive 💬

O **EventLive** é uma aplicação web de simulação de um mural de feedbacks em tempo real para eventos. O projeto consome uma API externa para exibir comentários de participantes, com foco em performance e feedback visual de carregamento.

Este projeto foi desenvolvido para praticar o fluxo de dados assíncrono moderno no JavaScript e arquitetura de software modular.

## 🚀 Tecnologias e Conceitos

- **Vite:** Build tool para desenvolvimento rápido.
- **JavaScript (ES6+):**
  - **Async/Await:** Para tratamento de promessas e requisições HTTP.
  - **Fetch API:** Para consumo de dados externos.
  - **Map:** Para renderização de listas dinâmicas.
- **Arquitetura Modular:** Separação de responsabilidades em camadas (`services`, `ui`, `main`).
- **Variáveis de Ambiente (.env):** Para segurança e configuração de URLs de API.
- **CSS3 Moderno:** Grid Layout e variáveis CSS.

## 📂 Estrutura do Projeto

O código foi organizado seguindo o princípio de *Separation of Concerns* (Separação de Preocupações):

src/ 
├── services/ # Lógica de conexão com API (Fetch/Tratamento de Erros) 
├── ui/ # Manipulação do DOM e geração de HTML 
└── main.js # "Maestro" que gerencia o fluxo da aplicação


## ⚙️ Como rodar o projeto

1. **Clone o repositório**
  ```bash
  git clone [https://github.com/PriscillaBarbosa/event-live.git](https://github.com/PriscillaBarbosa/event-live.git)
  cd event-live

2. **Instale as dependências** npm install
3. **Configure as Variáveis de Ambiente** Por segurança, o arquivo de configuração não é versionado. Crie um arquivo chamado .env na raiz do projeto e adicione a seguinte linha:VITE_API_URL=[https://jsonplaceholder.typicode.com/comments?_limit=6](https://jsonplaceholder.typicode.com/comments?_limit=6)
4. **Inicie o servidor de desenvolvimento** npm run dev

5. **🧠 Aprendizados**
Durante o desenvolvimento, foram aplicadas práticas de Clean Code, evitando "números mágicos" e URLs fixas no código (hardcoded). O projeto também implementa tratamento de erros (Try/Catch) para garantir que a interface não quebre caso a API falhe.
