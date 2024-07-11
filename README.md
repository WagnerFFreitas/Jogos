# Este jogos foram criados a partir dos exercicios 13_Aula19_Logica de programação da IFood_Cubo Academy

**Função deste jogo da forca com varios niveis, contendo um boneco sendo enforcado a cada letra incorreta e aceita também letras com acento e testar meu aprendizado**

**Quero agradecer minha esposa pela idea de criar niveis para tornar o jogo mais acessecivel para todas as idades e conhecimentos**  


***Este é o algoritmo da lógica do jogo da forca, para uma descrição em português para um possível desenvolvimento em outra linguagem.***

1) Inicialização do Jogo:
   - **Função `iniciarJogo`:**
      - Crie uma função central chamada `iniciarJogo` para organizar a inicialização do jogo.
      - **Carregamento de Palavras:**
         - Chame a função `carregarPalavras` para obter uma lista de palavras predefinidas ou fornecidas dinamicamente por um servidor.
      - **Escolha Aleatória da Palavra:**
         - Escolha aleatoriamente uma palavra da lista carregada. Isso adiciona um elemento de aleatoriedade ao jogo a cada nova rodada.
      - **Inicialização de Variáveis:**
         - Inicialize variáveis para armazenar a palavra a ser adivinhada (`palavraAdivinhada`), as letras adivinhadas (`letrasAdivinhadas`), o número de tentativas incorretas (`tentativasIncorretas`) e as letras já utilizadas (`letrasUtilizadas`).

2) Exibição da Palavra, do Boneco e das Letras Utilizadas:
   - **Funções de Exibição:**
      - **`exibirPalavra`**:
         - Atualize visualmente a palavra a ser adivinhada, mostrando as letras corretas adivinhadas e espaços para as letras desconhecidas.
      - **`exibirBoneco`**:
         - Exiba a imagem do jogo da forca correspondente ao número de tentativas incorretas. Isso adiciona um componente visual ao progresso do jogo.
      - **`exibirLetrasUtilizadas`**:
         - Mostre as letras já utilizadas para que o jogador tenha uma visão geral das tentativas anteriores.

3) Verificação da Tentativa:
   - **Função `verificarTentativa(letra)`:**
      - Verifique se a letra já foi utilizada, exibindo uma mensagem ao jogador caso positivo.
      - Adicione a letra à lista de letras utilizadas para que o jogador tenha um registro de suas tentativas anteriores.
      - Se a letra estiver na palavra, atualize a palavra adivinhada para refletir a nova letra correta.
      - Caso contrário, incremente o número de tentativas incorretas, desenhando progressivamente o enforcado.
      - Chame as funções de exibição após cada tentativa para manter a interface do usuário atualizada.
      - Verifique se o jogador ganhou ou perdeu o jogo após cada tentativa.

4) Interface de Usuário:
   - **HTML Simples:**
      - Crie uma interface simples usando HTML, com áreas distintas para exibir a palavra, a imagem do jogo da forca e as letras utilizadas.
      - Adicione um botão "Novo Jogo" que chama a função `iniciarJogo` quando clicado, permitindo ao jogador reiniciar o jogo a qualquer momento.
