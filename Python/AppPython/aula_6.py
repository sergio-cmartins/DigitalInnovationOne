conjunto1 = {1, 2, 3, 4, 5, 6, 7}
conjunto2 = {7, 4, 10, 6,  8, 9, 5} # ordem dos itens não importa no conjunto
conjunto3 = {1, 3, 5, 7}
conjunto4 = {6, 8, 10}
lista = [1, 1, 2, 2, 3, 4, 4, 4, 5, 6, 6]
print(f'Conjunto1: {conjunto1}')
print(f'Conjunto2: {conjunto2}')
print(f'Conjunto3: {conjunto3}')
print('')
print(f'Uniao de conjuntos: {conjunto1.union(conjunto2)}')
print(f'Interceção de conjuntos: {conjunto1.intersection(conjunto2)}')
print(f'Diferença Conjunto1: {conjunto1.difference(conjunto2)}')
print(f'Diferença Conjunto2: {conjunto2.difference(conjunto1)}')
print(f'Diferença Simetrica: {conjunto1.symmetric_difference(conjunto2)}')
print(f'Conjunto3 é subconjunto de Conjunto1: {conjunto2.issubset(conjunto1)}')
print(f'Conjunto3 é subconjunto de Conjunto1: {conjunto3.issubset(conjunto1)}')
print(f'Conjunto1 é superconjunto de Conjunto4: {conjunto1.issuperset(conjunto4)}')
print(f'Conjunto2 é superconjunto de Conjunto4: {conjunto2.issuperset(conjunto4)}')
print('\nUma forma simples de remover itens duplicados de uma lista:')
print(f'lista: {lista}')
lista = list(set(lista))
print(f'lista = list(set(lista)): {lista}')

