"""
Problemas de calentamientos simples para comenzar, sin bucles.
"""

"""
El parámetro "semana" es verdadero si es un día laborable, y el parámetro "vacation" es verdadero si estamos de vacaciones. Dormimos hasta tarde si no es un día laborable o estamos de vacaciones. Devuelve verdadero si dormimos hasta tarde.

durmiendo_en(False, False) → True
durmiendo_en(True, False) → False
durmiendo_en(False, True) → True
"""
def durmiendo_en(semana, vacaciones):
    if semana and not vacaciones:
        return False
    else:
        return True

"""
Dado un int n, devuelve la diferencia absoluta entre n y 21, excepto que devuelve el doble de la diferencia absoluta si n es mayor que 21.

diff21(19) → 2
diff21(10) → 11
diff21(21) → 0
"""
def diff21(n):
    if n < 21:
        return 21 - n
    else:
        return (n - 21) * 2
    
"""
Dado un entero n, devuelve Verdadero si está dentro de 10 de 100 o 200. Nota: abs(num) calcula el valor absoluto de un número.

cerca_cien(93) → Verdadero
cerca_cien(90) → Verdadero
cerca_cien(89) → Falso
"""
def cerca_cien(n):
    if abs(100 - n) <= 10 or abs(200 - n) <= 10:
        return True
    else:
        return False
    
"""
Dada una cadena no vacía y un entero n, devuelve una nueva cadena donde se ha eliminado el carácter en el índice n. El valor de n será un índice válido de un carácter en la cadena original (es decir, n estará en el rango 0...len(str)-1 inclusive).

caracter_faltante('kitten', 1) → 'ktten'
caracter_faltante('kitten', 0) → 'itten'
caracter_faltante('kitten', 4) → 'kittn'
"""
def caracter_faltante(str, n):
    return str[:n] + str[n+1:]

"""
Tenemos dos monos, a y b, y los parámetros a_smile y b_smile indican si cada uno sonríe. Estamos en problemas si ambos sonríen o si ninguno lo está. Devuelve Verdadero si estamos en problemas.

mono_problema(True, True) → True
mono_problema(False, False) → True
mono_problema(True, False) → False
"""
def mono_problema(a, b):
    if a ^ b:
        return False
    else:
        return True
    
"""
Tenemos un loro que habla ruidosamente. El parámetro "hora" es la hora actual en el rango de 0 a 23. Estamos en problemas si el loro está hablando y la hora es antes de las 7 o después de las 20. Devuelve Verdadero si estamos en problemas.

loro_problema(True, 6) → Verdadero
loro_problema(True, 7) → Falso
loro_problema(False, 6) → Falso
"""
def loro_problema(habla, hora):
    if habla and hora < 7:
        return True
    elif habla and hora > 20:
        return True
    else:
        return False
    
"""
Dados dos valores enteros, devuelve Verdadero si uno es negativo y el otro positivo. Excepto si el parámetro "negativo" es Verdadero, en cuyo caso devuelve Verdadero solo si ambos son negativos.

pos_neg(1, -1, Falso) → Verdadero
pos_neg(-1, 1, Falso) → Verdadero
pos_neg(-4, -5, Verdadero) → Verdadero
"""

def pos_neg(a, b, negativo):
    if negativo:
        return a < 0 and b < 0
    else:
        return ((a < 0 and b > 0) or (a > 0 and b < 0))

"""
Dada una cadena, devuelve una nueva cadena donde se han intercambiado el primer y el último carácter.

frente_atras('code') → 'eodc'
frente_atras('a') → 'a'
frente_atras('ab') → 'ba'
"""
def frente_atras(cadena):
    if len(cadena) >= 2:
        return cadena[-1] + cadena[1:-1] + cadena[0]
    else:
        return cadena
    
"""
Dados dos valores enteros, devuelve su suma. A menos que ambos valores sean iguales, devuelve el doble de su suma.

suma_doble(1, 2) → 3
suma_doble(3, 2) → 5
suma_doble(2, 2) → 8
"""
def suma_double(a, b):
    if a != b:
        return a + b
    elif a == b:
        return (a + b) * 2
    
"""
Dados dos enteros, a y b, devuelve Verdadero si uno de ellos es 10 o si su suma es 10.

haces10(9, 10) → Verdadero
haces10(9, 9) → Falso
haces10(1, 9) → Verdadero
"""
def haces10(a, b):
    if a == 10 or b == 10:
        return True
    elif a + b == 10:
        return True
    else:
        return False
    
"""
Dada una cadena, devuelve una nueva cadena donde se ha añadido "no" al principio. Sin embargo, si la cadena ya empieza con "no", devuelve la cadena sin cambios.

no_cadena('candy') → 'not candy'
no_cadena('x') → 'not x'
no_cadena('not bad') → 'not bad'
"""
def no_cadena(cadena):
    div = cadena.split(" ")
  
    if div[0] != "not": 
        return "not " + cadena
    elif "not" not in cadena:
        return "not " + cadena
    else:
        return cadena
    
"""
Dada una cadena, diremos que el frente son los 3 primeros caracteres de la cadena. Si la longitud de la cadena es menor que 3, el frente es lo que esté ahí. Devuelve una nueva cadena con 3 copias del frente.

frente3('Java') → 'JavJavJav'
frente3('Chocolate') → 'ChoChoCho'
frente3('abc') → 'abcabcabc'
"""
def frente3(cadena):
  return cadena[0:3] * 3