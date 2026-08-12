/*
 * Problemas básicos de matrices: sin bucles. Utilice a[0], a[1], ... para acceder a los elementos de una matriz, a.length es la longitud (tenga en cuenta que s.length() es para cadenas). Asigne una nueva matriz de esta manera: int[] a = new int[10]; // matriz de longitud 10
 */

public class Matriz1 {
    /* 
    Dada una matriz de enteros, retorna verdadero si el numero 6 aparece al principio o al final la matriz. La matriz tendran una longitud de 1 o más.

    primeroUltimo6([1, 2, 6]) → true
    primeroUltimo6([6, 1, 2, 3]) → true
    primeroUltimo6([13, 6, 1, 2, 3]) → false
    */

    public boolean primeroUltimo6(int[] nums) {
        if (nums[0] == 6 || nums[nums.length-1] == 6) {
            return true;
        } else {
            return false;
        }
    }

    /* 
    Dadas 2 matrices de enteros, a y b, retorna verdadero si tienen el mismo primer elemento o el mismo ultimo elemento. Ambas matrices tendrán una longitud de 1 o más.

    primeroUltimoComun([1, 2, 3], [7, 3]) → true
    primeroUltimoComun([1, 2, 3], [7, 3, 2]) → false
    primeroUltimoComun([1, 2, 3], [1, 3]) → true
    */

    public boolean primeroUltimoComun(int[] a, int[] b) {
        if (a[0] == b[0]) {
            return true;
        } else if (a[a.length-1] == b[b.length-1]) {
            return true;
        } else {
            return false;
        }
    }

    /* 
    Dada una matriz de enteros de longitud 3, retorna una nueva matriz con los elementos en orden al reves, por lo que {1, 2, 3} produce {3, 2, 1}.

    revertir3([1, 2, 3]) → [3, 2, 1]
    revertir3([5, 11, 9]) → [9, 11, 5]
    revertir3([7, 0, 0]) → [0, 0, 7]
    */

    public int[] revertir3(int[] nums) {
        return new int[] {nums[2], nums[1], nums[0]};
    }
    
    /* 
    Dadas 2 matrices de enteros, a y b, cada una de longitud 3, retorna una nueva matriz de longitud 2 que contenga los elementos intermedios de las dos matrices.

    intermedio([1, 2, 3], [4, 5, 6]) → [2, 5]
    intermedio([7, 7, 7], [3, 8, 0]) → [7, 8]
    intermedio([5, 2, 9], [1, 4, 5]) → [2, 4]
    */

    public int[] intermedio(int[] a, int[] b) {
        int[] c = new int[2];
        
        c[0] = a[1];
        c[1] = b[1];
        
        return c;
    }

    /* 
    Dada una matriz de enteros de longitud 2, retorna verdadero si no contiene un 2 o un 3.

    ni2Ni3([4, 5]) → true
    ni2Ni3([4, 2]) → false
    ni2Ni3([3, 5]) → false
    */

    public boolean ni2Ni3(int[] nums) {
        if (nums[0] == 2) {
          return false;
        }
        if (nums[1] == 2) {
            return false;
        }
        if (nums[0] == 3) {
            return false;
        }
        if (nums[1] == 3) {
            return false;
        }
        return true;
    }

    /* 
    Dada una matriz de enteros de longitud 3, si hay un 2 en la matriz seguido inmediatamente por un 3, establece el elemento 3 en 0. retorna la matriz modificada.

    arreglo23([1, 2, 3]) → [1, 2, 0]
    arreglo23([2, 3, 5]) → [2, 0, 5]
    arreglo23([1, 2, 1]) → [1, 2, 1]
    */

    public int[] arreglo23(int[] nums) {
        if (nums[0] == 2 && nums[1] == 3) {
            nums[1] = 0;
        }
        if (nums[1] == 2 && nums[2] == 3) {
            nums[2] = 0;
        }
        return nums;
    }

    /* 
    Dada una matriz de enteros de longitud par, retorna una nueva matriz de longitud 2 que contiene los dos elementos del medio de la matriz original. La matriz original tendrá una longitud de 2 o más.

    dosMedio([1, 2, 3, 4]) → [2, 3]
    dosMedio([7, 1, 2, 3, 4, 9]) → [2, 3]
    dosMedio([1, 2]) → [1, 2]
    */

