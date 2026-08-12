/* 
 * Problemas de calentamiento de bucles de strings y arrays
 */

public class Calentamiento2 {
    /* 
    Dada una cadena y un entero n no negativo, retorna una cadena más con el número de copia indicado por n.

    copiaCadena("Hi", 2) → "HiHi"
    copiaCadena("Hi", 3) → "HiHiHi"
    copiaCadena("Hi", 1) → "Hi"
    */

    public String copiaCadena(String cadena, int n) {
        String nuevaCadena = "";
        
        while (n > 0) {
            nuevaCadena += cadena;
            n--;
        }
        return nuevaCadena;
    }

    /* 
    Dada una cadena, retorna verdadero si la primera aparición de "x" en la cadena es seguida inmediatamente por otra "x". 

    dobleX("axxbb") → true
    dobleX("axaxax") → false
    dobleX("xxxxx") → true
    */
    boolean dobleX(String cadena) {
        for (int i = 0; i < cadena.length(); i++) {
            if (i < cadena.length()-1) {
                char ac = cadena.charAt(i);
                char sc = cadena.charAt(i+1);
                if (ac == 'x') {
                    if (sc == 'x') {
                        return true;
                    } else {
                        break;
                    }
                }
            }
        }
        return false;
    }
    /* 
    Dada una cadena, retorna la cantidad de las veces que los dos últimos caracteres de la cadena aparace en la cadena, por lo que "hixxxhi" produce 1 (no contaremos la subcadena final). 

    ultimosDos("hixxhi") → 1
    ultimosDos("xaxxaxaxx") → 1
    ultimosDos("axxxaaxx") → 2
    */
    public int ultimosDos(String cadena) {
        if (cadena.length() < 2) return 0;

        String ultDos = cadena.substring(cadena.length()-2);

        int i = 0;
        int contador = 0;

        while (i < cadena.length()-2) {
            if (cadena.substring(i, i+2).equals(ultDos)) {
                contador++;
            }
            i++;
        }
        return contador;
    }

    /* 
    Dada una matriz de enteros, retorna verdadero si la secuencia de números 1,2,3 aparece en la matriz.

    matriz123([1, 1, 2, 3, 1]) → true
    matriz123([1, 1, 2, 4, 1]) → false
    matriz123([1, 1, 2, 1, 2, 3]) → true
    */
    public boolean matriz123(int[] nums) {
        boolean secuencia = false;
        
        for (int i = 0; i < nums.length; i++) {
            if (i < nums.length-2) {
                if (nums[i] == 1 && nums[i+1] == 2 && nums[i+2] == 3) {
                    secuencia = true; 
                }
            }
        }
        if (secuencia) return true;
        return false;
    }

    /* 
    Dada una cadena, retorna una cadena con los caracteres en los indices 0, 1, 4, 5, 8, 9 por lo tanto "Kittens" produce "Kien".

    paresAlternos("kitten") → "kien"
    paresAlternos("Chocolate") → "Chole"
    paresAlternos("CodingHorror") → "Congrr"
    */
    public String paresAlternos(String cadena) {
        String nuevaCadena = "";
        
        for (int i = 0; i < cadena.length(); i+=4) {
            if (cadena.length() > 1) {
                nuevaCadena += cadena.charAt(i);
                if (i < cadena.length()-1) {
                    nuevaCadena += cadena.charAt(i+1);
                }
            } else {
                return cadena;
            }
        }
        return nuevaCadena;
    }

    /* 
    Dada una matriz de enteros, diremos que es triple si un mismo valor aparece 3 veces seguidas en la matriz. Retorna verdadero si la matriz no contiene ningún triple.

    noTres([1, 1, 2, 2, 1]) → true
    noTres([1, 1, 2, 2, 2, 1]) → false
    noTres([1, 1, 1, 2, 2, 2, 1]) → false
    */
    public boolean noTres(int[] nums) {
        boolean tres = false;
        
        for (int i = 0; i < nums.length; i++) {
            if (i < nums.length-2) {
                if (nums[i] == nums[i+1] && nums[i+1] == nums[i+2]) {
                    tres = true;
                }
            }
        }
        
        if (tres) return false;
        return true;
    }

