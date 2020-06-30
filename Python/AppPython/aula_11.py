class Error(Exception):
    pass


class InputError(Error):
    def __init__(self, message):
        self.message = message


if __name__ == '__main__':
    try:
        a = int(input('Entre com um numero inteiro positivo até 100:'))
        if a > 100:
            raise InputError('Numero Maior que 100')
        elif a < 0:
            raise InputError('Apenas numeros positivos!')
        print(f'100 dividido por {a} = {100 / a}')

    # Lembre sempre de colocar as exceções das mais especificas para as mais genericas
    # verifique em https://docs.python.org/3/library/exceptions.html#exception-hierarchy
    except ZeroDivisionError:
        print('Não posso dividir por zero.')
    except ValueError:
        print('Precisa ser um numero inteiro!')
    except InputError as ex:
        print(ex)
    # except BaseException as ex:
    #     print(f'Erro desconhecido: {ex}')
    else:  # Executa apenas quando não ocorre nenhum erro
        print('Foi tudo certo!')
    finally:
        print('<<< Eu estou no Finally e sempre executo!>>>')