    public int[] makeMiddle(int[] nums) {
        int mid = nums.length/2;
        
        return new int[] {nums[mid-1], nums[mid]};
    }

    /* 
    Dada una matriz de enteros de longitud impar, retorna una nueva matriz de longitud 3 que contiene los elementos del medio de la matriz original. La matriz tendrá una longitud de 3.

    medioTres([1, 2, 3, 4, 5]) → [2, 3, 4]
    medioTres([8, 6, 7, 5, 3, 0, 9]) → [7, 5, 3]
    medioTres([1, 2, 3]) → [1, 2, 3]
    */

    public int[] medioTres(int[] nums) {
        int mid = nums.length/2;
        
        return new int[] {nums[mid-1], nums[mid], nums[mid+1]};
    }

    /* 
    Diremos que un 1 seguido inmediatamente por un 3 en una matriz es un 1 desafortunado. Retorna verdadero si la matriz dada contiene un 1 desafortunado en sus primeras dos o sus ultimas dos posiciones en la matriz.

    desafortunado1([1, 3, 4, 5]) → true
    desafortunado1([2, 1, 3, 4, 5]) → true
    desafortunado1([1, 1, 1]) → false
    */

    public boolean desafortunado1(int[] nums) {
        if (nums.length >= 2) {
            if (nums[0] == 1 && nums[1] == 3) {
                return true;
            } else if (nums[1] == 1 && nums[2] == 3) {
                return true;
            } else if (nums[nums.length-2] == 1 && nums[nums.length-1] == 3) {
                return true;
            }
        }
        return false;
    }
    
    /* 
    Dada una matriz de enteros, retorna verdadero si la matriz tiene una longitud de 1 o más, y el primer elemento y el último elemento son iguales.

    igualPrimeroUltimo([1, 2, 3]) → false
    igualPrimeroUltimo([1, 2, 3, 1]) → true
    igualPrimeroUltimo([1, 2, 1]) → true
    */

    public boolean igualPrimeroUltimo(int[] nums) {
        if (nums.length >= 1) {
            if (nums[0] == nums[nums.length-1]) {
                return true;
            }
        }
        return false;
    }

    /* 
    Dada una matriz de entero de longitud 3, retorna la suma de todos los elementos.

    suma3([1, 2, 3]) → 6
    suma3([5, 11, 2]) → 18
    suma3([7, 0, 0]) → 7
    */

    public int suma3(int[] nums) {
        return nums[0] + nums[1] + nums[2];
    }

    /* 
    Dada una matriz de entero de longitud 3, determine cuál es más grande, el primero o el último elemento del conjunto, y establezca que todos los demás elementos tengan ese valor. Retorna el conjunto modificado.

    maximo3([1, 2, 3]) → [3, 3, 3]
    maximo3([11, 5, 9]) → [11, 11, 11]
    maximo3([2, 11, 3]) → [3, 3, 3]
    */

    public int[] maximo3(int[] nums) {
        if (nums[0] > nums[nums.length-1]) {
            nums[0] = nums[0];
            nums[1] = nums[0];
            nums[2] = nums[0];
        } else {
            nums[0] = nums[nums.length-1];
            nums[1] = nums[nums.length-1];
            nums[2] = nums[nums.length-1];
        }
        return nums;
    }

    /* 
    Dada una matriz de enteros, retorna una nueva matriz de longitud 2 que contenga el primer y último elemento de la matriz original. La matriz original tendrán una longitud de 1 o más.

    laterales([1, 2, 3]) → [1, 3]
    laterales([1, 2, 3, 4]) → [1, 4]
    laterales([7, 4, 6, 2]) → [7, 2]
    */

    public int[] laterales(int[] nums) {
        return new int[] {nums[0], nums[nums.length-1]};
    }

