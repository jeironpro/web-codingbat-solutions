/* 
 * Problemas básicos de logica booleana: if else && || !. 
 */

public class Logico1 {
    /* 
    // Cuando las ardillas se juntan para una fiesta, les gusta fumar puros. Una fiesta de ardillas, es existosa cuando la cantidad de puros está entre 40 y 60, ambos incluidos. A menos que sea fin de semana, en cuyo caso no hay limite superior para la cantidad de puros. Retorna verdadero si la fiesta con los valores dados es exitosa, o falso en caso contrario.

    FistaPuros(30, false) → false
    FistaPuros(50, false) → true
    FistaPuros(70, true) → true
    */

    public boolean FistaPuros(int puros, boolean finSemana) {
        if (finSemana) {
            if (puros >= 40) {
                return true;
            }
            return false;
        } else {
            if (puros >= 40 && puros <= 60) {
                return true;
            }
            return false;
        }
    }

    /* 
    Estas conduciendo un poco demasiado rápido y un policía te detiene. Escribe el código para calcular el resultado, codificado como un valor int: 0 = sin multa, 1 = multa pequeña, 2 = multa grande. Si la velocidad es 60 o menos, el resultado es 0. Si la velocidad está entre 61 y 80 ambos incluidos, el resultado es 1. Si la velocidad es 81 o más, el resultado es 2. A menos que sea tu compleaño: ese día, tu velocidad puede ser 5 veces mayor en todos los casos.

    detencionVelocidad(60, false) → 0
    detencionVelocidad(65, false) → 1
    detencionVelocidad(65, true) → 0
    */

    public int detencionVelocidad(int velocidad, boolean cumpleanios) {
        if (!cumpleanios) {
            if (velocidad <= 60) {
                return 0;
            } else if (velocidad >= 61 && velocidad <= 80) {
                return 1;
            } else if (velocidad >= 81) {
                return 2;
            }
        } else {
            if (velocidad <= 65) {
                return 0;
            } else if (velocidad >= 66 && velocidad <= 85) {
                return 1;
            } else if (velocidad >= 86) {
                return 2;
            }
        }
        return 0;
    }

    /* 
    El numero 6 es un numero realmente genial. Dados dos valores enteros, a y b, retorna verdadero si uno de ellos es 6. O si la suma o diferencias de ambos es 6. Nota: La función Math.abs(a) calcula el valor absoluto de a.

    seis(6, 4) → true
    seis(4, 5) → false
    seis(1, 5) → true
    */

    public boolean seis(int a, int b) {
        if (a == 6) {
            return true;
        }

        if (b == 6) {
            return true;
        }

        if (a + b == 6) {
            return true;
        }

        if (Math.abs(a - b) == 6) {
            return true;
        }
        return false;
    }

    /* 
    Retorna verdadero si el numero entero (no negativo) dado es 1 o 2 más que un múltiplo de 20.

    masMultiplo20(20) → falso
    masMultiplo20(21) → verdadero
    masMultiplo20(22) → verdadero
    */

    public boolean masMultiplo20(int n) {
        if (n % 20 == 1 || n % 20 == 2) {
            return true;
        }
        return false;
    }
    
    /* 
    Dado un numero entero (no negativo), devuelve verdadero si el numero está dentro de 2 de un múltiplo de 10. Nota: (a % b) es el resto de dividir a por b, por lo que (7 % 5) es 2.

    cercaDiez(12) → true
    cercaDiez(17) → false
    cercaDiez(19) → true
    */

    public boolean cercaDiez(int num) {
        if (num % 10 == 0) {
            return true;
        }

        if (num % 10 == 1) {
            return true;
        }

        if (num % 10 == 2) {
            return true;
        }

        if (num % 10 == 8) {
            return true;
        }

        if (num % 10 == 9) {
            return true;
        }
        return false;
    }

    /* 
    Estamos organizando una fiesta con cantidades de té y dulces. Retorna el resultado entero de la fiesta codificado como 0 = malo, 1 = bueno o 2 = genial. Una fiesta buena (1) si tanto el té como los dulces son al menos 5. Sin embargo, si el té o los dulces son al menos el doble de la cantidad del otro, la fiesta es genial (2). Sin embargo, en todos los casos, si el té o los dulces son menos de 5, la fiesta siempre es mala (0).

    fiestaTeDulce(6, 8) → 1
    fiestaTeDulce(3, 8) → 0
    fiestaTeDulce(20, 6) → 2
    */

