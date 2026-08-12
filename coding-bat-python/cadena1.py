"""
Problemas básicos de cadenas en Python: sin bucles. Se usa + para combinar cadenas. Len(str) es el número de caracteres de una cadena. str[i:j] extrae la subcadena desde el índice i hasta el índice j, sin incluirlo.
"""

"""
Dado un nombre de cadena, p. ej., "Bob", devuelve un saludo con el formato "¡Hola Bob!".

hola_nombre('Bob') → '¡Hola Bob!'
hola_nombre('Alice') → '¡Hola Alice!'
hola_nombre('X') → '¡Hola X!'
"""
def hola_nombre(nombre):
    return "Hola " + nombre + "!"

"""
Dada una cadena de salida de longitud 4, como "<<>>", y una palabra, devuelve una nueva cadena donde la palabra se encuentra en el medio de la cadena de salida, p. ej., "<<palabra>>".

distinguir_palabra('<<>>', 'Yay') → '<<Yay>>'
distinguir_palabra('<<>>', 'WooHoo') → '<<WooHoo>>'
distinguir_palabra('[[]]', 'palabra') → '[[palabra]]'
"""
def distinguir_palabra(fuera, palabra):
    return fuera[0:2] + palabra + fuera[2::]

"""
Dada una cadena de longitud par, devuelve la primera mitad. Por lo tanto, la cadena "WooHoo" devuelve "Woo".

primera_parte('WooHoo') → 'Woo'
primera_parte('HelloThere') → 'Hello'
primera_parte('abcdef') → 'abc'
"""
def primera_parte(cadena):
    return str[:len(cadena)/2]

"""
Dadas dos cadenas, devuelve su concatenación, pero omite el primer carácter de cada una. Las cadenas tendrán una longitud mínima de 1.

no_comienza('Hello', 'There') → 'ellohere'
no_comienza('java', 'code') → 'avaode'
no_comienza('shotl', 'java') → 'hotlava'
"""
def no_comienza(a, b):
    return a[1::] + b[1::]

"""
Dadas dos cadenas, a y b, devuelve el resultado de ponerlas juntas en el orden abba, p. ej. "Hola" y "Adiós" devuelve "HolaAdiósAdiósHola".

hacer_abba('Hola', 'Adiós') → 'HolaAdiósAdiósHola'
hacer_abba('Yo', 'Alice') → 'YoAliceAliceYo'
hacer_abba('Qué', 'Arriba') → 'QuéArribaArribaQué'
"""
def hacer_abba(a, b):
    return a + b + b + a

"""
Dada una cadena, devuelve una nueva cadena compuesta por 3 copias de los 2 últimos caracteres de la cadena original. La longitud de la cadena será de al menos 2 caracteres.

extra_final('Hello') → 'lololo'
extra_final('ab') → 'ababab'
extra_final('Hi') → 'HiHiHi'
"""
def extra_final(str):
    return str[-2:] * 3

"""
Dada una cadena, devuelve una versión sin el primer ni el último carácter, por lo que "Hola" devuelve "ell". La longitud de la cadena será de al menos 2 caracteres.

sin_final('hello') → 'ell'
sin_final('java') → 'av'
sin_final('coding') → 'odin'
"""
def sin_final(cadena):
    return cadena[1:len(cadena)-1]

"""
Dada una cadena, devuelve una versión rotada 2 a la izquierda, donde los dos primeros caracteres se mueven al final. La longitud de la cadena será de al menos 2 caracteres.

izquierda2('Hello') → 'lloHe'
izquierda2('java') → 'vaja'
izquierda2('Hi') → 'Hi'
"""
def izquierda2(cadena):
    return cadena[2::] + cadena[0:2]

"""
La web se construye con cadenas HTML como "<i>Yay</i>", que se escribe "Yay" en cursiva. En este ejemplo, la etiqueta "i" crea <i> y </i> que rodean la palabra "Yay". Dadas las cadenas de etiqueta y palabra, crea la cadena HTML con etiquetas alrededor de la palabra, por ejemplo, "<i>Yay</i>".

hacer_etiquetas('i', 'Yay') → '<i>Yay</i>'
hacer_etiquetas('i', 'Hello') → '<i>Hello</i>'
hacer_etiquetas('cite', 'Yay') → '<cite>Yay</cite>'
"""
def hacer_etiquetas(etiqueta, palabra):
    return "<" + etiqueta + ">" + palabra + "</" + etiqueta + ">"

"""
Dada una cadena, devuelve la cadena formada por sus dos primeros caracteres, por lo que la cadena "Hola" da como resultado "Él". Si la cadena es menor que 2 caracteres, devuelve el valor que exista, por lo que "X" da como resultado "X", y la cadena vacía "" da como resultado la cadena vacía "".

primeros_dos('Hola') → 'Ho'
primeros_dos('abcdefg') → 'ab'
primeros_dos('ab') → 'ab'
"""
def primeros_dos(cadena):
    if len(cadena) > 1:
        return cadena[0:2]
    else:
        return cadena
    
"""
Dadas dos cadenas, a y b, se devuelve una cadena con la forma short+long+short, con la cadena más corta en el exterior y la más larga en el interior. Las cadenas no tendrán la misma longitud, pero pueden estar vacías (longitud 0).

combo_cadena('Hola', 'hi') → 'hiHolahi'
combo_cadena('hi', 'Hola') → 'hiHolahi'
combo_cadena('aaa', 'b') → 'baaab'
"""
def combo_cadena(a, b):
    if len(a) < len(b):
        return a + b + a
    else:
        return b + a + b