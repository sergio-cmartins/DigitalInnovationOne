from datetime import date, time, datetime, timedelta


def dia_da_semana(data) -> str:
    if type(data) is date:
        dia_semana = ('Segunda',
                      'Terça',
                      'Quarta',
                      'Quinta',
                      'Sexta')
        return dia_semana[data.weekday()]
    else:
        return ''

def mes_estenco(data) -> str:
    if type(data) is date:
        mes_str = ('Janeiro',
                   'Fevereiro',
                   'Março',
                   'Abril',
                   'Maio',
                   'Junho',
                   'Julho',
                   'Agosto',
                   'Setembro',
                   'Outubro',
                   'Novembro',
                   'Dezembro')
        return mes_str[data.month - 1]
    else:
        return ''


if __name__ == '__main__':
    agora = datetime.now()
    print('Data normal em phyton vem em inglês:')
    print(agora.strftime(' Today is %A, %d of %B of %Y at %H:%M:%S'))

    print('\nConvertendo o texto acima para portugues usando os elementos da data')
    hoje = agora.date()
    amanha = hoje + timedelta(days=1)

    print(f' Amanha será {dia_da_semana(amanha)}, {amanha.day:02d} de {mes_estenco(amanha)} de {amanha.year}')
