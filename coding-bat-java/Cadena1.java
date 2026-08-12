/* Problemas básicos de cadenas: sin bucles. Use + para combinar cadenas, str.length() es la cantidad de caracteres en una cadena, str.substring(i, j) extrae la subcadena comenzando en el índice i y continuando hasta el índice j, pero sin incluirlo.
*/

public class Cadena1 {
    /* 
    Dada una cadena nombre (ejemplo: "Bob"), retorna un saludo con el format "Hola Bob!".

    holaNombre("Bob") → "Hello Bob!"
    holaNombre("Alice") → "Hello Alice!"
    holaNombre("X") → "Hello X!"
    */
    
    public String HolaNombre(String nombre) {
        return "Hola " + nombre + "!";
    }

    /* 
    Dada una cadena salida de longitud 4, como "<<>>", y una palabra, retorna una nueva cadena donde la palabra este en el medio de la cadena salida, por ejemplo "<<palabra>>". Nota: usa cadena.substring(ini, fi) para extraer la cadena comenzado en el índice ini y hasta el índice fi, pero sin incluirlo.

    hacerCadenaSalida("<<>>", "Yay") → "<<Yay>>"
    hacerCadenaSalida("<<>>", "WooHoo") → "<<WooHoo>>"
    hacerCadenaSalida("[[]]", "word") → "[[word]]"
    */

    public String makeOutWord(String salida, String palabra) {
        return salida.substring(0, 2) + palabra + salida.substring(2, salida.length());
    }

    /* 
    Dada una cadena de longitud par, retorna la primera mitad. Por lo tanto, la cadena "WooHoo" da como resultado "Woo".

    primeraMitad("WooHoo") → "Woo"
    primeraMitad("HelloThere") → "Hello"
    primeraMitad("abcdef") → "abc"
    */

    public String primeraMitad(String cadena) {
        return cadena.substring(0, cadena.length()/2);
    }

    /* 
    Dadas 2 cadenas, retorna la concatenación, sin el primer carácter de cada cadena. Las cadenas tendrán una longitud mínima de 1.

    sinPrimerCaracter("Hello", "There") → "ellohere"
    sinPrimerCaracter("java", "code") → "avaode"
    sinPrimerCaracter("shotl", "java") → "hotlava"
    */

    public String sinPrimerCaracter(String a, String b) {
        return a.substring(1) + b.substring(1);
    }

    /* 
    Dada una cadena, retorna una cadena con el primer carácter, a menos que frente sea falso, retorna el ultimo carácter. La cadena no estará vacía.

    ultimoCaracter("Hello", true) → "H"
    ultimoCaracter("Hello", false) → "o"
    ultimoCaracter("oh", true) → "o"
    */

    public String ultimoCaracter(String cadena, boolean frente) {
        if (frente) {
            return cadena.substring(0, 1);
        } else {
            return cadena.substring(cadena.length()-1);
        }
    }

    /* 
    Dada una cadena, retorna verdadero si el final es "ly"

    finalLy("oddly") → true
    finalLy("y") → false
    finalLy("oddy") → false
    */

    public boolean finalLy(String cadena) {
        if (cadena.length() >= 2) {
            String ly = cadena.substring(cadena.length()-2);

            if (ly.equals("ly")) return true;
        }
        return false;
    }

    /* 
    Dada una cadena de longitud impar, retorna una cadena de longitud 3 con la mitad de la cadena original. La longitud de la cadena será al menos 3.

    mitadTres("Candy") → "and"
    mitadTres("and") → "and"
    mitadTres("solving") → "lvi"
    */

    public String mitadTres(String cadena) {
        int mitad = cadena.length()/2;
        
        return cadena.substring(mitad - 1, mitad) + cadena.substring(mitad, mitad + 2);
    }

    /* 
    Dadas 2 cadenas, a y b, retorna una nueva cadena formada por el primer carácter de a y el último de b, por lo que "yo" y "java" produce "ya". Si alguna de las cadenas tiene una longitud de 0, se utiliza '@' para el carácter faltante.

    ultimosCaracteres("last", "chars") → "ls"
    ultimosCaracteres("yo", "java") → "ya"
    ultimosCaracteres("hi", "") → "h@"
    */

