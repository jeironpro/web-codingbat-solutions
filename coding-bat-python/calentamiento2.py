"""
Problemas de listas/cuerdas de calentamiento medio con bucles
"""

"""
Dada una cadena y un entero no negativo n, devuelve una cadena más grande que contiene n copias de la cadena original.

repetir_cadena('Hi', 2) → 'HiHi'
repetir_cadena('Hi', 3) → 'HiHiHi'
repetir_cadena('Hi', 1) → 'Hi'
"""
def repetir_cadena(str, n):
    return str * n

"""
Dada una cadena no vacía como "Código", se devuelve una cadena como "CCoCodCode".

cadena_explosion('Código') → 'CCoCodCode'
cadena_explosion('abc') → 'aababc'
cadena_explosion('ab') → 'aab'
"""
def string_splosion(cadena):
    nueva_cadena = ""

    contador = 1
    for i in range(len(cadena)):
        for j in range(0, contador, 1):
            nueva_cadena += cadena[j]
        contador += 1
    return nueva_cadena

"""
Dado un array de enteros, devuelve Verdadero si uno de los primeros 4 elementos del array es un 9. La longitud del array puede ser menor que 4.

matriz_frente_9([1, 2, 9, 3, 4]) → Verdadero
matriz_frente_9([1, 2, 3, 4, 9]) → Falso
matriz_frente_9([1, 2, 3, 4, 5]) → Falso
"""
def matriz_frente_9(nums):
    for i in range(len(nums)):
        if i < 4:
            if nums[i] == 9:
                return True
    return False

"""
Dada una cadena y un entero no negativo n, diremos que el inicio de la cadena son los 3 primeros caracteres, o el que esté presente si la cadena tiene una longitud menor a 3. Devuelve n copias del inicio;

repetir_frente('Chocolate', 2) → 'ChoCho'
repetir_frente('Chocolate', 3) → 'ChoChoCho'
repetir_frente('Abc', 3) → 'AbcAbcAbc'
"""
def repetir_frente(str, n):
    return str[0:3] * n

"""
Dada una cadena, devuelve el número de veces que una subcadena de longitud 2 aparece en la cadena, y también como los dos últimos caracteres de la cadena; por lo tanto, "hixxxhi" da como resultado 1 (no se contará la subcadena final).

ultimos2('hixxhi') → 1
ultimos2('xaxxaxaxx') → 1
ultimos2('axxxaaxx') → 2
"""
def ultimos2(cadena):
    if len(cadena) < 2: 
        return 0

    i = 0
    contador = 0

    while (i < len(cadena)-2):
        if cadena[i:i+2] == cadena[len(cadena)-2:]:
            contador += 1
        i += 1

    return contador

"""
Dado un array de enteros, devuelve Verdadero si la secuencia de números 1, 2, 3 aparece en algún lugar del array.

matriz123([1, 1, 2, 3, 1]) → Verdadero
matriz123([1, 1, 2, 4, 1]) → Falso
matriz123([1, 1, 2, 1, 2, 3]) → Verdadero
"""
def matriz123(nums):
    secuencia = False

    for i in range(len(nums)): 
        if i < len(nums)-2:
            if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:
                secuencia = True 
    if secuencia: 
        return True
    return False

"""
Dada una cadena, devuelve una nueva cadena compuesta por todos los demás caracteres, comenzando por el primero. Por lo tanto, "Hola" da como resultado "Hlo".

pedazo_cadena('Hola') → 'Hlo'
pedazo_cadena('Hi') → 'H'
pedazo_cadena('Heeololeo') → 'Hello'
"""
def pedazo_cadena(cadena):
    nueva_cadena = ""
    i = 0

    while (i < len(cadena)):
        nueva_cadena += str[i]
        i += 2
    return nueva_cadena

"""
Dado un array de enteros, devuelve el número de 9 en el array.

matriz_cuenta9([1, 2, 9]) → 1
matriz_cuenta9([1, 9, 9]) → 2
matriz_cuenta9([1, 9, 9, 3, 9]) → 3
"""
def matriz_cuenta9(nums):
    count = 0

    for i in range(len(nums)):
        if nums[i] == 9:
            count += 1
    return count

"""
Dadas dos cadenas, a y b, devuelve el número de posiciones donde contienen la misma subcadena de longitud 2. Por lo tanto, "xxcaazz" y "xxbaaz" dan como resultado 3, ya que las subcadenas "xx", "aa" y "az" aparecen en el mismo lugar en ambas cadenas.

cadena_fosforo('xxcaazz', 'xxbaaz') → 3
cadena_fosforo('abc', 'abc') → 2
cadena_fosforo('abc', 'axc') → 0
"""
def cadena_fosforo(a, b):
    contador = 0;
    longitud = min(len(a), len(b))

    for i in range(longitud):
        if i < longitud-1:
            sub = a[i:i+2]
            if (sub == b[i:i+2]):
                contador += 1
    return contador