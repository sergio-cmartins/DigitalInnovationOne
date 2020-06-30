# exemplo simples de estruturas condicionais

# capturar as notas de um aluno
nota_1 = float(input('Digite a primeira nota: '))
nota_2 = float(input('Digite a segunda nota: '))
nota_3 = float(input('Digite a terceira nota: '))
nota_4 = float(input('Digite a quarta nota: '))

if nota_1 > 10 or nota_2 > 10 or nota_3 > 10 or nota_4 > 10:
    print('\nAlguma nota inválida foi informada, favor verificar:')
else:
    media = (nota_1 + nota_2 + nota_3 + nota_4) / 4
    print(f'\nMedia final: {media}')
    if media < 5.0:  # media menor que 5.0 o aluno está automaticamente reprovado
        print('\nAluno Reprovado!')
    elif media < 7.0:  # Entre 5.0 e 6.9 o aluno está em recuperação
        print('\nAluno em Recuperacao')
    elif nota_1 == 0.0 or nota_2 == 0.0 or nota_3 == 0 or nota_4 == 0:  # reforço se tirar 0
        print('\nAluno aprovado mas em reforço por tirar uma nota 0.')
    else:
        print('\nAluno aprovado.')

print('\nFim do programa.')