    public String ultimosCaracteres(String a, String b) {
        if (a.isEmpty()) {
            a = "@";
        }

        if (b.isEmpty()) {
            b = "@";
        }

        return a.substring(0, 1) + b.substring(b.length()-1);
    }

    /* 
    Dada una cadena, si la cadena comienza con "red" o "blue", retorna el color en una cadena, de lo contrario retorna una cadena vacía.

    color("redxx") → "red"
    color("xxred") → ""
    color("blueTimes") → "blue"
    */

    public String color(String cadena) {
        if (cadena.startsWith("red")) return "red";
        if (cadena.startsWith("blue")) return "blue";
        return "";
    }

    /* 
    Dada una cadena, retorna una nueva cadena formada por 3 copias de los 2 primeros carácteres de la cadena original. La cadena puede tener cualquier longitud. Si hay menos de 2 carácteres, utiliza lo que haya.

    frente3("Hello") → "HeHeHe"
    frente3("ab") → "ababab"
    frente3("H") → "HHH"
    */

    public String frente3(String cadena) {
        if (cadena.length() >= 2) {
            String primerosDos = cadena.substring(0, 2);

            return primerosDos + primerosDos + primerosDos;
        }
        return cadena + cadena + cadena;
    }

    /* 
    Dadas dos cadenas, diremos que la palabra coincide con la cadena si aparece al principio de la primera cadena, excepto que su primer carácter no necesita coincidir exactamente. En caso de coincidencia, devuelve la cadena vacía. Por lo tanto, con la cadena "hippo", la palabra "hi" retorna "hi" y la palabra "xip" devuelve "hip". La palabra tendrá al menos una longitud de 1.

    principioPalabra("hippo", "hi") → "hi"
    principioPalabra("hippo", "xip") → "hip"
    principioPalabra("hippo", "i") → "h"
    */
    
    public String principioPalabra(String cadena, String palabra) {
        if (cadena.length() >= palabra.length()) {
            String principioCadena = cadena.substring(1, palabra.length());

            String principioPalabra = palabra.substring(1, palabra.length());
            if (principioCadena.equals(principioPalabra)) {
                return principioCadena;
            } else {
                return "";
            }
        } else if (cadena.length() < palabra.length()) {
            return "";
        }
        return cadena;
    }

    /* 
    Dadas 2 cadenas, a y b, retorna el resultado de ponerlas juntas en el orden a+b+b+a, (ejemplo: "Hi" y "Bye" retorna "HiByeByeHi").

    crearABBA("Hi", "Bye") → "HiByeByeHi"
    crearABBA("Yo", "Alice") → "YoAliceAliceYo"
    crearABBA("What", "Up") → "WhatUpUpWhat"
    */

    public String crearABBA(String a, String b) {
        return a + b + b + a;
    } 

    /* 
    Dada una cadena, retorna una nueva cadena formada por 3 copias de los ultimos carácteres de la cadena original. La longitud de la cadena será al menos 2.

    final3("Hello") → "lololo"
    final3("ab") → "ababab"
    final3("Hi") → "HiHiHi"
    */

    public String final3(String cadena) {
        if (cadena.length() > 2) {
            String ultimosDos = cadena.substring(cadena.length()-2);
            return ultimosDos + ultimosDos + ultimosDos; 
        }
        return cadena + cadena + cadena;
    }

    /* 
    Dada una cadena, retorna una version sin el primer y ultimo carácter, por lo que "Hello" produce "ell". La longitud de la cadena será al menos 2.

    sinPrimerUltimo("Hello") → "ell"
    sinPrimerUltimo("java") → "av"
    sinPrimerUltimo("coding") → "odin"
    */

    public String sinPrimerUltimo(String cadena) {
        return cadena.substring(1, cadena.length()-1);
    }

    /* 
    Dado una cadena, retorna una nueva cadena con los dos primeros carácteres al final y los dos del final al principio. La longitud de la cadena será al menos 2.

    cambia2("Hello") → "lloHe"
    cambia2("java") → "vaja"
    cambia2("Hi") → "Hi"
    */

    public String cambia2(String cadena) {
        if (cadena.length() >= 2) {
            return cadena.substring(2, cadena.length()) + cadena.substring(0, 2);
        }
        return cadena;
    }

