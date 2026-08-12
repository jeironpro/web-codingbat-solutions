/* 
 * Problemas de calentamiento sencillos
 */

public class Calentamiento1 {
    /*
    El parametro diaSemana es verdadero si es un dia laborable, y el parametro vacaciones es verdadero si estamos de vacaciones. Dormimos hasta tarde si es fin de semana o estamos de vacaciones. Retornar verdadero si dormimos hasta tarde.
    
    dormido(false, false) → true
    dormido(true, false) → false
    dormido(false, true) → true
    */

    public boolean dormido(boolean diaSemana, boolean vacaciones) {
        if (!diaSemana && !vacaciones) {
            return true;
        } else if (diaSemana && !vacaciones) {
            return false;
        } else if (!diaSemana && vacaciones) {
            return true;
        } else {
            return true;
        }
    }

    /*
    Dado un entero n, retorna la diferencia absoluta entre n y 21, si n es mayor a 21 retorna el doble absoluto de la diferencia.

    diferencia21(19) → 2
    diferencia21(10) → 11
    diferencia21(21) → 0
    */

    public int diferencia21(int n) {
        if (n < 21) {
            return 21 - n;
        } else {
            return (n - 21)*2;
        }
    }

    /*
    Dado un entero n, retorna verdadero si n esta entre 10 de 100 o de 200. Nota: Math.abs(n) calcula el valor absoluto de n.

    cercaCien(93) → true
    cercaCien(90) → true
    cercaCien(89) → false 
    */

    public boolean cercaCien(int n) {
        if (Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10) {
            return true;
        }
        return false;
    }

    /*
    Dada una cadena (no vacia) y un entero n, retorna una nueva cadena con el carácter en la posición de n eliminado. El valor de n será una posición valida de un carácter de la cadena original. (Ejemplo: n será en el rango 0 y la longitud de la cadena -1 ambos incluidos).

    eliminarCaracter("kitten", 1) → "ktten"
    eliminarCaracter("kitten", 0) → "itten"
    eliminarCaracter("kitten", 4) → "kittn"
    */

    public String eliminarCaracter(String cadena, int n) {
        String resultado = "";

        if (n >= 0 && n < cadena.length()) {
            for (int i = 0; i < cadena.length(); i++) {
                char c = cadena.charAt(i);
            
                if (i == n) {
                    continue;
                }
                resultado += c;
            }
            return resultado;
        }
        return cadena;
    }

    /*
    Dada una cadena, toma el ultimo carácter y retorna una nueva cadena con el ultimo carácter agregado al principio y al final de la cadena, de modo que "cat" produce "tcatt". La cadena original tendrá una longitud de 1 o más.

    alrededor("cat") → "tcatt"
    alrededor("Hello") → "oHelloo"
    alrededor("a") → "aaa"
    */

    public String alrededor(String cadena) {
        String ultimoCaracter = cadena.substring(cadena.length() -1);

        String resultado = ultimoCaracter + cadena + ultimoCaracter;

        return resultado;
    }

    /* 
    Dada una cadena, retorna verdadero si la cadena comienza con "hi" y falso en caso contrario.

    comienzaHi("hi there") → true
    comienzaHi("hi") → true
    comienzaHi("hello hi") → false
    */

    public boolean comienzaHi(String cadena) {
        if (cadena.startsWith("hi")) {
            return true;
        } else {
            return false;
        }
    }

    /* 
    Digamos que un numero es adolescente si esta en el rango 13 y 19 ambos incluidos. Dado 3 valores enteros, retorna verdadero si 1 o mas de ellos son adolescente.

    adolescente(13, 20, 10) → true
    adolescente(20, 19, 10) → true
    adolescente(20, 10, 13) → true
    */

    public boolean adolescente(int a, int b, int c) {
        if (a >= 13 && a <= 19) {
            return true;
        }
        if (b >= 13 && b <= 19) {
            return true;
        }
        if (c >= 13 && c <= 19) {
            return true;
        }
        return false;
    }

    /* 
    Retorna verdadero si la cadena comienza con "mix", la m de "mix" puede ser cualquier letra.

    comienzaMix("mix snacks") → true
    comienzaMix("pix snacks") → true
    comienzaMix("piz snacks") → false
    */

    public boolean comienzaMix(String cadena) {
        if (!cadena.isEmpty()) {
            cadena = cadena.substring(1);

            if (cadena.startsWith("ix")) {
                return true;
            }
        }
        return false;
    }

