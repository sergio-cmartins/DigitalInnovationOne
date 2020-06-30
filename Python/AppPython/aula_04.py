# Exemplo de um laço for, verificando se um numero é primo
num = int(input('Digite um numero inteiro até 1000 (0 para sair): '))
while num != 0:
    if num > 10000:
        print('\nNumero muito grande para o programa.')
    else:
        print('\nLista de numeros primos:\n')
        for a in range(2, num+1):
            if a >= 2:
                p = True
                for i in range(2, a + 1):  # partindo do numero 2 até um numero antes do numero verificado
                    if (a % i) == 0 and a != i:
                        p = False
                        break
                if p or a == 2:
                    print(a)
    num = int(input('Digite um numero inteiro até 1000 (0 para sair): '))
print('\n Fim do Programa!')
