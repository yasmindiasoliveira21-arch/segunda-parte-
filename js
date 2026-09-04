console.log("Projeto AgroTech iniciado com sucesso!");

// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Lógica de limite e alternância de curtidas para os botões dos posts
const botoes = document.querySelectorAll(".btn-interacao");

botoes.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        console.log("fui clicado");
        let texto = botao.querySelector("span");

        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
        } else {
            texto.textContent--;
            curtiu = false;
        }
    }
});