    /*
    Dado 2 valores enteros, retorna el valor más cercano a 10, o retorna 0 en el caso de que los valores sean iguales. Nota: Math.abs(n) calcula el valor absoluto de n.

    cerca10(8, 13) → 8
    cerca10(13, 8) → 8
    cerca10(13, 7) → 0
    */

    public int close10(int a, int b) {
        int primero = Math.abs(10 - a);
        int segundo = Math.abs(b - 10);
        
        if (primero < segundo) {
            return a;
        } else if (primero > segundo) {
            return b;
        } else {
            return 0;
        }
    }

    /* 
    Retorna verdadero si la cadena dada contiene entre 1 y 3 carácteres 'e'.

    contieneE("Hello") → true
    contieneE("Heelle") → true
    contieneE("Heelele") → false
    */

    public boolean contieneE(String cadena) {
        int contador = 0;
        
        for (int i = 0; i < cadena.length(); i++) {
          char c = cadena.charAt(i);
          
            if (c == 'e') {
                contador++;
            }
        }

        if (contador > 0 && contador <= 3) {
            return true;
        }
        return false;
    }

    /* 
    Dada una cadena (no vacia) y un entero n, retorna una nueva cadena construida a partir del primer carácter más cada carácter en la posició de n. Por lo tanto si n es 3, utiliza las posiciones 0, 3, 6 y así sucesivamente. N será 1 o más.

    caracterN("Miracle", 2) → "Mrce"
    caracterN("abcdefg", 2) → "aceg"
    caracterN("abcdefg", 3) → "adg"
    */

    public String caracterN(String str, int n) {
        String resultado = "";
        int indice = 0;
        
        while (indice < str.length()) {
            resultado += str.charAt(indice);
            indice = indice + n;
        }
        return resultado;
    }

    /* 
    Tenemos dos monos, a y b, y los parametros aSonrie y bSonrie indica si cada uno de ellos esta sonriendo. Estamos en problemas si los dos estan sonriendo o si ninguno esta sonriendo. Retorna verdadero si estamos en problemas.

    monoProblema(true, true) → true
    monoProblema(false, false) → true
    monoProblema(true, false) → false
    */

    public boolean monoProblema(boolean aSonrie, boolean bSonrie) {
        if (aSonrie ^ bSonrie) {
            return false;
        } else {
            return true;
        }
    }

    /* 
    Tenemos un loro que habla fuerte. EL parametro hora es la hora actual en el rango 0 y 23 ambos incluidos. Estamos en problema si el loro esta hablando y la hora es antes de la 7 o después de las 20. Retorna verdadero si estamos en problemas.

    loroProblema(true, 6) → true
    loroProblema(true, 7) → false
    loroProblema(false, 6) → false
    */

    public boolean loroProblema(boolean hablando, int hora) {
        if (hablando && (hora < 7 || hora > 20)) {
            return true;
        }
        return false;
    }

    /* 
    Dado 2 valores enteros, retorna verdadero si uno es negativo y otro es positivo. Excepto si el parametro negativo es verdadero, en cuyo caso retorna verdadero solo si los dos enteros son negativos.

    posNeg(1, -1, false) → true
    posNeg(-1, 1, false) → true
    posNeg(-4, -5, true) → true
    */

    public boolean posNeg(int a, int b, boolean negativo) {
        if (!negativo && (a < 0 ^ b < 0)) {
            return true;
        }
        
        if (negativo && (a < 0 && b < 0)) {
            return true;
        } else {
            return false;
        }
    }

    /* 
    Dada una cadena, retorna una nueva cadena cambiando el primer carácter por el ultimo.

    cambiaPrimerUltimo("code") → "eodc"
    cambiaPrimerUltimo("a") → "a"
    cambiaPrimerUltimo("ab") → "ba"
    */

    public String cambiaPrimerUltimo(String cadena) {
        String resultado = "";

        if (!cadena.isEmpty()) {
            if (cadena.length() > 1) {
                resultado += cadena.charAt(cadena.length()-1);
                resultado += cadena.substring(1, cadena.length()-1);
                resultado += cadena.charAt(0);
            } else {
                return cadena;
            }
        }
        return resultado;
    }

    /*
    Retorna verdadero si el numero (no negativo) dado es un multiplo de 3 o un multiplo de 5. Usa el operador de residuo %.

    multiplo35(3) → true
    multiplo35(10) → true
    multiplo35(8) → false
    */

    public boolean or35(int n) {
        if (n % 3 == 0 || n % 5 == 0) {
            return true;
        }
        return false;
    }