    /* 
    Dada una cadena, retorna una nueva cadena sin el primer y ultimo carácter de la cadena original. La cadena puede tener cualquier longitud, incluido 0.

    sinPrimerUltimo2("Hello") → "ell"
    sinPrimerUltimo2("abc") → "b"
    sinPrimerUltimo2("ab") → ""
    */

    public String sinPrimerUltimo2(String cadena) {
        if (cadena.length() <= 1) return "";

        return cadena.substring(1, cadena.length()-1);
    }

    /* 
    Dada una cadena y un entero n, retorna una cadena formada por los primeros y los ultimos n carácteres de la cadena original. La longitud de la cadena será al menos n.

    nVeces("Hello", 2) → "Helo"
    nVeces("Chocolate", 3) → "Choate"
    nVeces("Chocolate", 1) → "Ce"
    */

    public String nVeces(String cadena, int n) {
        String primeraN = cadena.substring(0, n);
        String segundaN = cadena.substring(cadena.length()-n, cadena.length());

        return primeraN + segundaN;
    }

    /* 
    Dada una cadena, retorna verdadero si "bad" aparece al inicio (desde la posicio 0 o 1) en la cadena, como "badxxx" o "xbadxx" pero no "xxbadxx". La cadena puede tener cualquier longitud, incluido 0. Nota: usa .equals() para comparar dos cadenas.

    estaMal("badxx") → true
    estaMal("xbadxx") → true
    estaMal("xxbadxx") → false
    */

    public boolean estaMal(String cadena) {
        if (cadena.length() >= 3) {
            String bad0 = cadena.substring(0, 3);
            
            if (bad0.equals("bad")) {
                return true;
            }

            if (cadena.length() >= 4) {
                String bad1 = cadena.substring(1, 4);
    
                if (bad1.equals("bad")) {
                    return true;
                }
            }
        }
        return false;
    }

    /* 
    Dadas dos cadenas, unirlas las dos (concatenar) y retornar el resultado. Sin embargo, si la concatenación crea un carácter doble, omite uno de los caracteres, por lo que "abc" y "cat" dan como resultado "abcat".

    concatenar("abc", "cat") → "abcat"
    concatenar("dog", "cat") → "dogcat"
    concatenar("abc", "") → "abc"
    */

    public String concatenar(String a, String b) {
        if (!a.isEmpty() && !b.isEmpty()) { 
            String ultimoCaracterA = a.substring(a.length()-1);
            String primerCaracterB = b.substring(0, 1);

            if (ultimoCaracterA.equals(primerCaracterB)) {
                return a.substring(0, a.length()-1) + b;
            }
        }
        return a + b;
    }

    /*
    Dada una cadena, retorna verdadero si los primeros caracteres de la cadena aparecen tambien al final, como por ejemplo "edited".

    frenteFinal("edited") → true
    frenteFinal("edit") → false
    frenteFinal("ed") → true
    */

    public boolean frenteFinal(String cadena) {
        if (cadena.length() >= 2) {
            String primerosDos = cadena.substring(0, 2);
            String ultimosDos = cadena.substring(cadena.length()-2);

            if (primerosDos.equals(ultimosDos)) {
                return true;
            }
        }
        return false;
    }

    /* 
    Dada una cadena, si aparece una subcadena de longitud 2 tanto al principio como al final, se devuelve una cadena sin la subcadena al principio, por lo que "HelloHe" da como resultado "lloHe". La subcadena puede superponerse consigo misma, por lo que "Hi" da como resultado "". De lo contrario, se devuelve la cadena original sin cambios.

    sinPrimero2("HelloHe") → "lloHe"
    sinPrimero2("HelloHi") → "HelloHi"
    sinPrimero2("Hi") → ""
    */

    public String sinPrimero2(String cadena) {
        if (cadena.length() == 1) {
            return cadena;
        } else if (cadena.length() > 2) {
            String primerosDos = cadena.substring(0, 2);
            String ultimosDos = cadena.substring(cadena.length()-2, cadena.length());

            if (primerosDos.equals(ultimosDos)) {
                return cadena.substring(2, cadena.length());
            } else {
                return cadena;
            }
        }
        return "";
    }

