"""
Problemas básicos de listas de Python: sin bucles. Utilice a[0], a[1], ... para acceder a los elementos de una lista, len(a) es la longitud.
"""

"""
Dado un array de enteros, devuelve Verdadero si 6 aparece como el primer o el último elemento del array. El array tendrá una longitud de 1 o más.

primero_ultimo6([1, 2, 6]) → Verdadero
primero_ultimo6([6, 1, 2, 3]) → Verdadero
primero_ultimo6([13, 6, 1, 2, 3]) → Falso
"""
def primero_ultimo6(nums):
    if len(nums) > 0:
        if nums[0] == 6 or nums[len(nums)-1] == 6:
            return True
        else:
            return False
    else:
        return False
    
"""
Dados dos arrays de enteros, a y b, devuelve Verdadero si tienen el mismo primer o último elemento. Ambos arrays tendrán una longitud de 1 o más.

final_comun([1, 2, 3], [7, 3]) → Verdadero
final_comun([1, 2, 3], [7, 3, 2]) → Falso
final_comun([1, 2, 3], [1, 3]) → Verdadero
"""
def final_comun(a, b):
    if a[0] == b[0] or a[len(a)-1] == b[len(b)-1]:
        return True
    else:
        return False
    
"""
Dado un array de enteros de longitud 3, devuelve un nuevo array con los elementos en orden inverso, de modo que {1, 2, 3} se convierte en {3, 2, 1}.

alreves3([1, 2, 3]) → [3, 2, 1]
alreves3([5, 11, 9]) → [9, 11, 5]
alreves3([7, 0, 0]) → [0, 0, 7]
"""
def alreves3(nums):
    nuevos_numeros = [0] * len(nums)

    nuevos_numeros[0] = nums[2]
    nuevos_numeros[1] = nums[1]
    nuevos_numeros[2] = nums[0]

    return nuevos_numeros

"""
Dados dos arrays de enteros, a y b, cada uno de longitud 3, se devuelve un nuevo array de longitud 2 que contiene sus elementos centrales.

camino_medio([1, 2, 3], [4, 5, 6]) → [2, 5]
camino_medio([7, 7, 7], [3, 8, 0]) → [7, 8]
camino_medio([5, 2, 9], [1, 4, 5]) → [2, 4]
"""
def camino_medio(a, b):
    medio = []

    medio.append(a[1])
    medio.append(b[1])
    return medio

"""
Dado un array de enteros, devuelve Verdadero si el array tiene una longitud de 1 o más, y el primer y el último elemento son iguales.

mismo_primer_ultimo([1, 2, 3]) → Falso
mismo_primer_ultimo([1, 2, 3, 1]) → Verdadero
mismo_primer_ultimo([1, 2, 1]) → Verdadero
"""
def mismo_primer_ultimo(nums):
    if len(nums) > 0:
        if nums[0] == nums[len(nums)-1]:
            return True
        else:
            return False
    else:
        return False
    
"""
Dado un array de enteros de longitud 3, devuelve la suma de todos los elementos.

suma3([1, 2, 3]) → 6
suma3([5, 11, 2]) → 18
suma3([7, 0, 0]) → 7
"""
def suma3(nums):
    return nums[0] + nums[1] + nums[2]

"""
Dado un array de enteros de longitud 3, determine cuál es mayor, el primero o el último elemento del array, y establezca todos los demás elementos con ese valor. Devuelva el array modificado.

maximo_final3([1, 2, 3]) → [3, 3, 3]
maximo_final3([11, 5, 9]) → [11, 11, 11]
maximo_final3([2, 11, 3]) → [3, 3, 3]
"""
def maximo_final3(nums):
    nuevos_numeros = []
    tmp = 0

    if nums[0] < nums[2]:
        tmp = nums[2]
    else:
        tmp = nums[0]

    nuevos_numeros.append(tmp)
    nuevos_numeros.append(tmp)
    nuevos_numeros.append(tmp)
    return nuevos_numeros

"""
Dado un array de enteros, devuelve un nuevo array de longitud 2 que contiene el primer y el último elemento del array original. El array original tendrá una longitud de 1 o más.

hacer_final([1, 2, 3]) → [1, 3]
hacer_final([1, 2, 3, 4]) → [1, 4]
hacer_final([7, 4, 6, 2]) → [7, 2]
"""
def hacer_final(nums):
    nuevos_numeros = []

    nuevos_numeros.append(nums[0])
    nuevos_numeros.append(nums[len(nums)-1])
    return nuevos_numeros

"""
Devuelve una matriz de enteros de longitud 3 que contiene los primeros 3 dígitos de pi: {3, 1, 4}.

hacer_pi() → [3, 1, 4]
"""
def hacer_pi():
    pi = []

    pi.append(3)
    pi.append(1)
    pi.append(4)
    return pi

"""
Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.

rotar_izquierda3([1, 2, 3]) → [2, 3, 1]
rotar_izquierda3([5, 11, 9]) → [11, 9, 5]
rotar_izquierda3([7, 0, 0]) → [0, 0, 7]
"""
def rotar_izquierda3(nums):
    nuevos_numeros = []

    nuevos_numeros.append(nums[1])
    nuevos_numeros.append(nums[2])
    nuevos_numeros.append(nums[0])
    return nuevos_numeros

"""
Dado un array de enteros, devuelve la suma de los dos primeros elementos del array. Si la longitud del array es menor que 2, simplemente suma los elementos existentes, devolviendo 0 si la longitud del array es 0.

suma2([1, 2, 3]) → 3
suma2([1, 1]) → 2
suma2([1, 1, 1, 1]) → 2
"""
def suma2(nums):
    if len(nums) > 1:
        return nums[0] + nums[1]
    elif len(nums) == 1:
        return nums[0]
    else:
        return 0
    
"""
Dado un array int de longitud 2, devuelve Verdadero si contiene un 2 o un 3.

tiene23([2, 5]) → Verdadero
tiene23([4, 3]) → Verdadero
tiene23([4, 5]) → Falso
"""
def tiene23(nums):
    if nums[0] == 2 or nums[0] == 3:
        return True
    elif nums[1] == 2 or nums[1] == 3:
        return True
    else:
        return False