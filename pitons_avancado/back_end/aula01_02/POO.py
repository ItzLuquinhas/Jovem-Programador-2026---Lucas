class Bike:
    def __init__(self, cor, aro, freio):
        self.cor = cor
        self.aro = aro
        self.freio = freio
    def apresentar_bike(self):
        print(f"""==Biclicleta==
Cor: {self.cor}
Aro: {self.aro}
Freio: {self.freio}""")
    def pedalar(self):
        print("Pedalando com a Bike!")
    def freiar(self):
        print("Freiando a Bike!")

class Computador:
    def __init__(self, processador, placa_mae, memoria, armazenamento, fonte, gabinete):
        self.processador = processador
        self.placa_mae = placa_mae
        self.memoria = memoria
        self.armazenamento = armazenamento
        self.fonte = fonte
        self.gabinete = gabinete
    
    def apresentar_computador(self):
        print(f"""==Computador==
Processador: {self.processador}
Placa mãe: {self.placa_mae}
Memória RAM: {self.memoria}
Armazenamento: {self.armazenamento}
Fonte: {self.fonte}
Gabinete: {self.gabinete}""")
    def ligar_computador(self):
        for i in range(3,0,-1):
            print(f"Computador ligando em {i}...")
        print("Computador ligado!")
    def desligar_computador(self):
        for i in range(3,0,-1):
            print(f"Computador desligando em {i}...")
        print("Computador desligado!")

bike1 = Bike("Cromada","Aro 15","Freio a disco")
#bike1.apresentar_bike()

computador1 = Computador("Ryzen 5 4600G","Biostar A320MH","XPG D10 16GB DDR4 3200mhz","SSD 512GB, HDD 512GB, HDD 512GB","Pichau Nidus 500W","Pichau HX300 White")
#computador1.apresentar_computador()

bike1.pedalar()
bike1.freiar()

computador1.ligar_computador()
computador1.desligar_computador()