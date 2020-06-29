# Manipulação de arquivos


def escreve_arquivo(caminho: str, texto: str, sobrescrita=False):
    # Cria (se não existir) e abre o arquivo para gravação e inclui uma linha
    if sobrescrita:
        modo = 'w'  # sobrescreve o arquivo
        nova_linha = ''
    else:
        modo = 'a'  # adiciona ao fim do arquivo
        nova_linha = '\n'
    arquivo = open(caminho, modo)
    arquivo.write(nova_linha + texto)
    arquivo.close()


def le_arquivo_str(caminho: str) -> str:
    # Abre o arquivo e retorna o conteudo como uma string
    arquivo = open(caminho, 'r')
    conteudo = arquivo.read()
    arquivo.close()
    return conteudo


def le_arquivo_lista(caminho: str) -> []:
    # Abre o arquivo e retorna o conteudo como uma string
    arquivo = open(caminho, 'r')
    conteudo = arquivo.read().split('\n')
    arquivo.close()
    return conteudo


if __name__ == '__main__':
    arq_notas = 'E:/trf/notas.txt'
    escreve_arquivo(arq_notas, 'Carlos, 10, 7, 10, 8', True)
    escreve_arquivo(arq_notas, 'José, 6, 7, 8, 9')
    escreve_arquivo(arq_notas, 'Antonio, 6, 5, 5, 7')
    escreve_arquivo(arq_notas, 'Maria, 9, 9, 10, 8')

    for x in le_arquivo_lista(arq_notas):
        lista = x.split(',')
        aluno = lista[0]
        lista.pop(0)
        media = lambda notas: sum([int(i) for i in notas]) / 4.0
        print(f'Aluno {aluno}, media: {media(lista)}')



