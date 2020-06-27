class Televisao:
    def __init__(self):
        self.ligado = False
        self.canal = 2

    def liga_desliga(self):
        if self.ligado:
            self.ligado = False
        else:
            self.ligado = True

    def avanca_canal(self):
        if self.ligado:
            if self.canal >= 13:
                self.canal = 1
            else:
                self.canal += 1

    def volta_canal(self):
        if self.ligado:
            if self.canal <= 1:
                self.canal = 13
            else:
                self.canal -= 1

    def status(self):
        if not self.ligado:
            print('*** A televisao se encontra desligada ***')
        else:
            print(f'***A televisao está ligada no canal {self.canal} ***')


print('Um simples exemplo de uma clase Televisão')
print('\nInstanciando a classe e verificando o status inicial:')
tv = Televisao()
tv.status()
print('\nExecutando a funcao liga_desliga e verificando novamente o status')
tv.liga_desliga()
tv.status()
print('\nExecutando a funcao volta_canal e verificando novamente o status')
tv.volta_canal()
tv.status()
print('\nExecutando novamente a funcao volta_canal'
      '\nA tv deve ir para o canal maximo pois não tem canal 0:')
tv.volta_canal()
tv.status()
print('\nExecutando a funcao volta_canal e verificando novamente o status')
tv.volta_canal()
tv.status()
print('\nExecutando a funcao avanca_canal e verificando novamente o status')
tv.avanca_canal()
tv.status()
print('\nExecutando novamente a funcao avanca_canal'
      '\nA tv deve ir para o canal 1 pois o maior canal é 13:')
tv.avanca_canal()
tv.status()
