// O bloco abaixo crias as variáveis
var palavraselecionada; // Cria a variável que armazena a palavra selecionada para o jogo.
var tentativas = 10 // Cria a variável de quantidades de tentativas do jogo da forca.
var letrascorretas = []; // Cria a variável letras corretas já digitadas.
var letrasincorretas = []; // Cria a variável letras incorretas já digitadas.

// O bloco abaixo cria a função para carregar as palavras do arquivo JSON e iniciar o jogo
function iniciarJogo() {
  fetch('palavras.json')
    .then(response => response.json()) // Converte a resposta para JSON
    .then(data => {
      var palavras = data.palavras; // Armazena as palavras do JSON
      palavraselecionada = palavras[Math.floor(Math.random() * palavras.length)]; // Seleciona uma palavra aleatória
      exibirestadojogo(); // Exibe o estado inicial do jogo
    });
}

// O bloco abaixo cria a função para verificar se a letra está correta e atualizar o jogo
function verificarletra() {
  var inputElement = document.getElementById('entrada-letra');
  var letra = inputElement.value.toLowerCase(); // Captura a letra digitada e converte para minúscula
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
    letrascorretas.push(letra); // Adiciona a letra correta
  } else {
    letrasincorretas.push(letra); // Adiciona a letra incorreta
    tentativas--; // Reduz o número de tentativas restantes
    exibirenforcado(); // Exibe a parte correspondente do enforcado
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
    inputElement.disabled = true; // Desativa a entrada de letra
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

  pessoaEnforcadaElement.innerHTML = ""; // Limpa a exibição atual do enforcado

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
    if (letrascorretas.includes(palavraselecionada[i])) {
      estadoatual += palavraselecionada[i]; // Adiciona a letra correta ao estado atual
    } else {
      estadoatual += "_"; // Adiciona um sublinhado para letras não descobertas
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
    return letrascorretas.includes(letra); // Verifica se todas as letras da palavra foram descobertas
  });
}

// A linha abaixo inicia o jogo ao carregar a página
iniciarJogo();