    /* 
    Dada una cadena y un entero n no negativo, diremos que el frente de la cadena son los 3 primeros caracteres, o lo que contenga si la longitud es menor a 3. Retorna n copies del frente.

    copiasFrente("Chocolate", 2) → "ChoCho"
    copiasFrente("Chocolate", 3) → "ChoChoCho"
    copiasFrente("Abc", 3) → "AbcAbcAbc"
    */
    public String copiasFrente(String cadena, int n) {
        String nuevaCadena = "";
        int contador = 0;
        
        if (n == 0) {
            return "";
        }
        
        while (contador < n) {
            if (cadena.length() > 2) {
                nuevaCadena += cadena.substring(0, 3);
                contador++;  
            } else {
                nuevaCadena += cadena;
                contador++;
            }
        }
        return nuevaCadena;
    }

    /* 
    Dada una cadena, retorna una nueva cadena formada por todos los caracteres pares, por lo que "Hello" produce "Hlo".

    cadenaBits("Hello") → "Hlo"
    cadenaBits("Hi") → "H"
    cadenaBits("Heeololeo") → "Hello"
    */
    public String cadenaBits(String cadena) {
        String nuevaCadena = "";
        int i = 0;
        
        while (i < cadena.length()) {
            nuevaCadena += cadena.charAt(i);
            i+=2;
        }
        return nuevaCadena;
    }

