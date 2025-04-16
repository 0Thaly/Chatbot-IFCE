const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');

function appendMessage(message, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chatbot-message');
    if (isUser) {
        messageDiv.classList.add('user-message');
    }
    messageDiv.textContent = message;
    chatLog.appendChild(messageDiv);
    chatLog.scrollTop = chatLog.scrollHeight; // Manter a rolagem na parte inferior
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        appendMessage(message, true);
        userInput.value = '';
        
        // Aqui você integraria a lógica do seu chatbot
        // Por exemplo, enviar 'message' para uma API e receber a resposta
        // Simulação de uma resposta do chatbot:
        setTimeout(() => {
            const response = getChatbotResponse(message);
            appendMessage(response, false);
        }, 1000);
    }
}

function getChatbotResponse(userMessage) {
    // **SUBSTITUA ESTA LÓGICA SIMULADA PELA INTEGRAÇÃO REAL DO SEU CHATBOT**
    userMessage = userMessage.toLowerCase();
    if (userMessage.includes('documentos') || userMessage.includes('preciso')) {
        return "Para o processo de heteroidentificação, geralmente são necessários documento de identificação com foto, autodeclaração e outros documentos específicos indicados no edital.";
    } else if (userMessage.includes('etapas') || userMessage.includes('como funciona')) {
        return "O processo geralmente envolve a inscrição, o envio da autodeclaração, a convocação para a avaliação presencial (ou online), e a análise da comissão de heteroidentificação.";
    } else if (userMessage.includes('resultado') || userMessage.includes('quando sai')) {
        return "O resultado da heteroidentificação é divulgado nas datas e pelos meios especificados no edital do processo seletivo.";
    } else {
        return "Desculpe, não entendi sua pergunta. Por favor, seja mais específico(a).";
    }
}

userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});