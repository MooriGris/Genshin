document.addEventListener("DOMContentLoaded", () => {
    // --- LÓGICA DO CARROSSEL ---
    const track = document.getElementById("carrosel-track");
    const items = track.querySelectorAll("li");
    const btnPrev = document.getElementById("btnPrev");
    const btnNext = document.getElementById("btnNext");

    let indexAtual = 0;
    const maxIndex = items.length - 2; 
    let temporizador;

    function atualizarCarrossel() {
        track.style.transform = `translateX(-${indexAtual * 50}%)`;
    }

    function irParaProximo() {
        indexAtual++;
        if (indexAtual > maxIndex) indexAtual = 0;
        atualizarCarrossel();
    }

    function irParaAnterior() {
        indexAtual--;
        if (indexAtual < 0) indexAtual = maxIndex;
        atualizarCarrossel();
    }

    function iniciarCarrosselAutomatico() {
        temporizador = setInterval(irParaProximo, 5000);
    }

    function resetarTemporizador() {
        clearInterval(temporizador);
        iniciarCarrosselAutomatico();
    }

    if (btnNext && btnPrev) {
        btnNext.addEventListener("click", () => { irParaProximo(); resetarTemporizador(); });
        btnPrev.addEventListener("click", () => { irParaAnterior(); resetarTemporizador(); });
    }

    iniciarCarrosselAutomatico();

    // --- LÓGICA DA TRANSIÇÃO DE CORES ---
    const botoes = document.querySelectorAll('.link-personagem');
    const telaCarregamento = document.getElementById('tela-carregamento');
    const blocosDeCor = document.querySelectorAll('.bloco-cor');

    botoes.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            evento.preventDefault(); // Para a navegação instantânea

            const cores = JSON.parse(botao.getAttribute('data-colors'));
            const linkDestino = botao.getAttribute('href');

            // Aplica as cores do personagem nos blocos
            blocosDeCor.forEach((bloco, index) => {
                bloco.style.backgroundColor = cores[index];
            });

            // Ativa a animação de entrada (blocos deslizando para a esquerda)
            telaCarregamento.classList.add('entrando');

            // Espera o tempo da animação (ajustado para o delay final de 0.8s + 0.5s de transição)
            setTimeout(() => {
                window.location.href = linkDestino;
            }, 1400); 
        });
    });
});