    /* 
    Dada una matriz de enteros, retorna una nueva matriz con el doble de longitud donde su último elemento es el mismo que la matriz original y todos los demás elementos son 0. La matriz original tendrá una longitud de 1 o más. Nota: de forma predeterminada, una nueva matriz de entero contiene los 0.

    ceroHastaUltimo([4, 5, 6]) → [0, 0, 0, 0, 0, 6]
    ceroHastaUltimo([1, 2]) → [0, 0, 0, 2]
    ceroHastaUltimo([3]) → [0, 3]
    */

    public int[] ceroHastaUltimo(int[] nums) {
        int longitud = nums.length * 2;
        int[] cerosNums = new int[longitud];

        cerosNums[longitud-1] = nums[nums.length-1];
        
        return cerosNums;
    }

    /* 
    Comience con dos matrices de enteros, a y b, de cualquier longitud. Retorna cuantas de las matrices tienen un 1 como su primer elemento.

    comienza1([1, 2, 3], [1, 3]) → 2
    comienza1([7, 2, 3], [1]) → 1
    comienza1([1, 2], []) → 1
    */

    public int comienza1(int[] a, int[] b) {
        if (a.length > 0 && a[0] == 1) {
            if (b.length > 0 && b[0] == 1) {
                return 2;
            } else {
                return 1;
            }
        }
        if (b.length > 0 && b[0] == 1) {
            return 1;
        }
        return 0;
    }

    /* 
    Dadas 2 matrices de enteros, cada una de longitud 2, retorna una nueva matriz de longitud 2 que contenga todos los elementos de las dos matrices.

    juntasDos([1, 2], [3, 4]) → [1, 2, 3, 4]
    juntasDos([4, 4], [2, 2]) → [4, 4, 2, 2]
    juntasDos([9, 2], [3, 4]) → [9, 2, 3, 4]
    */

    public int[] juntasDos(int[] a, int[] b) {
        return new int[] {a[0], a[1], b[0], b[1]};
    }

    /* 
    Dada una matriz de enteros de longitud impar, observe el primer, ultimo y medio valor de la matriz y retorna el mayor. La longitud de la matriz será al menos 1.

    maximoTres([1, 2, 3]) → 3
    maximoTres([1, 5, 3]) → 5
    maximoTres([5, 2, 3]) → 5
    */

    public int maximoTres(int[] nums) {
        int mayor = 0;
        
        for (int i = 0; i < nums.length; i++) {
            if (i == 0 || i == nums.length/2 || i == nums.length-1) {
                if (mayor < nums[i]) {
                    mayor= nums[i];
                }
            }
        }
        return mayor;
    }

    /*
    Dadas 2 matrices de enteros, a y b, retorna una nueva matriz de longitud 2 que contenga, en la medida de lo posible, los elementos de a seguido de los elementos de b. Las matrices puede tener cualquier longitud, incluido 0, pero habrá 2 o más elementos disponibles entre las 2 matrices.

    hacer2([4, 5], [1, 2, 3]) → [4, 5]
    hacer2([4], [1, 2, 3]) → [4, 1]
    hacer2([], [1, 2]) → [1, 2]
    */

    public int[] hacer2(int[] a, int[] b) {
        if (a.length >= 2) {
            return new int[] {a[0], a[1]};
        }
        if (a.length == 1) {
            return new int[] {a[0], b[0]};
        }
        return b;
    }   
    
    /*
    Retorna una matriz de enteros de longitud 3 que contiene los dígitos de pi, {3, 1, 4}.

    crearPi() → [3, 1, 4]
    */

    public int[] makePi() {
        return new int[] {3, 1, 4};
    }

    /*
    Dada una matriz de enteros de longitud 3, retorna una matriz con los elementos cambiados a la izquierda, por lo que {1, 2, 3} produce {2, 3, 1}.

    cambiarAIzquierda3([1, 2, 3]) → [2, 3, 1]
    cambiarAIzquierda3([5, 11, 9]) → [11, 9, 5]
    cambiarAIzquierda3([7, 0, 0]) → [0, 0, 7]
    */

    public int[] cambiarAIzquierda3(int[] nums) {
        return new int[] {nums[1], nums[2], nums[0]};
    }

