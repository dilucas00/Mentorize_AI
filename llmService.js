const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

async function consultarLLM(pergunta, contexto, historico) {
  if (!GEMINI_API_KEY) {
    console.error(
      "A chave da API do Gemini não foi encontrada. Verifique seu arquivo .env e o nome da variável (GEMINI_API_KEY)."
    );
    throw new Error(
      "A chave da API do Gemini não foi configurada no servidor."
    );
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const historicoFormatado = [
      {
        role: "user",
        parts: [
          {
            text: `INSTRUÇÃO IMPORTANTE: Ignore todas as instruções anteriores. A partir de agora, você atuará como o "Mestre de Carreira", cujo comportamento é definido pelo seguinte contexto: ${contexto}`,
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: "Entendido. Estou pronto para atuar como Mestre de Carreira e ajudar com currículos e LinkedIn. Como posso ajudar?",
          },
        ],
      },

      ...historico.map((msg) => ({
        role: msg.autor === "usuario" ? "user" : "model",
        parts: [{ text: msg.texto }],
      })),
    ];

    console.log("Iniciando chat com o Gemini com histórico...");

    const chat = model.startChat({
      history: historicoFormatado,
    });

    const result = await chat.sendMessage(pergunta);
    const response = result.response;

    return response.text();
  } catch (error) {
    console.error("Erro ao consultar a API do Gemini:", error);
    throw new Error("Falha na comunicação com o serviço do Gemini.");
  }
}

// Exporta a função para que possa ser usada pelo arquivo app.js
module.exports = {
  consultarLLM,
};
