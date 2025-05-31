# Mentorize AI (ou o nome que você escolheu)

![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-API-4285F4?style=for-the-badge&logo=google)

Um assistente de carreira inteligente, desenvolvido com Node.js e integrado à API do Google Gemini, projetado para ajudar profissionais a otimizar seus currículos e perfis no LinkedIn através de uma conversa interativa.

---

## 📖 Sobre o Projeto

Este projeto consiste em um backend que serve uma API RESTful para um chatbot especializado, o **"Mestre de Carreira e Marca Pessoal"**. A IA é configurada com um contexto detalhado e regras de segurança para garantir que as interações sejam focadas em desenvolvimento profissional, oferecendo conselhos práticos e estratégicos sobre currículos, LinkedIn e preparação para entrevistas.

## ✨ Principais Funcionalidades

- **Assistente Especialista:** IA com persona e conhecimento focados em Carreira e LinkedIn.
- **Memória Conversacional:** Mantém o contexto de uma conversa através de um sistema de `sessionId`.
- **Guardrails de Tópico:** Recusa educadamente perguntas fora de seu escopo de especialização.
- **API Robusta:** Endpoint seguro e bem estruturado usando Express.js.
- **Integração Moderna:** Utiliza o SDK oficial do Google Gemini (`gemini-1.5-flash`) para respostas rápidas e inteligentes.

## 🛠️ Tecnologias Utilizadas

- **Backend:** Node.js
- **Framework:** Express.js
- **API de IA:** Google Gemini
- **Gerenciamento de Ambiente:** dotenv
- **Cliente HTTP (para testes):** Postman, cURL

---

## 🚀 Começando

Siga estas instruções para obter uma cópia do projeto e executá-lo em sua máquina local para desenvolvimento e testes.

### Pré-requisitos

Você vai precisar ter as seguintes ferramentas instaladas em seu sistema:
- [Node.js](https://nodejs.org/) (versão 18.x ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)

### Instalação

1.  **Clone o repositório** (se você já tiver o código, pule este passo)
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-projeto.git](https://github.com/seu-usuario/nome-do-projeto.git)
    ```
2.  **Navegue até a pasta do projeto**
    ```bash
    cd nome-do-projeto
    ```
3.  **Instale as dependências do projeto**
    ```bash
    npm install
    ```
4.  **Configure as variáveis de ambiente**
    - Crie um arquivo chamado `.env` na raiz do projeto.
    - Adicione sua chave da API do Gemini a este arquivo:
      ```
      GEMINI_API_KEY=SUA_CHAVE_DE_API_AQUI
      ```

### Executando a Aplicação

- Para iniciar o servidor em modo de desenvolvimento, execute:
  ```bash
  node app.js
  ```
- O servidor estará rodando em `http://localhost:8000` (ou na porta definida em seu código).

---

## 🔌 Uso da API

Para interagir com o assistente, envie uma requisição `POST` para o endpoint abaixo.

### Endpoint

`POST /api/chat`

### Corpo da Requisição (Request Body)

O corpo da requisição deve ser um JSON contendo a pergunta do usuário e um ID de sessão para manter a memória da conversa.

```json
{
  "pergunta": "Como posso melhorar o título do meu perfil no LinkedIn?",
  "sessionId": "conversa-unica-12345"
}
```

### Resposta de Sucesso (200 OK)

A API retornará a resposta da IA em formato JSON.

```json
{
  "resposta_do_llm": "Claro! Uma ótima maneira de melhorar seu título é usar palavras-chave. Tente a fórmula: [Seu Cargo] | [Sua Especialidade 1] | [Sua Especialidade 2]..."
}
```

### Exemplo com `cURL`

```bash
curl -X POST http://localhost:8000/api/chat \
-H "Content-Type: application/json" \
-d '{"pergunta": "Como posso melhorar meu currículo?", "sessionId": "curl-session-001"}'
```

---

## 🔮 Próximos Passos

- [ ] Desenvolver uma interface de usuário (Frontend) em HTML, CSS e JavaScript.
- [ ] Implementar uma estratégia de "janela deslizante" para otimizar conversas longas.
- [ ] Adicionar persistência de dados com um banco de dados (ex: MongoDB, Redis) para salvar o histórico de conversas.
- [ ] Escrever testes automatizados para a API.
- [ ] Fazer o deploy da aplicação em um serviço de nuvem (ex: Render, Heroku).

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💻 Autor

Feito com ❤️ por **[Seu Nome Aqui]**

- **LinkedIn:** `https://linkedin.com/in/seu-linkedin`
- **GitHub:** `https://github.com/seu-github`