    public int fiestaTeDulce(int te, int dulce) {
        if (te < 5 || dulce < 5) {
            return 0;
        } else if (te >= dulce*2 || dulce >= te*2) {
            return 2;
        } else {
            return 1;
        }
    }

    /* 
    Dados tres enteros, a b c, retorna verdadero si la suma de dos de ellos es el valor del tercero.

    dosComoUno(1, 2, 3) → true
    dosComoUno(3, 1, 2) → true
    dosComoUno(3, 2, 2) → false
    */

    public boolean dosComoUno(int a, int b, int c) {
        if (a + b == c) {
            return true;
        } else if (b + c == a) {
            return true;
        } else if (a + c == b) {
            return true;
        } else {
            return false;
        }
    }

    /* 
    Dados tres números enteros, a b c, retorna verdadero si dos o más de ellos tiene el mismo ultimo digito. Los números enteros no negativos. Nota: el operador de residuo % calcula el resto de la división, ejemplo 17 % 10 es 7.

    ultimoDigito(23, 19, 13) → true
    ultimoDigito(23, 19, 12) → false
    ultimoDigito(23, 19, 3) → true
    */

    public boolean ultimoDigito(int a, int b, int c) {
        String aUltimo = "" + a % 10;
        String bUltimo = "" + b % 10;
        String cUltimo = "" + c % 10;
        
        if (aUltimo.equals(bUltimo)) {
            return true;
        }

        if (aUltimo.equals(cUltimo)) {
            return true;
        }

        if (bUltimo.equals(cUltimo)) {
            return true;
        }
        return false;
    }

    /* 
    Dado dos valores enteros, retorna el valor mayor de los tres. Sin embargo, si los dos valores tienen el mismo resto cuando se divide por 5, entonces devuelve el valor menor. Sin embargo, en todos los casos, si los dos valores son iguales, retorna 0. Nota: el operador de residuo % calcula el resto de la división, ejemplo 7 % 5 es 2.

    mayorResiduo5(2, 3) → 3
    mayorResiduo5(6, 2) → 6
    mayorResiduo5(3, 2) → 3
    */

    public int mayorResiduo5(int a, int b) {
        int aResiduo = a % 5;
        int bResiduo = b % 5;
        
        if (a == b) {
            return 0;
        } else if (aResiduo == bResiduo) {
            if (a < b) {
                return a;
            } else {
                return b;
            }
        } else {
            if (a > b) {
                return a;
            } else {
                return b;
            }
        }
    }

    /* 
    Tienes un billete de lotería azul, con los numeros enteros a, b y c. Esto forma tres pares, que llamaremos ab, bc y ac. Considera la suma de los números en cada par. Si cualquier par suma exactamente 10, el resultado es 10. De lo contrario, si la suma de ab es exactamente 10 más que la suma de bc o ac, el resultado es 5. De lo contrario, el resultado es 0.

    billeteAzul(9, 1, 0) → 10
    billeteAzul(9, 2, 0) → 0
    billeteAzul(6, 1, 4) → 10
    */

    public int billeteAzul(int a, int b, int c) {
        if (a + b == 10 || b + c == 10 || a + c == 10) {
            return 10;
        } else if (a + b == b + c + 10 || a + b == a + c + 10) {
            return 5;
        } else {
            return 0;
        }
    }

    /* 
    Tu y tu cita están intentando conseguir una mesa en un restaurante. El parametro "tu" es el estilo de tu ropa, en el rango de 0 a 10, y el parametro "cita" es el estilo de la ropa de tu cita. El resultado de obtener la mesa se codifica como un valor entero con 0 = no, 1 = tal vez, 2 = si. Sí alguno de los dos es muy elegante, 8 o más, entonces el resultado es 2 (sí). Con la excepción de que si alguno de los tiene un estilo de 2 o menos, entonces el resultado es 0 (no). De lo contrario, el resultado es 1 (tal vez).

    citaModa(5, 10) → 2
    citaModa(5, 2) → 0
    citaModa(5, 5) → 1
    */

    public int citaModa(int tu, int cita) {
        if (tu >= 8 && cita > 2) {
            return 2;
        } else if (tu > 2 && cita >= 8) {
            return 2;
        } else if (tu <= 2 || cita <= 2) {
            return 0;
        } else {
            return 1;
        }
    }

