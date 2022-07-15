let jogador = 0;
let computador = 0;
let placarEmpate = 0;
let jogadorGanha = 0;
let computadorGanha = 0;

function jogar(escolha) {
  const placarJogador = document.getElementById("jogador-pontos");
  const placarComputador = document.getElementById("computador-pontos");
  const empate = document.getElementById("empate");
  const mensagens = document.getElementById("mensagens");
  jogador = escolha;
  computador = Math.floor(Math.random() * 3) + 1;

  const divComputador = document.getElementById("escolhaComputador");
  let span = document.createElement("span");

  if (jogador == 1 && computador == 1) {
    placarEmpate++;
    empate.innerHTML = placarEmpate;
    span.innerHTML = "Pedra";
    mensagens.innerHTML = "Empate";
  } else if (jogador == 1 && computador == 2) {
    computadorGanha++;
    placarComputador.innerHTML = computadorGanha;
    span.innerHTML = "Papel";
    mensagens.innerHTML = "Computador venceu";
  } else if (jogador == 1 && computador == 3) {
    jogadorGanha++;
    placarJogador.innerHTML = jogadorGanha;
    span.innerHTML = "Tesoura";
    mensagens.innerHTML = "Jogador venceu";
  } else if (jogador == 2 && computador == 1) {
    jogadorGanha++;
    placarJogador = jogadorGanha;
    span.innerHTML = "Pedra";
    mensagens.innerHTML = "Jogador venceu";
  } else if (jogador == 2 && computador == 2) {
    placarEmpate++;
    empate.innerHTML = placarEmpate;
    span.innerHTML = "Papel";
    mensagens.innerHTML = "Empate";
  } else if (jogador == 2 && computador == 3) {
    computadorGanha++;
    placarComputador.innerHTML = computadorGanha;
    span.innerHTML = "Tesoura";
    mensagens.innerHTML = "Computador venceu";
  } else if (jogador == 3 && computador == 1) {
    computadorGanha++;
    placarComputador.innerHTML = computadorGanha;
    span.innerHTML = "Pedra";
    mensagens.innerHTML = "Computador venceu";
  } else if (jogador == 3 && computador == 2) {
    jogadorGanha++;
    placarJogador.innerHTML = jogadorGanha;
    span.innerHTML = "Papel";
    mensagens.innerHTML = "Jogador venceu";
  } else if (jogador == 3 && computador == 3) {
    placarEmpate++;
    empate.innerHTML = placarEmpate;
    span.innerHTML = "Tesoura";
    mensagens.innerHTML = "Empate";
  }
  divComputador.appendChild(span);
  span.classList.add("resultadoComputador");
  const button = document.getElementById("jogarNovamente");
  button.style.display = "flex";
}

function jogarNovamente() {
  const spanComputador = document.querySelector(".resultadoComputador");
  spanComputador.remove();
  const mensagens = document.getElementById("mensagens");
  mensagens.innerHTML = "mensagens";
  const button = document.getElementById("jogarNovamente");
  button.style.display = "none";
}
