"""
Problemas de cadenas de Python de nivel medio: 1 bucle. Use + para combinar cadenas, len(str) es el número de caracteres en una cadena, str[i:j] extrae la subcadena comenzando en el índice i y llegando hasta el índice j, pero sin incluirlo.
"""

"""
Dada una cadena, devuelve una cadena donde por cada carácter del original hay dos caracteres.

doble_caracter('The') → 'TThhee'
doble_caracter('AAbb') → 'AAAAbbbb'
doble_caracter('Hi-There') → 'HHii--TThheerree'
"""
def doble_caracter(cadena):
    nueva_cadena = ""

    for i in range(len(cadena)):
        nueva_cadena += cadena[i]*2
    return nueva_cadena

"""
Devuelve el número de veces que la cadena "código" aparece en cualquier parte de la cadena dada, excepto que se aceptará cualquier letra para la 'd', por lo que "cope" y "cooe" cuentan.

cuenta_codigo('aaacodebbb') → 1
cuenta_codigo('codexxcode') → 2
cuenta_codigo('cozexxcope') → 2
"""
def cuenta_codigo(cadena):
    contador = 0

    for i in range(len(cadena)):
        if i < len(cadena)-3:
            if cadena[i] == 'c' and cadena[i+1] == 'o' and cadena[i+3] == 'e':
                contador+=1
    return contador

"""
Devuelve el número de veces que la cadena "hi" aparece en cualquier parte de la cadena dada.

contador_hi('abc hi ho') → 1
contador_hi('ABChi hi') → 2
contador_hi('hihi') → 2
"""
def contador_hi(cadena):
    contador = 0

    for i in range(len(cadena)):
        if i < len(cadena)-1:
            if cadena[i] == 'h' and cadena[i+1] == 'i':
                contador+=1
    return contador

"""
Dadas dos cadenas, devuelve Verdadero si alguna de ellas aparece al final de la otra, ignorando las diferencias entre mayúsculas y minúsculas (en otras palabras, el cálculo no debe distinguir entre mayúsculas y minúsculas). Nota: s.lower() devuelve la versión en minúsculas de una cadena.

termina_cadena('Hiabc', 'abc') → Verdadero
termina_cadena('AbC', 'HiaBc') → Verdadero
termina_cadena('abc', 'abXabc') → Verdadero
"""
def end_other(a, b):
    a = a.lower()
    b = b.lower()
    return a.endswith(b) or b.endswith(a)

"""

Return True if the string "cat" and "dog" appear the same number of times in the given string.

gato_perro('catdog') → True
gato_perro('catcat') → False
gato_perro('1cat1cadodog') → True
"""
def gato_perro(cadena):
    gato = False
    perro = False
    contadorGato = 0
    contadorPerro = 0
  
    for i in range(len(cadena)):
        if i < len(cadena)-2:
            if cadena[i] == 'c' and cadena[i+1] == 'a' and cadena[i+2] == 't':
                gato = True
                contadorGato += 1
        
            if cadena[i] == 'd' and cadena[i+1] == 'o' and cadena[i+2] == 'g':
                perro = True
                contadorPerro += 1
          
    if len(cadena) < 3 or (gato and perro) and (contadorGato == contadorPerro):
        return True
    else:
        return False

"""
Devuelve Verdadero si la cadena dada contiene una aparición de "xyz" donde xyz no está precedido directamente por un punto (.). Por lo tanto, "xxyz" cuenta, pero "x.xyz" no.

xyz('abcxyz') → Verdadero
xyz('abc.xyz') → Falso
xyz('xyz.abc') → Verdadero
"""
def xyz(cadena):
    return 'xyz' in cadena.replace('.xyz', '')