    /* 
    Dados 2 enteros, a y b, retorna su suma. Sin embargo, las sumas en el rango de 10 a 19 ambos incluidos están prohibidas, por lo que en ese caso solo devuelve 20.

    ordenarSuma(3, 4) → 7
    ordenarSuma(9, 4) → 20
    ordenarSuma(10, 11) → 21
    */

    public int sortaordenarSumaSum(int a, int b) {
        if (a + b >= 10 && a + b <= 19) {
            return 20;
        } else if (a + b > 19) {
            return a + b;
        } else {
            return a + b;
        }
    }

    /* 
    Dados un numero n, retorna verdadero si n está en el rango 1 y 10 ambos incluidos. A menos que modoFuera es verdadero, en cuyo caso retorna verdadero si el número es menor o igual a 1, o mayor o igual a 10.

    en1A10(5, false) → true
    en1A10(11, false) → false
    en1A10(11, true) → true
    */

    public boolean en1A10(int n, boolean modoFuera) {
        if (!modoFuera && n >= 1 && n <= 10) {
            return true;
        } else if (modoFuera && (n <= 1 || n >= 10)) {
            return true;
        } else {
            return false;
        }
    }

    /* 
    Retorna verdadero si el número entero (no negativo) dado es un múltiplo de 3 o 5, pero no los dos. Usa el operador de residuo %.

    multiplo35(3) → true
    multiplo35(10) → true
    multiplo35(15) → false
    */

    public boolean multiplo35(int n) {
        if (n % 3 == 0 ^ n % 5 == 0) {
            return true;
        }
        return false;
    }

    /* 
    Dados 2 enteros, a y b, retorna su suma. Sin embargo, los valores "adolescentes" en el rango de 13 y 19 ambos incluidos son especialmente afortunados. Por lo tanto, si alguno de los valores es un adolescente, retorna simplemente 19.

    sumaAdolescente(3, 4) → 7
    sumaAdolescente(10, 13) → 19
    sumaAdolescente(13, 2) → 19
    */

    public int sumaAdolescente(int a, int b) {
        if (a >= 13 && a <= 19 || b >= 13 && b <= 19) {
          return 19;
        } else {
          return a + b;
        }
    }

    /* 
    Dada una cadena, si la cadena comienza con "f" retorna "Fizz". Si la cadena termina en "b" retorna "Buzz". Si las dos condiciones se cumplen "f" y "b", retorna "FizzBuzz". En todo caso, retorna la cadena sin cambios.

    cadenaEfervescencia("fig") → "Fizz"
    cadenaEfervescencia("dib") → "Buzz"
    cadenaEfervescencia("fib") → "FizzBuzz"
    */

    public String cadenaEfervescencia(String str) {
        if (str.startsWith("f") && str.endsWith("b")) {
            return "FizzBuzz";
        } else if (str.startsWith("f")) {
            return "Fizz";
        } else if (str.endsWith("b")) {
            return "Buzz";
        } else {
            return str;
        }
    }

    /* 
    Dados tres números enteros, a b c, retorna verdadero si b es mayor que a, and c es mayor que b. Sin embargo, con la excepción de que si "bOk" es verdadero, b no necesita ser mayor que a.

    enOrden(1, 2, 4, false) → true
    enOrden(1, 2, 1, false) → false
    enOrden(1, 1, 2, true) → true
    */

    public boolean enOrden(int a, int b, int c, boolean bOk) {
        if (!bOk && b > a && c > b) {
            return true;
        } else if (bOk && c > b) {
            return true;
        } else {
            return false;
        }
    }

    /* 
    Dados tres números enteros, a b c, retorna verdadero si uno de ellos es 10 o más menor que uno de los otros.

    menos10(1, 7, 11) → true
    menos10(1, 7, 10) → false
    menos10(11, 1, 7) → true
    */

    public boolean menos10(int a, int b, int c) {
        if (Math.abs(a-b) >= 10) {
            return true;
        }

        if (Math.abs(b-c) >= 10) {
            return true;
        }

        if (Math.abs(a-c) >= 10) {
            return true;
        }
        return false;
    }

    /* 
    Tienes un billete de lotería rojo que muestra los números enteros a, b y c, cada uno de los cuales es 0, 1 o 2. Si todos tienen el valor 2, el resultado es 10. De lo contrario, si son todos iguales, el resultado es 5. De lo contrario, siempre que b  c sean diferentes de a, el resultado es 1. De lo contrario, el resultado es 0.

    billeteRojo(2, 2, 2) → 10
    billeteRojo(2, 2, 1) → 0
    billeteRojo(0, 0, 0) → 5
    */