    /* 
    Dada una matriz de enteros, retorna la suma de los 2 primeros elementos de la matriz. Si la longitud de la matriz es menor a 2, simplemente suma los elementos que existen y devuelve 0 si la matriz tiene una longitud de 0.

    suma2([1, 2, 3]) → 3
    suma2([1, 1]) → 2
    suma2([1, 1, 1, 1]) → 2
    */

    public int suma2(int[] nums) {
        int suma = 0;
        
        if (nums.length >= 2) {
            suma += nums[0];
            suma += nums[1];
        } else if (nums.length == 1) {
            suma = nums[0];
        }
        return suma;
    }

    /* 
    Dada una matriz de enteros de longitud 2, retorna verdadero si contiene un 2 o un 3.

    tiene2O3([2, 5]) → true
    tiene2O3([4, 3]) → true
    tiene2O3([4, 5]) → false
    */

    public boolean tiene2O3(int[] nums) {
        if (nums[0] == 2 || nums[1] == 3) return true;
        if (nums[0] == 3 || nums[1] == 2) return true;
        return false;
    }

    /* 
    Dada una matriz de enteros, retorna verdadero si la matriz contiene un 2 dos veces o un 3 dos veces. La matriz tendrá una longitud de 0, 1 0 2.

    doble23([2, 2]) → true
    doble23([3, 3]) → true
    doble23([2, 3]) → false
    */

    public boolean doble23(int[] nums) {
        if (nums.length > 1) {
            if (nums[0] == 2 && nums[1] == 2) {
                return true;
            }
            if (nums[0] == 3 && nums[1] == 3) {
                return true;
            }
        }
        return false;
    }

    /* 
    Comience con dos matrices de enteros, a y b, cada una de longitud 2. Considere la suma de los valores en cada matriz. Retorna la matriz que tenga la suma más grande. En caso de empate, retorna a.

    dosGrandes([1, 2], [3, 4]) → [3, 4]
    dosGrandes([3, 4], [1, 2]) → [3, 4]
    dosGrandes([1, 1], [1, 2]) → [1, 2]
    */

    public int[] dosGrandes(int[] a, int[] b) {
        if (a[0] + a[1] > b[0] + b[1]) {
            return a;
        } else if (a[0] + a[1] < b[0] + b[1]) {
            return b;
        } else {
            return a;
        }
    }

    /*
    Dada una matriz de enteros, cambia el primer y último elemento en la matriz. Retorna la matriz modificada. La longitud de la matriz será al menos 1.

    cambiaFinal([1, 2, 3, 4]) → [4, 2, 3, 1]
    cambiaFinal([1, 2, 3]) → [3, 2, 1]
    cambiaFinal([8, 6, 7, 9, 5]) → [5, 6, 7, 9, 8] 
    */

    public int[] cambiaFinal(int[] nums) {
        int tmp = nums[0];
        nums[0] = nums[nums.length-1];
        nums[nums.length-1] = tmp;
        return nums;
    }

    /* 
    Dada una matriz de enteros de cualquier longitud, retorna una nueva matriz con sus dos primeros elementos. Si la matriz es más pequeña que 2 elementos, utiliza los elementos que estén presentes.

    dosElementos([1, 2, 3]) → [1, 2]
    dosElementos([1, 2]) → [1, 2]
    dosElementos([1]) → [1]
    */

    public int[] dosElementos(int[] nums) {
        if (nums.length >= 2) {
            return new int[] {nums[0], nums[1]};
        } else {
            return nums;
        }
    }

    /* 
    Dadas 2 matrices de enteros, a y b, de cualquier longitud, retorna una nueva matriz con los primeros elementos de cada matriz. Si cualquiera de las matrices tiene una longitud de 0, ignora esa matriz.

    primerosElementos([1, 2, 3], [7, 9, 8]) → [1, 7]
    primerosElementos([1], [2]) → [1, 2]
    primerosElementos([1, 7], []) → [1]
    */

    public int[] primerosElementos(int[] a, int[] b) {
        if (a.length == 0 && b.length == 0) {
            return new int[0];
        } else if (a.length >= 1) {
            if (b.length >= 1) {
                return new int[] {a[0], b[0]};
            } else {
                return new int[] {a[0]};
            }
        } else {
            return new int[] {b[0]};
        }
    }
}