# uso de listas e tuplas
# Listas são criadas com colchetes e tuplas com parenteses
lista_animais = ['tamandua', 'gato', 'cachorro', 'tatu', 'elefante', 'boi', 'cavalo']
tupla = (3, 2, 1, 5, 4)

# também é possivel converter de um tipo para outro
lista = list(tupla)
tupla_animais = tuple(lista_animais)


print('\nImprime a lista e a tupla como elas estão')
print(f'lista: {lista}')
print(f'tupla: {tupla}')
print(f'lista_animais: {lista_animais}')
print(f'tupla_animais: {tupla_animais}')

print('\nPercorre os itens da lista:')
for x in lista_animais:
    print(x)

print('\nPercorre os itens da tupla:')
for x in tupla_animais:
    print(x)

print('\nVerifica se um item existe na lista e tupla:')
if 'gato' in tupla_animais:
    print('gato encontrado na tupla_animais')
else:
    print('não existe gato na tupla_animais')

if 'pardal' in lista_animais:
    print('pardal encontrado na lista_animais')
else:
    print('não existe pardal na lista_animais')

print('\nMultiplicar uma lista ou tupla copiamos seu conteudo n vezes, (3 no exemplo)')
nova_lista = lista * 3
nova_tupla = tupla * 3
print(f'nova_lista = lista * 3: {nova_lista}')
print(f'nova_tupla = tupla * 3: {nova_tupla}')

print('\nAs operações a seguir são feitas somente em listas pois'
      '\ntuplas são imutáveis')

print('\nAdiciona o itens na lista_animais e imprime a lista resultante')
lista_animais.append('lobo')
print(lista_animais)

print('\nRemovendo o ultimo item da lista e imprime a lista resultante')
lista_animais.pop()
print(lista_animais)

print('\nRemovendo o item da lista pela posicao e imprime a lista resultante (primeira posicao 0)')
lista_animais.pop(0)
print(lista_animais)

print('\nRemove um item da lista pelo seu nome (removendo "tatu")')
lista_animais.remove('tatu')
print(lista_animais)


print('\nEfetuando operações com listas:')
print(f'Soma da lista: {sum(lista)}')
print(f'Maior numero da lista: {max(lista)}')
print(f'Menor numero da lista: {min(lista)}')
print(f'Maior numero da lista_animal: {max(lista_animais)}')
print(f'Menor numero da lista_animal: {min(lista_animais)}')

print('\nOrdenando as listas:')
lista.sort()
lista_animais.sort()
print(f'lista: {lista}')
print(f'lista_animais: {lista_animais}')

print('\nInvertendo as listas:')
lista.reverse()
lista_animais.reverse()
print(f'lista: {lista}')
print(f'lista_animais: {lista_animais}')