    /* 
    Dada una matriz de enteros, retorna el número de veces que el 9 se encuentra en la matriz.

    cuentaMatriz9([1, 2, 9]) → 1
    cuentaMatriz9([1, 9, 9]) → 2
    cuentaMatriz9([1, 9, 9, 3, 9]) → 3
    */
    public int cuentaMatriz9(int[] nums) {
        int contador = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 9) {
                contador++;
            }
        }
        return contador;
    }

    /* 
    Dadas dos cadena a y b, retorna el numero de veces en las que una de las cadenas contiene la misma subcadena de longitud 2. Por lo tanto, "xxcaazz" dan como resultado 3, ya que las subcadenas "xx", "aa" y "az" aparecen en el mismo lugar en ambas cadenas. 

    cadenaPartida("xxcaazz", "xxbaaz") → 3
    cadenaPartida("abc", "abc") → 2
    cadenaPartida("abc", "axc") → 0
    */
    public int cadenaPartida(String a, String b) {
        int contador = 0;
        int longitud = Math.min(a.length(), b.length());
        
        for (int i = 0; i < longitud; i++) {
            if (i < longitud-1) {
                String sub = a.substring(i, i+2);
                if (sub.equals(b.substring(i, i+2))) {
                    contador++;
                }
            }
        }
        return contador;
    }

    /* 
    Supongamos que la cadena "yak" es desafortunada. Dada una cadena, retorna una versión en la que se eliminen todos los "yak", per la "a" puede ser cualquier carácter. Las cadenas "yak" no se superpondrán.

    cadenaYak("yakpak") → "pak"
    cadenaYak("pakyak") → "pak"
    cadenaYak("yak123ya") → "123ya"
    */
    public String cadenaYak(String cadena) {
        String nuevaCadena = "";
        
        for (int i = 0; i < cadena.length(); i++) {
            if (i < cadena.length()-2 && cadena.charAt(i) == 'y' && cadena.charAt(i+2) == 'k') {
                i = i + 2;
            } else {
                nuevaCadena += cadena.charAt(i);
            }
        }
        return nuevaCadena;
    }

    /* 
    Dada una matriz de enteros, retorna verdadera si esta contiene un patron 2, 7, 1: un valor seguido del otro más 5, seguido del valor menos 1. Además, el 271 cuenta incluso si el "1" difiere en 2 o menos del valor correcto.

    tiene271([1, 2, 7, 1]) → true
    tiene271([1, 2, 8, 1]) → false
    tiene271([2, 7, 1]) → true
    */
    public boolean tiene271(int[] nums) {
        for (int i = 0; i < nums.length-2; i++) {
            int siete = nums[i]+5;
            int dos = Math.abs(nums[i+2] - (siete - 6));
            
            if (nums[i+1] == siete && dos <= 2) {
                return true;
            }
        }
        return false;
    }

    /* 
    Cuenta el numero de "xx" en la cadena dada. Supongamos que se permite la superposición, por lo que "xxx" contiene 2 "xx".

    cuentaXX("abcxx") → 1
    cuentaXX("xxx") → 2
    cuentaXX("xxxx") → 3
    */
    public int cuentaXX(String cadena) {
        int contador = -1;
        
        for (int i = 0; i < cadena.length(); i++) {
            if (Character.isWhitespace(cadena.charAt(i))) {
                contador++;
                break;
            }
            if (cadena.charAt(i) == 'x') {
                contador++;
            }
        }
        if (contador == -1) return 0;
        return contador;
    }

    /* 
    Dada una cadena no vacía como "Code", devuelve una cadena como "CCoCodCode".

    cadenaExplosion("Code") → "CCoCodCode"
    cadenaExplosion("abc") → "aababc"
    cadenaExplosion("ab") → "aab"
    */
    public String cadenaExplosion(String cadena) {
        String nuevaCadena = "";
        int contador = 1;

        for (int i = 0; i < cadena.length(); i++) {
            for (int j = 0; j < contador; j++) {
                nuevaCadena += cadena.charAt(j);
            }
            contador++;
        }
        return nuevaCadena;
    }

    /* 
    Dada una matriz de enteros, retorna verdadero si uno de los primeros 4 elementos en la matriz es un 9. La longitud de la matriz puede ser menor que 4.

    frenteMatriz9([1, 2, 9, 3, 4]) → true
    frenteMatriz9([1, 2, 3, 4, 9]) → false
    frenteMatriz9([1, 2, 3, 4, 5]) → false
    */
    public boolean frenteMatriz9(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            if (i < 4) {
                if (nums[i] == 9) {
                    return true;
                }
            }
        }
        return false;
    }

    /* 
    Dada una cadena, retorna una version en la que se han eliminado todas las "x". Excepto que no se debe eliminar una "x" al principio o al final.
    
    cadenaX("xxHxix") → "xHix"
    cadenaX("abxxxcd") → "abcd" 
    cadenaX("xabxxxcdx") → "xabcdx"
    */
    public String cadenaX(String cadena) {
        String nuevaCadena = "";

        if (cadena.length() > 1) {
            nuevaCadena += cadena.charAt(0);
            for (int i = 0; i < cadena.length(); i++) {
                if (i > 0 && i < cadena.length()-1) {
                    if (cadena.charAt(i) != 'x') {
                        nuevaCadena += cadena.charAt(i);
                    }
                }
            }
            return nuevaCadena + cadena.charAt(cadena.length()-1);
        }
        return cadena;
    }

    /* 
    Dada una matriz de enteros, retorna el numero de veces que dos 6 están uno al lado del otro en la matriz. También cuenta las instancias en las que el segundo "6" es en realidad un 7. 

    matriz667([6, 6, 2]) → 1
    matriz667([6, 6, 2, 6]) → 1
    matriz667([6, 7, 2, 6]) → 1
    */
    public int matriz667(int[] nums) {
        int contador = 0;

        for (int i = 0; i < nums.length; i++) {
            if (i < nums.length-1) {
                if (nums[i] == 6 && (nums[i+1] == 6 || nums[i+1] == 7)) {
                    contador++;
                }
            }
        }
        return contador;
    }
}