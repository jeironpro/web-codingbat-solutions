"""
Problemas básicos de lógica booleana: si, si no y o no
"""

"""
Cuando las ardillas se reúnen para una fiesta, les gusta fumar puros. Una fiesta de ardillas es exitosa cuando el número de puros está entre 40 y 60, ambos inclusive. A menos que sea fin de semana, en cuyo caso no hay límite superior para el número de puros. Devuelve Verdadero si la fiesta con los valores dados es exitosa, o Falso en caso contrario.

fiesta_cigarros(30, Falso) → Falso
fiesta_cigarros(50, Falso) → Verdadero
fiesta_cigarros(70, Verdadero) → Verdadero
"""
def fiesta_cigarros(cigarros, fin_semana):
    if fin_semana:
        if cigarros >= 40:
            return True
        return False
    else:
        if cigarros >= 40 and cigarros <= 60:
            return True
        return False

"""
Conduces un poco rápido y un policía te detiene. Escribe el código para calcular el resultado, codificado como un valor entero: 0 = sin multa, 1 = multa pequeña, 2 = multa grande. Si la velocidad es de 60 o menos, el resultado es 0. Si la velocidad está entre 61 y 80 inclusive, el resultado es 1. Si la velocidad es de 81 o más, el resultado es 2. A menos que sea tu cumpleaños; ese día, tu velocidad puede ser 5 veces mayor en todos los casos.

atrapado_acelerando(60, False) → 0
atrapado_acelerando(65, False) → 1
atrapado_acelerando(65, True) → 0
"""
def atrapado_acelerando(rapido, cumpleanos):
    if not cumpleanos:
        if rapido <= 60:
            return 0
        elif rapido >= 61 and rapido <= 80:
            return 1
        elif rapido >= 81:
            return 2
    else:
        if rapido <= 65:
            return 0
        elif rapido >= 66 and rapido <= 85:
            return 1
        elif rapido >= 86:
            return 2
        return 0
    
"""
El número 6 es un número verdaderamente grande. Dados dos valores enteros, a y b, devuelve Verdadero si alguno de ellos es 6, o si su suma o diferencia es 6. Nota: La función abs(num) calcula el valor absoluto de un número.

amor6(6, 4) → Verdadero
amor6(4, 5) → Falso
amor6(1, 5) → Verdadero
"""
def amor6(a, b):
    if a == 6 or b == 6:
        return True

    if a + b == 6:
        return True

    if abs(a - b) == 6:
        return True

    return False

"""
Tú y tu cita intentan conseguir una mesa en un restaurante. El parámetro "tú" representa el estilo de vuestra ropa, en el rango de 0 a 10, y "cita" representa el estilo de la ropa de vuestra cita. El resultado de obtener la mesa se codifica como un valor entero con 0=no, 1=quizás, 2=sí. Si alguno de los dos tiene un estilo muy elegante, con un valor de 8 o más, el resultado es 2 (sí). Con la excepción de que si alguno de los dos tiene un estilo de 2 o menos, el resultado es 0 (no). De lo contrario, el resultado es 1 (quizás).

cita_moda(5, 10) → 2
cita_moda(5, 2) → 0
cita_moda(5, 5) → 1
"""
def cita_moda(tu, cita):
    if tu >= 8 and cita > 2:
        return 2
    elif tu > 2 and cita >= 8:
        return 2
    elif tu <= 2 or cita <= 2:
        return 0
    else:
        return 1
    
"""
Dados dos enteros, a y b, se devuelve su suma. Sin embargo, las sumas en el rango de 10 a 19 inclusive están prohibidas, por lo que en ese caso se devuelve simplemente 20.

sorta_suma(3, 4) → 7
sorta_suma(9, 4) → 20
sorta_suma(10, 11) → 21
"""
def sorta_suma(a, b):
    if a + b >= 10 and a + b <= 19:
        return 20;
    elif a + b > 19:
        return a + b
    else:
        return a + b
    
"""
Dado un número n, devuelve Verdadero si n está en el rango de 1 a 10, ambos inclusive. A menos que outside_mode sea Verdadero, en cuyo caso devuelve Verdadero si el número es menor o igual a 1, o mayor o igual a 10.

en1a10(5, Falso) → Verdadero
en1a10(11, Falso) → Falso
en1a10(11, Verdadero) → Verdadero
"""
def en1a10(num, modo_afuera):
    if not modo_afuera and num >= 1 and num <= 10:
        return True
    elif modo_afuera and (num <= 1 or num >= 10):
        return True
    else:
        return False
    
"""
Las ardillas de Palo Alto pasan la mayor parte del día jugando. En particular, juegan si la temperatura está entre 60 y 90 grados (ambos inclusive). A menos que sea verano, el límite superior es 100 en lugar de 90. Dado un entero `temperatura` y un booleano `is_summer`, devuelve `True` si las ardillas juegan y `False` en caso contrario.

juego_ardilla(70, False) → True
juego_ardilla(95, False) → False
juego_ardilla(95, True) → True
"""
def juego_ardilla(temperatura, es_verano):
    if es_verano and temperatura >= 60 and temperatura <= 100:
        return True

    if not es_verano and temperatura >= 60 and temperatura <= 90:
        return True
    else:
        return False

"""
Dado un día de la semana codificado como 0=Dom, 1=Lun, 2=Mar, ...6=Sáb, y un booleano que indica si estamos de vacaciones, devuelve una cadena con el formato "7:00" que indica cuándo debe sonar el despertador. Entre semana, la alarma debe sonar a las 7:00 y los fines de semana a las 10:00. A menos que estemos de vacaciones, en cuyo caso entre semana debe sonar a las 10:00 y los fines de semana debe estar desactivada.

despertador(1, False) → '7:00'
despertador(5, False) → '7:00'
despertador(0, False) → '10:00'
"""
def despertador(dia, vacaciones):
    if not vacaciones:
        if dia >= 1 and dia <= 5:
            return "7:00"
        else: 
            return "10:00"
    else:
        if dia >= 1 and dia <= 5:
            return "10:00"
        else:
            return "off"
        
"""
Dado un número no negativo "num", devuelve Verdadero si num está dentro de 2 de un múltiplo de 10. Nota: (a % b) es el residuo de dividir a entre b, por lo que (7 % 5) es 2. Véase también: Introducción a la Modulación

cerca_diez(12) → Verdadero
cerca_diez(17) → Falso
cerca_diez(19) → Verdadero
"""
def cerca_diez(num):
    if num % 10 == 0:
        return True

    if num % 10 == 1:
        return True

    if num % 10 == 2:
        return True

    if num % 10 == 8:
        return True


    if num % 10 == 9:
        return True
    else:
        return False