    /*
    Dada una cadena, si el primer o ultimo carácter es 'x', retorna una nueva cadena sin la 'x', y de lo contrario retorna la cadena sin cambios.

    cadenaSinX("xHix") → "Hi"
    cadenaSinX("xHi") → "Hi"
    cadenaSinX("Hxix") → "Hxi"
    */

    public String cadenaSinX(String cadena) {
        if (cadena.length() >= 2) {
            if (cadena.startsWith("x") && !cadena.endsWith("x")) {
                return cadena.substring(1);
            } else if (!cadena.startsWith("x") && cadena.endsWith("x")) { 
                return cadena.substring(0, cadena.length()-1);
            } else if (cadena.startsWith("x") && cadena.endsWith("x")) {
                return cadena.substring(1, cadena.length()-1);
            } else {
                return cadena;
            }
        }
        return "";
    }

    /* 
    La web se construye con cadenas HTML como "<i>Yay</i>", que dibuja yay como texto en cursiva. En este ejemplo, la etiqueta "i" crea <i> y </i> que rodean la palabra "Yay". Dadas las cadenas de etiquetas y palabras, crea la cadena HTML con etiquetas alrededor de la palabra, por ejemplo, "<i>Yay</i>".

    creaEtiquetas("i", "Yay") → "<i>Yay</i>"
    creaEtiquetas("i", "Hello") → "<i>Hello</i>"
    creaEtiquetas("cite", "Yay") → "<cite>Yay</cite>"
    */

    public String creaEtiquetas(String etiqueta, String palabra) {
        return "<" + etiqueta + ">" + palabra + "</" + etiqueta + ">";
    }

    /* 
    Dada una cadena, retorna una cadena formada por los dos primeros caracteres de la cadena original, por lo que "Hello" produce "He". Si la cadena es más corta que 2 caracteres, retorna lo que haya, de modo que "X" genere "X" y la cadena vacía "" genere la cadena vacía "". Tenga en cuenta que str.length() devuelve la longitud de la cadena.

    primerosDos("Hello") → "He"
    primerosDos("abcdefg") → "ab"
    primerosDos("ab") → "ab"
    */

    public String firstTwo(String str) {
        return (str.length() > 1) ? str.substring(0, 2) : str;
    }

    /*
    Dada 2 cadenas, a y b, retorna una cadena de forma corta + grande + corta, con la cadena corta en los laterales y la cadena más grande en el interior. Las cadenas no tendrá la misma longitud, pero pueden estar vacías (longitud 0).

    comboCadena("Hello", "hi") → "hiHellohi"
    comboCadena("hi", "Hello") → "hiHellohi"
    comboCadena("aaa", "b") → "baaab"
    */

    public String comboCadena(String a, String b) {
        if (a.length() > b.length()) {
            return b + a + b;
        } else {
            return a + b + a;
        }
    }

    /* 
    Dada una cadena, retorna una versión rotada a hacia la derecha con los 2 ultimos caracteres al principio de la cadena. La longitud de la cadena será al menos 2.

    rotar2("Hello") → "loHel"
    rotar2("java") → "vaja"
    rotar2("Hi") → "Hi"
    */

    public String rotar2(String cadena) {
        if (cadena.length() >= 2) {
            String ultimosDos = cadena.substring(cadena.length()-2);
            String resto = cadena.substring(0, cadena.length()-2);
          return ultimosDos + resto;
        }
        return cadena;
    }

    /* 
    Dada una cadena de longitud par, retorna una nueva cadena formada por los dos caracteres del medio, por lo que "string" produce "ri". La longitud de la cadena será al menos de 2.

    dosMedio("string") → "ri"
    dosMedio("code") → "od"
    dosMedio("Practice") → "ct"
    */

    public String dosMedio(String str) {
        int mitad = str.length()/2;
        
        return str.substring(mitad - 1, mitad) + str.substring(mitad, mitad + 1);
    }

    /* 
    Dada una cadena y un índice, retorna una cadena de longitud 2 que comienza en el índice dado. Si el índice es demasiado grande o demasiado pequeño para definir una cadena de longitud 2, utiliza los primeros 2 caracteres. La longitud de la cadena será al menos 2

    dosCaracteres("java", 0) → "ja"
    dosCaracteres("java", 2) → "va"
    dosCaracteres("java", 3) → "ja"
    */