    /* 
    Dadas dos temperaturas, retorna verdadero si una es menor que 0 y la otra es mayor que 100.

    frioCaliente(120, -1) → true
    frioCaliente(-1, 120) → true
    frioCaliente(2, 120) → false
    */

    public boolean frioCaliente(int temp1, int temp2) {
        if ((temp1 < 0 || temp2 < 0) && (temp1 > 100 || temp2 > 100)) {
            return true;
        } else {
            return false;
        }
    }
    
    /* 
    Diremos que un numero es adolescente si esta en el rango de 13 y 19 ambos incluidos. Dado 2 valores enteros, retorna verdadero si uno o el otro es adolescente, pero no los dos.

    AdolescenteSolitario(13, 99) → true
    AdolescenteSolitario(21, 19) → true
    AdolescenteSolitario(13, 13) → false
    */

    public boolean AdolescenteSolitario(int a, int b) {
        boolean aAdolescente = false;
        boolean bAdolescente = false;
        
        if (a >= 13 && a <= 19) {
            aAdolescente = true;
        }
        if (b >= 13 && b <= 19) {
            bAdolescente = true;
        }
        
        if ((aAdolescente && !bAdolescente) || (!aAdolescente && bAdolescente)) {
            return true;
        }
        return false;
    }

    /*
    Dada una cadena, retorna una cadena formada por los primeros dos carácteres (si estan presentes), sin embargo incluye el primero solo si es una 'o' y incluye segundo solo si es una 'z', por lo que "ozymandias" produce "oz".

    ComienzaOz("ozymandias") → "oz"
    ComienzaOz("bzoo") → "z"
    ComienzaOz("oxx") → "o"
    */

    public String ComienzaOz(String cadena) {
        String resultado = "";
        
        if (cadena.length() > 1) {
            if (cadena.charAt(0) == 'o') {
                resultado += cadena.charAt(0);
            }
            if (cadena.charAt(1) == 'z') {
                resultado += cadena.charAt(1);
            }
            return resultado;  
        }
        return cadena;
    }

    /* 
    Dado 2 valores enteros, retorna verdadero si ambos estan el rango de 30 y 40 ambos incluidos o ambos estan en el rango de 40 y 50 ambos incluidos.

    entre3050(30, 31) → true
    entre3050(30, 41) → false
    entre3050(40, 50) → true
    */

    public boolean entre3050(int a, int b) {
        if ((a >= 30 && a <= 40) && (b >= 30 && b <= 40)) {
            return true;
        }

        if ((a >= 40 && a <= 50) && (b >= 40 && b <= 50)) {
            return true;
        }
        return false;
    }

    /* 
    Dado dos valores (no negativos) negativos, retorna verdadero si ambos tienen el mismo ultimo digito, como 27 y 57. Nota: el operador de residuo calcula el resto de la división por lo que 17 % 10 es 7.

    ultimoDigito(7, 17) → true
    ultimoDigito(6, 17) → false
    ultimoDigito(3, 113) → true
    */

    public boolean ultimoDigito(int a, int b) {
        String aDigito = Integer.toString(a);
        String bDigito = Integer.toString(b);

        char primero = aDigito.charAt(Math.abs(aDigito.length()-1));
        char ultimo = bDigito.charAt(Math.abs(bDigito.length()-1));
        
        if (primero == ultimo) {
            return true;
        }
        return false;
    }

    /* 
    Dado 2 valores enteros, retorna la suma de ambos. A menos que los 2 valores sean iguales, retorna el doble de la suma.

    sumaDoble(1, 2) → 3
    sumaDoble(3, 2) → 5
    sumaDoble(2, 2) → 8
    */

    public int sumaDoble(int a, int b) {
        if (a != b) {
            return a + b;
        } else {
            return (a + b) * 2;
        }
    }

    /* 
    Dados 2 enteros, a y b, retorna verdadero si uno de ellos es 10 o si la suma de ambos es 10.

    es10(9, 10) → true
    es10(9, 9) → false
    es10(1, 9) → true
    */

    public boolean es10(int a, int b) {
        if ((a == 10 || b == 10) || a + b == 10) {
            return true;
        } else {
            return false;
        }
    }

    /* 
    Dada una cadena, retorna una nueva cadena con "not" al principio. Sin embargo, si la cadena ya camienza con "not" devuelve la cadena sin cambios. Nota: usa .equals() para comparar dos cadenas.

    comienzaNot("candy") → "not candy"
    comienzaNot("x") → "not x"
    comienzaNot("not bad") → "not bad"
    */