    public int billeteRojo(int a, int b, int c) {
        if (a == 2 && b == 2 && c == 2) {
            return 10;
        } else if (a == b && a == c) {
            return 5;
        } else if (b != a && c != a) {
            return 1;
        } else {
            return 0;
        }
    }

    /* 
    Dados dos números enteros, cada uno en el rango de 10 y 99 ambos incluidos, retorna verdadero si hay un dígito que aparece en ambos números, como el 2 en el 12 y 23. Nota: la división de n/10, da el digito izquierdo mientras que el operador de residuo % (n%10) da el digito derecho.

    compartirDigito(12, 23) → true
    compartirDigito(12, 43) → false
    compartirDigito(12, 44) → false
    */

    public boolean compartirDigito(int a, int b) {
        if (a / 10 == b / 10) {
            return true;
        }
        if (a % 10 == b % 10) {
            return true;
        }
        if (b / 10 == a % 10) {
            return true;
        }
        if (a / 10 == b % 10) {
            return true;
        }
        return false;
    }

    /* 
    Las ardillas en Palo Alto pasa la mayor parte del dia jugando. En particular, juegan si la temperatura está entre 60 y 90 ambos incluidos. A menos que sea verano, en cuyo caso el límite superior de la temperatura es 100 en lugar de 90. Dado un entero "temperatura" y un booleano "verano", retorna verdadero si las ardillas juegan y falso en caso contrario.

    ardillasJuegan(70, false) → true
    ardillasJuegan(95, false) → false
    ardillasJuegan(95, true) → true
    */

    public boolean ardillasJuegan(int temperatura, boolean verano) {
        if (verano && (temperatura >= 60 && temperatura <= 100)) {
            return true;
        }
        if (!verano && (temperatura >= 60 && temperatura <= 90)) {
            return true;
        }
        return false;
    }

    /* 
    Dado un dia de la semana codificado como 0 = Sun, 1 = Mon, 2 = Tue, ... 6 = Sat, y un booleano que indica si estamos de vacaciones, retorna una cadena con el formato "7:00" que indica cuándo la alarma debe sonar el despertador. Los días laborables, el despertador debe sonar a las "7:00" y los fines de semana a las "10:00". A menos que estemos de vacaciones, en cuyo caso los días laborables debe sonar a las "10:00" y los fines de semana debe sonar a las "off".

    despertador(1, false) → "7:00"
    despertador(5, false) → "7:00"
    despertador(0, false) → "10:00"
    */

    public String alarmClock(int dia, boolean vacaciones) {
        if (!vacaciones) {
            if (dia >= 1 && dia <= 5) {
                return "7:00";
            } else {
                return "10:00";
            }
        } else {
            if (dia >= 1 && dia <= 5) {
                return "10:00";
            } else {
                return "off";
            }
        }  
    }

    /* 
    Diremos que un número es especial si es múltiplo de 11 o si es uno más que un múltiplo de 11. Retorna verdadero si el número no negativo dado es especial. Utiliza el operador % de residuo.

    especialMultiplo11(22) → true
    especialMultiplo11(23) → true
    especialMultiplo11(24) → false
    */

    public boolean especialMultiplo11(int n) {
        if (n % 11 == 0 || n % 11 == 1) {
            return true;
        }
        return false;
    }

    /* 
    Retorna verdadero si el numero no negativo dado es 1 o 2 más que un múltiplo de 20. Por lo tanto, por ejemplo 38 y 39 retornan verdadero, pero 40 retorna falso.

    unoDosmultiplo20(18) → true
    unoDosmultiplo20(19) → true
    unoDosmultiplo20(20) → false
    */

    public boolean unoDosmultiplo20(int n) {
        if ((n+1) % 20 == 0) {
          return true;
        }

        if ((n+2) % 20 == 0) {
            return true;
        }
        return false;
    }

    /* 
    Suena tu celular. Retorna verdadero si debes contestar. Normalmente contestas, excepto por la mañana que solo contestas si es tu mamá quien llama. En todos los casos, si estás durmiendo, no contestas.

    suenaCelular(false, false, false) → true
    suenaCelular(false, false, true) → false
    suenaCelular(true, false, false) → false
    */

