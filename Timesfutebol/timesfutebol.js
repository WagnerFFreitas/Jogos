// O bloco abaixo crias as variáveis
var palavraselecionada;
var tentativas = 10;
var letrascorretas = [];
var letrasincorretas = [];

// O bloco abaixo cria a função para carregar as palavras do arquivo JSON e iniciar o jogo
function iniciarjogo() {
  fetch('palavras.json')
    .then(response => response.json())
    .then(data => {
      var palavras = data.palavras;
      palavraselecionada = palavras[Math.floor(Math.random() * palavras.length)];
      exibirestadojogo();
    });
}

// O bloco abaixo cria a função para verificar se a letra está correta e atualizar o jogo
function verificarletra() {
  var inputElement = document.getElementById('entrada-letra');
  var letra = inputElement.value.toLowerCase();
  // O bloco abaixo verifica se a letra é válida (apenas letras de a-z e acentuadas)
  if (!letra.match(/^[a-zA-Zà-ú]$/)) { 
    alert("Por favor, insira uma letra válida.");
    return;
  }

  // Bloco baixo verifica se a letra já foi usada anteriormente
  if (letrascorretas.includes(letra) || letrasincorretas.includes(letra)) {
    alert("Você já tentou essa letra. Tente outra.");
    return;
  }
  
  // O bloco abaixo verifica se a letra está na palavra selecionada  
  if (palavraselecionada.includes(letra)) {
    letrascorretas.push(letra);
  } else {
    letrasincorretas.push(letra);
    tentativas--;
    exibirenforcado();
  }
  
  exibirestadojogo(); // Atualiza a exibição do estado do jogo

  // O bloco abaixo verifica se o jogo continua ou se o jogador venceu ou perdeu  
  if (tentativas > 0 && !verificarvitoria()) {
    inputElement.value = "";
  } else {
    if (verificarvitoria()) {
      alert("Parabéns! Você venceu o jogo!");
    } else {
      alert("Fim de jogo. Você perdeu!\nA palavra correta era: " + palavraselecionada);
    }
    inputElement.disabled = true;
  }
}

// O bloco abaixo cria a função para exibir as partes do enforcado
function exibirenforcado() {
  var partesEnforcado = ["cabeca", "tronco", "braco-esquerdo", "mao-esquerda", "braco-direito", "mao-direita", "perna-esquerda", "sapato-esquerdo", "perna-direita", "sapato-direito"];
  var pessoaEnforcadaElement = document.getElementById('pessoa-enforcada');
  // O bloco abaixo são as partes adicionais do enforcado, como dedos, olhos, etc.
  var partesAdicionais = {
    "mao-esquerda": ["mao-esquerda-dedo1", "mao-esquerda-dedo2", "mao-esquerda-dedo3", "mao-esquerda-dedo4", "mao-esquerda-dedo5"],
    "mao-direita": ["mao-direita-dedo1", "mao-direita-dedo2", "mao-direita-dedo3", "mao-direita-dedo4", "mao-direita-dedo5"], "cabeca": ["cabeca-olho-esquerdo", "cabeca-olho-direito", "nariz", "cabeca-orelha-esquerda", "cabeca-orelha-direita", "cabelo", "boca"]
  };

  pessoaEnforcadaElement.innerHTML = "";

  // Exibe as partes do enforcado com base no número de tentativas restantes
  partesEnforcado.slice(0, partesEnforcado.length - tentativas).forEach(function(parte) {
    var parteElement = document.createElement('div');
    parteElement.classList.add(parte);
    pessoaEnforcadaElement.appendChild(parteElement);

   // Verificar se há partes adicionais associadas a esta parte e exibi-las também
    if (partesAdicionais[parte]) {
    partesAdicionais[parte].forEach(function(parteAdicional) {
        var parteAdicionalElement = document.createElement('div');
        parteAdicionalElement.classList.add(parteAdicional);
        pessoaEnforcadaElement.appendChild(parteAdicionalElement);
      });
    }
  })
}

// O bloco abaixo cria a função para exibir o estado atual do jogo
function exibirestadojogo() {
  var estadoatual = "";
  for (var i = 0; i < palavraselecionada.length; i++) {
    if (letrascorretas.includes(palavraselecionada[i]) || palavraselecionada[i] === " ") {
      estadoatual += palavraselecionada[i];
    } else {
      estadoatual += "_";
    }
    estadoatual += " ";
  }

  // O bloco abaixo atualiza a exibição do estado do jogo e tentativas restantes  
  document.getElementById('estado-jogo').innerHTML = "Estado atual: " + estadoatual;
  document.getElementById('tentativas-restantes').innerHTML = "Tentativas restantes: " + tentativas;
  document.getElementById('letras-incorretas').innerHTML = "Letras incorretas: " + letrasincorretas.join(", ");
}

// O bloco abaixo cria a função para verificar se o jogador venceu o jogo
function verificarvitoria() {
  return palavraselecionada.split('').every(function(letra) {
    return letra === " " || letrascorretas.includes(letra);
  });
}

// O bloco abaixo cria a função para reiniciar o jogo
function reiniciar() {
 location.reload();
}

// O bloco abaixo cria a função para voltar ao menu
function voltaraomenu() {
  window.location.href = '../index.html';
}

// A linha abaixo inicia o jogo ao carregar a página
iniciarjogo();

// Adiciona eventos aos botões de "Reiniciar o Jogo" e "Voltar ao Menu"
document.getElementById('reiniciar').addEventListener('click', reiniciar);
document.getElementById('voltar-menu').addEventListener('click', voltaraomenu);