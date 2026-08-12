/* 
 * Problemas de nivel medio de logica booleana: if else && || !. 
 */
public class Logico2 {
    /* 
    Queremos hacer una fila de ladrillos que tenga una longitud de 10 pulgadas. Tenemos una cantidad de ladrillos pequeños (1 pulgada cada uno) y ladrillos grandes (5 pulgadas cada uno). Retorna verdadero si es posible hacer la fila eligiendo entre los ladrillos dados. Esto es un poco más dificil de lo que parece y se puede hacer sin bucles.

    hacerLadrillos(3, 1, 8) → true
    hacerLadrillos(3, 1, 9) → false
    hacerLadrillos(3, 2, 10) → true
    */
    public boolean hacerLadrillos(int pequeno, int grande, int meta) {
        boolean resultado = ((pequeno + grande * 5) < meta) || (meta % 5 > pequeno) ? false : true;
        return resultado;
    }

    /* 
    Dados 3 valores enteros a, b y c, retorna la suma de ellos. Sin embargo, si uno de los valore es un adolescente (en el rango 13-19 inclusivos), entonces ese valor cuenta como 0, excepto 15 y 16, que no cuentan como adolescente. Escribe un asistente independiente "public int noAdolescentes(int n) {" que tome un valor entero y devuelva ese valor fijo para la regla de adolescentes. De esta manera, evitas repetir el código de adolescentes 3 veces (es decir, "descomposición"). Define el asistente a continuación y en el mismo nivel de sangría que el noSumaAdolescente() principal. "}".

    noSumaAdolescentes(1, 2, 3) → 6
    noSumaAdolescentes(2, 13, 1) → 3
    noSumaAdolescentes(2, 1, 14) → 3
    */
    public int noSumaAdolescentes(int a, int b, int c) {
        if (a == 13 || a == 14 || a > 16 && a <= 19) {
            a = 0;
        }
        
        if (b == 13 || b == 14 || b > 16 && b <= 19) {
            b = 0;
        }
        
        if (c == 13 || c == 14 || c > 16 && c <= 19) {
            c = 0;
        }
        return a + b + c;
    }

    /* 
    Dados dos valores mayores a 0, retorna el valor que esté más cerca de 21 sin excederlo. Retorna 0 si ambos excenden el valor.

    veintiuna(19, 21) → 21
    veintiuna(21, 19) → 21
    veintiuna(19, 22) → 19
    */
    public int veintiuna(int a, int b) {
        if (a <= 21 && b <= 21) {
            if (a > b) {
                return a;
            } else {
                return b;
            }
        } else if (a <= 21 && b > 21) {
            return a;
        } else if (b <= 21 && a > 21) {
            return b;
        } else {
            return 0;
        }
    }

    /* 
    Dados tres valores enteros, a, b y c, retorna la suma de ellos. Sin embargo, si uno de los valores es igual a otro, no se tiene en cuenta para la suma.

    sumaSolitaria(1, 2, 3) → 6
    sumaSolitaria(3, 2, 3) → 2
    sumaSolitaria(3, 3, 3) → 0
    */
    public int sumaSolitaria(int a, int b, int c) {
        if (a == b && b == c) {
            return 0;
        } else if (a == b) {
            return c;
        } else if (b == c) {
            return a;
        } else if (a == c) {
            return b;
        } else {
            return a + b + c;
        }
    }

    /* 
    Para este problema, redondearemos un valor entero hacia arriba hasta el siguiente múltiplo de 10 si su digito más a la derecha es 5 o más, por lo que 15 se redondea hacia arriba hasta 20. Alternativamente, redondea hacia abajo hasta el múltiplo anterior de 10 si su digito más a la derecha es menor que 5, por lo que 12 se redondea hacia abajo hasta 10. Dados 3 enteros, a, b y c devuelve la suma de sus valores redondeados. Para evitar la repetición de código, escribe un ayudante separado "public int redondear10(int num) {" y llámalo 3 veces. Escribe el ayudante completamente debajo y en el mismo nivel de sangría que redondear suma()."}".

    redondearSuma(16, 17, 18) → 60
    redondearSuma(12, 13, 14) → 30
    redondearSuma(6, 4, 4) → 10
    */
    public int redondearSuma(int a, int b, int c) {
        int redondearA = redondear10(a);
        int redondearB = redondear10(b);
        int redondearC = redondear10(c);
        
        return redondearA + redondearB + redondearC;
    }
      