    public boolean suenaCelular(boolean manana, boolean mama, boolean durmiendo) {
        if (mama && !durmiendo) {
            return true;
        } else if (!manana && !mama && !durmiendo) {
            return true;
        } else {
            return false;
        }
    }

    /*
    Dado un entero n, retorna la forma de cadena del número seguido de "!". Por lo tanto, el entero 6 da como resultado "6!". Excepto si el número es divisible por 3 utiliza "Fizz" en lugar del número, y si es divisible por 3 y por 5, utiliza "FizzBuzz". Nota: el operador de residuo % calcula el resto de la división, por lo tanto 23 % 10 produce 3. ¿Cuál será el resto cuando un número se divide de manera uniforme en otro?.

    cadenaEfervescencia2(1) → "1!"
    cadenaEfervescencia2(2) → "2!"
    cadenaEfervescencia2(3) → "Fizz!"
    */

    public String cadenaEfervescencia2(int n) {
        if (n % 3 == 0 && n % 5 == 0) {
            return "FizzBuzz!";
        }
        if (n % 3 == 0) {
            return "Fizz!";
        } 
        if (n % 5 == 0) {
            return "Buzz!";
        } 
        return String.format("%d!", n);
    }
    
    /* 
    Dados tres enteros, a b c, retorna verdadero si están en estricto orden creciente, como 2 5 11 0 5 6 7 o 5 5 7. Sin embargo, con la excepción de que si "igual" es verdadero, se permite la igualdad como 5 5 7 o 5 5 5.

    enOrdenIgual(2, 5, 11, false) → true
    enOrdenIgual(5, 7, 6, false) → false
    enOrdenIgual(5, 5, 7, true) → true
    */

    public boolean enOrdenIgual(int a, int b, int c, boolean igualdad) {
        if (a == b && b < c && igualdad) {
            return true;
        } else if (a == b && b == c && igualdad) {
            return true;
        } else if (a < b && b == c && igualdad) {
            return true;
        }else if (a < b && b < c && !igualdad)  {
            return true;
        } else {
            return false;
        }
    }

    /* 
    Retorna la suma de dos tiradas de dados de 6 caras, cada una en el rango de 1 a 6. Sin embargo, si "dobles" es verdadero y los dados muestran el mismo valor, incrementa un dado al siguiente valor, dando vueltas hacia 1 si su valor era 6.

    sinDobles(2, 3, true) → 5
    sinDobles(3, 3, true) → 7
    sinDobles(3, 3, false) → 6
    */

    public int sinDobles(int dado1, int dado2, boolean dobles) {
        if (dado1 == 6 && dado2 == 6 && dobles) {
            return dado1 + 1;
        } else if (dado1 == dado2 && dobles) {
            return dado1 + dado2 + 1;
        } else {
            return dado1 + dado2;
        }
    }

    /*
    Tienes un billete verde de lotería, con los números enteros a, b y c. Si todos los números son diferentes entre sí, el resultado es 0. Si todos los números  son iguales, el resultado es 20. Si dos de los números son iguales, el resultado es 10.

    billeteVerde(1, 2, 3) → 0
    billeteVerde(2, 2, 2) → 20
    billeteVerde(1, 1, 2) → 10
    */

    public int billeteVerde(int a, int b, int c) {
        if (a == b && b == c) {
            return 20;
        } else if (a != b && b == c) {
            return 10;
        } else if (a == b && b != c) {
            return 10;
        } else if (a == c && c != b) {
            return 10;
        } else {
            return 0;
        }
    }

    /* 
    Dados 2 números enteros no negativos, a y b, retorna su suma, siempre que la suma tenga la misma cantidad de dígitos que a. Si la suma tiene más dígitos que a, simplemente retorna a sin b. Nota: una forma de calcular la cantidad de un número entero no negativo n es convertirlo en una cadena con String.valueOf(n) y luego verificar la longitud de la cadena.

    sumaLimite(2, 3) → 5
    sumaLimite(8, 3) → 8
    sumaLimite(8, 1) → 9
    */

    public int sumaLimite(int a, int b) {
        String aCadena = String.valueOf(a);
        int suma = a + b;
        String sumaInt = String.valueOf(suma);
        
        if (aCadena.length() == sumaInt.length()) {
          return a + b;
        } else {
          return a;
        }
    }
}