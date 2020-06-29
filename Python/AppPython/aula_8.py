from aula_7_televisao import Televisao
from aula_7_calculadora import Calculadora
from aula_7_calculadora import soma_sa

if __name__ == '__main__':
    print('Primeira parte: uso de modulos')
    tv = Televisao()
    calc = Calculadora(10, 5)
    a = calc.subtracao()  # importado da clase Calculadora
    b = soma_sa(2, 2)  # importado de um metodo apenas

    print(f"status inicial: {tv.status()}\n")
    if not tv.ligado:
        tv.liga_desliga()
        print(f"chamando o metodo liga_desliga: {tv.status()}\n")
    for i in range(1, a + 1):  # deve executar 5 vezes
        tv.volta_canal()
        print(f"chamado o metodo volta_canal (iteracao {i} de {a}): {tv.status()}")
        tv.status()

    print()
    for i in range(1, b + 1):  # deve executar 5 vezes
        tv.avanca_canal()
        print(f"chamado o metodo avanca_canal (iteracao {i} de {b}): {tv.status()}")
        tv.status()

    tv.liga_desliga()
    print(f"\nchamando o metodo liga_desliga: {tv.status()}")

    print('\n\nSegunda parte: Usando funções lamba: ')
    lista_qtd_letras = lambda lista: [len(x) for x in lista]
    lista_animais = ['gato', 'pato', 'cachorro', 'tamandua', 'cavalo']
    print(f'lista de animas: {lista_animais}')
    print(f'qtd de caracteres na lista: {lista_qtd_letras(lista_animais)}')

    print('\nTambém é posivel criar varias instruções atraves de um dicionario lambda:')
    calc_lambda = {
        'sum': lambda a, b: a + b,
        'sub': lambda a, b: a - b,
        'mul': lambda a, b: a * b,
        'div': lambda a, b: a / b
    }
    n1 = 10
    n2 = 5

    print(f"Soma: {calc_lambda['sum'](n1,n2)}")  # neste caso usamos aspas duplas para o string
    print(f"Subtracao: {calc_lambda['sub'](n1,n2)}")  # neste caso usamos aspas duplas para o string
    print(f"Multiplicacao: {calc_lambda['mul'](n1,n2)}")  # neste caso usamos aspas duplas para o string
    print(f"Divisao: {calc_lambda['div'](n1,n2)}")  # neste caso usamos aspas duplas para o string
