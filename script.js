// Botão "Saiba Mais" rola para a seção Sobre
document.getElementById('learnMore').addEventListener('click', function() {
    document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
});

// Formulário de contato simples
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if(nome && email && mensagem) {
        document.getElementById('status').textContent = `Obrigado, ${nome}! Sua mensagem foi enviada.`;
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('status').textContent = 'Por favor, preencha todos os campos.';
    }
});
