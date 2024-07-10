import json

# Abrir o arquivo palavras.txt para leitura
with open('D:\\Curso_Cubo_Academy_Ifood\\Exercicio13_Aula19\\Meu_Terceiro_jogo\\palavras.txt', 'r', encoding='utf-8') as file:
    # Ler linhas do arquivo
    lines = file.readlines()

# Inicializar um dicionário para armazenar as palavras
data = {
    'palavras': []
}

# Processar cada linha do arquivo
for line in lines:
    # Remover caracteres de quebra de linha
    word = line.strip()
    # Adicionar a palavra ao dicionário
    data['palavras'].append(word)

# Converter o dicionário para JSON
json_data = json.dumps(data, ensure_ascii=False, indent=4)

# Escrever o JSON resultante em um novo arquivo
with open('D:\\Curso_Cubo_Academy_Ifood\\Exercicio13_Aula19\\Meu_Terceiro_jogo\\palavras.json', 'w', encoding='utf-8') as json_file:
    json_file.write(json_data)

print("Arquivo JSON gerado com sucesso!")
