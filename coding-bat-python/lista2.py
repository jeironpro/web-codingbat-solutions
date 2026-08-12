"""
Problemas de listas de Python medianos: 1 bucle. Use a[0], a[1], ... para acceder a los elementos de una lista, len(a) es la longitud.
"""

"""
Devuelve el número de enteros pares en el array dado. Nota: el operador % "mod" calcula el resto; por ejemplo, 5 % 2 es 1.

contar_pares([2, 1, 2, 3, 4]) → 3
contar_pares([2, 2, 0]) → 3
contar_pares([1, 3, 5]) → 0
"""
def contar_pares(nums):
    contador = 0

    for i in range(len(nums)):
        if nums[i] % 2 == 0:
            contador += 1
    return contador

"""
Devuelve la suma de los números del array, devolviendo 0 si el array está vacío. Excepto que el número 13 trae muy mala suerte, por lo que no cuenta, y los números inmediatamente posteriores tampoco.

suma13([1, 2, 2, 1]) → 6
suma13([1, 1]) → 2
suma13([1, 2, 2, 1, 13]) → 6
"""
def sum13(nums):
    suma = 0

    for i in range(len(nums)):
        if i > 0 and nums[i-1] == 13:
            continue

        if nums[i] != 13:
            suma += nums[i]
    return suma

"""

Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. Note: the built-in min(v1, v2) and max(v1, v2) functions return the smaller or larger of two values.

grande_diff([10, 3, 5, 6]) → 7
grande_diff([7, 2, 10, 9]) → 8
grande_diff([2, 10, 7, 2]) → 8
"""
def grande_diff(nums):
    return max(nums) - min(nums)

"""
Devuelve la suma de los números del array, pero ignora las secciones de números que empiezan con 6 y se extienden hasta el siguiente 7 (cada 6 irá seguido de al menos un 7). Devuelve 0 si no hay números.

suma67([1, 2, 2]) → 5
suma67([1, 2, 2, 6, 99, 99, 7]) → 5
suma67([1, 1, 6, 7, 2]) → 4
"""
def suma67(nums):
    total = 0
    tmp = False

    for num in nums:
        if num == 6:
            tmp = True
        elif tmp:
            if num == 7:
                tmp = False
        else:
            total += num
    return total

"""
Devuelve el promedio "centrado" de un array de enteros, que llamaremos la media de los valores, pero ignorando los valores mayor y menor del array. Si hay varias copias del valor menor, se ignora solo una, y lo mismo ocurre con el valor mayor. Se utiliza la división de enteros para obtener el promedio final. Se puede asumir que el array tiene una longitud de 3 o más.

promedio_centrado([1, 2, 3, 4, 100]) → 3
promedio_centrado([1, 1, 5, 5, 10, 8, 7]) → 5
promedio_centrado([-10, -4, -2, -4, -2, 0]) → -3
"""
def promedio_centrado(nums):
    nums_ordenados = sorted(nums)
    nums_invertidos = nums_ordenados[1:-1]
    return sum(nums_invertidos) // len(nums_invertidos)

"""
Dado un array de enteros, devuelve Verdadero si el array contiene un 2 junto a otro 2 en algún punto.

tiene22([1, 2, 2]) → Verdadero
tiene22([1, 2, 1, 2]) → Falso
tiene22([2, 1, 2]) → Falso
"""
def tiene22(nums):
    for i in range(len(nums)):
        if i < len(nums)-1:
            if nums[i] == 2 and nums[i+1] == 2:
                return True
    return False