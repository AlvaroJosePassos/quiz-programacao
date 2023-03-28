var score = 0;



function apertouBotao(botao) {
    var labelBotao = botao.parentNode;
    var divBotao = labelBotao.parentNode;
    var elementos = divBotao.querySelectorAll("button");
    elementos.forEach(function (elemento) {
        elemento.setAttribute('disabled', true);
    });
}

function acertou(botao) {
    apertouBotao(botao);
    var labelBotao = botao.parentNode;
    var divBotao = labelBotao.parentNode;
    var elementos = divBotao.querySelectorAll("p");
    score++;
    document.getElementById("score").textContent = `${score}/5`;
    elementos.forEach(function (elemento) {
        elemento.textContent = "Você Acertou!!!";
        elemento.style.backgroundColor = "#32CD32";
    });
}

function errou(botao) {
    apertouBotao(botao);
    var labelBotao = botao.parentNode;
    var divBotao = labelBotao.parentNode;
    var elementos = divBotao.querySelectorAll("p");
    elementos.forEach(function (elemento) {
        elemento.textContent = "Você Errou!!!";
        elemento.style.backgroundColor = "#ff0000";
    });
}

