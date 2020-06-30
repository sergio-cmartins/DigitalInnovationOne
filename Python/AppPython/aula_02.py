# Demonstrando as possiveis operções aritmetica em Python

## Desabilitando atribuicao automatica para solicitar a entrada dos valores pelo usuário
# a = 10
# b = 6
#
# # Formatacao usando o comando format
# print('Valor de a: {}' .format(a))
# print('Valor de b: {}' .format(b))
# print('')

#Usando o input e convertendo os dois valores para inteiro
a = int(input('Entre com o valor para a variável "a": '))
b = int(input('Entre com o valor para a variável "b": '))

#Operações Basicas +, -, *, /, %
soma = a + b
subtracao = a - b
multiplicacao = a * b
divicao = a / b
resto = a % b

#formatacao do resultado usando f-string (Python 3.6 em diante)
print(f'Soma (a + b): {soma}'
      f'\nSubtracao (a - b): {subtracao}'
      f'\nMultiplicacao (a * b): {multiplicacao}'
      f'\nDivisao (a / b): {divicao:.2f}' #usando formatacao de float com duas casas
      f'\nResto (a % b): {resto}')