    public String notString(String cadena) {
        if (cadena.startsWith("not")) {
            return cadena;
        } else {
            String not = "not";

            return not + " " + cadena;
        }
    }

    /* 
    Dada una cadena, diremos que el frente son los 3 primeros carácteres de la cadena. Si la longitud de la cadena es menor a 3, el frente es lo que contenga. Retorna una cadena que formada por 3 veces el frente.

    frente3("Java") → "JavJavJav"
    frente3("Chocolate") → "ChoChoCho"
    frente3("abc") → "abcabcabc"
    */

    public String front3(String cadena) {
        String resultado = "";

        if (cadena.length() >= 3) {
            resultado = cadena.substring(0, 3);
        } else {
            resultado = cadena;
        }
        return resultado + resultado + resultado;
    }

    /* 
    Dada una cadena, toma los dos primeros carácteres y retorna una cadena con los dos carácteres agregados al principio y al final, por lo que "kitten" produce "kikittenki". Si la longitud de la cadena es menor que 2, usar los caracters que contenga.

    dosPriFi("kitten") → "kikittenki"
    dosPriFi("Ha") → "HaHaHa"
    dosPriFi("abc") → "ababcab"
    */

    public String front22(String cadena) {
        String dosPrimeros;

        if (cadena.length() >= 2) {
            dosPrimeros = cadena.substring(0, 2);
        } else {
            dosPrimeros = cadena;
        }
        return dosPrimeros + cadena + dosPrimeros;
    }

    /* 
    Dados 2 valores enteros, retorna verdadero si cualquiera de ellos esta en el rango entre 10 y 20 ambos incluidos.

    entre1020(12, 99) → true
    entre1020(21, 12) → true
    entre1020(8, 99) → false
    */

    public boolean entre1020(int a, int b) {
        if (a >= 10 && a <= 20) {
            return true;
        }

        if (b >= 10 && b <= 20) {
            return true;
        }
        return false;
    }

    /* 
    Dada una cadena, si "del" aparece a partir de la posición 1, retorna una cadena en la que se ha eliminado "del". De lo contrario, retorna la cadena sin cambios.

    eliminaDel("adelbc") → "abc"
    eliminaDel("adelHello") → "aHello"
    eliminaDel("adedbc") → "adedbc"
    */

    public String eliminaDel(String cadena) {
        if (cadena.length() >= 4) {
            String del = cadena.substring(1, 4);
          
            if (del.equals("del")) {
                String resultado = cadena.substring(0, 1) + cadena.substring(del.length() + 1, cadena.length());
                return resultado;
            }
        }
        return cadena;
    }

    /* 
    Dado 3 valores enteros, a b c, retorna el mayor.

    enteroMayor(1, 2, 3) → 3
    enteroMayor(1, 3, 2) → 3
    enteroMayor(3, 2, 1) → 3
    */

    public int enteroMayor(int a, int b, int c) {
        if (a <= b && b <= c) {
            return c;
        } else if (a <= c && c <= b) {
            return b;
        } else if (b <= a && a <= c) {
            return c;
        } else if (b <= c && c <= a) {
            return a;
        } else if (c <= a && a <= b) {
            return b;
        } else {
            return a;
        }
    }

    /*
    Dado 2 valores enteros positivos, retorna el valor más grande que este en el rango entre 10 y 20 ambos incluidos, o retorna 0 si ninguno esta en el rango.

    mayor1020(11, 19) → 19
    mayor1020(19, 11) → 19
    mayor1020(11, 9) → 11
    */

    public int max1020(int a, int b) {
        if (a < b) {
            int tmp = a;
            a = b;
            b = tmp;
        }

        if (a >= 10 && a <= 20) {
            return a;
        }

        if (b >= 10 && b <= 20) {
            return b;
        }

        return 0;
    }

    /* 
    Dada una cadena, retorna una nueva cadena en la que los ultimos 3 carácteres esten en mayúsculas. Si la cadena tiene menos de 3 carácteres, escribe en mayúsculas los que esten. Teniendo en cuenta que cadena.toUpperCase() retorna la cadena en mayúsculas.

    finalMayusculas("Hello") → "HeLLO"
    finalMayusculas("hi there") → "hi thERE"
    finalMayusculas("hi") → "HI"
    */

    public String finalMayusculas(String cadena) {
        if (cadena.length() >= 3) {
            String resto = cadena.substring(0, cadena.length()-3);
            String ultimoTres = cadena.substring(cadena.length()-3);

            return resto + ultimoTres.toUpperCase();
        } else {
            return cadena.toUpperCase();
        }
    }
}