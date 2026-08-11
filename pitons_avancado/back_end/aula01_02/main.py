from funcs.func import palavra_minuscula, palavra_maiuscula

frase = str(input("Digite uma frase: "))
op = str(input("""
1 - maiusculo
2 - minusculo"""))

if op == "1":
    retorno = palavra_maiuscula(frase)
if op == "2":
    retorno = palavra_minuscula(frase)
print(retorno)