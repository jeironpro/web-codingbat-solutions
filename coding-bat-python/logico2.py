"""
Acertijos de lógica booleana de nivel medio: si, si no y o no
"""

"""
Queremos crear una fila de ladrillos con una longitud de 1/2 pulgadas. Tenemos varios ladrillos pequeños (de 2,5 cm cada uno) y grandes (de 12,7 cm cada uno). Devuelve "True" si es posible crear la fila eligiendo entre los ladrillos dados. Esto es un poco más difícil de lo que parece y se puede hacer sin bucles. Véase también: Introducción a MakeBricks

hacer_ladrillos(3, 1, 8) → True
hacer_ladrillos(3, 1, 9) → False
hacer_ladrillos(3, 2, 10) → True
"""
def hacer_ladrillos(pequeno, grande, meta):
    if ((pequeno + grande * 5) < meta) or (meta % 5 > pequeno):
        return False
    else:
        return True
    
"""
Dados 3 valores enteros, a b c, se devuelve su suma. Sin embargo, si alguno de los valores es un número adolescente (en el rango de 13 a 19 inclusive), ese valor cuenta como 0, excepto 15 y 16, que no cuentan como un número adolescente. Escriba un ayudante independiente "def fix_teen(n):" que tome un valor entero y lo devuelva fijo para la regla de los números adolescentes. De esta manera, se evita repetir el código de los números adolescentes tres veces (es decir, "descomposición"). Defina el ayudante a continuación y con el mismo nivel de sangría que la función principal no_teen_sum().

no_suma_diez(1, 2, 3) → 6
no_suma_diez(2, 13, 1) → 3
no_suma_diez(2, 1, 14) → 3
"""
def no_suma_diez(a, b, c):
    if a == 13 or a == 14 or a > 16 and a <= 19:
        a = 0
    if b == 13 or b == 14 or b > 16 and b <= 19:
        b = 0
    if c == 13 or c == 14 or c > 16 and c <= 19:
        c = 0
    return a + b + c

"""
Queremos crear un paquete con la cantidad objetivo de kilos de chocolate. Tenemos barras pequeñas (de 1 kilo cada una) y barras grandes (de 5 kilos cada una). Devuelve el número de barras pequeñas a usar, asumiendo que siempre usamos las barras grandes antes que las pequeñas. Devuelve -1 si no se puede.

hacer_chocolate(4, 1, 9) → 4
hacer_chocolate(4, 1, 10) → -1
hacer_chocolate(4, 1, 7) → 2
"""
def hacer_chocolate(pequeno, grande, meta):
    barras_grandes = 0
    if grande < meta / 5:
        barras_grandes = grande
    else:
        barras_grandes = meta/5
        resto = meta - (barras_grandes * 5)
    if resto <= pequeno: 
        return resto
    return -1

"""
Dados 3 valores enteros, a, b, c, se devuelve su suma. Sin embargo, si uno de los valores es igual a otro, no se contabiliza para la suma.

suma_solitaria(1, 2, 3) → 6
suma_solitaria(3, 2, 3) → 2
suma_solitaria(3, 3, 3) → 0
"""
def suma_solitaria(a, b, c):
    if a == b and b == c:
        return 0
    elif a == b:
        return c
    elif b == c:
        return a
    elif a == c:
        return b
    else:
        return a + b + c
    
"""
Para este problema, redondearemos un valor entero al siguiente múltiplo de 10 si su dígito más a la derecha es 5 o mayor; por lo tanto, 15 se redondea a 20. Alternativamente, se redondea a la baja al múltiplo anterior de 10 si su dígito más a la derecha es menor que 5; por lo tanto, 12 se redondea a la baja hasta 10. Dados 3 enteros, a b c, devuelve la suma de sus valores redondeados. Para evitar la repetición de código, escriba un ayudante independiente "def round10(num):" y llámelo 3 veces. Escriba el ayudante completamente debajo y con la misma sangría que round_sum().

suma_redonda(16, 17, 18) → 60
suma_redonda(12, 13, 14) → 30
suma_redonda(6, 4, 4) → 10
"""
def suma_redonda(a, b, c):
    a_rond = rond10(a)
    b_rond = rond10(b)
    c_rond = rond10(c)
  
    return a_rond + b_rond + c_rond;

def rond10(num):
    if num % 10 >= 5:
        return (num // 10 + 1) * 10
    else:
        return (num // 10) * 10
  
"""
Dados 3 valores enteros, a b c, se devuelve su suma. Sin embargo, si uno de los valores es 13, no se contabiliza para la suma, y ​​los valores a su derecha tampoco. Por ejemplo, si b es 13, ni b ni c cuentan.

suma_afortunada(1, 2, 3) → 6
suma_afortunada(1, 2, 13) → 3
suma_afortunada(1, 13, 3) → 1
"""
def suma_afortunada(a, b, c):
    suma = a + b + c
    if a == 13:
        return 0
    elif b == 13:
        return a
    elif c == 13:
        return a + b
    else:
        return suma

"""
Dados tres enteros, a b c, devuelve Verdadero si uno de b o c es "cercano" (difieren de a como máximo en 1), mientras que el otro es "lejano", difiriendo de los otros dos valores en 2 o más. Nota: abs(num) calcula el valor absoluto de un número.

cerca_lejos(1, 2, 10) → Verdadero
cerca_lejos(1, 2, 3) → Falso
cerca_lejos(4, 1, 3) → Verdadero
"""
def cerca_lejos(a, b, c):
    if abs(a - b) <= 1:
        if abs(a - c) >= 2 and abs(b - c) >= 2:
            return True

    if abs(a - c) <= 1:
        if abs(a - b) >= 2 and abs(b - c) >= 2:
            return True
    return False