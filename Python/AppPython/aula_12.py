# Exemplo de importação de Libs
# Antes de utilizar é necessario no projeto executar o comando abaixo no terminal:
# >> pip install requests
import requests


class RequestError(Exception):
    def __init(self, message):
        self.message = message


if __name__ == '__main__':
    try:
        cep = input('Digite o cep para pesquisar com 8 digitos sem formatacao:')
        url_req = f'http://viacep.com.br/ws/{cep}/json'
        response = requests.get(url_req)
        json = response.json()
        if response.status_code != 200:
            raise RequestError(f'Erro na requisicao: {response.status_code}')
        print(f"Logradouro: {json['logradouro']}")
        print(f"Bairro: {json['bairro']}")
    except RequestError as ex:
        print(ex)