    public int redondear10(int num) {
        String cadena = "" + num;
        int numero = 0;
        
        if (cadena.length() == 1) {
            numero = Integer.parseInt(""+cadena.charAt(0));
        } else {
            numero = Integer.parseInt(""+cadena.charAt(cadena.length()-1));
        }
        
        if (numero == 4) {
            return num - 4;
        }
        
        if (numero == 3) {
            return num - 3;
        }
        
        if (numero == 2) {
            return num - 2;
        }
        
        if (numero == 1) {
            return num - 1;
        }
        
        if (numero == 5) {
            return num + 5;
        }
        if (numero == 6) {
            return num + 4;
        }
        if (numero == 7) {
            return num + 3;
        }
        if (numero == 8) {
            return num + 2;
        }
        if (numero == 9) {
            return num + 1;
        }
        return num;
    }

    /* 
    Dados tres valores enteros, a, b y c, uno de ellos es pequeño, uno es mediano y uno es grande. Retorna verdadero si los tres valores están espaciados de manera uniforme, por lo que la diferencia entre pequeño y mediano es la misma que la diferencia entre mediano y grande.

    espacioUniforme(2, 4, 6) → true
    espacioUniforme(4, 6, 2) → true
    espacioUniforme(4, 6, 3) → false
    */
    public boolean espacioUniforme(int a, int b, int c) {
        if (a == b && b == c) {
            return true;
        }
        
        if (a == b || b == c) {
            return false;
        }
        
        if (Math.abs(a - b) == Math.abs(a - c)) {
            return true;
        }
        
        if (Math.abs(b - a) == Math.abs(b - c)) {
            return true;
        }
        
        if (Math.abs(c - a) == Math.abs(c - b)) {
            return true;
        } else {
            return false;
        }
    }
    
    /* 
    Dados tres valores enteros, a, b y c, retorna la suma de ellos. Sin embargo, si uno de los valores es 13, no cuenta para la suma y los valoress a su derecha no cuentan. Por ejemplo, si b es 13, entonces tanto b como c no cuentan.

    afortunadaSuma(1, 2, 3) → 6
    afortunadaSuma(1, 2, 13) → 3
    afortunadaSuma(1, 13, 3) → 1
    */
    public int afortunadaSuma(int a, int b, int c) {
        int suma = a + b + c;

        if (a == 13) {
            return 0;
        } else if (b == 13) {
            return a;
        } else if (c == 13) {
            return a + b;
        } else {
            return suma;
        }
    }

    /* 
    Dados tres enteros a, b y c, retorna verdadero si uno de ellos b o c es "cerca" (difiere de a en 1 como maxímo), mientras que el otro esta "lejos", y se diferencia de los otros dos valores en 2 o más. Nota: Math.abs(num) retorna el valor absulto de num. 

    cercaLejos(1, 2, 10) → verdadero
    cercaLejos(1, 2, 3) → falso
    cercaLejos(4, 1, 3) → verdadero
    */
    public boolean cercaLejos(int a, int b, int c) {
        if (Math.abs(a - b) <= 1) {
            if (Math.abs(a - c) >= 2 && Math.abs(b - c) >= 2) {
                return true;
            }
        }
        
        if (Math.abs(a - c) <= 1) {
            if (Math.abs(a - b) >= 2 && Math.abs(b - c) >= 2) {
                return true;
            }
        }
        return false;
    }

    /* 
    Queremos hacer un paquete de kilos de chocolate. Tenemos barras pequeñas (1 kilo cada una) y barras grandes (5 kilos cada una). Retorna el número de barras pequeñas a utilizar, suponiendo que siempre usamos barras grandes antes que barras pequeñas. Retorna -1 si no se puede hacer.

    hacerChocolates(4, 1, 9) → 4
    hacerChocolates(4, 1, 10) → -1
    hacerChocolates(4, 1, 7) → 2
    */
    public int hacerChocolates(int pequena, int grande, int meta) {
        int barrasGrandes = 0;

        if (grande < meta / 5) {
            barrasGrandes = grande;
        } else {
            barrasGrandes = meta/5;
        }
        int resto = meta - (barrasGrandes * 5);
        if (resto <= pequena) return resto;
        return -1;
    }
}