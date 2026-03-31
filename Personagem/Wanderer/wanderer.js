window.addEventListener('load', function() {
    // Pegamos o nosso bloco
    const bloco = document.getElementById('tela-wanderer');
    
    // Escuta o evento que o CSS dispara exatamente quando a animação de deslizar termina
    bloco.addEventListener('transitionend', function() {
        bloco.style.display = 'none';
    }, { once: true }); // O 'once: true' garante que isso só rode uma vez

    // Um pequeno truque (requestAnimationFrame) para garantir que o navegador 
    // está pronto antes de jogar a classe da animação
    requestAnimationFrame(() => {
        bloco.classList.add('deslizar-wanderer');
    });
});