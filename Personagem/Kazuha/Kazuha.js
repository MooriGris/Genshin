// O "window" representa a aba do navegador. 
// O evento 'load' avisa quando o HTML, imagens e CSS terminaram de carregar.
window.addEventListener('load', function() {
    
    // Pegamos o nosso bloco
    const bloco = document.getElementById('tela-carregamento-saida');
    
    // Assim que a página carrega, adicionamos a classe para ele deslizar
    bloco.classList.add('deslizar-esquerda');
    
    // Esperamos 1 segundo (tempo da animação) para remover o bloco do caminho de vez
    setTimeout(function() {
        bloco.style.display = 'none';
    }, 1000);
    
});