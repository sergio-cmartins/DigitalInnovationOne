# Usando metodos sem classe
def soma_sa(val_a, val_b):
    return val_a + val_b


def subtracao_sa(val_a, val_b):
    return a - b


# Criando uma classe para efetuar a chamada dos metodos
class Calculadora:
    def __init__(self, num_1, num_2):
        self.value_a = num_1
        self.value_b = num_2

    def soma(self):
        return self.value_a + self.value_b

    def subtracao(self):
        return self.value_a - self.value_b

    def multiplicacao(self):
        return self.value_a * self.value_b

    def divisao(self):
        return self.value_a / self.value_b

    @staticmethod  # metodos estaticos permitem a chamada sem instanciar a classe
    def potencia(value_1, value_2):
        return value_1 ** value_2


if __name__ == '__main__':
    print('Usando métodos/funções:')
    a = int(input('Digite o valor de a: '))
    b = int(input('Digite o valor de b: '))

    print('\nUsando os metodos Isolados:')
    print(f'Método soma_sa(a, b): {soma_sa(a, b)}')
    print(f'Método subtracao_sa(a, b): {subtracao_sa(a, b)}')

    print('\nUsando os metodos da classe calculadora:')
    print('Atribuindo os valores (calc = Calculadora(a, b))')
    calc = Calculadora(a, b)
    print(f'Método soma(): {calc.soma()}')
    print(f'Método subtracao(): {calc.subtracao()}')
    print(f'Método multiplicacao(): {calc.multiplicacao()}')
    print(f'Método divisao(): {calc.divisao()}')
    print(f'Metodo estático Calculadora.potencia(a, b): {Calculadora.potencia(a, b)}')
