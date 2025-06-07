# Práctica de Evaluación Continua UF1844

Cada ejercicio cuenta un 50% de la nota de la práctica de evaluación continua.
Para ejecutar cada programa:

`node ejercicio1.js`

En cada ejercicio hay un comentario con el valor esperado que debe devolver cada función. Ejemplo:

`nicknameGenerator("Robert") //=> "Rob"`

Significa que si invocamos la función _nicknameGenerator_ con el valor _Robert_, espero que la función me devuelva el string "Rob".

¡Ánimo! Cada línea de código que escribas te acerca más a dominar la programación. 💪
¡Muchísima suerte! 🚀✨

## Ejercicio 1: Nick Name Generator


Escribe una función, nicknameGenerator, que reciba un string nombre como argumento y devuelva las primeras 3 o 4 letras como un apodo.

- Si la 3ª letra es una consonante, devuelve las primeras 3 letras.

```
nicknameGenerator("Robert") //=> "Rob"
nicknameGenerator("Kimberly") //=> "Kim"
nicknameGenerator("Samantha") //=> "Sam"
```

- Si la 3ª letra es una vocal, devuelve las primeras 4 letras.

```
nicknameGenerator("Jeannie") //=> "Jean"
nicknameGenerator("Douglas") //=> "Doug"
nicknameGenerator("Gregory") //=> "Greg"
```

- Si el string tiene menos de 4 caracteres, devuelve "Error: Name too short".

Notas:

- Las vocales son "aeiou", por lo tanto, la letra "y" no se considera vocal.

- La entrada siempre será un string.

- La entrada siempre tendrá la primera letra en mayúscula y el resto en minúsculas (ej. Sam).

## Criterios evaluación Ejercicio 1

- El código no contiene errores de ejecución - 1 punto
- Por cada llamada a la función que devuelva lo que se espera - 1 punto
- Puntuación máxima: 13 puntos

## Ejercicio 2: Uso de bucles

Supón que estás recolectando monedas en un juego de plataformas. Escribe una función que reciba un array con elementos que pueden ser "moneda" o cualquier otra cosa, y que cuente cuántas monedas hay.

`countCoins(["coin", "rock", "COIN", "fire"]) // 2`

Ten cuidado porque las _monedas_ pueden estar en minúsculas o mayúsculas.

## Criterios evaluación Ejercicio 2

- El código no contiene errores de ejecución - 1 punto
- Por cada llamada a la función que devuelva lo que se espera - 1 punto
- Puntuación máxima: 9 puntos