    public String dosCaracteres(String cadena, int indice) {
        if (indice < 0 || indice == 0 || ((cadena.length() - indice) < 2)) {
          return cadena.substring(0, 2);
        } else {
          return cadena.substring(indice, indice + 2);
        }
    }

    /* 
    Dada una cadena, retorna una cadena de longitud 2 formada por los dos primeros caracteres. Si la longitud de la cadena es menor a 2, utiliza '@' para los caracteres faltantes.

    enPrimer("hello") → "he"
    enPrimer("hi") → "hi"
    enPrimer("h") → "h@"
    */

    public String enPrimer(String cadena) {
        if (cadena.isEmpty()) {
          return "@@";
        } else if (cadena.length() >= 2) {
          return cadena.substring(0, 2);
        } else {
          return cadena + "@";
        }
    }

    /* 
    Dada una cadena de cualquier longitud, devuelve una cadena donde los últimos 2 caracteres, si están presentes, se intercambian, por lo que "coding" produce "codign".

    cambiaUltimosDos("coding") → "codign"
    cambiaUltimosDos("cat") → "cta"
    cambiaUltimosDos("ab") → "ba"
    */

    public String cambiaUltimosDos(String cadena) {
        if (cadena.length() >= 2) {
            char ultimo = cadena.charAt(cadena.length()-1);
            char penultimo = cadena.charAt(cadena.length()-2);
            String resto = cadena.substring(0, cadena.length()-2);

            return resto + ultimo + penultimo;
        }
        return cadena;
    }

    /* 
    Dadas dos cadenas, unirlas (concatenarlas) y retornar el resultado. Sin embargo, si la cadena son de diferentes longitudes, omite los caracteres de la cadena más grande para que tenga la misma longitud que la cadena más corta. Por lo tanto, "Hello" y "Hi" dan como resultado "loHi". La cadena puede tener cualquier longitud.

    minimaConcatenacion("Hello", "Hi") → "loHi"
    minimaConcatenacion("Hello", "java") → "ellojava"
    minimaConcatenacion("java", "Hello") → "javaello"
    */

    public String minimaConcatenacion(String a, String b) {
        if (a.length() > b.length()) {
            int diferencia = a.length() - b.length();
            String igualar = a.substring(diferencia, a.length()); 
            return igualar + b;
        } else if (b.length() > a.length()) {
            int diferencia = b.length() - a.length();
            String igualar = b.substring(diferencia, b.length());
            return a + igualar;
        } 
        return a + b;
    }

    /* 
    Dada una cadena, retorna una nueva cadena sin los dos primeros caracteres. Excepto que se conserva el primer caràcter si es 'a' y se conserva el segundo si es 'b'. La cadena puede tener cualquier longitud. Es más dificil de lo que parece.

    sinFrente("Hello") → "llo"
    sinFrente("java") → "va"
    sinFrente("away") → "aay"
    */

    public String sinFrente(String cadena) {    
        String resultado = "";
        
        if (cadena.charAt(0) == 'a') {
            resultado += cadena.charAt(0);
        }
        if (cadena.charAt(1) == 'b') {
            resultado += cadena.charAt(1);
        }
        resultado += cadena.substring(2, cadena.length());
        return resultado;
    }

    /* 
    Dada una cadena, si uno o ambos de los primeros 2 caracteres son 'x', se devuelve la cadena sin esos caracteres 'x' y, de lo contrario, se devuelve la cadena sin cambios. Esto es un poco más difícil de lo que parece.

    sinX2("xHi") → "Hi"
    sinX2("Hxi") → "Hi"
    sinX2("Hi") → "Hi"
    */

    public String sinX2(String cadena) {

        if (cadena.length() <= 1) return "";

        String xCero = cadena.substring(0, 1);
        String xUno = cadena.substring(1, 2);
        
        if (xCero.equals("x") && xUno.equals("x")) {
            return cadena.substring(2);
        } else if (xCero.equals("x")) {
            return cadena.substring(1);
        } else if (xUno.equals("x")) {
            return cadena.substring(0, 1) + cadena.substring(2);
        }
        return cadena;
    }
}