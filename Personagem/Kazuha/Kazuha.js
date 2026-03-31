// O "window" representa a aba do navegador. 
// O evento 'load' avisa quando o HTML, imagens e CSS terminaram de carregar.

window.addEventListener('load', function() {
    // Pegamos o nosso bloco
    const bloco = document.getElementById('tela-kazuha');
    
    // Escuta o evento que o CSS dispara exatamente quando a animação de deslizar termina
    bloco.addEventListener('transitionend', function() {
        bloco.style.display = 'none';
    }, { once: true }); // O 'once: true' garante que isso só rode uma vez

    // Um pequeno truque (requestAnimationFrame) para garantir que o navegador 
    // está pronto antes de jogar a classe da animação
    requestAnimationFrame(() => {
        bloco.classList.add('deslizar-kazuha');
    });
});

window.addEventListener('scroll', function() {
    // Pega a div do fundo
    const fundo = document.getElementById('Wallpaper-kazuha');
    
    // Descobre o quanto a pessoa já rolou a página para baixo
    let rolagem = window.scrollY;
    
    // Move a foto no eixo Y. O "0.4" é a velocidade. 
    // Quanto menor o número, mais devagar a foto rola.
    fundo.style.backgroundPosition = 'center ' + (rolagem * 0.4) + 'px';
});
