/*
 * Datos de los ejercicios de CodingBat (Java y Python).
 * Generado automáticamente por tools/generate-data.py — no editar a mano.
 * Para regenerar: python3 tools/generate-data.py
 */

window.EXERCISES = [
  {
    "name": "HolaNombre",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena nombre (ejemplo: \"Bob\"), retorna un saludo con el format \"Hola Bob!\".",
    "examples": [
      "holaNombre(\"Bob\") → \"Hello Bob!\"",
      "holaNombre(\"Alice\") → \"Hello Alice!\"",
      "holaNombre(\"X\") → \"Hello X!\""
    ],
    "code": "public String HolaNombre(String nombre) {\n        return \"Hola \" + nombre + \"!\";\n    }"
  },
  {
    "name": "hacerCadenaSalida",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena salida de longitud 4, como \"<<>>\", y una palabra, retorna una nueva cadena donde la palabra este en el medio de la cadena salida, por ejemplo \"<<palabra>>\". Nota: usa cadena.substring(ini, fi) para extraer la cadena comenzado en el índice ini y hasta el índice fi, pero sin incluirlo.",
    "examples": [
      "hacerCadenaSalida(\"<<>>\", \"Yay\") → \"<<Yay>>\"",
      "hacerCadenaSalida(\"<<>>\", \"WooHoo\") → \"<<WooHoo>>\"",
      "hacerCadenaSalida(\"[[]]\", \"word\") → \"[[word]]\""
    ],
    "code": "public String hacerCadenaSalida(String salida, String palabra) {\n        return salida.substring(0, 2) + palabra + salida.substring(2, salida.length());\n    }"
  },
  {
    "name": "primeraMitad",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena de longitud par, retorna la primera mitad. Por lo tanto, la cadena \"WooHoo\" da como resultado \"Woo\".",
    "examples": [
      "primeraMitad(\"WooHoo\") → \"Woo\"",
      "primeraMitad(\"HelloThere\") → \"Hello\"",
      "primeraMitad(\"abcdef\") → \"abc\""
    ],
    "code": "public String primeraMitad(String cadena) {\n        return cadena.substring(0, cadena.length()/2);\n    }"
  },
  {
    "name": "sinPrimerCaracter",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dadas 2 cadenas, retorna la concatenación, sin el primer carácter de cada cadena. Las cadenas tendrán una longitud mínima de 1.",
    "examples": [
      "sinPrimerCaracter(\"Hello\", \"There\") → \"ellohere\"",
      "sinPrimerCaracter(\"java\", \"code\") → \"avaode\"",
      "sinPrimerCaracter(\"shotl\", \"java\") → \"hotlava\""
    ],
    "code": "public String sinPrimerCaracter(String a, String b) {\n        return a.substring(1) + b.substring(1);\n    }"
  },
  {
    "name": "ultimoCaracter",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena, retorna una cadena con el primer carácter, a menos que frente sea falso, retorna el ultimo carácter. La cadena no estará vacía.",
    "examples": [
      "ultimoCaracter(\"Hello\", true) → \"H\"",
      "ultimoCaracter(\"Hello\", false) → \"o\"",
      "ultimoCaracter(\"oh\", true) → \"o\""
    ],
    "code": "public String ultimoCaracter(String cadena, boolean frente) {\n        if (frente) {\n            return cadena.substring(0, 1);\n        } else {\n            return cadena.substring(cadena.length()-1);\n        }\n    }"
  },
  {
    "name": "finalLy",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena, retorna verdadero si el final es \"ly\"",
    "examples": [
      "finalLy(\"oddly\") → true",
      "finalLy(\"y\") → false",
      "finalLy(\"oddy\") → false"
    ],
    "code": "public boolean finalLy(String cadena) {\n        if (cadena.length() >= 2) {\n            String ly = cadena.substring(cadena.length()-2);\n\n            if (ly.equals(\"ly\")) return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "mitadTres",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena de longitud impar, retorna una cadena de longitud 3 con la mitad de la cadena original. La longitud de la cadena será al menos 3.",
    "examples": [
      "mitadTres(\"Candy\") → \"and\"",
      "mitadTres(\"and\") → \"and\"",
      "mitadTres(\"solving\") → \"lvi\""
    ],
    "code": "public String mitadTres(String cadena) {\n        int mitad = cadena.length()/2;\n        \n        return cadena.substring(mitad - 1, mitad) + cadena.substring(mitad, mitad + 2);\n    }"
  },
  {
    "name": "ultimosCaracteres",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dadas 2 cadenas, a y b, retorna una nueva cadena formada por el primer carácter de a y el último de b, por lo que \"yo\" y \"java\" produce \"ya\". Si alguna de las cadenas tiene una longitud de 0, se utiliza '@' para el carácter faltante.",
    "examples": [
      "ultimosCaracteres(\"last\", \"chars\") → \"ls\"",
      "ultimosCaracteres(\"yo\", \"java\") → \"ya\"",
      "ultimosCaracteres(\"hi\", \"\") → \"h@\""
    ],
    "code": "public String ultimosCaracteres(String a, String b) {\n        if (a.isEmpty()) {\n            a = \"@\";\n        }\n\n        if (b.isEmpty()) {\n            b = \"@\";\n        }\n\n        return a.substring(0, 1) + b.substring(b.length()-1);\n    }"
  },
  {
    "name": "color",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena, si la cadena comienza con \"red\" o \"blue\", retorna el color en una cadena, de lo contrario retorna una cadena vacía.",
    "examples": [
      "color(\"redxx\") → \"red\"",
      "color(\"xxred\") → \"\"",
      "color(\"blueTimes\") → \"blue\""
    ],
    "code": "public String color(String cadena) {\n        if (cadena.startsWith(\"red\")) return \"red\";\n        if (cadena.startsWith(\"blue\")) return \"blue\";\n        return \"\";\n    }"
  },
  {
    "name": "frente3",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena, retorna una nueva cadena formada por 3 copias de los 2 primeros carácteres de la cadena original. La cadena puede tener cualquier longitud. Si hay menos de 2 carácteres, utiliza lo que haya.",
    "examples": [
      "frente3(\"Hello\") → \"HeHeHe\"",
      "frente3(\"ab\") → \"ababab\"",
      "frente3(\"H\") → \"HHH\""
    ],
    "code": "public String frente3(String cadena) {\n        if (cadena.length() >= 2) {\n            String primerosDos = cadena.substring(0, 2);\n\n            return primerosDos + primerosDos + primerosDos;\n        }\n        return cadena + cadena + cadena;\n    }"
  },
  {
    "name": "principioPalabra",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dadas dos cadenas, diremos que la palabra coincide con la cadena si aparece al principio de la primera cadena, excepto que su primer carácter no necesita coincidir exactamente. En caso de coincidencia, devuelve la cadena vacía. Por lo tanto, con la cadena \"hippo\", la palabra \"hi\" retorna \"hi\" y la palabra \"xip\" devuelve \"hip\". La palabra tendrá al menos una longitud de 1.",
    "examples": [
      "principioPalabra(\"hippo\", \"hi\") → \"hi\"",
      "principioPalabra(\"hippo\", \"xip\") → \"hip\"",
      "principioPalabra(\"hippo\", \"i\") → \"h\""
    ],
    "code": "public String principioPalabra(String cadena, String palabra) {\n        if (cadena.length() >= palabra.length()) {\n            String principioCadena = cadena.substring(1, palabra.length());\n\n            String principioPalabra = palabra.substring(1, palabra.length());\n            if (principioCadena.equals(principioPalabra)) {\n                return principioCadena;\n            } else {\n                return \"\";\n            }\n        } else if (cadena.length() < palabra.length()) {\n            return \"\";\n        }\n        return cadena;\n    }"
  },
  {
    "name": "crearABBA",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dadas 2 cadenas, a y b, retorna el resultado de ponerlas juntas en el orden a+b+b+a, (ejemplo: \"Hi\" y \"Bye\" retorna \"HiByeByeHi\").",
    "examples": [
      "crearABBA(\"Hi\", \"Bye\") → \"HiByeByeHi\"",
      "crearABBA(\"Yo\", \"Alice\") → \"YoAliceAliceYo\"",
      "crearABBA(\"What\", \"Up\") → \"WhatUpUpWhat\""
    ],
    "code": "public String crearABBA(String a, String b) {\n        return a + b + b + a;\n    }"
  },
  {
    "name": "final3",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena, retorna una nueva cadena formada por 3 copias de los ultimos carácteres de la cadena original. La longitud de la cadena será al menos 2.",
    "examples": [
      "final3(\"Hello\") → \"lololo\"",
      "final3(\"ab\") → \"ababab\"",
      "final3(\"Hi\") → \"HiHiHi\""
    ],
    "code": "public String final3(String cadena) {\n        if (cadena.length() > 2) {\n            String ultimosDos = cadena.substring(cadena.length()-2);\n            return ultimosDos + ultimosDos + ultimosDos; \n        }\n        return cadena + cadena + cadena;\n    }"
  },
  {
    "name": "sinPrimerUltimo",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena, retorna una version sin el primer y ultimo carácter, por lo que \"Hello\" produce \"ell\". La longitud de la cadena será al menos 2.",
    "examples": [
      "sinPrimerUltimo(\"Hello\") → \"ell\"",
      "sinPrimerUltimo(\"java\") → \"av\"",
      "sinPrimerUltimo(\"coding\") → \"odin\""
    ],
    "code": "public String sinPrimerUltimo(String cadena) {\n        return cadena.substring(1, cadena.length()-1);\n    }"
  },
  {
    "name": "cambia2",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dado una cadena, retorna una nueva cadena con los dos primeros carácteres al final y los dos del final al principio. La longitud de la cadena será al menos 2.",
    "examples": [
      "cambia2(\"Hello\") → \"lloHe\"",
      "cambia2(\"java\") → \"vaja\"",
      "cambia2(\"Hi\") → \"Hi\""
    ],
    "code": "public String cambia2(String cadena) {\n        if (cadena.length() >= 2) {\n            return cadena.substring(2, cadena.length()) + cadena.substring(0, 2);\n        }\n        return cadena;\n    }"
  },
  {
    "name": "sinPrimerUltimo2",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena, retorna una nueva cadena sin el primer y ultimo carácter de la cadena original. La cadena puede tener cualquier longitud, incluido 0.",
    "examples": [
      "sinPrimerUltimo2(\"Hello\") → \"ell\"",
      "sinPrimerUltimo2(\"abc\") → \"b\"",
      "sinPrimerUltimo2(\"ab\") → \"\""
    ],
    "code": "public String sinPrimerUltimo2(String cadena) {\n        if (cadena.length() <= 1) return \"\";\n\n        return cadena.substring(1, cadena.length()-1);\n    }"
  },
  {
    "name": "nVeces",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena y un entero n, retorna una cadena formada por los primeros y los ultimos n carácteres de la cadena original. La longitud de la cadena será al menos n.",
    "examples": [
      "nVeces(\"Hello\", 2) → \"Helo\"",
      "nVeces(\"Chocolate\", 3) → \"Choate\"",
      "nVeces(\"Chocolate\", 1) → \"Ce\""
    ],
    "code": "public String nVeces(String cadena, int n) {\n        String primeraN = cadena.substring(0, n);\n        String segundaN = cadena.substring(cadena.length()-n, cadena.length());\n\n        return primeraN + segundaN;\n    }"
  },
  {
    "name": "estaMal",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena, retorna verdadero si \"bad\" aparece al inicio (desde la posicio 0 o 1) en la cadena, como \"badxxx\" o \"xbadxx\" pero no \"xxbadxx\". La cadena puede tener cualquier longitud, incluido 0. Nota: usa .equals() para comparar dos cadenas.",
    "examples": [
      "estaMal(\"badxx\") → true",
      "estaMal(\"xbadxx\") → true",
      "estaMal(\"xxbadxx\") → false"
    ],
    "code": "public boolean estaMal(String cadena) {\n        if (cadena.length() >= 3) {\n            String bad0 = cadena.substring(0, 3);\n            \n            if (bad0.equals(\"bad\")) {\n                return true;\n            }\n\n            if (cadena.length() >= 4) {\n                String bad1 = cadena.substring(1, 4);\n    \n                if (bad1.equals(\"bad\")) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    }"
  },
  {
    "name": "concatenar",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dadas dos cadenas, unirlas las dos (concatenar) y retornar el resultado. Sin embargo, si la concatenación crea un carácter doble, omite uno de los caracteres, por lo que \"abc\" y \"cat\" dan como resultado \"abcat\".",
    "examples": [
      "concatenar(\"abc\", \"cat\") → \"abcat\"",
      "concatenar(\"dog\", \"cat\") → \"dogcat\"",
      "concatenar(\"abc\", \"\") → \"abc\""
    ],
    "code": "public String concatenar(String a, String b) {\n        if (!a.isEmpty() && !b.isEmpty()) { \n            String ultimoCaracterA = a.substring(a.length()-1);\n            String primerCaracterB = b.substring(0, 1);\n\n            if (ultimoCaracterA.equals(primerCaracterB)) {\n                return a.substring(0, a.length()-1) + b;\n            }\n        }\n        return a + b;\n    }"
  },
  {
    "name": "frenteFinal",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena, retorna verdadero si los primeros caracteres de la cadena aparecen tambien al final, como por ejemplo \"edited\".",
    "examples": [
      "frenteFinal(\"edited\") → true",
      "frenteFinal(\"edit\") → false",
      "frenteFinal(\"ed\") → true"
    ],
    "code": "public boolean frenteFinal(String cadena) {\n        if (cadena.length() >= 2) {\n            String primerosDos = cadena.substring(0, 2);\n            String ultimosDos = cadena.substring(cadena.length()-2);\n\n            if (primerosDos.equals(ultimosDos)) {\n                return true;\n            }\n        }\n        return false;\n    }"
  },
  {
    "name": "sinPrimero2",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena, si aparece una subcadena de longitud 2 tanto al principio como al final, se devuelve una cadena sin la subcadena al principio, por lo que \"HelloHe\" da como resultado \"lloHe\". La subcadena puede superponerse consigo misma, por lo que \"Hi\" da como resultado \"\". De lo contrario, se devuelve la cadena original sin cambios.",
    "examples": [
      "sinPrimero2(\"HelloHe\") → \"lloHe\"",
      "sinPrimero2(\"HelloHi\") → \"HelloHi\"",
      "sinPrimero2(\"Hi\") → \"\""
    ],
    "code": "public String sinPrimero2(String cadena) {\n        if (cadena.length() == 1) {\n            return cadena;\n        } else if (cadena.length() > 2) {\n            String primerosDos = cadena.substring(0, 2);\n            String ultimosDos = cadena.substring(cadena.length()-2, cadena.length());\n\n            if (primerosDos.equals(ultimosDos)) {\n                return cadena.substring(2, cadena.length());\n            } else {\n                return cadena;\n            }\n        }\n        return \"\";\n    }"
  },
  {
    "name": "cadenaSinX",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena, si el primer o ultimo carácter es 'x', retorna una nueva cadena sin la 'x', y de lo contrario retorna la cadena sin cambios.",
    "examples": [
      "cadenaSinX(\"xHix\") → \"Hi\"",
      "cadenaSinX(\"xHi\") → \"Hi\"",
      "cadenaSinX(\"Hxix\") → \"Hxi\""
    ],
    "code": "public String cadenaSinX(String cadena) {\n        if (cadena.length() >= 2) {\n            if (cadena.startsWith(\"x\") && !cadena.endsWith(\"x\")) {\n                return cadena.substring(1);\n            } else if (!cadena.startsWith(\"x\") && cadena.endsWith(\"x\")) { \n                return cadena.substring(0, cadena.length()-1);\n            } else if (cadena.startsWith(\"x\") && cadena.endsWith(\"x\")) {\n                return cadena.substring(1, cadena.length()-1);\n            } else {\n                return cadena;\n            }\n        }\n        return \"\";\n    }"
  },
  {
    "name": "creaEtiquetas",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "La web se construye con cadenas HTML como \"<i>Yay</i>\", que dibuja yay como texto en cursiva. En este ejemplo, la etiqueta \"i\" crea <i> y </i> que rodean la palabra \"Yay\". Dadas las cadenas de etiquetas y palabras, crea la cadena HTML con etiquetas alrededor de la palabra, por ejemplo, \"<i>Yay</i>\".",
    "examples": [
      "creaEtiquetas(\"i\", \"Yay\") → \"<i>Yay</i>\"",
      "creaEtiquetas(\"i\", \"Hello\") → \"<i>Hello</i>\"",
      "creaEtiquetas(\"cite\", \"Yay\") → \"<cite>Yay</cite>\""
    ],
    "code": "public String creaEtiquetas(String etiqueta, String palabra) {\n        return \"<\" + etiqueta + \">\" + palabra + \"</\" + etiqueta + \">\";\n    }"
  },
  {
    "name": "firstTwo",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena, retorna una cadena formada por los dos primeros caracteres de la cadena original, por lo que \"Hello\" produce \"He\". Si la cadena es más corta que 2 caracteres, retorna lo que haya, de modo que \"X\" genere \"X\" y la cadena vacía \"\" genere la cadena vacía \"\". Tenga en cuenta que str.length() devuelve la longitud de la cadena.",
    "examples": [
      "primerosDos(\"Hello\") → \"He\"",
      "primerosDos(\"abcdefg\") → \"ab\"",
      "primerosDos(\"ab\") → \"ab\""
    ],
    "code": "public String firstTwo(String str) {\n        return (str.length() > 1) ? str.substring(0, 2) : str;\n    }"
  },
  {
    "name": "comboCadena",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada 2 cadenas, a y b, retorna una cadena de forma corta + grande + corta, con la cadena corta en los laterales y la cadena más grande en el interior. Las cadenas no tendrá la misma longitud, pero pueden estar vacías (longitud 0).",
    "examples": [
      "comboCadena(\"Hello\", \"hi\") → \"hiHellohi\"",
      "comboCadena(\"hi\", \"Hello\") → \"hiHellohi\"",
      "comboCadena(\"aaa\", \"b\") → \"baaab\""
    ],
    "code": "public String comboCadena(String a, String b) {\n        if (a.length() > b.length()) {\n            return b + a + b;\n        } else {\n            return a + b + a;\n        }\n    }"
  },
  {
    "name": "rotar2",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena, retorna una versión rotada a hacia la derecha con los 2 ultimos caracteres al principio de la cadena. La longitud de la cadena será al menos 2.",
    "examples": [
      "rotar2(\"Hello\") → \"loHel\"",
      "rotar2(\"java\") → \"vaja\"",
      "rotar2(\"Hi\") → \"Hi\""
    ],
    "code": "public String rotar2(String cadena) {\n        if (cadena.length() >= 2) {\n            String ultimosDos = cadena.substring(cadena.length()-2);\n            String resto = cadena.substring(0, cadena.length()-2);\n          return ultimosDos + resto;\n        }\n        return cadena;\n    }"
  },
  {
    "name": "dosMedio",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena de longitud par, retorna una nueva cadena formada por los dos caracteres del medio, por lo que \"string\" produce \"ri\". La longitud de la cadena será al menos de 2.",
    "examples": [
      "dosMedio(\"string\") → \"ri\"",
      "dosMedio(\"code\") → \"od\"",
      "dosMedio(\"Practice\") → \"ct\""
    ],
    "code": "public String dosMedio(String str) {\n        int mitad = str.length()/2;\n        \n        return str.substring(mitad - 1, mitad) + str.substring(mitad, mitad + 1);\n    }"
  },
  {
    "name": "dosCaracteres",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena y un índice, retorna una cadena de longitud 2 que comienza en el índice dado. Si el índice es demasiado grande o demasiado pequeño para definir una cadena de longitud 2, utiliza los primeros 2 caracteres. La longitud de la cadena será al menos 2",
    "examples": [
      "dosCaracteres(\"java\", 0) → \"ja\"",
      "dosCaracteres(\"java\", 2) → \"va\"",
      "dosCaracteres(\"java\", 3) → \"ja\""
    ],
    "code": "public String dosCaracteres(String cadena, int indice) {\n        if (indice < 0 || indice == 0 || ((cadena.length() - indice) < 2)) {\n          return cadena.substring(0, 2);\n        } else {\n          return cadena.substring(indice, indice + 2);\n        }\n    }"
  },
  {
    "name": "enPrimer",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena, retorna una cadena de longitud 2 formada por los dos primeros caracteres. Si la longitud de la cadena es menor a 2, utiliza '@' para los caracteres faltantes.",
    "examples": [
      "enPrimer(\"hello\") → \"he\"",
      "enPrimer(\"hi\") → \"hi\"",
      "enPrimer(\"h\") → \"h@\""
    ],
    "code": "public String enPrimer(String cadena) {\n        if (cadena.isEmpty()) {\n          return \"@@\";\n        } else if (cadena.length() >= 2) {\n          return cadena.substring(0, 2);\n        } else {\n          return cadena + \"@\";\n        }\n    }"
  },
  {
    "name": "cambiaUltimosDos",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena de cualquier longitud, devuelve una cadena donde los últimos 2 caracteres, si están presentes, se intercambian, por lo que \"coding\" produce \"codign\".",
    "examples": [
      "cambiaUltimosDos(\"coding\") → \"codign\"",
      "cambiaUltimosDos(\"cat\") → \"cta\"",
      "cambiaUltimosDos(\"ab\") → \"ba\""
    ],
    "code": "public String cambiaUltimosDos(String cadena) {\n        if (cadena.length() >= 2) {\n            char ultimo = cadena.charAt(cadena.length()-1);\n            char penultimo = cadena.charAt(cadena.length()-2);\n            String resto = cadena.substring(0, cadena.length()-2);\n\n            return resto + ultimo + penultimo;\n        }\n        return cadena;\n    }"
  },
  {
    "name": "minimaConcatenacion",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dadas dos cadenas, unirlas (concatenarlas) y retornar el resultado. Sin embargo, si la cadena son de diferentes longitudes, omite los caracteres de la cadena más grande para que tenga la misma longitud que la cadena más corta. Por lo tanto, \"Hello\" y \"Hi\" dan como resultado \"loHi\". La cadena puede tener cualquier longitud.",
    "examples": [
      "minimaConcatenacion(\"Hello\", \"Hi\") → \"loHi\"",
      "minimaConcatenacion(\"Hello\", \"java\") → \"ellojava\"",
      "minimaConcatenacion(\"java\", \"Hello\") → \"javaello\""
    ],
    "code": "public String minimaConcatenacion(String a, String b) {\n        if (a.length() > b.length()) {\n            int diferencia = a.length() - b.length();\n            String igualar = a.substring(diferencia, a.length()); \n            return igualar + b;\n        } else if (b.length() > a.length()) {\n            int diferencia = b.length() - a.length();\n            String igualar = b.substring(diferencia, b.length());\n            return a + igualar;\n        } \n        return a + b;\n    }"
  },
  {
    "name": "sinFrente",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena, retorna una nueva cadena sin los dos primeros caracteres. Excepto que se conserva el primer caràcter si es 'a' y se conserva el segundo si es 'b'. La cadena puede tener cualquier longitud. Es más dificil de lo que parece.",
    "examples": [
      "sinFrente(\"Hello\") → \"llo\"",
      "sinFrente(\"java\") → \"va\"",
      "sinFrente(\"away\") → \"aay\""
    ],
    "code": "public String sinFrente(String cadena) {    \n        String resultado = \"\";\n        \n        if (cadena.charAt(0) == 'a') {\n            resultado += cadena.charAt(0);\n        }\n        if (cadena.charAt(1) == 'b') {\n            resultado += cadena.charAt(1);\n        }\n        resultado += cadena.substring(2, cadena.length());\n        return resultado;\n    }"
  },
  {
    "name": "sinX2",
    "lang": "java",
    "category": "Cadenas",
    "level": "Básico",
    "file": "Cadena1.java",
    "statement": "Dada una cadena, si uno o ambos de los primeros 2 caracteres son 'x', se devuelve la cadena sin esos caracteres 'x' y, de lo contrario, se devuelve la cadena sin cambios. Esto es un poco más difícil de lo que parece.",
    "examples": [
      "sinX2(\"xHi\") → \"Hi\"",
      "sinX2(\"Hxi\") → \"Hi\"",
      "sinX2(\"Hi\") → \"Hi\""
    ],
    "code": "public String sinX2(String cadena) {\n\n        if (cadena.length() <= 1) return \"\";\n\n        String xCero = cadena.substring(0, 1);\n        String xUno = cadena.substring(1, 2);\n        \n        if (xCero.equals(\"x\") && xUno.equals(\"x\")) {\n            return cadena.substring(2);\n        } else if (xCero.equals(\"x\")) {\n            return cadena.substring(1);\n        } else if (xUno.equals(\"x\")) {\n            return cadena.substring(0, 1) + cadena.substring(2);\n        }\n        return cadena;\n    }"
  },
  {
    "name": "dormido",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "El parametro diaSemana es verdadero si es un dia laborable, y el parametro vacaciones es verdadero si estamos de vacaciones. Dormimos hasta tarde si es fin de semana o estamos de vacaciones. Retornar verdadero si dormimos hasta tarde.",
    "examples": [
      "dormido(false, false) → true",
      "dormido(true, false) → false",
      "dormido(false, true) → true"
    ],
    "code": "public boolean dormido(boolean diaSemana, boolean vacaciones) {\n        if (!diaSemana && !vacaciones) {\n            return true;\n        } else if (diaSemana && !vacaciones) {\n            return false;\n        } else if (!diaSemana && vacaciones) {\n            return true;\n        } else {\n            return true;\n        }\n    }"
  },
  {
    "name": "diferencia21",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dado un entero n, retorna la diferencia absoluta entre n y 21, si n es mayor a 21 retorna el doble absoluto de la diferencia.",
    "examples": [
      "diferencia21(19) → 2",
      "diferencia21(10) → 11",
      "diferencia21(21) → 0"
    ],
    "code": "public int diferencia21(int n) {\n        if (n < 21) {\n            return 21 - n;\n        } else {\n            return (n - 21)*2;\n        }\n    }"
  },
  {
    "name": "cercaCien",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dado un entero n, retorna verdadero si n esta entre 10 de 100 o de 200. Nota: Math.abs(n) calcula el valor absoluto de n.",
    "examples": [
      "cercaCien(93) → true",
      "cercaCien(90) → true",
      "cercaCien(89) → false"
    ],
    "code": "public boolean cercaCien(int n) {\n        if (Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10) {\n            return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "eliminarCaracter",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dada una cadena (no vacia) y un entero n, retorna una nueva cadena con el carácter en la posición de n eliminado. El valor de n será una posición valida de un carácter de la cadena original. (Ejemplo: n será en el rango 0 y la longitud de la cadena -1 ambos incluidos).",
    "examples": [
      "eliminarCaracter(\"kitten\", 1) → \"ktten\"",
      "eliminarCaracter(\"kitten\", 0) → \"itten\"",
      "eliminarCaracter(\"kitten\", 4) → \"kittn\""
    ],
    "code": "public String eliminarCaracter(String cadena, int n) {\n        String resultado = \"\";\n\n        if (n >= 0 && n < cadena.length()) {\n            for (int i = 0; i < cadena.length(); i++) {\n                char c = cadena.charAt(i);\n            \n                if (i == n) {\n                    continue;\n                }\n                resultado += c;\n            }\n            return resultado;\n        }\n        return cadena;\n    }"
  },
  {
    "name": "alrededor",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dada una cadena, toma el ultimo carácter y retorna una nueva cadena con el ultimo carácter agregado al principio y al final de la cadena, de modo que \"cat\" produce \"tcatt\". La cadena original tendrá una longitud de 1 o más.",
    "examples": [
      "alrededor(\"cat\") → \"tcatt\"",
      "alrededor(\"Hello\") → \"oHelloo\"",
      "alrededor(\"a\") → \"aaa\""
    ],
    "code": "public String alrededor(String cadena) {\n        String ultimoCaracter = cadena.substring(cadena.length() -1);\n\n        String resultado = ultimoCaracter + cadena + ultimoCaracter;\n\n        return resultado;\n    }"
  },
  {
    "name": "comienzaHi",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dada una cadena, retorna verdadero si la cadena comienza con \"hi\" y falso en caso contrario.",
    "examples": [
      "comienzaHi(\"hi there\") → true",
      "comienzaHi(\"hi\") → true",
      "comienzaHi(\"hello hi\") → false"
    ],
    "code": "public boolean comienzaHi(String cadena) {\n        if (cadena.startsWith(\"hi\")) {\n            return true;\n        } else {\n            return false;\n        }\n    }"
  },
  {
    "name": "adolescente",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Digamos que un numero es adolescente si esta en el rango 13 y 19 ambos incluidos. Dado 3 valores enteros, retorna verdadero si 1 o mas de ellos son adolescente.",
    "examples": [
      "adolescente(13, 20, 10) → true",
      "adolescente(20, 19, 10) → true",
      "adolescente(20, 10, 13) → true"
    ],
    "code": "public boolean adolescente(int a, int b, int c) {\n        if (a >= 13 && a <= 19) {\n            return true;\n        }\n        if (b >= 13 && b <= 19) {\n            return true;\n        }\n        if (c >= 13 && c <= 19) {\n            return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "comienzaMix",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Retorna verdadero si la cadena comienza con \"mix\", la m de \"mix\" puede ser cualquier letra.",
    "examples": [
      "comienzaMix(\"mix snacks\") → true",
      "comienzaMix(\"pix snacks\") → true",
      "comienzaMix(\"piz snacks\") → false"
    ],
    "code": "public boolean comienzaMix(String cadena) {\n        if (!cadena.isEmpty()) {\n            cadena = cadena.substring(1);\n\n            if (cadena.startsWith(\"ix\")) {\n                return true;\n            }\n        }\n        return false;\n    }"
  },
  {
    "name": "close10",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dado 2 valores enteros, retorna el valor más cercano a 10, o retorna 0 en el caso de que los valores sean iguales. Nota: Math.abs(n) calcula el valor absoluto de n.",
    "examples": [
      "cerca10(8, 13) → 8",
      "cerca10(13, 8) → 8",
      "cerca10(13, 7) → 0"
    ],
    "code": "public int close10(int a, int b) {\n        int primero = Math.abs(10 - a);\n        int segundo = Math.abs(b - 10);\n        \n        if (primero < segundo) {\n            return a;\n        } else if (primero > segundo) {\n            return b;\n        } else {\n            return 0;\n        }\n    }"
  },
  {
    "name": "contieneE",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Retorna verdadero si la cadena dada contiene entre 1 y 3 carácteres 'e'.",
    "examples": [
      "contieneE(\"Hello\") → true",
      "contieneE(\"Heelle\") → true",
      "contieneE(\"Heelele\") → false"
    ],
    "code": "public boolean contieneE(String cadena) {\n        int contador = 0;\n        \n        for (int i = 0; i < cadena.length(); i++) {\n          char c = cadena.charAt(i);\n          \n            if (c == 'e') {\n                contador++;\n            }\n        }\n\n        if (contador > 0 && contador <= 3) {\n            return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "caracterN",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dada una cadena (no vacia) y un entero n, retorna una nueva cadena construida a partir del primer carácter más cada carácter en la posició de n. Por lo tanto si n es 3, utiliza las posiciones 0, 3, 6 y así sucesivamente. N será 1 o más.",
    "examples": [
      "caracterN(\"Miracle\", 2) → \"Mrce\"",
      "caracterN(\"abcdefg\", 2) → \"aceg\"",
      "caracterN(\"abcdefg\", 3) → \"adg\""
    ],
    "code": "public String caracterN(String str, int n) {\n        String resultado = \"\";\n        int indice = 0;\n        \n        while (indice < str.length()) {\n            resultado += str.charAt(indice);\n            indice = indice + n;\n        }\n        return resultado;\n    }"
  },
  {
    "name": "monoProblema",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Tenemos dos monos, a y b, y los parametros aSonrie y bSonrie indica si cada uno de ellos esta sonriendo. Estamos en problemas si los dos estan sonriendo o si ninguno esta sonriendo. Retorna verdadero si estamos en problemas.",
    "examples": [
      "monoProblema(true, true) → true",
      "monoProblema(false, false) → true",
      "monoProblema(true, false) → false"
    ],
    "code": "public boolean monoProblema(boolean aSonrie, boolean bSonrie) {\n        if (aSonrie ^ bSonrie) {\n            return false;\n        } else {\n            return true;\n        }\n    }"
  },
  {
    "name": "loroProblema",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Tenemos un loro que habla fuerte. EL parametro hora es la hora actual en el rango 0 y 23 ambos incluidos. Estamos en problema si el loro esta hablando y la hora es antes de la 7 o después de las 20. Retorna verdadero si estamos en problemas.",
    "examples": [
      "loroProblema(true, 6) → true",
      "loroProblema(true, 7) → false",
      "loroProblema(false, 6) → false"
    ],
    "code": "public boolean loroProblema(boolean hablando, int hora) {\n        if (hablando && (hora < 7 || hora > 20)) {\n            return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "posNeg",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dado 2 valores enteros, retorna verdadero si uno es negativo y otro es positivo. Excepto si el parametro negativo es verdadero, en cuyo caso retorna verdadero solo si los dos enteros son negativos.",
    "examples": [
      "posNeg(1, -1, false) → true",
      "posNeg(-1, 1, false) → true",
      "posNeg(-4, -5, true) → true"
    ],
    "code": "public boolean posNeg(int a, int b, boolean negativo) {\n        if (!negativo && (a < 0 ^ b < 0)) {\n            return true;\n        }\n        \n        if (negativo && (a < 0 && b < 0)) {\n            return true;\n        } else {\n            return false;\n        }\n    }"
  },
  {
    "name": "cambiaPrimerUltimo",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dada una cadena, retorna una nueva cadena cambiando el primer carácter por el ultimo.",
    "examples": [
      "cambiaPrimerUltimo(\"code\") → \"eodc\"",
      "cambiaPrimerUltimo(\"a\") → \"a\"",
      "cambiaPrimerUltimo(\"ab\") → \"ba\""
    ],
    "code": "public String cambiaPrimerUltimo(String cadena) {\n        String resultado = \"\";\n\n        if (!cadena.isEmpty()) {\n            if (cadena.length() > 1) {\n                resultado += cadena.charAt(cadena.length()-1);\n                resultado += cadena.substring(1, cadena.length()-1);\n                resultado += cadena.charAt(0);\n            } else {\n                return cadena;\n            }\n        }\n        return resultado;\n    }"
  },
  {
    "name": "or35",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Retorna verdadero si el numero (no negativo) dado es un multiplo de 3 o un multiplo de 5. Usa el operador de residuo %.",
    "examples": [
      "multiplo35(3) → true",
      "multiplo35(10) → true",
      "multiplo35(8) → false"
    ],
    "code": "public boolean or35(int n) {\n        if (n % 3 == 0 || n % 5 == 0) {\n            return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "frioCaliente",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dadas dos temperaturas, retorna verdadero si una es menor que 0 y la otra es mayor que 100.",
    "examples": [
      "frioCaliente(120, -1) → true",
      "frioCaliente(-1, 120) → true",
      "frioCaliente(2, 120) → false"
    ],
    "code": "public boolean frioCaliente(int temp1, int temp2) {\n        if ((temp1 < 0 || temp2 < 0) && (temp1 > 100 || temp2 > 100)) {\n            return true;\n        } else {\n            return false;\n        }\n    }"
  },
  {
    "name": "AdolescenteSolitario",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Diremos que un numero es adolescente si esta en el rango de 13 y 19 ambos incluidos. Dado 2 valores enteros, retorna verdadero si uno o el otro es adolescente, pero no los dos.",
    "examples": [
      "AdolescenteSolitario(13, 99) → true",
      "AdolescenteSolitario(21, 19) → true",
      "AdolescenteSolitario(13, 13) → false"
    ],
    "code": "public boolean AdolescenteSolitario(int a, int b) {\n        boolean aAdolescente = false;\n        boolean bAdolescente = false;\n        \n        if (a >= 13 && a <= 19) {\n            aAdolescente = true;\n        }\n        if (b >= 13 && b <= 19) {\n            bAdolescente = true;\n        }\n        \n        if ((aAdolescente && !bAdolescente) || (!aAdolescente && bAdolescente)) {\n            return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "ComienzaOz",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dada una cadena, retorna una cadena formada por los primeros dos carácteres (si estan presentes), sin embargo incluye el primero solo si es una 'o' y incluye segundo solo si es una 'z', por lo que \"ozymandias\" produce \"oz\".",
    "examples": [
      "ComienzaOz(\"ozymandias\") → \"oz\"",
      "ComienzaOz(\"bzoo\") → \"z\"",
      "ComienzaOz(\"oxx\") → \"o\""
    ],
    "code": "public String ComienzaOz(String cadena) {\n        String resultado = \"\";\n        \n        if (cadena.length() > 1) {\n            if (cadena.charAt(0) == 'o') {\n                resultado += cadena.charAt(0);\n            }\n            if (cadena.charAt(1) == 'z') {\n                resultado += cadena.charAt(1);\n            }\n            return resultado;  \n        }\n        return cadena;\n    }"
  },
  {
    "name": "entre3050",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dado 2 valores enteros, retorna verdadero si ambos estan el rango de 30 y 40 ambos incluidos o ambos estan en el rango de 40 y 50 ambos incluidos.",
    "examples": [
      "entre3050(30, 31) → true",
      "entre3050(30, 41) → false",
      "entre3050(40, 50) → true"
    ],
    "code": "public boolean entre3050(int a, int b) {\n        if ((a >= 30 && a <= 40) && (b >= 30 && b <= 40)) {\n            return true;\n        }\n\n        if ((a >= 40 && a <= 50) && (b >= 40 && b <= 50)) {\n            return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "ultimoDigito",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dado dos valores (no negativos) negativos, retorna verdadero si ambos tienen el mismo ultimo digito, como 27 y 57. Nota: el operador de residuo calcula el resto de la división por lo que 17 % 10 es 7.",
    "examples": [
      "ultimoDigito(7, 17) → true",
      "ultimoDigito(6, 17) → false",
      "ultimoDigito(3, 113) → true"
    ],
    "code": "public boolean ultimoDigito(int a, int b) {\n        String aDigito = Integer.toString(a);\n        String bDigito = Integer.toString(b);\n\n        char primero = aDigito.charAt(Math.abs(aDigito.length()-1));\n        char ultimo = bDigito.charAt(Math.abs(bDigito.length()-1));\n        \n        if (primero == ultimo) {\n            return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "sumaDoble",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dado 2 valores enteros, retorna la suma de ambos. A menos que los 2 valores sean iguales, retorna el doble de la suma.",
    "examples": [
      "sumaDoble(1, 2) → 3",
      "sumaDoble(3, 2) → 5",
      "sumaDoble(2, 2) → 8"
    ],
    "code": "public int sumaDoble(int a, int b) {\n        if (a != b) {\n            return a + b;\n        } else {\n            return (a + b) * 2;\n        }\n    }"
  },
  {
    "name": "es10",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dados 2 enteros, a y b, retorna verdadero si uno de ellos es 10 o si la suma de ambos es 10.",
    "examples": [
      "es10(9, 10) → true",
      "es10(9, 9) → false",
      "es10(1, 9) → true"
    ],
    "code": "public boolean es10(int a, int b) {\n        if ((a == 10 || b == 10) || a + b == 10) {\n            return true;\n        } else {\n            return false;\n        }\n    }"
  },
  {
    "name": "notString",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dada una cadena, retorna una nueva cadena con \"not\" al principio. Sin embargo, si la cadena ya camienza con \"not\" devuelve la cadena sin cambios. Nota: usa .equals() para comparar dos cadenas.",
    "examples": [
      "comienzaNot(\"candy\") → \"not candy\"",
      "comienzaNot(\"x\") → \"not x\"",
      "comienzaNot(\"not bad\") → \"not bad\""
    ],
    "code": "public String notString(String cadena) {\n        if (cadena.startsWith(\"not\")) {\n            return cadena;\n        } else {\n            String not = \"not\";\n\n            return not + \" \" + cadena;\n        }\n    }"
  },
  {
    "name": "front3",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dada una cadena, diremos que el frente son los 3 primeros carácteres de la cadena. Si la longitud de la cadena es menor a 3, el frente es lo que contenga. Retorna una cadena que formada por 3 veces el frente.",
    "examples": [
      "frente3(\"Java\") → \"JavJavJav\"",
      "frente3(\"Chocolate\") → \"ChoChoCho\"",
      "frente3(\"abc\") → \"abcabcabc\""
    ],
    "code": "public String front3(String cadena) {\n        String resultado = \"\";\n\n        if (cadena.length() >= 3) {\n            resultado = cadena.substring(0, 3);\n        } else {\n            resultado = cadena;\n        }\n        return resultado + resultado + resultado;\n    }"
  },
  {
    "name": "front22",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dada una cadena, toma los dos primeros carácteres y retorna una cadena con los dos carácteres agregados al principio y al final, por lo que \"kitten\" produce \"kikittenki\". Si la longitud de la cadena es menor que 2, usar los caracters que contenga.",
    "examples": [
      "dosPriFi(\"kitten\") → \"kikittenki\"",
      "dosPriFi(\"Ha\") → \"HaHaHa\"",
      "dosPriFi(\"abc\") → \"ababcab\""
    ],
    "code": "public String front22(String cadena) {\n        String dosPrimeros;\n\n        if (cadena.length() >= 2) {\n            dosPrimeros = cadena.substring(0, 2);\n        } else {\n            dosPrimeros = cadena;\n        }\n        return dosPrimeros + cadena + dosPrimeros;\n    }"
  },
  {
    "name": "entre1020",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dados 2 valores enteros, retorna verdadero si cualquiera de ellos esta en el rango entre 10 y 20 ambos incluidos.",
    "examples": [
      "entre1020(12, 99) → true",
      "entre1020(21, 12) → true",
      "entre1020(8, 99) → false"
    ],
    "code": "public boolean entre1020(int a, int b) {\n        if (a >= 10 && a <= 20) {\n            return true;\n        }\n\n        if (b >= 10 && b <= 20) {\n            return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "eliminaDel",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dada una cadena, si \"del\" aparece a partir de la posición 1, retorna una cadena en la que se ha eliminado \"del\". De lo contrario, retorna la cadena sin cambios.",
    "examples": [
      "eliminaDel(\"adelbc\") → \"abc\"",
      "eliminaDel(\"adelHello\") → \"aHello\"",
      "eliminaDel(\"adedbc\") → \"adedbc\""
    ],
    "code": "public String eliminaDel(String cadena) {\n        if (cadena.length() >= 4) {\n            String del = cadena.substring(1, 4);\n          \n            if (del.equals(\"del\")) {\n                String resultado = cadena.substring(0, 1) + cadena.substring(del.length() + 1, cadena.length());\n                return resultado;\n            }\n        }\n        return cadena;\n    }"
  },
  {
    "name": "enteroMayor",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dado 3 valores enteros, a b c, retorna el mayor.",
    "examples": [
      "enteroMayor(1, 2, 3) → 3",
      "enteroMayor(1, 3, 2) → 3",
      "enteroMayor(3, 2, 1) → 3"
    ],
    "code": "public int enteroMayor(int a, int b, int c) {\n        if (a <= b && b <= c) {\n            return c;\n        } else if (a <= c && c <= b) {\n            return b;\n        } else if (b <= a && a <= c) {\n            return c;\n        } else if (b <= c && c <= a) {\n            return a;\n        } else if (c <= a && a <= b) {\n            return b;\n        } else {\n            return a;\n        }\n    }"
  },
  {
    "name": "max1020",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dado 2 valores enteros positivos, retorna el valor más grande que este en el rango entre 10 y 20 ambos incluidos, o retorna 0 si ninguno esta en el rango.",
    "examples": [
      "mayor1020(11, 19) → 19",
      "mayor1020(19, 11) → 19",
      "mayor1020(11, 9) → 11"
    ],
    "code": "public int max1020(int a, int b) {\n        if (a < b) {\n            int tmp = a;\n            a = b;\n            b = tmp;\n        }\n\n        if (a >= 10 && a <= 20) {\n            return a;\n        }\n\n        if (b >= 10 && b <= 20) {\n            return b;\n        }\n\n        return 0;\n    }"
  },
  {
    "name": "finalMayusculas",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "Calentamiento1.java",
    "statement": "Dada una cadena, retorna una nueva cadena en la que los ultimos 3 carácteres esten en mayúsculas. Si la cadena tiene menos de 3 carácteres, escribe en mayúsculas los que esten. Teniendo en cuenta que cadena.toUpperCase() retorna la cadena en mayúsculas.",
    "examples": [
      "finalMayusculas(\"Hello\") → \"HeLLO\"",
      "finalMayusculas(\"hi there\") → \"hi thERE\"",
      "finalMayusculas(\"hi\") → \"HI\""
    ],
    "code": "public String finalMayusculas(String cadena) {\n        if (cadena.length() >= 3) {\n            String resto = cadena.substring(0, cadena.length()-3);\n            String ultimoTres = cadena.substring(cadena.length()-3);\n\n            return resto + ultimoTres.toUpperCase();\n        } else {\n            return cadena.toUpperCase();\n        }\n    }"
  },
  {
    "name": "copiaCadena",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "Calentamiento2.java",
    "statement": "Dada una cadena y un entero n no negativo, retorna una cadena más con el número de copia indicado por n.",
    "examples": [
      "copiaCadena(\"Hi\", 2) → \"HiHi\"",
      "copiaCadena(\"Hi\", 3) → \"HiHiHi\"",
      "copiaCadena(\"Hi\", 1) → \"Hi\""
    ],
    "code": "public String copiaCadena(String cadena, int n) {\n        String nuevaCadena = \"\";\n        \n        while (n > 0) {\n            nuevaCadena += cadena;\n            n--;\n        }\n        return nuevaCadena;\n    }"
  },
  {
    "name": "ultimosDos",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "Calentamiento2.java",
    "statement": "Dada una cadena, retorna la cantidad de las veces que los dos últimos caracteres de la cadena aparace en la cadena, por lo que \"hixxxhi\" produce 1 (no contaremos la subcadena final).",
    "examples": [
      "ultimosDos(\"hixxhi\") → 1",
      "ultimosDos(\"xaxxaxaxx\") → 1",
      "ultimosDos(\"axxxaaxx\") → 2"
    ],
    "code": "public int ultimosDos(String cadena) {\n        if (cadena.length() < 2) return 0;\n\n        String ultDos = cadena.substring(cadena.length()-2);\n\n        int i = 0;\n        int contador = 0;\n\n        while (i < cadena.length()-2) {\n            if (cadena.substring(i, i+2).equals(ultDos)) {\n                contador++;\n            }\n            i++;\n        }\n        return contador;\n    }"
  },
  {
    "name": "matriz123",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "Calentamiento2.java",
    "statement": "Dada una matriz de enteros, retorna verdadero si la secuencia de números 1,2,3 aparece en la matriz.",
    "examples": [
      "matriz123([1, 1, 2, 3, 1]) → true",
      "matriz123([1, 1, 2, 4, 1]) → false",
      "matriz123([1, 1, 2, 1, 2, 3]) → true"
    ],
    "code": "public boolean matriz123(int[] nums) {\n        boolean secuencia = false;\n        \n        for (int i = 0; i < nums.length; i++) {\n            if (i < nums.length-2) {\n                if (nums[i] == 1 && nums[i+1] == 2 && nums[i+2] == 3) {\n                    secuencia = true; \n                }\n            }\n        }\n        if (secuencia) return true;\n        return false;\n    }"
  },
  {
    "name": "paresAlternos",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "Calentamiento2.java",
    "statement": "Dada una cadena, retorna una cadena con los caracteres en los indices 0, 1, 4, 5, 8, 9 por lo tanto \"Kittens\" produce \"Kien\".",
    "examples": [
      "paresAlternos(\"kitten\") → \"kien\"",
      "paresAlternos(\"Chocolate\") → \"Chole\"",
      "paresAlternos(\"CodingHorror\") → \"Congrr\""
    ],
    "code": "public String paresAlternos(String cadena) {\n        String nuevaCadena = \"\";\n        \n        for (int i = 0; i < cadena.length(); i+=4) {\n            if (cadena.length() > 1) {\n                nuevaCadena += cadena.charAt(i);\n                if (i < cadena.length()-1) {\n                    nuevaCadena += cadena.charAt(i+1);\n                }\n            } else {\n                return cadena;\n            }\n        }\n        return nuevaCadena;\n    }"
  },
  {
    "name": "noTres",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "Calentamiento2.java",
    "statement": "Dada una matriz de enteros, diremos que es triple si un mismo valor aparece 3 veces seguidas en la matriz. Retorna verdadero si la matriz no contiene ningún triple.",
    "examples": [
      "noTres([1, 1, 2, 2, 1]) → true",
      "noTres([1, 1, 2, 2, 2, 1]) → false",
      "noTres([1, 1, 1, 2, 2, 2, 1]) → false"
    ],
    "code": "public boolean noTres(int[] nums) {\n        boolean tres = false;\n        \n        for (int i = 0; i < nums.length; i++) {\n            if (i < nums.length-2) {\n                if (nums[i] == nums[i+1] && nums[i+1] == nums[i+2]) {\n                    tres = true;\n                }\n            }\n        }\n        \n        if (tres) return false;\n        return true;\n    }"
  },
  {
    "name": "copiasFrente",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "Calentamiento2.java",
    "statement": "Dada una cadena y un entero n no negativo, diremos que el frente de la cadena son los 3 primeros caracteres, o lo que contenga si la longitud es menor a 3. Retorna n copies del frente.",
    "examples": [
      "copiasFrente(\"Chocolate\", 2) → \"ChoCho\"",
      "copiasFrente(\"Chocolate\", 3) → \"ChoChoCho\"",
      "copiasFrente(\"Abc\", 3) → \"AbcAbcAbc\""
    ],
    "code": "public String copiasFrente(String cadena, int n) {\n        String nuevaCadena = \"\";\n        int contador = 0;\n        \n        if (n == 0) {\n            return \"\";\n        }\n        \n        while (contador < n) {\n            if (cadena.length() > 2) {\n                nuevaCadena += cadena.substring(0, 3);\n                contador++;  \n            } else {\n                nuevaCadena += cadena;\n                contador++;\n            }\n        }\n        return nuevaCadena;\n    }"
  },
  {
    "name": "cadenaBits",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "Calentamiento2.java",
    "statement": "Dada una cadena, retorna una nueva cadena formada por todos los caracteres pares, por lo que \"Hello\" produce \"Hlo\".",
    "examples": [
      "cadenaBits(\"Hello\") → \"Hlo\"",
      "cadenaBits(\"Hi\") → \"H\"",
      "cadenaBits(\"Heeololeo\") → \"Hello\""
    ],
    "code": "public String cadenaBits(String cadena) {\n        String nuevaCadena = \"\";\n        int i = 0;\n        \n        while (i < cadena.length()) {\n            nuevaCadena += cadena.charAt(i);\n            i+=2;\n        }\n        return nuevaCadena;\n    }"
  },
  {
    "name": "cuentaMatriz9",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "Calentamiento2.java",
    "statement": "Dada una matriz de enteros, retorna el número de veces que el 9 se encuentra en la matriz.",
    "examples": [
      "cuentaMatriz9([1, 2, 9]) → 1",
      "cuentaMatriz9([1, 9, 9]) → 2",
      "cuentaMatriz9([1, 9, 9, 3, 9]) → 3"
    ],
    "code": "public int cuentaMatriz9(int[] nums) {\n        int contador = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] == 9) {\n                contador++;\n            }\n        }\n        return contador;\n    }"
  },
  {
    "name": "cadenaPartida",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "Calentamiento2.java",
    "statement": "Dadas dos cadena a y b, retorna el numero de veces en las que una de las cadenas contiene la misma subcadena de longitud 2. Por lo tanto, \"xxcaazz\" dan como resultado 3, ya que las subcadenas \"xx\", \"aa\" y \"az\" aparecen en el mismo lugar en ambas cadenas.",
    "examples": [
      "cadenaPartida(\"xxcaazz\", \"xxbaaz\") → 3",
      "cadenaPartida(\"abc\", \"abc\") → 2",
      "cadenaPartida(\"abc\", \"axc\") → 0"
    ],
    "code": "public int cadenaPartida(String a, String b) {\n        int contador = 0;\n        int longitud = Math.min(a.length(), b.length());\n        \n        for (int i = 0; i < longitud; i++) {\n            if (i < longitud-1) {\n                String sub = a.substring(i, i+2);\n                if (sub.equals(b.substring(i, i+2))) {\n                    contador++;\n                }\n            }\n        }\n        return contador;\n    }"
  },
  {
    "name": "cadenaYak",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "Calentamiento2.java",
    "statement": "Supongamos que la cadena \"yak\" es desafortunada. Dada una cadena, retorna una versión en la que se eliminen todos los \"yak\", per la \"a\" puede ser cualquier carácter. Las cadenas \"yak\" no se superpondrán.",
    "examples": [
      "cadenaYak(\"yakpak\") → \"pak\"",
      "cadenaYak(\"pakyak\") → \"pak\"",
      "cadenaYak(\"yak123ya\") → \"123ya\""
    ],
    "code": "public String cadenaYak(String cadena) {\n        String nuevaCadena = \"\";\n        \n        for (int i = 0; i < cadena.length(); i++) {\n            if (i < cadena.length()-2 && cadena.charAt(i) == 'y' && cadena.charAt(i+2) == 'k') {\n                i = i + 2;\n            } else {\n                nuevaCadena += cadena.charAt(i);\n            }\n        }\n        return nuevaCadena;\n    }"
  },
  {
    "name": "tiene271",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "Calentamiento2.java",
    "statement": "Dada una matriz de enteros, retorna verdadera si esta contiene un patron 2, 7, 1: un valor seguido del otro más 5, seguido del valor menos 1. Además, el 271 cuenta incluso si el \"1\" difiere en 2 o menos del valor correcto.",
    "examples": [
      "tiene271([1, 2, 7, 1]) → true",
      "tiene271([1, 2, 8, 1]) → false",
      "tiene271([2, 7, 1]) → true"
    ],
    "code": "public boolean tiene271(int[] nums) {\n        for (int i = 0; i < nums.length-2; i++) {\n            int siete = nums[i]+5;\n            int dos = Math.abs(nums[i+2] - (siete - 6));\n            \n            if (nums[i+1] == siete && dos <= 2) {\n                return true;\n            }\n        }\n        return false;\n    }"
  },
  {
    "name": "cuentaXX",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "Calentamiento2.java",
    "statement": "Cuenta el numero de \"xx\" en la cadena dada. Supongamos que se permite la superposición, por lo que \"xxx\" contiene 2 \"xx\".",
    "examples": [
      "cuentaXX(\"abcxx\") → 1",
      "cuentaXX(\"xxx\") → 2",
      "cuentaXX(\"xxxx\") → 3"
    ],
    "code": "public int cuentaXX(String cadena) {\n        int contador = -1;\n        \n        for (int i = 0; i < cadena.length(); i++) {\n            if (Character.isWhitespace(cadena.charAt(i))) {\n                contador++;\n                break;\n            }\n            if (cadena.charAt(i) == 'x') {\n                contador++;\n            }\n        }\n        if (contador == -1) return 0;\n        return contador;\n    }"
  },
  {
    "name": "cadenaExplosion",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "Calentamiento2.java",
    "statement": "Dada una cadena no vacía como \"Code\", devuelve una cadena como \"CCoCodCode\".",
    "examples": [
      "cadenaExplosion(\"Code\") → \"CCoCodCode\"",
      "cadenaExplosion(\"abc\") → \"aababc\"",
      "cadenaExplosion(\"ab\") → \"aab\""
    ],
    "code": "public String cadenaExplosion(String cadena) {\n        String nuevaCadena = \"\";\n        int contador = 1;\n\n        for (int i = 0; i < cadena.length(); i++) {\n            for (int j = 0; j < contador; j++) {\n                nuevaCadena += cadena.charAt(j);\n            }\n            contador++;\n        }\n        return nuevaCadena;\n    }"
  },
  {
    "name": "frenteMatriz9",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "Calentamiento2.java",
    "statement": "Dada una matriz de enteros, retorna verdadero si uno de los primeros 4 elementos en la matriz es un 9. La longitud de la matriz puede ser menor que 4.",
    "examples": [
      "frenteMatriz9([1, 2, 9, 3, 4]) → true",
      "frenteMatriz9([1, 2, 3, 4, 9]) → false",
      "frenteMatriz9([1, 2, 3, 4, 5]) → false"
    ],
    "code": "public boolean frenteMatriz9(int[] nums) {\n        for (int i = 0; i < nums.length; i++) {\n            if (i < 4) {\n                if (nums[i] == 9) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    }"
  },
  {
    "name": "cadenaX",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "Calentamiento2.java",
    "statement": "Dada una cadena, retorna una version en la que se han eliminado todas las \"x\". Excepto que no se debe eliminar una \"x\" al principio o al final.",
    "examples": [
      "cadenaX(\"xxHxix\") → \"xHix\"",
      "cadenaX(\"abxxxcd\") → \"abcd\"",
      "cadenaX(\"xabxxxcdx\") → \"xabcdx\""
    ],
    "code": "public String cadenaX(String cadena) {\n        String nuevaCadena = \"\";\n\n        if (cadena.length() > 1) {\n            nuevaCadena += cadena.charAt(0);\n            for (int i = 0; i < cadena.length(); i++) {\n                if (i > 0 && i < cadena.length()-1) {\n                    if (cadena.charAt(i) != 'x') {\n                        nuevaCadena += cadena.charAt(i);\n                    }\n                }\n            }\n            return nuevaCadena + cadena.charAt(cadena.length()-1);\n        }\n        return cadena;\n    }"
  },
  {
    "name": "matriz667",
    "lang": "java",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "Calentamiento2.java",
    "statement": "Dada una matriz de enteros, retorna el numero de veces que dos 6 están uno al lado del otro en la matriz. También cuenta las instancias en las que el segundo \"6\" es en realidad un 7.",
    "examples": [
      "matriz667([6, 6, 2]) → 1",
      "matriz667([6, 6, 2, 6]) → 1",
      "matriz667([6, 7, 2, 6]) → 1"
    ],
    "code": "public int matriz667(int[] nums) {\n        int contador = 0;\n\n        for (int i = 0; i < nums.length; i++) {\n            if (i < nums.length-1) {\n                if (nums[i] == 6 && (nums[i+1] == 6 || nums[i+1] == 7)) {\n                    contador++;\n                }\n            }\n        }\n        return contador;\n    }"
  },
  {
    "name": "FistaPuros",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Cuando las ardillas se juntan para una fiesta, les gusta fumar puros. Una fiesta de ardillas, es existosa cuando la cantidad de puros está entre 40 y 60, ambos incluidos. A menos que sea fin de semana, en cuyo caso no hay limite superior para la cantidad de puros. Retorna verdadero si la fiesta con los valores dados es exitosa, o falso en caso contrario.",
    "examples": [
      "FistaPuros(30, false) → false",
      "FistaPuros(50, false) → true",
      "FistaPuros(70, true) → true"
    ],
    "code": "public boolean FistaPuros(int puros, boolean finSemana) {\n        if (finSemana) {\n            if (puros >= 40) {\n                return true;\n            }\n            return false;\n        } else {\n            if (puros >= 40 && puros <= 60) {\n                return true;\n            }\n            return false;\n        }\n    }"
  },
  {
    "name": "detencionVelocidad",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Estas conduciendo un poco demasiado rápido y un policía te detiene. Escribe el código para calcular el resultado, codificado como un valor int: 0 = sin multa, 1 = multa pequeña, 2 = multa grande. Si la velocidad es 60 o menos, el resultado es 0. Si la velocidad está entre 61 y 80 ambos incluidos, el resultado es 1. Si la velocidad es 81 o más, el resultado es 2. A menos que sea tu compleaño: ese día, tu velocidad puede ser 5 veces mayor en todos los casos.",
    "examples": [
      "detencionVelocidad(60, false) → 0",
      "detencionVelocidad(65, false) → 1",
      "detencionVelocidad(65, true) → 0"
    ],
    "code": "public int detencionVelocidad(int velocidad, boolean cumpleanios) {\n        if (!cumpleanios) {\n            if (velocidad <= 60) {\n                return 0;\n            } else if (velocidad >= 61 && velocidad <= 80) {\n                return 1;\n            } else if (velocidad >= 81) {\n                return 2;\n            }\n        } else {\n            if (velocidad <= 65) {\n                return 0;\n            } else if (velocidad >= 66 && velocidad <= 85) {\n                return 1;\n            } else if (velocidad >= 86) {\n                return 2;\n            }\n        }\n        return 0;\n    }"
  },
  {
    "name": "seis",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "El numero 6 es un numero realmente genial. Dados dos valores enteros, a y b, retorna verdadero si uno de ellos es 6. O si la suma o diferencias de ambos es 6. Nota: La función Math.abs(a) calcula el valor absoluto de a.",
    "examples": [
      "seis(6, 4) → true",
      "seis(4, 5) → false",
      "seis(1, 5) → true"
    ],
    "code": "public boolean seis(int a, int b) {\n        if (a == 6) {\n            return true;\n        }\n\n        if (b == 6) {\n            return true;\n        }\n\n        if (a + b == 6) {\n            return true;\n        }\n\n        if (Math.abs(a - b) == 6) {\n            return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "masMultiplo20",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Retorna verdadero si el numero entero (no negativo) dado es 1 o 2 más que un múltiplo de 20.",
    "examples": [
      "masMultiplo20(20) → falso",
      "masMultiplo20(21) → verdadero",
      "masMultiplo20(22) → verdadero"
    ],
    "code": "public boolean masMultiplo20(int n) {\n        if (n % 20 == 1 || n % 20 == 2) {\n            return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "cercaDiez",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Dado un numero entero (no negativo), devuelve verdadero si el numero está dentro de 2 de un múltiplo de 10. Nota: (a % b) es el resto de dividir a por b, por lo que (7 % 5) es 2.",
    "examples": [
      "cercaDiez(12) → true",
      "cercaDiez(17) → false",
      "cercaDiez(19) → true"
    ],
    "code": "public boolean cercaDiez(int num) {\n        if (num % 10 == 0) {\n            return true;\n        }\n\n        if (num % 10 == 1) {\n            return true;\n        }\n\n        if (num % 10 == 2) {\n            return true;\n        }\n\n        if (num % 10 == 8) {\n            return true;\n        }\n\n        if (num % 10 == 9) {\n            return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "fiestaTeDulce",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Estamos organizando una fiesta con cantidades de té y dulces. Retorna el resultado entero de la fiesta codificado como 0 = malo, 1 = bueno o 2 = genial. Una fiesta buena (1) si tanto el té como los dulces son al menos 5. Sin embargo, si el té o los dulces son al menos el doble de la cantidad del otro, la fiesta es genial (2). Sin embargo, en todos los casos, si el té o los dulces son menos de 5, la fiesta siempre es mala (0).",
    "examples": [
      "fiestaTeDulce(6, 8) → 1",
      "fiestaTeDulce(3, 8) → 0",
      "fiestaTeDulce(20, 6) → 2"
    ],
    "code": "public int fiestaTeDulce(int te, int dulce) {\n        if (te < 5 || dulce < 5) {\n            return 0;\n        } else if (te >= dulce*2 || dulce >= te*2) {\n            return 2;\n        } else {\n            return 1;\n        }\n    }"
  },
  {
    "name": "dosComoUno",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Dados tres enteros, a b c, retorna verdadero si la suma de dos de ellos es el valor del tercero.",
    "examples": [
      "dosComoUno(1, 2, 3) → true",
      "dosComoUno(3, 1, 2) → true",
      "dosComoUno(3, 2, 2) → false"
    ],
    "code": "public boolean dosComoUno(int a, int b, int c) {\n        if (a + b == c) {\n            return true;\n        } else if (b + c == a) {\n            return true;\n        } else if (a + c == b) {\n            return true;\n        } else {\n            return false;\n        }\n    }"
  },
  {
    "name": "ultimoDigito",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Dados tres números enteros, a b c, retorna verdadero si dos o más de ellos tiene el mismo ultimo digito. Los números enteros no negativos. Nota: el operador de residuo % calcula el resto de la división, ejemplo 17 % 10 es 7.",
    "examples": [
      "ultimoDigito(23, 19, 13) → true",
      "ultimoDigito(23, 19, 12) → false",
      "ultimoDigito(23, 19, 3) → true"
    ],
    "code": "public boolean ultimoDigito(int a, int b, int c) {\n        String aUltimo = \"\" + a % 10;\n        String bUltimo = \"\" + b % 10;\n        String cUltimo = \"\" + c % 10;\n        \n        if (aUltimo.equals(bUltimo)) {\n            return true;\n        }\n\n        if (aUltimo.equals(cUltimo)) {\n            return true;\n        }\n\n        if (bUltimo.equals(cUltimo)) {\n            return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "mayorResiduo5",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Dado dos valores enteros, retorna el valor mayor de los tres. Sin embargo, si los dos valores tienen el mismo resto cuando se divide por 5, entonces devuelve el valor menor. Sin embargo, en todos los casos, si los dos valores son iguales, retorna 0. Nota: el operador de residuo % calcula el resto de la división, ejemplo 7 % 5 es 2.",
    "examples": [
      "mayorResiduo5(2, 3) → 3",
      "mayorResiduo5(6, 2) → 6",
      "mayorResiduo5(3, 2) → 3"
    ],
    "code": "public int mayorResiduo5(int a, int b) {\n        int aResiduo = a % 5;\n        int bResiduo = b % 5;\n        \n        if (a == b) {\n            return 0;\n        } else if (aResiduo == bResiduo) {\n            if (a < b) {\n                return a;\n            } else {\n                return b;\n            }\n        } else {\n            if (a > b) {\n                return a;\n            } else {\n                return b;\n            }\n        }\n    }"
  },
  {
    "name": "billeteAzul",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Tienes un billete de lotería azul, con los numeros enteros a, b y c. Esto forma tres pares, que llamaremos ab, bc y ac. Considera la suma de los números en cada par. Si cualquier par suma exactamente 10, el resultado es 10. De lo contrario, si la suma de ab es exactamente 10 más que la suma de bc o ac, el resultado es 5. De lo contrario, el resultado es 0.",
    "examples": [
      "billeteAzul(9, 1, 0) → 10",
      "billeteAzul(9, 2, 0) → 0",
      "billeteAzul(6, 1, 4) → 10"
    ],
    "code": "public int billeteAzul(int a, int b, int c) {\n        if (a + b == 10 || b + c == 10 || a + c == 10) {\n            return 10;\n        } else if (a + b == b + c + 10 || a + b == a + c + 10) {\n            return 5;\n        } else {\n            return 0;\n        }\n    }"
  },
  {
    "name": "citaModa",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Tu y tu cita están intentando conseguir una mesa en un restaurante. El parametro \"tu\" es el estilo de tu ropa, en el rango de 0 a 10, y el parametro \"cita\" es el estilo de la ropa de tu cita. El resultado de obtener la mesa se codifica como un valor entero con 0 = no, 1 = tal vez, 2 = si. Sí alguno de los dos es muy elegante, 8 o más, entonces el resultado es 2 (sí). Con la excepción de que si alguno de los tiene un estilo de 2 o menos, entonces el resultado es 0 (no). De lo contrario, el resultado es 1 (tal vez).",
    "examples": [
      "citaModa(5, 10) → 2",
      "citaModa(5, 2) → 0",
      "citaModa(5, 5) → 1"
    ],
    "code": "public int citaModa(int tu, int cita) {\n        if (tu >= 8 && cita > 2) {\n            return 2;\n        } else if (tu > 2 && cita >= 8) {\n            return 2;\n        } else if (tu <= 2 || cita <= 2) {\n            return 0;\n        } else {\n            return 1;\n        }\n    }"
  },
  {
    "name": "sortaordenarSumaSum",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Dados 2 enteros, a y b, retorna su suma. Sin embargo, las sumas en el rango de 10 a 19 ambos incluidos están prohibidas, por lo que en ese caso solo devuelve 20.",
    "examples": [
      "ordenarSuma(3, 4) → 7",
      "ordenarSuma(9, 4) → 20",
      "ordenarSuma(10, 11) → 21"
    ],
    "code": "public int sortaordenarSumaSum(int a, int b) {\n        if (a + b >= 10 && a + b <= 19) {\n            return 20;\n        } else if (a + b > 19) {\n            return a + b;\n        } else {\n            return a + b;\n        }\n    }"
  },
  {
    "name": "en1A10",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Dados un numero n, retorna verdadero si n está en el rango 1 y 10 ambos incluidos. A menos que modoFuera es verdadero, en cuyo caso retorna verdadero si el número es menor o igual a 1, o mayor o igual a 10.",
    "examples": [
      "en1A10(5, false) → true",
      "en1A10(11, false) → false",
      "en1A10(11, true) → true"
    ],
    "code": "public boolean en1A10(int n, boolean modoFuera) {\n        if (!modoFuera && n >= 1 && n <= 10) {\n            return true;\n        } else if (modoFuera && (n <= 1 || n >= 10)) {\n            return true;\n        } else {\n            return false;\n        }\n    }"
  },
  {
    "name": "multiplo35",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Retorna verdadero si el número entero (no negativo) dado es un múltiplo de 3 o 5, pero no los dos. Usa el operador de residuo %.",
    "examples": [
      "multiplo35(3) → true",
      "multiplo35(10) → true",
      "multiplo35(15) → false"
    ],
    "code": "public boolean multiplo35(int n) {\n        if (n % 3 == 0 ^ n % 5 == 0) {\n            return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "sumaAdolescente",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Dados 2 enteros, a y b, retorna su suma. Sin embargo, los valores \"adolescentes\" en el rango de 13 y 19 ambos incluidos son especialmente afortunados. Por lo tanto, si alguno de los valores es un adolescente, retorna simplemente 19.",
    "examples": [
      "sumaAdolescente(3, 4) → 7",
      "sumaAdolescente(10, 13) → 19",
      "sumaAdolescente(13, 2) → 19"
    ],
    "code": "public int sumaAdolescente(int a, int b) {\n        if (a >= 13 && a <= 19 || b >= 13 && b <= 19) {\n          return 19;\n        } else {\n          return a + b;\n        }\n    }"
  },
  {
    "name": "cadenaEfervescencia",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Dada una cadena, si la cadena comienza con \"f\" retorna \"Fizz\". Si la cadena termina en \"b\" retorna \"Buzz\". Si las dos condiciones se cumplen \"f\" y \"b\", retorna \"FizzBuzz\". En todo caso, retorna la cadena sin cambios.",
    "examples": [
      "cadenaEfervescencia(\"fig\") → \"Fizz\"",
      "cadenaEfervescencia(\"dib\") → \"Buzz\"",
      "cadenaEfervescencia(\"fib\") → \"FizzBuzz\""
    ],
    "code": "public String cadenaEfervescencia(String str) {\n        if (str.startsWith(\"f\") && str.endsWith(\"b\")) {\n            return \"FizzBuzz\";\n        } else if (str.startsWith(\"f\")) {\n            return \"Fizz\";\n        } else if (str.endsWith(\"b\")) {\n            return \"Buzz\";\n        } else {\n            return str;\n        }\n    }"
  },
  {
    "name": "enOrden",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Dados tres números enteros, a b c, retorna verdadero si b es mayor que a, and c es mayor que b. Sin embargo, con la excepción de que si \"bOk\" es verdadero, b no necesita ser mayor que a.",
    "examples": [
      "enOrden(1, 2, 4, false) → true",
      "enOrden(1, 2, 1, false) → false",
      "enOrden(1, 1, 2, true) → true"
    ],
    "code": "public boolean enOrden(int a, int b, int c, boolean bOk) {\n        if (!bOk && b > a && c > b) {\n            return true;\n        } else if (bOk && c > b) {\n            return true;\n        } else {\n            return false;\n        }\n    }"
  },
  {
    "name": "menos10",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Dados tres números enteros, a b c, retorna verdadero si uno de ellos es 10 o más menor que uno de los otros.",
    "examples": [
      "menos10(1, 7, 11) → true",
      "menos10(1, 7, 10) → false",
      "menos10(11, 1, 7) → true"
    ],
    "code": "public boolean menos10(int a, int b, int c) {\n        if (Math.abs(a-b) >= 10) {\n            return true;\n        }\n\n        if (Math.abs(b-c) >= 10) {\n            return true;\n        }\n\n        if (Math.abs(a-c) >= 10) {\n            return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "billeteRojo",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Tienes un billete de lotería rojo que muestra los números enteros a, b y c, cada uno de los cuales es 0, 1 o 2. Si todos tienen el valor 2, el resultado es 10. De lo contrario, si son todos iguales, el resultado es 5. De lo contrario, siempre que b  c sean diferentes de a, el resultado es 1. De lo contrario, el resultado es 0.",
    "examples": [
      "billeteRojo(2, 2, 2) → 10",
      "billeteRojo(2, 2, 1) → 0",
      "billeteRojo(0, 0, 0) → 5"
    ],
    "code": "public int billeteRojo(int a, int b, int c) {\n        if (a == 2 && b == 2 && c == 2) {\n            return 10;\n        } else if (a == b && a == c) {\n            return 5;\n        } else if (b != a && c != a) {\n            return 1;\n        } else {\n            return 0;\n        }\n    }"
  },
  {
    "name": "compartirDigito",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Dados dos números enteros, cada uno en el rango de 10 y 99 ambos incluidos, retorna verdadero si hay un dígito que aparece en ambos números, como el 2 en el 12 y 23. Nota: la división de n/10, da el digito izquierdo mientras que el operador de residuo % (n%10) da el digito derecho.",
    "examples": [
      "compartirDigito(12, 23) → true",
      "compartirDigito(12, 43) → false",
      "compartirDigito(12, 44) → false"
    ],
    "code": "public boolean compartirDigito(int a, int b) {\n        if (a / 10 == b / 10) {\n            return true;\n        }\n        if (a % 10 == b % 10) {\n            return true;\n        }\n        if (b / 10 == a % 10) {\n            return true;\n        }\n        if (a / 10 == b % 10) {\n            return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "ardillasJuegan",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Las ardillas en Palo Alto pasa la mayor parte del dia jugando. En particular, juegan si la temperatura está entre 60 y 90 ambos incluidos. A menos que sea verano, en cuyo caso el límite superior de la temperatura es 100 en lugar de 90. Dado un entero \"temperatura\" y un booleano \"verano\", retorna verdadero si las ardillas juegan y falso en caso contrario.",
    "examples": [
      "ardillasJuegan(70, false) → true",
      "ardillasJuegan(95, false) → false",
      "ardillasJuegan(95, true) → true"
    ],
    "code": "public boolean ardillasJuegan(int temperatura, boolean verano) {\n        if (verano && (temperatura >= 60 && temperatura <= 100)) {\n            return true;\n        }\n        if (!verano && (temperatura >= 60 && temperatura <= 90)) {\n            return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "alarmClock",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Dado un dia de la semana codificado como 0 = Sun, 1 = Mon, 2 = Tue, ... 6 = Sat, y un booleano que indica si estamos de vacaciones, retorna una cadena con el formato \"7:00\" que indica cuándo la alarma debe sonar el despertador. Los días laborables, el despertador debe sonar a las \"7:00\" y los fines de semana a las \"10:00\". A menos que estemos de vacaciones, en cuyo caso los días laborables debe sonar a las \"10:00\" y los fines de semana debe sonar a las \"off\".",
    "examples": [
      "despertador(1, false) → \"7:00\"",
      "despertador(5, false) → \"7:00\"",
      "despertador(0, false) → \"10:00\""
    ],
    "code": "public String alarmClock(int dia, boolean vacaciones) {\n        if (!vacaciones) {\n            if (dia >= 1 && dia <= 5) {\n                return \"7:00\";\n            } else {\n                return \"10:00\";\n            }\n        } else {\n            if (dia >= 1 && dia <= 5) {\n                return \"10:00\";\n            } else {\n                return \"off\";\n            }\n        }  \n    }"
  },
  {
    "name": "especialMultiplo11",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Diremos que un número es especial si es múltiplo de 11 o si es uno más que un múltiplo de 11. Retorna verdadero si el número no negativo dado es especial. Utiliza el operador % de residuo.",
    "examples": [
      "especialMultiplo11(22) → true",
      "especialMultiplo11(23) → true",
      "especialMultiplo11(24) → false"
    ],
    "code": "public boolean especialMultiplo11(int n) {\n        if (n % 11 == 0 || n % 11 == 1) {\n            return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "unoDosmultiplo20",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Retorna verdadero si el numero no negativo dado es 1 o 2 más que un múltiplo de 20. Por lo tanto, por ejemplo 38 y 39 retornan verdadero, pero 40 retorna falso.",
    "examples": [
      "unoDosmultiplo20(18) → true",
      "unoDosmultiplo20(19) → true",
      "unoDosmultiplo20(20) → false"
    ],
    "code": "public boolean unoDosmultiplo20(int n) {\n        if ((n+1) % 20 == 0) {\n          return true;\n        }\n\n        if ((n+2) % 20 == 0) {\n            return true;\n        }\n        return false;\n    }"
  },
  {
    "name": "suenaCelular",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Suena tu celular. Retorna verdadero si debes contestar. Normalmente contestas, excepto por la mañana que solo contestas si es tu mamá quien llama. En todos los casos, si estás durmiendo, no contestas.",
    "examples": [
      "suenaCelular(false, false, false) → true",
      "suenaCelular(false, false, true) → false",
      "suenaCelular(true, false, false) → false"
    ],
    "code": "public boolean suenaCelular(boolean manana, boolean mama, boolean durmiendo) {\n        if (mama && !durmiendo) {\n            return true;\n        } else if (!manana && !mama && !durmiendo) {\n            return true;\n        } else {\n            return false;\n        }\n    }"
  },
  {
    "name": "cadenaEfervescencia2",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Dado un entero n, retorna la forma de cadena del número seguido de \"!\". Por lo tanto, el entero 6 da como resultado \"6!\". Excepto si el número es divisible por 3 utiliza \"Fizz\" en lugar del número, y si es divisible por 3 y por 5, utiliza \"FizzBuzz\". Nota: el operador de residuo % calcula el resto de la división, por lo tanto 23 % 10 produce 3. ¿Cuál será el resto cuando un número se divide de manera uniforme en otro?.",
    "examples": [
      "cadenaEfervescencia2(1) → \"1!\"",
      "cadenaEfervescencia2(2) → \"2!\"",
      "cadenaEfervescencia2(3) → \"Fizz!\""
    ],
    "code": "public String cadenaEfervescencia2(int n) {\n        if (n % 3 == 0 && n % 5 == 0) {\n            return \"FizzBuzz!\";\n        }\n        if (n % 3 == 0) {\n            return \"Fizz!\";\n        } \n        if (n % 5 == 0) {\n            return \"Buzz!\";\n        } \n        return String.format(\"%d!\", n);\n    }"
  },
  {
    "name": "enOrdenIgual",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Dados tres enteros, a b c, retorna verdadero si están en estricto orden creciente, como 2 5 11 0 5 6 7 o 5 5 7. Sin embargo, con la excepción de que si \"igual\" es verdadero, se permite la igualdad como 5 5 7 o 5 5 5.",
    "examples": [
      "enOrdenIgual(2, 5, 11, false) → true",
      "enOrdenIgual(5, 7, 6, false) → false",
      "enOrdenIgual(5, 5, 7, true) → true"
    ],
    "code": "public boolean enOrdenIgual(int a, int b, int c, boolean igualdad) {\n        if (a == b && b < c && igualdad) {\n            return true;\n        } else if (a == b && b == c && igualdad) {\n            return true;\n        } else if (a < b && b == c && igualdad) {\n            return true;\n        }else if (a < b && b < c && !igualdad)  {\n            return true;\n        } else {\n            return false;\n        }\n    }"
  },
  {
    "name": "sinDobles",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Retorna la suma de dos tiradas de dados de 6 caras, cada una en el rango de 1 a 6. Sin embargo, si \"dobles\" es verdadero y los dados muestran el mismo valor, incrementa un dado al siguiente valor, dando vueltas hacia 1 si su valor era 6.",
    "examples": [
      "sinDobles(2, 3, true) → 5",
      "sinDobles(3, 3, true) → 7",
      "sinDobles(3, 3, false) → 6"
    ],
    "code": "public int sinDobles(int dado1, int dado2, boolean dobles) {\n        if (dado1 == 6 && dado2 == 6 && dobles) {\n            return dado1 + 1;\n        } else if (dado1 == dado2 && dobles) {\n            return dado1 + dado2 + 1;\n        } else {\n            return dado1 + dado2;\n        }\n    }"
  },
  {
    "name": "billeteVerde",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Tienes un billete verde de lotería, con los números enteros a, b y c. Si todos los números son diferentes entre sí, el resultado es 0. Si todos los números  son iguales, el resultado es 20. Si dos de los números son iguales, el resultado es 10.",
    "examples": [
      "billeteVerde(1, 2, 3) → 0",
      "billeteVerde(2, 2, 2) → 20",
      "billeteVerde(1, 1, 2) → 10"
    ],
    "code": "public int billeteVerde(int a, int b, int c) {\n        if (a == b && b == c) {\n            return 20;\n        } else if (a != b && b == c) {\n            return 10;\n        } else if (a == b && b != c) {\n            return 10;\n        } else if (a == c && c != b) {\n            return 10;\n        } else {\n            return 0;\n        }\n    }"
  },
  {
    "name": "sumaLimite",
    "lang": "java",
    "category": "Lógica",
    "level": "Básico",
    "file": "Logico1.java",
    "statement": "Dados 2 números enteros no negativos, a y b, retorna su suma, siempre que la suma tenga la misma cantidad de dígitos que a. Si la suma tiene más dígitos que a, simplemente retorna a sin b. Nota: una forma de calcular la cantidad de un número entero no negativo n es convertirlo en una cadena con String.valueOf(n) y luego verificar la longitud de la cadena.",
    "examples": [
      "sumaLimite(2, 3) → 5",
      "sumaLimite(8, 3) → 8",
      "sumaLimite(8, 1) → 9"
    ],
    "code": "public int sumaLimite(int a, int b) {\n        String aCadena = String.valueOf(a);\n        int suma = a + b;\n        String sumaInt = String.valueOf(suma);\n        \n        if (aCadena.length() == sumaInt.length()) {\n          return a + b;\n        } else {\n          return a;\n        }\n    }"
  },
  {
    "name": "hacerLadrillos",
    "lang": "java",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "Logico2.java",
    "statement": "Queremos hacer una fila de ladrillos que tenga una longitud de 10 pulgadas. Tenemos una cantidad de ladrillos pequeños (1 pulgada cada uno) y ladrillos grandes (5 pulgadas cada uno). Retorna verdadero si es posible hacer la fila eligiendo entre los ladrillos dados. Esto es un poco más dificil de lo que parece y se puede hacer sin bucles.",
    "examples": [
      "hacerLadrillos(3, 1, 8) → true",
      "hacerLadrillos(3, 1, 9) → false",
      "hacerLadrillos(3, 2, 10) → true"
    ],
    "code": "public boolean hacerLadrillos(int pequeno, int grande, int meta) {\n        boolean resultado = ((pequeno + grande * 5) < meta) || (meta % 5 > pequeno) ? false : true;\n        return resultado;\n    }"
  },
  {
    "name": "noAdolescentes",
    "lang": "java",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "Logico2.java",
    "statement": "",
    "examples": [],
    "code": "public int noAdolescentes(int n) {\" que tome un valor entero y devuelva ese valor fijo para la regla de adolescentes. De esta manera, evitas repetir el código de adolescentes 3 veces (es decir, \"descomposición\"). Define el asistente a continuación y en el mismo nivel de sangría que el noSumaAdolescente() principal. \"}"
  },
  {
    "name": "noSumaAdolescentes",
    "lang": "java",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "Logico2.java",
    "statement": "Dados 3 valores enteros a, b y c, retorna la suma de ellos. Sin embargo, si uno de los valore es un adolescente (en el rango 13-19 inclusivos), entonces ese valor cuenta como 0, excepto 15 y 16, que no cuentan como adolescente. Escribe un asistente independiente \"public int noAdolescentes(int n) {\" que tome un valor entero y devuelva ese valor fijo para la regla de adolescentes. De esta manera, evitas repetir el código de adolescentes 3 veces (es decir, \"descomposición\"). Define el asistente a continuación y en el mismo nivel de sangría que el noSumaAdolescente() principal. \"}\".",
    "examples": [
      "noSumaAdolescentes(1, 2, 3) → 6",
      "noSumaAdolescentes(2, 13, 1) → 3",
      "noSumaAdolescentes(2, 1, 14) → 3"
    ],
    "code": "public int noSumaAdolescentes(int a, int b, int c) {\n        if (a == 13 || a == 14 || a > 16 && a <= 19) {\n            a = 0;\n        }\n        \n        if (b == 13 || b == 14 || b > 16 && b <= 19) {\n            b = 0;\n        }\n        \n        if (c == 13 || c == 14 || c > 16 && c <= 19) {\n            c = 0;\n        }\n        return a + b + c;\n    }"
  },
  {
    "name": "veintiuna",
    "lang": "java",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "Logico2.java",
    "statement": "Dados dos valores mayores a 0, retorna el valor que esté más cerca de 21 sin excederlo. Retorna 0 si ambos excenden el valor.",
    "examples": [
      "veintiuna(19, 21) → 21",
      "veintiuna(21, 19) → 21",
      "veintiuna(19, 22) → 19"
    ],
    "code": "public int veintiuna(int a, int b) {\n        if (a <= 21 && b <= 21) {\n            if (a > b) {\n                return a;\n            } else {\n                return b;\n            }\n        } else if (a <= 21 && b > 21) {\n            return a;\n        } else if (b <= 21 && a > 21) {\n            return b;\n        } else {\n            return 0;\n        }\n    }"
  },
  {
    "name": "sumaSolitaria",
    "lang": "java",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "Logico2.java",
    "statement": "Dados tres valores enteros, a, b y c, retorna la suma de ellos. Sin embargo, si uno de los valores es igual a otro, no se tiene en cuenta para la suma.",
    "examples": [
      "sumaSolitaria(1, 2, 3) → 6",
      "sumaSolitaria(3, 2, 3) → 2",
      "sumaSolitaria(3, 3, 3) → 0"
    ],
    "code": "public int sumaSolitaria(int a, int b, int c) {\n        if (a == b && b == c) {\n            return 0;\n        } else if (a == b) {\n            return c;\n        } else if (b == c) {\n            return a;\n        } else if (a == c) {\n            return b;\n        } else {\n            return a + b + c;\n        }\n    }"
  },
  {
    "name": "redondear10",
    "lang": "java",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "Logico2.java",
    "statement": "",
    "examples": [],
    "code": "public int redondear10(int num) {\" y llámalo 3 veces. Escribe el ayudante completamente debajo y en el mismo nivel de sangría que redondear suma().\"}"
  },
  {
    "name": "redondearSuma",
    "lang": "java",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "Logico2.java",
    "statement": "Para este problema, redondearemos un valor entero hacia arriba hasta el siguiente múltiplo de 10 si su digito más a la derecha es 5 o más, por lo que 15 se redondea hacia arriba hasta 20. Alternativamente, redondea hacia abajo hasta el múltiplo anterior de 10 si su digito más a la derecha es menor que 5, por lo que 12 se redondea hacia abajo hasta 10. Dados 3 enteros, a, b y c devuelve la suma de sus valores redondeados. Para evitar la repetición de código, escribe un ayudante separado \"public int redondear10(int num) {\" y llámalo 3 veces. Escribe el ayudante completamente debajo y en el mismo nivel de sangría que redondear suma().\"}\".",
    "examples": [
      "redondearSuma(16, 17, 18) → 60",
      "redondearSuma(12, 13, 14) → 30",
      "redondearSuma(6, 4, 4) → 10"
    ],
    "code": "public int redondearSuma(int a, int b, int c) {\n        int redondearA = redondear10(a);\n        int redondearB = redondear10(b);\n        int redondearC = redondear10(c);\n        \n        return redondearA + redondearB + redondearC;\n    }"
  },
  {
    "name": "redondear10",
    "lang": "java",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "Logico2.java",
    "statement": "",
    "examples": [],
    "code": "public int redondear10(int num) {\n        String cadena = \"\" + num;\n        int numero = 0;\n        \n        if (cadena.length() == 1) {\n            numero = Integer.parseInt(\"\"+cadena.charAt(0));\n        } else {\n            numero = Integer.parseInt(\"\"+cadena.charAt(cadena.length()-1));\n        }\n        \n        if (numero == 4) {\n            return num - 4;\n        }\n        \n        if (numero == 3) {\n            return num - 3;\n        }\n        \n        if (numero == 2) {\n            return num - 2;\n        }\n        \n        if (numero == 1) {\n            return num - 1;\n        }\n        \n        if (numero == 5) {\n            return num + 5;\n        }\n        if (numero == 6) {\n            return num + 4;\n        }\n        if (numero == 7) {\n            return num + 3;\n        }\n        if (numero == 8) {\n            return num + 2;\n        }\n        if (numero == 9) {\n            return num + 1;\n        }\n        return num;\n    }"
  },
  {
    "name": "espacioUniforme",
    "lang": "java",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "Logico2.java",
    "statement": "Dados tres valores enteros, a, b y c, uno de ellos es pequeño, uno es mediano y uno es grande. Retorna verdadero si los tres valores están espaciados de manera uniforme, por lo que la diferencia entre pequeño y mediano es la misma que la diferencia entre mediano y grande.",
    "examples": [
      "espacioUniforme(2, 4, 6) → true",
      "espacioUniforme(4, 6, 2) → true",
      "espacioUniforme(4, 6, 3) → false"
    ],
    "code": "public boolean espacioUniforme(int a, int b, int c) {\n        if (a == b && b == c) {\n            return true;\n        }\n        \n        if (a == b || b == c) {\n            return false;\n        }\n        \n        if (Math.abs(a - b) == Math.abs(a - c)) {\n            return true;\n        }\n        \n        if (Math.abs(b - a) == Math.abs(b - c)) {\n            return true;\n        }\n        \n        if (Math.abs(c - a) == Math.abs(c - b)) {\n            return true;\n        } else {\n            return false;\n        }\n    }"
  },
  {
    "name": "afortunadaSuma",
    "lang": "java",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "Logico2.java",
    "statement": "Dados tres valores enteros, a, b y c, retorna la suma de ellos. Sin embargo, si uno de los valores es 13, no cuenta para la suma y los valoress a su derecha no cuentan. Por ejemplo, si b es 13, entonces tanto b como c no cuentan.",
    "examples": [
      "afortunadaSuma(1, 2, 3) → 6",
      "afortunadaSuma(1, 2, 13) → 3",
      "afortunadaSuma(1, 13, 3) → 1"
    ],
    "code": "public int afortunadaSuma(int a, int b, int c) {\n        int suma = a + b + c;\n\n        if (a == 13) {\n            return 0;\n        } else if (b == 13) {\n            return a;\n        } else if (c == 13) {\n            return a + b;\n        } else {\n            return suma;\n        }\n    }"
  },
  {
    "name": "cercaLejos",
    "lang": "java",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "Logico2.java",
    "statement": "Dados tres enteros a, b y c, retorna verdadero si uno de ellos b o c es \"cerca\" (difiere de a en 1 como maxímo), mientras que el otro esta \"lejos\", y se diferencia de los otros dos valores en 2 o más. Nota: Math.abs(num) retorna el valor absulto de num.",
    "examples": [
      "cercaLejos(1, 2, 10) → verdadero",
      "cercaLejos(1, 2, 3) → falso",
      "cercaLejos(4, 1, 3) → verdadero"
    ],
    "code": "public boolean cercaLejos(int a, int b, int c) {\n        if (Math.abs(a - b) <= 1) {\n            if (Math.abs(a - c) >= 2 && Math.abs(b - c) >= 2) {\n                return true;\n            }\n        }\n        \n        if (Math.abs(a - c) <= 1) {\n            if (Math.abs(a - b) >= 2 && Math.abs(b - c) >= 2) {\n                return true;\n            }\n        }\n        return false;\n    }"
  },
  {
    "name": "hacerChocolates",
    "lang": "java",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "Logico2.java",
    "statement": "Queremos hacer un paquete de kilos de chocolate. Tenemos barras pequeñas (1 kilo cada una) y barras grandes (5 kilos cada una). Retorna el número de barras pequeñas a utilizar, suponiendo que siempre usamos barras grandes antes que barras pequeñas. Retorna -1 si no se puede hacer.",
    "examples": [
      "hacerChocolates(4, 1, 9) → 4",
      "hacerChocolates(4, 1, 10) → -1",
      "hacerChocolates(4, 1, 7) → 2"
    ],
    "code": "public int hacerChocolates(int pequena, int grande, int meta) {\n        int barrasGrandes = 0;\n\n        if (grande < meta / 5) {\n            barrasGrandes = grande;\n        } else {\n            barrasGrandes = meta/5;\n        }\n        int resto = meta - (barrasGrandes * 5);\n        if (resto <= pequena) return resto;\n        return -1;\n    }"
  },
  {
    "name": "primeroUltimo6",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dada una matriz de enteros, retorna verdadero si el numero 6 aparece al principio o al final la matriz. La matriz tendran una longitud de 1 o más.",
    "examples": [
      "primeroUltimo6([1, 2, 6]) → true",
      "primeroUltimo6([6, 1, 2, 3]) → true",
      "primeroUltimo6([13, 6, 1, 2, 3]) → false"
    ],
    "code": "public boolean primeroUltimo6(int[] nums) {\n        if (nums[0] == 6 || nums[nums.length-1] == 6) {\n            return true;\n        } else {\n            return false;\n        }\n    }"
  },
  {
    "name": "primeroUltimoComun",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dadas 2 matrices de enteros, a y b, retorna verdadero si tienen el mismo primer elemento o el mismo ultimo elemento. Ambas matrices tendrán una longitud de 1 o más.",
    "examples": [
      "primeroUltimoComun([1, 2, 3], [7, 3]) → true",
      "primeroUltimoComun([1, 2, 3], [7, 3, 2]) → false",
      "primeroUltimoComun([1, 2, 3], [1, 3]) → true"
    ],
    "code": "public boolean primeroUltimoComun(int[] a, int[] b) {\n        if (a[0] == b[0]) {\n            return true;\n        } else if (a[a.length-1] == b[b.length-1]) {\n            return true;\n        } else {\n            return false;\n        }\n    }"
  },
  {
    "name": "revertir3",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dada una matriz de enteros de longitud 3, retorna una nueva matriz con los elementos en orden al reves, por lo que {1, 2, 3} produce {3, 2, 1}.",
    "examples": [
      "revertir3([1, 2, 3]) → [3, 2, 1]",
      "revertir3([5, 11, 9]) → [9, 11, 5]",
      "revertir3([7, 0, 0]) → [0, 0, 7]"
    ],
    "code": "public int[] revertir3(int[] nums) {\n        return new int[] {nums[2], nums[1], nums[0]};\n    }"
  },
  {
    "name": "intermedio",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dadas 2 matrices de enteros, a y b, cada una de longitud 3, retorna una nueva matriz de longitud 2 que contenga los elementos intermedios de las dos matrices.",
    "examples": [
      "intermedio([1, 2, 3], [4, 5, 6]) → [2, 5]",
      "intermedio([7, 7, 7], [3, 8, 0]) → [7, 8]",
      "intermedio([5, 2, 9], [1, 4, 5]) → [2, 4]"
    ],
    "code": "public int[] intermedio(int[] a, int[] b) {\n        int[] c = new int[2];\n        \n        c[0] = a[1];\n        c[1] = b[1];\n        \n        return c;\n    }"
  },
  {
    "name": "ni2Ni3",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dada una matriz de enteros de longitud 2, retorna verdadero si no contiene un 2 o un 3.",
    "examples": [
      "ni2Ni3([4, 5]) → true",
      "ni2Ni3([4, 2]) → false",
      "ni2Ni3([3, 5]) → false"
    ],
    "code": "public boolean ni2Ni3(int[] nums) {\n        if (nums[0] == 2) {\n          return false;\n        }\n        if (nums[1] == 2) {\n            return false;\n        }\n        if (nums[0] == 3) {\n            return false;\n        }\n        if (nums[1] == 3) {\n            return false;\n        }\n        return true;\n    }"
  },
  {
    "name": "arreglo23",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dada una matriz de enteros de longitud 3, si hay un 2 en la matriz seguido inmediatamente por un 3, establece el elemento 3 en 0. retorna la matriz modificada.",
    "examples": [
      "arreglo23([1, 2, 3]) → [1, 2, 0]",
      "arreglo23([2, 3, 5]) → [2, 0, 5]",
      "arreglo23([1, 2, 1]) → [1, 2, 1]"
    ],
    "code": "public int[] arreglo23(int[] nums) {\n        if (nums[0] == 2 && nums[1] == 3) {\n            nums[1] = 0;\n        }\n        if (nums[1] == 2 && nums[2] == 3) {\n            nums[2] = 0;\n        }\n        return nums;\n    }"
  },
  {
    "name": "makeMiddle",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dada una matriz de enteros de longitud par, retorna una nueva matriz de longitud 2 que contiene los dos elementos del medio de la matriz original. La matriz original tendrá una longitud de 2 o más.",
    "examples": [
      "dosMedio([1, 2, 3, 4]) → [2, 3]",
      "dosMedio([7, 1, 2, 3, 4, 9]) → [2, 3]",
      "dosMedio([1, 2]) → [1, 2]"
    ],
    "code": "public int[] makeMiddle(int[] nums) {\n        int mid = nums.length/2;\n        \n        return new int[] {nums[mid-1], nums[mid]};\n    }"
  },
  {
    "name": "medioTres",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dada una matriz de enteros de longitud impar, retorna una nueva matriz de longitud 3 que contiene los elementos del medio de la matriz original. La matriz tendrá una longitud de 3.",
    "examples": [
      "medioTres([1, 2, 3, 4, 5]) → [2, 3, 4]",
      "medioTres([8, 6, 7, 5, 3, 0, 9]) → [7, 5, 3]",
      "medioTres([1, 2, 3]) → [1, 2, 3]"
    ],
    "code": "public int[] medioTres(int[] nums) {\n        int mid = nums.length/2;\n        \n        return new int[] {nums[mid-1], nums[mid], nums[mid+1]};\n    }"
  },
  {
    "name": "desafortunado1",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Diremos que un 1 seguido inmediatamente por un 3 en una matriz es un 1 desafortunado. Retorna verdadero si la matriz dada contiene un 1 desafortunado en sus primeras dos o sus ultimas dos posiciones en la matriz.",
    "examples": [
      "desafortunado1([1, 3, 4, 5]) → true",
      "desafortunado1([2, 1, 3, 4, 5]) → true",
      "desafortunado1([1, 1, 1]) → false"
    ],
    "code": "public boolean desafortunado1(int[] nums) {\n        if (nums.length >= 2) {\n            if (nums[0] == 1 && nums[1] == 3) {\n                return true;\n            } else if (nums[1] == 1 && nums[2] == 3) {\n                return true;\n            } else if (nums[nums.length-2] == 1 && nums[nums.length-1] == 3) {\n                return true;\n            }\n        }\n        return false;\n    }"
  },
  {
    "name": "igualPrimeroUltimo",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dada una matriz de enteros, retorna verdadero si la matriz tiene una longitud de 1 o más, y el primer elemento y el último elemento son iguales.",
    "examples": [
      "igualPrimeroUltimo([1, 2, 3]) → false",
      "igualPrimeroUltimo([1, 2, 3, 1]) → true",
      "igualPrimeroUltimo([1, 2, 1]) → true"
    ],
    "code": "public boolean igualPrimeroUltimo(int[] nums) {\n        if (nums.length >= 1) {\n            if (nums[0] == nums[nums.length-1]) {\n                return true;\n            }\n        }\n        return false;\n    }"
  },
  {
    "name": "suma3",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dada una matriz de entero de longitud 3, retorna la suma de todos los elementos.",
    "examples": [
      "suma3([1, 2, 3]) → 6",
      "suma3([5, 11, 2]) → 18",
      "suma3([7, 0, 0]) → 7"
    ],
    "code": "public int suma3(int[] nums) {\n        return nums[0] + nums[1] + nums[2];\n    }"
  },
  {
    "name": "maximo3",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dada una matriz de entero de longitud 3, determine cuál es más grande, el primero o el último elemento del conjunto, y establezca que todos los demás elementos tengan ese valor. Retorna el conjunto modificado.",
    "examples": [
      "maximo3([1, 2, 3]) → [3, 3, 3]",
      "maximo3([11, 5, 9]) → [11, 11, 11]",
      "maximo3([2, 11, 3]) → [3, 3, 3]"
    ],
    "code": "public int[] maximo3(int[] nums) {\n        if (nums[0] > nums[nums.length-1]) {\n            nums[0] = nums[0];\n            nums[1] = nums[0];\n            nums[2] = nums[0];\n        } else {\n            nums[0] = nums[nums.length-1];\n            nums[1] = nums[nums.length-1];\n            nums[2] = nums[nums.length-1];\n        }\n        return nums;\n    }"
  },
  {
    "name": "laterales",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dada una matriz de enteros, retorna una nueva matriz de longitud 2 que contenga el primer y último elemento de la matriz original. La matriz original tendrán una longitud de 1 o más.",
    "examples": [
      "laterales([1, 2, 3]) → [1, 3]",
      "laterales([1, 2, 3, 4]) → [1, 4]",
      "laterales([7, 4, 6, 2]) → [7, 2]"
    ],
    "code": "public int[] laterales(int[] nums) {\n        return new int[] {nums[0], nums[nums.length-1]};\n    }"
  },
  {
    "name": "ceroHastaUltimo",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dada una matriz de enteros, retorna una nueva matriz con el doble de longitud donde su último elemento es el mismo que la matriz original y todos los demás elementos son 0. La matriz original tendrá una longitud de 1 o más. Nota: de forma predeterminada, una nueva matriz de entero contiene los 0.",
    "examples": [
      "ceroHastaUltimo([4, 5, 6]) → [0, 0, 0, 0, 0, 6]",
      "ceroHastaUltimo([1, 2]) → [0, 0, 0, 2]",
      "ceroHastaUltimo([3]) → [0, 3]"
    ],
    "code": "public int[] ceroHastaUltimo(int[] nums) {\n        int longitud = nums.length * 2;\n        int[] cerosNums = new int[longitud];\n\n        cerosNums[longitud-1] = nums[nums.length-1];\n        \n        return cerosNums;\n    }"
  },
  {
    "name": "comienza1",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Comience con dos matrices de enteros, a y b, de cualquier longitud. Retorna cuantas de las matrices tienen un 1 como su primer elemento.",
    "examples": [
      "comienza1([1, 2, 3], [1, 3]) → 2",
      "comienza1([7, 2, 3], [1]) → 1",
      "comienza1([1, 2], []) → 1"
    ],
    "code": "public int comienza1(int[] a, int[] b) {\n        if (a.length > 0 && a[0] == 1) {\n            if (b.length > 0 && b[0] == 1) {\n                return 2;\n            } else {\n                return 1;\n            }\n        }\n        if (b.length > 0 && b[0] == 1) {\n            return 1;\n        }\n        return 0;\n    }"
  },
  {
    "name": "juntasDos",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dadas 2 matrices de enteros, cada una de longitud 2, retorna una nueva matriz de longitud 2 que contenga todos los elementos de las dos matrices.",
    "examples": [
      "juntasDos([1, 2], [3, 4]) → [1, 2, 3, 4]",
      "juntasDos([4, 4], [2, 2]) → [4, 4, 2, 2]",
      "juntasDos([9, 2], [3, 4]) → [9, 2, 3, 4]"
    ],
    "code": "public int[] juntasDos(int[] a, int[] b) {\n        return new int[] {a[0], a[1], b[0], b[1]};\n    }"
  },
  {
    "name": "maximoTres",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dada una matriz de enteros de longitud impar, observe el primer, ultimo y medio valor de la matriz y retorna el mayor. La longitud de la matriz será al menos 1.",
    "examples": [
      "maximoTres([1, 2, 3]) → 3",
      "maximoTres([1, 5, 3]) → 5",
      "maximoTres([5, 2, 3]) → 5"
    ],
    "code": "public int maximoTres(int[] nums) {\n        int mayor = 0;\n        \n        for (int i = 0; i < nums.length; i++) {\n            if (i == 0 || i == nums.length/2 || i == nums.length-1) {\n                if (mayor < nums[i]) {\n                    mayor= nums[i];\n                }\n            }\n        }\n        return mayor;\n    }"
  },
  {
    "name": "hacer2",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dadas 2 matrices de enteros, a y b, retorna una nueva matriz de longitud 2 que contenga, en la medida de lo posible, los elementos de a seguido de los elementos de b. Las matrices puede tener cualquier longitud, incluido 0, pero habrá 2 o más elementos disponibles entre las 2 matrices.",
    "examples": [
      "hacer2([4, 5], [1, 2, 3]) → [4, 5]",
      "hacer2([4], [1, 2, 3]) → [4, 1]",
      "hacer2([], [1, 2]) → [1, 2]"
    ],
    "code": "public int[] hacer2(int[] a, int[] b) {\n        if (a.length >= 2) {\n            return new int[] {a[0], a[1]};\n        }\n        if (a.length == 1) {\n            return new int[] {a[0], b[0]};\n        }\n        return b;\n    }"
  },
  {
    "name": "makePi",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Retorna una matriz de enteros de longitud 3 que contiene los dígitos de pi, {3, 1, 4}.",
    "examples": [
      "crearPi() → [3, 1, 4]"
    ],
    "code": "public int[] makePi() {\n        return new int[] {3, 1, 4};\n    }"
  },
  {
    "name": "cambiarAIzquierda3",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dada una matriz de enteros de longitud 3, retorna una matriz con los elementos cambiados a la izquierda, por lo que {1, 2, 3} produce {2, 3, 1}.",
    "examples": [
      "cambiarAIzquierda3([1, 2, 3]) → [2, 3, 1]",
      "cambiarAIzquierda3([5, 11, 9]) → [11, 9, 5]",
      "cambiarAIzquierda3([7, 0, 0]) → [0, 0, 7]"
    ],
    "code": "public int[] cambiarAIzquierda3(int[] nums) {\n        return new int[] {nums[1], nums[2], nums[0]};\n    }"
  },
  {
    "name": "suma2",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dada una matriz de enteros, retorna la suma de los 2 primeros elementos de la matriz. Si la longitud de la matriz es menor a 2, simplemente suma los elementos que existen y devuelve 0 si la matriz tiene una longitud de 0.",
    "examples": [
      "suma2([1, 2, 3]) → 3",
      "suma2([1, 1]) → 2",
      "suma2([1, 1, 1, 1]) → 2"
    ],
    "code": "public int suma2(int[] nums) {\n        int suma = 0;\n        \n        if (nums.length >= 2) {\n            suma += nums[0];\n            suma += nums[1];\n        } else if (nums.length == 1) {\n            suma = nums[0];\n        }\n        return suma;\n    }"
  },
  {
    "name": "tiene2O3",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dada una matriz de enteros de longitud 2, retorna verdadero si contiene un 2 o un 3.",
    "examples": [
      "tiene2O3([2, 5]) → true",
      "tiene2O3([4, 3]) → true",
      "tiene2O3([4, 5]) → false"
    ],
    "code": "public boolean tiene2O3(int[] nums) {\n        if (nums[0] == 2 || nums[1] == 3) return true;\n        if (nums[0] == 3 || nums[1] == 2) return true;\n        return false;\n    }"
  },
  {
    "name": "doble23",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dada una matriz de enteros, retorna verdadero si la matriz contiene un 2 dos veces o un 3 dos veces. La matriz tendrá una longitud de 0, 1 0 2.",
    "examples": [
      "doble23([2, 2]) → true",
      "doble23([3, 3]) → true",
      "doble23([2, 3]) → false"
    ],
    "code": "public boolean doble23(int[] nums) {\n        if (nums.length > 1) {\n            if (nums[0] == 2 && nums[1] == 2) {\n                return true;\n            }\n            if (nums[0] == 3 && nums[1] == 3) {\n                return true;\n            }\n        }\n        return false;\n    }"
  },
  {
    "name": "dosGrandes",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Comience con dos matrices de enteros, a y b, cada una de longitud 2. Considere la suma de los valores en cada matriz. Retorna la matriz que tenga la suma más grande. En caso de empate, retorna a.",
    "examples": [
      "dosGrandes([1, 2], [3, 4]) → [3, 4]",
      "dosGrandes([3, 4], [1, 2]) → [3, 4]",
      "dosGrandes([1, 1], [1, 2]) → [1, 2]"
    ],
    "code": "public int[] dosGrandes(int[] a, int[] b) {\n        if (a[0] + a[1] > b[0] + b[1]) {\n            return a;\n        } else if (a[0] + a[1] < b[0] + b[1]) {\n            return b;\n        } else {\n            return a;\n        }\n    }"
  },
  {
    "name": "cambiaFinal",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dada una matriz de enteros, cambia el primer y último elemento en la matriz. Retorna la matriz modificada. La longitud de la matriz será al menos 1.",
    "examples": [
      "cambiaFinal([1, 2, 3, 4]) → [4, 2, 3, 1]",
      "cambiaFinal([1, 2, 3]) → [3, 2, 1]",
      "cambiaFinal([8, 6, 7, 9, 5]) → [5, 6, 7, 9, 8]"
    ],
    "code": "public int[] cambiaFinal(int[] nums) {\n        int tmp = nums[0];\n        nums[0] = nums[nums.length-1];\n        nums[nums.length-1] = tmp;\n        return nums;\n    }"
  },
  {
    "name": "dosElementos",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dada una matriz de enteros de cualquier longitud, retorna una nueva matriz con sus dos primeros elementos. Si la matriz es más pequeña que 2 elementos, utiliza los elementos que estén presentes.",
    "examples": [
      "dosElementos([1, 2, 3]) → [1, 2]",
      "dosElementos([1, 2]) → [1, 2]",
      "dosElementos([1]) → [1]"
    ],
    "code": "public int[] dosElementos(int[] nums) {\n        if (nums.length >= 2) {\n            return new int[] {nums[0], nums[1]};\n        } else {\n            return nums;\n        }\n    }"
  },
  {
    "name": "primerosElementos",
    "lang": "java",
    "category": "Matrices",
    "level": "Básico",
    "file": "Matriz1.java",
    "statement": "Dadas 2 matrices de enteros, a y b, de cualquier longitud, retorna una nueva matriz con los primeros elementos de cada matriz. Si cualquiera de las matrices tiene una longitud de 0, ignora esa matriz.",
    "examples": [
      "primerosElementos([1, 2, 3], [7, 9, 8]) → [1, 7]",
      "primerosElementos([1], [2]) → [1, 2]",
      "primerosElementos([1, 7], []) → [1]"
    ],
    "code": "public int[] primerosElementos(int[] a, int[] b) {\n        if (a.length == 0 && b.length == 0) {\n            return new int[0];\n        } else if (a.length >= 1) {\n            if (b.length >= 1) {\n                return new int[] {a[0], b[0]};\n            } else {\n                return new int[] {a[0]};\n            }\n        } else {\n            return new int[] {b[0]};\n        }\n    }"
  },
  {
    "name": "hola_nombre",
    "lang": "python",
    "category": "Cadenas",
    "level": "Básico",
    "file": "cadena1.py",
    "statement": "Dado un nombre de cadena, p. ej., \"Bob\", devuelve un saludo con el formato \"¡Hola Bob!\".",
    "examples": [
      "hola_nombre('Bob') → '¡Hola Bob!'",
      "hola_nombre('Alice') → '¡Hola Alice!'",
      "hola_nombre('X') → '¡Hola X!'"
    ],
    "code": "def hola_nombre(nombre):\n    return \"Hola \" + nombre + \"!\""
  },
  {
    "name": "distinguir_palabra",
    "lang": "python",
    "category": "Cadenas",
    "level": "Básico",
    "file": "cadena1.py",
    "statement": "Dada una cadena de salida de longitud 4, como \"<<>>\", y una palabra, devuelve una nueva cadena donde la palabra se encuentra en el medio de la cadena de salida, p. ej., \"<<palabra>>\".",
    "examples": [
      "distinguir_palabra('<<>>', 'Yay') → '<<Yay>>'",
      "distinguir_palabra('<<>>', 'WooHoo') → '<<WooHoo>>'",
      "distinguir_palabra('[[]]', 'palabra') → '[[palabra]]'"
    ],
    "code": "def distinguir_palabra(fuera, palabra):\n    return fuera[0:2] + palabra + fuera[2::]"
  },
  {
    "name": "primera_parte",
    "lang": "python",
    "category": "Cadenas",
    "level": "Básico",
    "file": "cadena1.py",
    "statement": "Dada una cadena de longitud par, devuelve la primera mitad. Por lo tanto, la cadena \"WooHoo\" devuelve \"Woo\".",
    "examples": [
      "primera_parte('WooHoo') → 'Woo'",
      "primera_parte('HelloThere') → 'Hello'",
      "primera_parte('abcdef') → 'abc'"
    ],
    "code": "def primera_parte(cadena):\n    return str[:len(cadena)/2]"
  },
  {
    "name": "no_comienza",
    "lang": "python",
    "category": "Cadenas",
    "level": "Básico",
    "file": "cadena1.py",
    "statement": "Dadas dos cadenas, devuelve su concatenación, pero omite el primer carácter de cada una. Las cadenas tendrán una longitud mínima de 1.",
    "examples": [
      "no_comienza('Hello', 'There') → 'ellohere'",
      "no_comienza('java', 'code') → 'avaode'",
      "no_comienza('shotl', 'java') → 'hotlava'"
    ],
    "code": "def no_comienza(a, b):\n    return a[1::] + b[1::]"
  },
  {
    "name": "hacer_abba",
    "lang": "python",
    "category": "Cadenas",
    "level": "Básico",
    "file": "cadena1.py",
    "statement": "Dadas dos cadenas, a y b, devuelve el resultado de ponerlas juntas en el orden abba, p. ej. \"Hola\" y \"Adiós\" devuelve \"HolaAdiósAdiósHola\".",
    "examples": [
      "hacer_abba('Hola', 'Adiós') → 'HolaAdiósAdiósHola'",
      "hacer_abba('Yo', 'Alice') → 'YoAliceAliceYo'",
      "hacer_abba('Qué', 'Arriba') → 'QuéArribaArribaQué'"
    ],
    "code": "def hacer_abba(a, b):\n    return a + b + b + a"
  },
  {
    "name": "extra_final",
    "lang": "python",
    "category": "Cadenas",
    "level": "Básico",
    "file": "cadena1.py",
    "statement": "Dada una cadena, devuelve una nueva cadena compuesta por 3 copias de los 2 últimos caracteres de la cadena original. La longitud de la cadena será de al menos 2 caracteres.",
    "examples": [
      "extra_final('Hello') → 'lololo'",
      "extra_final('ab') → 'ababab'",
      "extra_final('Hi') → 'HiHiHi'"
    ],
    "code": "def extra_final(str):\n    return str[-2:] * 3"
  },
  {
    "name": "sin_final",
    "lang": "python",
    "category": "Cadenas",
    "level": "Básico",
    "file": "cadena1.py",
    "statement": "Dada una cadena, devuelve una versión sin el primer ni el último carácter, por lo que \"Hola\" devuelve \"ell\". La longitud de la cadena será de al menos 2 caracteres.",
    "examples": [
      "sin_final('hello') → 'ell'",
      "sin_final('java') → 'av'",
      "sin_final('coding') → 'odin'"
    ],
    "code": "def sin_final(cadena):\n    return cadena[1:len(cadena)-1]"
  },
  {
    "name": "izquierda2",
    "lang": "python",
    "category": "Cadenas",
    "level": "Básico",
    "file": "cadena1.py",
    "statement": "Dada una cadena, devuelve una versión rotada 2 a la izquierda, donde los dos primeros caracteres se mueven al final. La longitud de la cadena será de al menos 2 caracteres.",
    "examples": [
      "izquierda2('Hello') → 'lloHe'",
      "izquierda2('java') → 'vaja'",
      "izquierda2('Hi') → 'Hi'"
    ],
    "code": "def izquierda2(cadena):\n    return cadena[2::] + cadena[0:2]"
  },
  {
    "name": "hacer_etiquetas",
    "lang": "python",
    "category": "Cadenas",
    "level": "Básico",
    "file": "cadena1.py",
    "statement": "La web se construye con cadenas HTML como \"<i>Yay</i>\", que se escribe \"Yay\" en cursiva. En este ejemplo, la etiqueta \"i\" crea <i> y </i> que rodean la palabra \"Yay\". Dadas las cadenas de etiqueta y palabra, crea la cadena HTML con etiquetas alrededor de la palabra, por ejemplo, \"<i>Yay</i>\".",
    "examples": [
      "hacer_etiquetas('i', 'Yay') → '<i>Yay</i>'",
      "hacer_etiquetas('i', 'Hello') → '<i>Hello</i>'",
      "hacer_etiquetas('cite', 'Yay') → '<cite>Yay</cite>'"
    ],
    "code": "def hacer_etiquetas(etiqueta, palabra):\n    return \"<\" + etiqueta + \">\" + palabra + \"</\" + etiqueta + \">\""
  },
  {
    "name": "primeros_dos",
    "lang": "python",
    "category": "Cadenas",
    "level": "Básico",
    "file": "cadena1.py",
    "statement": "Dada una cadena, devuelve la cadena formada por sus dos primeros caracteres, por lo que la cadena \"Hola\" da como resultado \"Él\". Si la cadena es menor que 2 caracteres, devuelve el valor que exista, por lo que \"X\" da como resultado \"X\", y la cadena vacía \"\" da como resultado la cadena vacía \"\".",
    "examples": [
      "primeros_dos('Hola') → 'Ho'",
      "primeros_dos('abcdefg') → 'ab'",
      "primeros_dos('ab') → 'ab'"
    ],
    "code": "def primeros_dos(cadena):\n    if len(cadena) > 1:\n        return cadena[0:2]\n    else:\n        return cadena"
  },
  {
    "name": "combo_cadena",
    "lang": "python",
    "category": "Cadenas",
    "level": "Básico",
    "file": "cadena1.py",
    "statement": "Dadas dos cadenas, a y b, se devuelve una cadena con la forma short+long+short, con la cadena más corta en el exterior y la más larga en el interior. Las cadenas no tendrán la misma longitud, pero pueden estar vacías (longitud 0).",
    "examples": [
      "combo_cadena('Hola', 'hi') → 'hiHolahi'",
      "combo_cadena('hi', 'Hola') → 'hiHolahi'",
      "combo_cadena('aaa', 'b') → 'baaab'"
    ],
    "code": "def combo_cadena(a, b):\n    if len(a) < len(b):\n        return a + b + a\n    else:\n        return b + a + b"
  },
  {
    "name": "doble_caracter",
    "lang": "python",
    "category": "Cadenas",
    "level": "Intermedio",
    "file": "cadena2.py",
    "statement": "Dada una cadena, devuelve una cadena donde por cada carácter del original hay dos caracteres.",
    "examples": [
      "doble_caracter('The') → 'TThhee'",
      "doble_caracter('AAbb') → 'AAAAbbbb'",
      "doble_caracter('Hi-There') → 'HHii--TThheerree'"
    ],
    "code": "def doble_caracter(cadena):\n    nueva_cadena = \"\"\n\n    for i in range(len(cadena)):\n        nueva_cadena += cadena[i]*2\n    return nueva_cadena"
  },
  {
    "name": "cuenta_codigo",
    "lang": "python",
    "category": "Cadenas",
    "level": "Intermedio",
    "file": "cadena2.py",
    "statement": "Devuelve el número de veces que la cadena \"código\" aparece en cualquier parte de la cadena dada, excepto que se aceptará cualquier letra para la 'd', por lo que \"cope\" y \"cooe\" cuentan.",
    "examples": [
      "cuenta_codigo('aaacodebbb') → 1",
      "cuenta_codigo('codexxcode') → 2",
      "cuenta_codigo('cozexxcope') → 2"
    ],
    "code": "def cuenta_codigo(cadena):\n    contador = 0\n\n    for i in range(len(cadena)):\n        if i < len(cadena)-3:\n            if cadena[i] == 'c' and cadena[i+1] == 'o' and cadena[i+3] == 'e':\n                contador+=1\n    return contador"
  },
  {
    "name": "contador_hi",
    "lang": "python",
    "category": "Cadenas",
    "level": "Intermedio",
    "file": "cadena2.py",
    "statement": "Devuelve el número de veces que la cadena \"hi\" aparece en cualquier parte de la cadena dada.",
    "examples": [
      "contador_hi('abc hi ho') → 1",
      "contador_hi('ABChi hi') → 2",
      "contador_hi('hihi') → 2"
    ],
    "code": "def contador_hi(cadena):\n    contador = 0\n\n    for i in range(len(cadena)):\n        if i < len(cadena)-1:\n            if cadena[i] == 'h' and cadena[i+1] == 'i':\n                contador+=1\n    return contador"
  },
  {
    "name": "end_other",
    "lang": "python",
    "category": "Cadenas",
    "level": "Intermedio",
    "file": "cadena2.py",
    "statement": "Dadas dos cadenas, devuelve Verdadero si alguna de ellas aparece al final de la otra, ignorando las diferencias entre mayúsculas y minúsculas (en otras palabras, el cálculo no debe distinguir entre mayúsculas y minúsculas). Nota: s.lower() devuelve la versión en minúsculas de una cadena.",
    "examples": [
      "termina_cadena('Hiabc', 'abc') → Verdadero",
      "termina_cadena('AbC', 'HiaBc') → Verdadero",
      "termina_cadena('abc', 'abXabc') → Verdadero"
    ],
    "code": "def end_other(a, b):\n    a = a.lower()\n    b = b.lower()\n    return a.endswith(b) or b.endswith(a)"
  },
  {
    "name": "gato_perro",
    "lang": "python",
    "category": "Cadenas",
    "level": "Intermedio",
    "file": "cadena2.py",
    "statement": "Return True if the string \"cat\" and \"dog\" appear the same number of times in the given string.",
    "examples": [
      "gato_perro('catdog') → True",
      "gato_perro('catcat') → False",
      "gato_perro('1cat1cadodog') → True"
    ],
    "code": "def gato_perro(cadena):\n    gato = False\n    perro = False\n    contadorGato = 0\n    contadorPerro = 0\n\n    for i in range(len(cadena)):\n        if i < len(cadena)-2:\n            if cadena[i] == 'c' and cadena[i+1] == 'a' and cadena[i+2] == 't':\n                gato = True\n                contadorGato += 1\n\n            if cadena[i] == 'd' and cadena[i+1] == 'o' and cadena[i+2] == 'g':\n                perro = True\n                contadorPerro += 1\n\n    if len(cadena) < 3 or (gato and perro) and (contadorGato == contadorPerro):\n        return True\n    else:\n        return False"
  },
  {
    "name": "xyz",
    "lang": "python",
    "category": "Cadenas",
    "level": "Intermedio",
    "file": "cadena2.py",
    "statement": "Devuelve Verdadero si la cadena dada contiene una aparición de \"xyz\" donde xyz no está precedido directamente por un punto (.). Por lo tanto, \"xxyz\" cuenta, pero \"x.xyz\" no.",
    "examples": [
      "xyz('abcxyz') → Verdadero",
      "xyz('abc.xyz') → Falso",
      "xyz('xyz.abc') → Verdadero"
    ],
    "code": "def xyz(cadena):\n    return 'xyz' in cadena.replace('.xyz', '')"
  },
  {
    "name": "durmiendo_en",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "calentamiento1.py",
    "statement": "El parámetro \"semana\" es verdadero si es un día laborable, y el parámetro \"vacation\" es verdadero si estamos de vacaciones. Dormimos hasta tarde si no es un día laborable o estamos de vacaciones. Devuelve verdadero si dormimos hasta tarde.",
    "examples": [
      "durmiendo_en(False, False) → True",
      "durmiendo_en(True, False) → False",
      "durmiendo_en(False, True) → True"
    ],
    "code": "def durmiendo_en(semana, vacaciones):\n    if semana and not vacaciones:\n        return False\n    else:\n        return True"
  },
  {
    "name": "diff21",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "calentamiento1.py",
    "statement": "Dado un int n, devuelve la diferencia absoluta entre n y 21, excepto que devuelve el doble de la diferencia absoluta si n es mayor que 21.",
    "examples": [
      "diff21(19) → 2",
      "diff21(10) → 11",
      "diff21(21) → 0"
    ],
    "code": "def diff21(n):\n    if n < 21:\n        return 21 - n\n    else:\n        return (n - 21) * 2"
  },
  {
    "name": "cerca_cien",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "calentamiento1.py",
    "statement": "Dado un entero n, devuelve Verdadero si está dentro de 10 de 100 o 200. Nota: abs(num) calcula el valor absoluto de un número.",
    "examples": [
      "cerca_cien(93) → Verdadero",
      "cerca_cien(90) → Verdadero",
      "cerca_cien(89) → Falso"
    ],
    "code": "def cerca_cien(n):\n    if abs(100 - n) <= 10 or abs(200 - n) <= 10:\n        return True\n    else:\n        return False"
  },
  {
    "name": "caracter_faltante",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "calentamiento1.py",
    "statement": "Dada una cadena no vacía y un entero n, devuelve una nueva cadena donde se ha eliminado el carácter en el índice n. El valor de n será un índice válido de un carácter en la cadena original (es decir, n estará en el rango 0...len(str)-1 inclusive).",
    "examples": [
      "caracter_faltante('kitten', 1) → 'ktten'",
      "caracter_faltante('kitten', 0) → 'itten'",
      "caracter_faltante('kitten', 4) → 'kittn'"
    ],
    "code": "def caracter_faltante(str, n):\n    return str[:n] + str[n+1:]"
  },
  {
    "name": "mono_problema",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "calentamiento1.py",
    "statement": "Tenemos dos monos, a y b, y los parámetros a_smile y b_smile indican si cada uno sonríe. Estamos en problemas si ambos sonríen o si ninguno lo está. Devuelve Verdadero si estamos en problemas.",
    "examples": [
      "mono_problema(True, True) → True",
      "mono_problema(False, False) → True",
      "mono_problema(True, False) → False"
    ],
    "code": "def mono_problema(a, b):\n    if a ^ b:\n        return False\n    else:\n        return True"
  },
  {
    "name": "loro_problema",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "calentamiento1.py",
    "statement": "Tenemos un loro que habla ruidosamente. El parámetro \"hora\" es la hora actual en el rango de 0 a 23. Estamos en problemas si el loro está hablando y la hora es antes de las 7 o después de las 20. Devuelve Verdadero si estamos en problemas.",
    "examples": [
      "loro_problema(True, 6) → Verdadero",
      "loro_problema(True, 7) → Falso",
      "loro_problema(False, 6) → Falso"
    ],
    "code": "def loro_problema(habla, hora):\n    if habla and hora < 7:\n        return True\n    elif habla and hora > 20:\n        return True\n    else:\n        return False"
  },
  {
    "name": "pos_neg",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "calentamiento1.py",
    "statement": "Dados dos valores enteros, devuelve Verdadero si uno es negativo y el otro positivo. Excepto si el parámetro \"negativo\" es Verdadero, en cuyo caso devuelve Verdadero solo si ambos son negativos.",
    "examples": [
      "pos_neg(1, -1, Falso) → Verdadero",
      "pos_neg(-1, 1, Falso) → Verdadero",
      "pos_neg(-4, -5, Verdadero) → Verdadero"
    ],
    "code": ""
  },
  {
    "name": "frente_atras",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "calentamiento1.py",
    "statement": "Dada una cadena, devuelve una nueva cadena donde se han intercambiado el primer y el último carácter.",
    "examples": [
      "frente_atras('code') → 'eodc'",
      "frente_atras('a') → 'a'",
      "frente_atras('ab') → 'ba'"
    ],
    "code": "def frente_atras(cadena):\n    if len(cadena) >= 2:\n        return cadena[-1] + cadena[1:-1] + cadena[0]\n    else:\n        return cadena"
  },
  {
    "name": "suma_double",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "calentamiento1.py",
    "statement": "Dados dos valores enteros, devuelve su suma. A menos que ambos valores sean iguales, devuelve el doble de su suma.",
    "examples": [
      "suma_doble(1, 2) → 3",
      "suma_doble(3, 2) → 5",
      "suma_doble(2, 2) → 8"
    ],
    "code": "def suma_double(a, b):\n    if a != b:\n        return a + b\n    elif a == b:\n        return (a + b) * 2"
  },
  {
    "name": "haces10",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "calentamiento1.py",
    "statement": "Dados dos enteros, a y b, devuelve Verdadero si uno de ellos es 10 o si su suma es 10.",
    "examples": [
      "haces10(9, 10) → Verdadero",
      "haces10(9, 9) → Falso",
      "haces10(1, 9) → Verdadero"
    ],
    "code": "def haces10(a, b):\n    if a == 10 or b == 10:\n        return True\n    elif a + b == 10:\n        return True\n    else:\n        return False"
  },
  {
    "name": "no_cadena",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "calentamiento1.py",
    "statement": "Dada una cadena, devuelve una nueva cadena donde se ha añadido \"no\" al principio. Sin embargo, si la cadena ya empieza con \"no\", devuelve la cadena sin cambios.",
    "examples": [
      "no_cadena('candy') → 'not candy'",
      "no_cadena('x') → 'not x'",
      "no_cadena('not bad') → 'not bad'"
    ],
    "code": "def no_cadena(cadena):\n    div = cadena.split(\" \")\n\n    if div[0] != \"not\":\n        return \"not \" + cadena\n    elif \"not\" not in cadena:\n        return \"not \" + cadena\n    else:\n        return cadena"
  },
  {
    "name": "frente3",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Básico",
    "file": "calentamiento1.py",
    "statement": "Dada una cadena, diremos que el frente son los 3 primeros caracteres de la cadena. Si la longitud de la cadena es menor que 3, el frente es lo que esté ahí. Devuelve una nueva cadena con 3 copias del frente.",
    "examples": [
      "frente3('Java') → 'JavJavJav'",
      "frente3('Chocolate') → 'ChoChoCho'",
      "frente3('abc') → 'abcabcabc'"
    ],
    "code": "def frente3(cadena):\n  return cadena[0:3] * 3"
  },
  {
    "name": "repetir_cadena",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "calentamiento2.py",
    "statement": "Dada una cadena y un entero no negativo n, devuelve una cadena más grande que contiene n copias de la cadena original.",
    "examples": [
      "repetir_cadena('Hi', 2) → 'HiHi'",
      "repetir_cadena('Hi', 3) → 'HiHiHi'",
      "repetir_cadena('Hi', 1) → 'Hi'"
    ],
    "code": "def repetir_cadena(str, n):\n    return str * n"
  },
  {
    "name": "string_splosion",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "calentamiento2.py",
    "statement": "Dada una cadena no vacía como \"Código\", se devuelve una cadena como \"CCoCodCode\".",
    "examples": [
      "cadena_explosion('Código') → 'CCoCodCode'",
      "cadena_explosion('abc') → 'aababc'",
      "cadena_explosion('ab') → 'aab'"
    ],
    "code": "def string_splosion(cadena):\n    nueva_cadena = \"\"\n\n    contador = 1\n    for i in range(len(cadena)):\n        for j in range(0, contador, 1):\n            nueva_cadena += cadena[j]\n        contador += 1\n    return nueva_cadena"
  },
  {
    "name": "matriz_frente_9",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "calentamiento2.py",
    "statement": "Dado un array de enteros, devuelve Verdadero si uno de los primeros 4 elementos del array es un 9. La longitud del array puede ser menor que 4.",
    "examples": [
      "matriz_frente_9([1, 2, 9, 3, 4]) → Verdadero",
      "matriz_frente_9([1, 2, 3, 4, 9]) → Falso",
      "matriz_frente_9([1, 2, 3, 4, 5]) → Falso"
    ],
    "code": "def matriz_frente_9(nums):\n    for i in range(len(nums)):\n        if i < 4:\n            if nums[i] == 9:\n                return True\n    return False"
  },
  {
    "name": "repetir_frente",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "calentamiento2.py",
    "statement": "Dada una cadena y un entero no negativo n, diremos que el inicio de la cadena son los 3 primeros caracteres, o el que esté presente si la cadena tiene una longitud menor a 3. Devuelve n copias del inicio;",
    "examples": [
      "repetir_frente('Chocolate', 2) → 'ChoCho'",
      "repetir_frente('Chocolate', 3) → 'ChoChoCho'",
      "repetir_frente('Abc', 3) → 'AbcAbcAbc'"
    ],
    "code": "def repetir_frente(str, n):\n    return str[0:3] * n"
  },
  {
    "name": "ultimos2",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "calentamiento2.py",
    "statement": "Dada una cadena, devuelve el número de veces que una subcadena de longitud 2 aparece en la cadena, y también como los dos últimos caracteres de la cadena; por lo tanto, \"hixxxhi\" da como resultado 1 (no se contará la subcadena final).",
    "examples": [
      "ultimos2('hixxhi') → 1",
      "ultimos2('xaxxaxaxx') → 1",
      "ultimos2('axxxaaxx') → 2"
    ],
    "code": "def ultimos2(cadena):\n    if len(cadena) < 2:\n        return 0\n\n    i = 0\n    contador = 0\n\n    while (i < len(cadena)-2):\n        if cadena[i:i+2] == cadena[len(cadena)-2:]:\n            contador += 1\n        i += 1\n\n    return contador"
  },
  {
    "name": "matriz123",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "calentamiento2.py",
    "statement": "Dado un array de enteros, devuelve Verdadero si la secuencia de números 1, 2, 3 aparece en algún lugar del array.",
    "examples": [
      "matriz123([1, 1, 2, 3, 1]) → Verdadero",
      "matriz123([1, 1, 2, 4, 1]) → Falso",
      "matriz123([1, 1, 2, 1, 2, 3]) → Verdadero"
    ],
    "code": "def matriz123(nums):\n    secuencia = False\n\n    for i in range(len(nums)):\n        if i < len(nums)-2:\n            if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:\n                secuencia = True\n    if secuencia:\n        return True\n    return False"
  },
  {
    "name": "pedazo_cadena",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "calentamiento2.py",
    "statement": "Dada una cadena, devuelve una nueva cadena compuesta por todos los demás caracteres, comenzando por el primero. Por lo tanto, \"Hola\" da como resultado \"Hlo\".",
    "examples": [
      "pedazo_cadena('Hola') → 'Hlo'",
      "pedazo_cadena('Hi') → 'H'",
      "pedazo_cadena('Heeololeo') → 'Hello'"
    ],
    "code": "def pedazo_cadena(cadena):\n    nueva_cadena = \"\"\n    i = 0\n\n    while (i < len(cadena)):\n        nueva_cadena += str[i]\n        i += 2\n    return nueva_cadena"
  },
  {
    "name": "matriz_cuenta9",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "calentamiento2.py",
    "statement": "Dado un array de enteros, devuelve el número de 9 en el array.",
    "examples": [
      "matriz_cuenta9([1, 2, 9]) → 1",
      "matriz_cuenta9([1, 9, 9]) → 2",
      "matriz_cuenta9([1, 9, 9, 3, 9]) → 3"
    ],
    "code": "def matriz_cuenta9(nums):\n    count = 0\n\n    for i in range(len(nums)):\n        if nums[i] == 9:\n            count += 1\n    return count"
  },
  {
    "name": "cadena_fosforo",
    "lang": "python",
    "category": "Calentamiento",
    "level": "Intermedio",
    "file": "calentamiento2.py",
    "statement": "Dadas dos cadenas, a y b, devuelve el número de posiciones donde contienen la misma subcadena de longitud 2. Por lo tanto, \"xxcaazz\" y \"xxbaaz\" dan como resultado 3, ya que las subcadenas \"xx\", \"aa\" y \"az\" aparecen en el mismo lugar en ambas cadenas.",
    "examples": [
      "cadena_fosforo('xxcaazz', 'xxbaaz') → 3",
      "cadena_fosforo('abc', 'abc') → 2",
      "cadena_fosforo('abc', 'axc') → 0"
    ],
    "code": "def cadena_fosforo(a, b):\n    contador = 0;\n    longitud = min(len(a), len(b))\n\n    for i in range(longitud):\n        if i < longitud-1:\n            sub = a[i:i+2]\n            if (sub == b[i:i+2]):\n                contador += 1\n    return contador"
  },
  {
    "name": "primero_ultimo6",
    "lang": "python",
    "category": "Listas",
    "level": "Básico",
    "file": "lista1.py",
    "statement": "Dado un array de enteros, devuelve Verdadero si 6 aparece como el primer o el último elemento del array. El array tendrá una longitud de 1 o más.",
    "examples": [
      "primero_ultimo6([1, 2, 6]) → Verdadero",
      "primero_ultimo6([6, 1, 2, 3]) → Verdadero",
      "primero_ultimo6([13, 6, 1, 2, 3]) → Falso"
    ],
    "code": "def primero_ultimo6(nums):\n    if len(nums) > 0:\n        if nums[0] == 6 or nums[len(nums)-1] == 6:\n            return True\n        else:\n            return False\n    else:\n        return False"
  },
  {
    "name": "final_comun",
    "lang": "python",
    "category": "Listas",
    "level": "Básico",
    "file": "lista1.py",
    "statement": "Dados dos arrays de enteros, a y b, devuelve Verdadero si tienen el mismo primer o último elemento. Ambos arrays tendrán una longitud de 1 o más.",
    "examples": [
      "final_comun([1, 2, 3], [7, 3]) → Verdadero",
      "final_comun([1, 2, 3], [7, 3, 2]) → Falso",
      "final_comun([1, 2, 3], [1, 3]) → Verdadero"
    ],
    "code": "def final_comun(a, b):\n    if a[0] == b[0] or a[len(a)-1] == b[len(b)-1]:\n        return True\n    else:\n        return False"
  },
  {
    "name": "alreves3",
    "lang": "python",
    "category": "Listas",
    "level": "Básico",
    "file": "lista1.py",
    "statement": "Dado un array de enteros de longitud 3, devuelve un nuevo array con los elementos en orden inverso, de modo que {1, 2, 3} se convierte en {3, 2, 1}.",
    "examples": [
      "alreves3([1, 2, 3]) → [3, 2, 1]",
      "alreves3([5, 11, 9]) → [9, 11, 5]",
      "alreves3([7, 0, 0]) → [0, 0, 7]"
    ],
    "code": "def alreves3(nums):\n    nuevos_numeros = [0] * len(nums)\n\n    nuevos_numeros[0] = nums[2]\n    nuevos_numeros[1] = nums[1]\n    nuevos_numeros[2] = nums[0]\n\n    return nuevos_numeros"
  },
  {
    "name": "camino_medio",
    "lang": "python",
    "category": "Listas",
    "level": "Básico",
    "file": "lista1.py",
    "statement": "Dados dos arrays de enteros, a y b, cada uno de longitud 3, se devuelve un nuevo array de longitud 2 que contiene sus elementos centrales.",
    "examples": [
      "camino_medio([1, 2, 3], [4, 5, 6]) → [2, 5]",
      "camino_medio([7, 7, 7], [3, 8, 0]) → [7, 8]",
      "camino_medio([5, 2, 9], [1, 4, 5]) → [2, 4]"
    ],
    "code": "def camino_medio(a, b):\n    medio = []\n\n    medio.append(a[1])\n    medio.append(b[1])\n    return medio"
  },
  {
    "name": "mismo_primer_ultimo",
    "lang": "python",
    "category": "Listas",
    "level": "Básico",
    "file": "lista1.py",
    "statement": "Dado un array de enteros, devuelve Verdadero si el array tiene una longitud de 1 o más, y el primer y el último elemento son iguales.",
    "examples": [
      "mismo_primer_ultimo([1, 2, 3]) → Falso",
      "mismo_primer_ultimo([1, 2, 3, 1]) → Verdadero",
      "mismo_primer_ultimo([1, 2, 1]) → Verdadero"
    ],
    "code": "def mismo_primer_ultimo(nums):\n    if len(nums) > 0:\n        if nums[0] == nums[len(nums)-1]:\n            return True\n        else:\n            return False\n    else:\n        return False"
  },
  {
    "name": "suma3",
    "lang": "python",
    "category": "Listas",
    "level": "Básico",
    "file": "lista1.py",
    "statement": "Dado un array de enteros de longitud 3, devuelve la suma de todos los elementos.",
    "examples": [
      "suma3([1, 2, 3]) → 6",
      "suma3([5, 11, 2]) → 18",
      "suma3([7, 0, 0]) → 7"
    ],
    "code": "def suma3(nums):\n    return nums[0] + nums[1] + nums[2]"
  },
  {
    "name": "maximo_final3",
    "lang": "python",
    "category": "Listas",
    "level": "Básico",
    "file": "lista1.py",
    "statement": "Dado un array de enteros de longitud 3, determine cuál es mayor, el primero o el último elemento del array, y establezca todos los demás elementos con ese valor. Devuelva el array modificado.",
    "examples": [
      "maximo_final3([1, 2, 3]) → [3, 3, 3]",
      "maximo_final3([11, 5, 9]) → [11, 11, 11]",
      "maximo_final3([2, 11, 3]) → [3, 3, 3]"
    ],
    "code": "def maximo_final3(nums):\n    nuevos_numeros = []\n    tmp = 0\n\n    if nums[0] < nums[2]:\n        tmp = nums[2]\n    else:\n        tmp = nums[0]\n\n    nuevos_numeros.append(tmp)\n    nuevos_numeros.append(tmp)\n    nuevos_numeros.append(tmp)\n    return nuevos_numeros"
  },
  {
    "name": "hacer_final",
    "lang": "python",
    "category": "Listas",
    "level": "Básico",
    "file": "lista1.py",
    "statement": "Dado un array de enteros, devuelve un nuevo array de longitud 2 que contiene el primer y el último elemento del array original. El array original tendrá una longitud de 1 o más.",
    "examples": [
      "hacer_final([1, 2, 3]) → [1, 3]",
      "hacer_final([1, 2, 3, 4]) → [1, 4]",
      "hacer_final([7, 4, 6, 2]) → [7, 2]"
    ],
    "code": "def hacer_final(nums):\n    nuevos_numeros = []\n\n    nuevos_numeros.append(nums[0])\n    nuevos_numeros.append(nums[len(nums)-1])\n    return nuevos_numeros"
  },
  {
    "name": "hacer_pi",
    "lang": "python",
    "category": "Listas",
    "level": "Básico",
    "file": "lista1.py",
    "statement": "Devuelve una matriz de enteros de longitud 3 que contiene los primeros 3 dígitos de pi: {3, 1, 4}.",
    "examples": [
      "hacer_pi() → [3, 1, 4]"
    ],
    "code": "def hacer_pi():\n    pi = []\n\n    pi.append(3)\n    pi.append(1)\n    pi.append(4)\n    return pi"
  },
  {
    "name": "rotar_izquierda3",
    "lang": "python",
    "category": "Listas",
    "level": "Básico",
    "file": "lista1.py",
    "statement": "Given an array of ints length 3, return an array with the elements \"rotated left\" so {1, 2, 3} yields {2, 3, 1}.",
    "examples": [
      "rotar_izquierda3([1, 2, 3]) → [2, 3, 1]",
      "rotar_izquierda3([5, 11, 9]) → [11, 9, 5]",
      "rotar_izquierda3([7, 0, 0]) → [0, 0, 7]"
    ],
    "code": "def rotar_izquierda3(nums):\n    nuevos_numeros = []\n\n    nuevos_numeros.append(nums[1])\n    nuevos_numeros.append(nums[2])\n    nuevos_numeros.append(nums[0])\n    return nuevos_numeros"
  },
  {
    "name": "suma2",
    "lang": "python",
    "category": "Listas",
    "level": "Básico",
    "file": "lista1.py",
    "statement": "Dado un array de enteros, devuelve la suma de los dos primeros elementos del array. Si la longitud del array es menor que 2, simplemente suma los elementos existentes, devolviendo 0 si la longitud del array es 0.",
    "examples": [
      "suma2([1, 2, 3]) → 3",
      "suma2([1, 1]) → 2",
      "suma2([1, 1, 1, 1]) → 2"
    ],
    "code": "def suma2(nums):\n    if len(nums) > 1:\n        return nums[0] + nums[1]\n    elif len(nums) == 1:\n        return nums[0]\n    else:\n        return 0"
  },
  {
    "name": "tiene23",
    "lang": "python",
    "category": "Listas",
    "level": "Básico",
    "file": "lista1.py",
    "statement": "Dado un array int de longitud 2, devuelve Verdadero si contiene un 2 o un 3.",
    "examples": [
      "tiene23([2, 5]) → Verdadero",
      "tiene23([4, 3]) → Verdadero",
      "tiene23([4, 5]) → Falso"
    ],
    "code": "def tiene23(nums):\n    if nums[0] == 2 or nums[0] == 3:\n        return True\n    elif nums[1] == 2 or nums[1] == 3:\n        return True\n    else:\n        return False"
  },
  {
    "name": "contar_pares",
    "lang": "python",
    "category": "Listas",
    "level": "Intermedio",
    "file": "lista2.py",
    "statement": "Devuelve el número de enteros pares en el array dado. Nota: el operador % \"mod\" calcula el resto; por ejemplo, 5 % 2 es 1.",
    "examples": [
      "contar_pares([2, 1, 2, 3, 4]) → 3",
      "contar_pares([2, 2, 0]) → 3",
      "contar_pares([1, 3, 5]) → 0"
    ],
    "code": "def contar_pares(nums):\n    contador = 0\n\n    for i in range(len(nums)):\n        if nums[i] % 2 == 0:\n            contador += 1\n    return contador"
  },
  {
    "name": "sum13",
    "lang": "python",
    "category": "Listas",
    "level": "Intermedio",
    "file": "lista2.py",
    "statement": "Devuelve la suma de los números del array, devolviendo 0 si el array está vacío. Excepto que el número 13 trae muy mala suerte, por lo que no cuenta, y los números inmediatamente posteriores tampoco.",
    "examples": [
      "suma13([1, 2, 2, 1]) → 6",
      "suma13([1, 1]) → 2",
      "suma13([1, 2, 2, 1, 13]) → 6"
    ],
    "code": "def sum13(nums):\n    suma = 0\n\n    for i in range(len(nums)):\n        if i > 0 and nums[i-1] == 13:\n            continue\n\n        if nums[i] != 13:\n            suma += nums[i]\n    return suma"
  },
  {
    "name": "grande_diff",
    "lang": "python",
    "category": "Listas",
    "level": "Intermedio",
    "file": "lista2.py",
    "statement": "Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. Note: the built-in min(v1, v2) and max(v1, v2) functions return the smaller or larger of two values.",
    "examples": [
      "grande_diff([10, 3, 5, 6]) → 7",
      "grande_diff([7, 2, 10, 9]) → 8",
      "grande_diff([2, 10, 7, 2]) → 8"
    ],
    "code": "def grande_diff(nums):\n    return max(nums) - min(nums)"
  },
  {
    "name": "suma67",
    "lang": "python",
    "category": "Listas",
    "level": "Intermedio",
    "file": "lista2.py",
    "statement": "Devuelve la suma de los números del array, pero ignora las secciones de números que empiezan con 6 y se extienden hasta el siguiente 7 (cada 6 irá seguido de al menos un 7). Devuelve 0 si no hay números.",
    "examples": [
      "suma67([1, 2, 2]) → 5",
      "suma67([1, 2, 2, 6, 99, 99, 7]) → 5",
      "suma67([1, 1, 6, 7, 2]) → 4"
    ],
    "code": "def suma67(nums):\n    total = 0\n    tmp = False\n\n    for num in nums:\n        if num == 6:\n            tmp = True\n        elif tmp:\n            if num == 7:\n                tmp = False\n        else:\n            total += num\n    return total"
  },
  {
    "name": "promedio_centrado",
    "lang": "python",
    "category": "Listas",
    "level": "Intermedio",
    "file": "lista2.py",
    "statement": "Devuelve el promedio \"centrado\" de un array de enteros, que llamaremos la media de los valores, pero ignorando los valores mayor y menor del array. Si hay varias copias del valor menor, se ignora solo una, y lo mismo ocurre con el valor mayor. Se utiliza la división de enteros para obtener el promedio final. Se puede asumir que el array tiene una longitud de 3 o más.",
    "examples": [
      "promedio_centrado([1, 2, 3, 4, 100]) → 3",
      "promedio_centrado([1, 1, 5, 5, 10, 8, 7]) → 5",
      "promedio_centrado([-10, -4, -2, -4, -2, 0]) → -3"
    ],
    "code": "def promedio_centrado(nums):\n    nums_ordenados = sorted(nums)\n    nums_invertidos = nums_ordenados[1:-1]\n    return sum(nums_invertidos) // len(nums_invertidos)"
  },
  {
    "name": "tiene22",
    "lang": "python",
    "category": "Listas",
    "level": "Intermedio",
    "file": "lista2.py",
    "statement": "Dado un array de enteros, devuelve Verdadero si el array contiene un 2 junto a otro 2 en algún punto.",
    "examples": [
      "tiene22([1, 2, 2]) → Verdadero",
      "tiene22([1, 2, 1, 2]) → Falso",
      "tiene22([2, 1, 2]) → Falso"
    ],
    "code": "def tiene22(nums):\n    for i in range(len(nums)):\n        if i < len(nums)-1:\n            if nums[i] == 2 and nums[i+1] == 2:\n                return True\n    return False"
  },
  {
    "name": "fiesta_cigarros",
    "lang": "python",
    "category": "Lógica",
    "level": "Básico",
    "file": "logico1.py",
    "statement": "Cuando las ardillas se reúnen para una fiesta, les gusta fumar puros. Una fiesta de ardillas es exitosa cuando el número de puros está entre 40 y 60, ambos inclusive. A menos que sea fin de semana, en cuyo caso no hay límite superior para el número de puros. Devuelve Verdadero si la fiesta con los valores dados es exitosa, o Falso en caso contrario.",
    "examples": [
      "fiesta_cigarros(30, Falso) → Falso",
      "fiesta_cigarros(50, Falso) → Verdadero",
      "fiesta_cigarros(70, Verdadero) → Verdadero"
    ],
    "code": "def fiesta_cigarros(cigarros, fin_semana):\n    if fin_semana:\n        if cigarros >= 40:\n            return True\n        return False\n    else:\n        if cigarros >= 40 and cigarros <= 60:\n            return True\n        return False"
  },
  {
    "name": "atrapado_acelerando",
    "lang": "python",
    "category": "Lógica",
    "level": "Básico",
    "file": "logico1.py",
    "statement": "Conduces un poco rápido y un policía te detiene. Escribe el código para calcular el resultado, codificado como un valor entero: 0 = sin multa, 1 = multa pequeña, 2 = multa grande. Si la velocidad es de 60 o menos, el resultado es 0. Si la velocidad está entre 61 y 80 inclusive, el resultado es 1. Si la velocidad es de 81 o más, el resultado es 2. A menos que sea tu cumpleaños; ese día, tu velocidad puede ser 5 veces mayor en todos los casos.",
    "examples": [
      "atrapado_acelerando(60, False) → 0",
      "atrapado_acelerando(65, False) → 1",
      "atrapado_acelerando(65, True) → 0"
    ],
    "code": "def atrapado_acelerando(rapido, cumpleanos):\n    if not cumpleanos:\n        if rapido <= 60:\n            return 0\n        elif rapido >= 61 and rapido <= 80:\n            return 1\n        elif rapido >= 81:\n            return 2\n    else:\n        if rapido <= 65:\n            return 0\n        elif rapido >= 66 and rapido <= 85:\n            return 1\n        elif rapido >= 86:\n            return 2\n        return 0"
  },
  {
    "name": "amor6",
    "lang": "python",
    "category": "Lógica",
    "level": "Básico",
    "file": "logico1.py",
    "statement": "El número 6 es un número verdaderamente grande. Dados dos valores enteros, a y b, devuelve Verdadero si alguno de ellos es 6, o si su suma o diferencia es 6. Nota: La función abs(num) calcula el valor absoluto de un número.",
    "examples": [
      "amor6(6, 4) → Verdadero",
      "amor6(4, 5) → Falso",
      "amor6(1, 5) → Verdadero"
    ],
    "code": "def amor6(a, b):\n    if a == 6 or b == 6:\n        return True\n\n    if a + b == 6:\n        return True\n\n    if abs(a - b) == 6:\n        return True\n\n    return False"
  },
  {
    "name": "cita_moda",
    "lang": "python",
    "category": "Lógica",
    "level": "Básico",
    "file": "logico1.py",
    "statement": "Tú y tu cita intentan conseguir una mesa en un restaurante. El parámetro \"tú\" representa el estilo de vuestra ropa, en el rango de 0 a 10, y \"cita\" representa el estilo de la ropa de vuestra cita. El resultado de obtener la mesa se codifica como un valor entero con 0=no, 1=quizás, 2=sí. Si alguno de los dos tiene un estilo muy elegante, con un valor de 8 o más, el resultado es 2 (sí). Con la excepción de que si alguno de los dos tiene un estilo de 2 o menos, el resultado es 0 (no). De lo contrario, el resultado es 1 (quizás).",
    "examples": [
      "cita_moda(5, 10) → 2",
      "cita_moda(5, 2) → 0",
      "cita_moda(5, 5) → 1"
    ],
    "code": "def cita_moda(tu, cita):\n    if tu >= 8 and cita > 2:\n        return 2\n    elif tu > 2 and cita >= 8:\n        return 2\n    elif tu <= 2 or cita <= 2:\n        return 0\n    else:\n        return 1"
  },
  {
    "name": "sorta_suma",
    "lang": "python",
    "category": "Lógica",
    "level": "Básico",
    "file": "logico1.py",
    "statement": "Dados dos enteros, a y b, se devuelve su suma. Sin embargo, las sumas en el rango de 10 a 19 inclusive están prohibidas, por lo que en ese caso se devuelve simplemente 20.",
    "examples": [
      "sorta_suma(3, 4) → 7",
      "sorta_suma(9, 4) → 20",
      "sorta_suma(10, 11) → 21"
    ],
    "code": "def sorta_suma(a, b):\n    if a + b >= 10 and a + b <= 19:\n        return 20;\n    elif a + b > 19:\n        return a + b\n    else:\n        return a + b"
  },
  {
    "name": "en1a10",
    "lang": "python",
    "category": "Lógica",
    "level": "Básico",
    "file": "logico1.py",
    "statement": "Dado un número n, devuelve Verdadero si n está en el rango de 1 a 10, ambos inclusive. A menos que outside_mode sea Verdadero, en cuyo caso devuelve Verdadero si el número es menor o igual a 1, o mayor o igual a 10.",
    "examples": [
      "en1a10(5, Falso) → Verdadero",
      "en1a10(11, Falso) → Falso",
      "en1a10(11, Verdadero) → Verdadero"
    ],
    "code": "def en1a10(num, modo_afuera):\n    if not modo_afuera and num >= 1 and num <= 10:\n        return True\n    elif modo_afuera and (num <= 1 or num >= 10):\n        return True\n    else:\n        return False"
  },
  {
    "name": "juego_ardilla",
    "lang": "python",
    "category": "Lógica",
    "level": "Básico",
    "file": "logico1.py",
    "statement": "Las ardillas de Palo Alto pasan la mayor parte del día jugando. En particular, juegan si la temperatura está entre 60 y 90 grados (ambos inclusive). A menos que sea verano, el límite superior es 100 en lugar de 90. Dado un entero `temperatura` y un booleano `is_summer`, devuelve `True` si las ardillas juegan y `False` en caso contrario.",
    "examples": [
      "juego_ardilla(70, False) → True",
      "juego_ardilla(95, False) → False",
      "juego_ardilla(95, True) → True"
    ],
    "code": "def juego_ardilla(temperatura, es_verano):\n    if es_verano and temperatura >= 60 and temperatura <= 100:\n        return True\n\n    if not es_verano and temperatura >= 60 and temperatura <= 90:\n        return True\n    else:\n        return False"
  },
  {
    "name": "despertador",
    "lang": "python",
    "category": "Lógica",
    "level": "Básico",
    "file": "logico1.py",
    "statement": "Dado un día de la semana codificado como 0=Dom, 1=Lun, 2=Mar, ...6=Sáb, y un booleano que indica si estamos de vacaciones, devuelve una cadena con el formato \"7:00\" que indica cuándo debe sonar el despertador. Entre semana, la alarma debe sonar a las 7:00 y los fines de semana a las 10:00. A menos que estemos de vacaciones, en cuyo caso entre semana debe sonar a las 10:00 y los fines de semana debe estar desactivada.",
    "examples": [
      "despertador(1, False) → '7:00'",
      "despertador(5, False) → '7:00'",
      "despertador(0, False) → '10:00'"
    ],
    "code": "def despertador(dia, vacaciones):\n    if not vacaciones:\n        if dia >= 1 and dia <= 5:\n            return \"7:00\"\n        else:\n            return \"10:00\"\n    else:\n        if dia >= 1 and dia <= 5:\n            return \"10:00\"\n        else:\n            return \"off\""
  },
  {
    "name": "cerca_diez",
    "lang": "python",
    "category": "Lógica",
    "level": "Básico",
    "file": "logico1.py",
    "statement": "Dado un número no negativo \"num\", devuelve Verdadero si num está dentro de 2 de un múltiplo de 10. Nota: (a % b) es el residuo de dividir a entre b, por lo que (7 % 5) es 2. Véase también: Introducción a la Modulación",
    "examples": [
      "cerca_diez(12) → Verdadero",
      "cerca_diez(17) → Falso",
      "cerca_diez(19) → Verdadero"
    ],
    "code": "def cerca_diez(num):\n    if num % 10 == 0:\n        return True\n\n    if num % 10 == 1:\n        return True\n\n    if num % 10 == 2:\n        return True\n\n    if num % 10 == 8:\n        return True\n\n\n    if num % 10 == 9:\n        return True\n    else:\n        return False"
  },
  {
    "name": "hacer_ladrillos",
    "lang": "python",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "logico2.py",
    "statement": "Queremos crear una fila de ladrillos con una longitud de 1/2 pulgadas. Tenemos varios ladrillos pequeños (de 2,5 cm cada uno) y grandes (de 12,7 cm cada uno). Devuelve \"True\" si es posible crear la fila eligiendo entre los ladrillos dados. Esto es un poco más difícil de lo que parece y se puede hacer sin bucles. Véase también: Introducción a MakeBricks",
    "examples": [
      "hacer_ladrillos(3, 1, 8) → True",
      "hacer_ladrillos(3, 1, 9) → False",
      "hacer_ladrillos(3, 2, 10) → True"
    ],
    "code": "def hacer_ladrillos(pequeno, grande, meta):\n    if ((pequeno + grande * 5) < meta) or (meta % 5 > pequeno):\n        return False\n    else:\n        return True"
  },
  {
    "name": "no_suma_diez",
    "lang": "python",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "logico2.py",
    "statement": "Dados 3 valores enteros, a b c, se devuelve su suma. Sin embargo, si alguno de los valores es un número adolescente (en el rango de 13 a 19 inclusive), ese valor cuenta como 0, excepto 15 y 16, que no cuentan como un número adolescente. Escriba un ayudante independiente \"def fix_teen(n):\" que tome un valor entero y lo devuelva fijo para la regla de los números adolescentes. De esta manera, se evita repetir el código de los números adolescentes tres veces (es decir, \"descomposición\"). Defina el ayudante a continuación y con el mismo nivel de sangría que la función principal no_teen_sum().",
    "examples": [
      "no_suma_diez(1, 2, 3) → 6",
      "no_suma_diez(2, 13, 1) → 3",
      "no_suma_diez(2, 1, 14) → 3"
    ],
    "code": "def no_suma_diez(a, b, c):\n    if a == 13 or a == 14 or a > 16 and a <= 19:\n        a = 0\n    if b == 13 or b == 14 or b > 16 and b <= 19:\n        b = 0\n    if c == 13 or c == 14 or c > 16 and c <= 19:\n        c = 0\n    return a + b + c"
  },
  {
    "name": "hacer_chocolate",
    "lang": "python",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "logico2.py",
    "statement": "Queremos crear un paquete con la cantidad objetivo de kilos de chocolate. Tenemos barras pequeñas (de 1 kilo cada una) y barras grandes (de 5 kilos cada una). Devuelve el número de barras pequeñas a usar, asumiendo que siempre usamos las barras grandes antes que las pequeñas. Devuelve -1 si no se puede.",
    "examples": [
      "hacer_chocolate(4, 1, 9) → 4",
      "hacer_chocolate(4, 1, 10) → -1",
      "hacer_chocolate(4, 1, 7) → 2"
    ],
    "code": "def hacer_chocolate(pequeno, grande, meta):\n    barras_grandes = 0\n    if grande < meta / 5:\n        barras_grandes = grande\n    else:\n        barras_grandes = meta/5\n        resto = meta - (barras_grandes * 5)\n    if resto <= pequeno:\n        return resto\n    return -1"
  },
  {
    "name": "suma_solitaria",
    "lang": "python",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "logico2.py",
    "statement": "Dados 3 valores enteros, a, b, c, se devuelve su suma. Sin embargo, si uno de los valores es igual a otro, no se contabiliza para la suma.",
    "examples": [
      "suma_solitaria(1, 2, 3) → 6",
      "suma_solitaria(3, 2, 3) → 2",
      "suma_solitaria(3, 3, 3) → 0"
    ],
    "code": "def suma_solitaria(a, b, c):\n    if a == b and b == c:\n        return 0\n    elif a == b:\n        return c\n    elif b == c:\n        return a\n    elif a == c:\n        return b\n    else:\n        return a + b + c"
  },
  {
    "name": "suma_redonda",
    "lang": "python",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "logico2.py",
    "statement": "Para este problema, redondearemos un valor entero al siguiente múltiplo de 10 si su dígito más a la derecha es 5 o mayor; por lo tanto, 15 se redondea a 20. Alternativamente, se redondea a la baja al múltiplo anterior de 10 si su dígito más a la derecha es menor que 5; por lo tanto, 12 se redondea a la baja hasta 10. Dados 3 enteros, a b c, devuelve la suma de sus valores redondeados. Para evitar la repetición de código, escriba un ayudante independiente \"def round10(num):\" y llámelo 3 veces. Escriba el ayudante completamente debajo y con la misma sangría que round_sum().",
    "examples": [
      "suma_redonda(16, 17, 18) → 60",
      "suma_redonda(12, 13, 14) → 30",
      "suma_redonda(6, 4, 4) → 10"
    ],
    "code": "def suma_redonda(a, b, c):\n    a_rond = rond10(a)\n    b_rond = rond10(b)\n    c_rond = rond10(c)\n\n    return a_rond + b_rond + c_rond;"
  },
  {
    "name": "rond10",
    "lang": "python",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "logico2.py",
    "statement": "",
    "examples": [],
    "code": ""
  },
  {
    "name": "suma_afortunada",
    "lang": "python",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "logico2.py",
    "statement": "Dados 3 valores enteros, a b c, se devuelve su suma. Sin embargo, si uno de los valores es 13, no se contabiliza para la suma, y ​​los valores a su derecha tampoco. Por ejemplo, si b es 13, ni b ni c cuentan.",
    "examples": [
      "suma_afortunada(1, 2, 3) → 6",
      "suma_afortunada(1, 2, 13) → 3",
      "suma_afortunada(1, 13, 3) → 1"
    ],
    "code": "def suma_afortunada(a, b, c):\n    suma = a + b + c\n    if a == 13:\n        return 0\n    elif b == 13:\n        return a\n    elif c == 13:\n        return a + b\n    else:\n        return suma"
  },
  {
    "name": "cerca_lejos",
    "lang": "python",
    "category": "Lógica",
    "level": "Intermedio",
    "file": "logico2.py",
    "statement": "Dados tres enteros, a b c, devuelve Verdadero si uno de b o c es \"cercano\" (difieren de a como máximo en 1), mientras que el otro es \"lejano\", difiriendo de los otros dos valores en 2 o más. Nota: abs(num) calcula el valor absoluto de un número.",
    "examples": [
      "cerca_lejos(1, 2, 10) → Verdadero",
      "cerca_lejos(1, 2, 3) → Falso",
      "cerca_lejos(4, 1, 3) → Verdadero"
    ],
    "code": "def cerca_lejos(a, b, c):\n    if abs(a - b) <= 1:\n        if abs(a - c) >= 2 and abs(b - c) >= 2:\n            return True\n\n    if abs(a - c) <= 1:\n        if abs(a - b) >= 2 and abs(b - c) >= 2:\n            return True\n    return False"
  }
];
