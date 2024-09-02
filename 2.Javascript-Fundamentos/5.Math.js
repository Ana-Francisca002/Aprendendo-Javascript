const raio = 6
const area = Math.PI * Math.pow(raio, 2)

console.log(area)
console.log(typeof Math)

/*
O objeto `Math` em JavaScript é um objeto global que fornece várias funções e constantes matemáticas para realizar operações matemáticas complexas. O `Math` não é uma função construtora, ou seja, você não cria instâncias dele. Em vez disso, você usa seus métodos e propriedades diretamente. Vamos entender as funcionalidades do objeto `Math` passo a passo:

### 1. **Propriedades Matemáticas:**

   O objeto `Math` tem várias propriedades que representam constantes matemáticas importantes.

   - **`Math.PI`:** Representa a constante π (pi), a razão entre a circunferência de um círculo e seu diâmetro.
     ```javascript
     console.log(Math.PI); // 3.141592653589793
     ```

   - **`Math.E`:** Representa a constante `e`, a base dos logaritmos naturais.
     ```javascript
     console.log(Math.E); // 2.718281828459045
     ```

   - **`Math.SQRT2`:** Representa a raiz quadrada de 2.
     ```javascript
     console.log(Math.SQRT2); // 1.4142135623730951
     ```

   - **`Math.LN2`:** Representa o logaritmo natural de 2.
     ```javascript
     console.log(Math.LN2); // 0.6931471805599453
     ```

   - **`Math.LN10`:** Representa o logaritmo natural de 10.
     ```javascript
     console.log(Math.LN10); // 2.302585092994046
     ```

### 2. **Métodos Aritméticos:**

   O `Math` fornece métodos para realizar operações aritméticas comuns.

   - **`Math.abs(x)`:** Retorna o valor absoluto de `x` (ou seja, remove o sinal negativo, se houver).
     ```javascript
     console.log(Math.abs(-10)); // 10
     ```

   - **`Math.round(x)`:** Arredonda o número `x` para o inteiro mais próximo.
     ```javascript
     console.log(Math.round(4.7)); // 5
     console.log(Math.round(4.4)); // 4
     ```

   - **`Math.ceil(x)`:** Arredonda `x` para cima, para o próximo inteiro.
     ```javascript
     console.log(Math.ceil(4.1)); // 5
     ```

   - **`Math.floor(x)`:** Arredonda `x` para baixo, para o inteiro anterior.
     ```javascript
     console.log(Math.floor(4.9)); // 4
     ```

   - **`Math.max(a, b, ..., n)`:** Retorna o maior valor entre os argumentos passados.
     ```javascript
     console.log(Math.max(10, 20, 30)); // 30
     ```

   - **`Math.min(a, b, ..., n)`:** Retorna o menor valor entre os argumentos passados.
     ```javascript
     console.log(Math.min(10, 20, 30)); // 10
     ```

### 3. **Métodos de Potenciação e Radiciação:**

   O `Math` fornece métodos para calcular potências e raízes.

   - **`Math.pow(base, exponent)`:** Retorna a base elevada ao expoente.
     ```javascript
     console.log(Math.pow(2, 3)); // 8 (2 elevado à 3)
     ```

   - **`Math.sqrt(x)`:** Retorna a raiz quadrada de `x`.
     ```javascript
     console.log(Math.sqrt(16)); // 4
     ```

   - **`Math.cbrt(x)`:** Retorna a raiz cúbica de `x`.
     ```javascript
     console.log(Math.cbrt(27)); // 3
     ```

### 4. **Métodos Trigonométricos:**

   O `Math` também fornece métodos para trabalhar com trigonometria, todos os valores de entrada e saída desses métodos são em radianos.

   - **`Math.sin(x)`:** Retorna o seno de `x`.
     ```javascript
     console.log(Math.sin(Math.PI / 2)); // 1 (seno de 90 graus)
     ```

   - **`Math.cos(x)`:** Retorna o cosseno de `x`.
     ```javascript
     console.log(Math.cos(Math.PI)); // -1 (cosseno de 180 graus)
     ```

   - **`Math.tan(x)`:** Retorna a tangente de `x`.
     ```javascript
     console.log(Math.tan(Math.PI / 4)); // 1 (tangente de 45 graus)
     ```

   - **Conversão de graus para radianos:** Se precisar trabalhar com graus, é comum converter para radianos antes de usar os métodos trigonométricos.
     ```javascript
     function degToRad(degrees) {
       return degrees * (Math.PI / 180);
     }

     console.log(Math.sin(degToRad(90))); // 1
     ```

### 5. **Métodos Logarítmicos:**

   O `Math` também tem métodos para calcular logaritmos.

   - **`Math.log(x)`:** Retorna o logaritmo natural (base `e`) de `x`.
     ```javascript
     console.log(Math.log(1)); // 0
     ```

   - **`Math.log10(x)`:** Retorna o logaritmo na base 10 de `x`.
     ```javascript
     console.log(Math.log10(100)); // 2
     ```

### 6. **Geração de Números Aleatórios:**

   Um uso muito comum do objeto `Math` é a geração de números aleatórios.

   - **`Math.random()`:** Retorna um número aleatório entre `0` (inclusivo) e `1` (exclusivo).
     ```javascript
     console.log(Math.random()); // Algo como 0.123456789
     ```

   - **Gerando um número aleatório em um intervalo específico:**
     ```javascript
     function getRandomInt(min, max) {
       min = Math.ceil(min);
       max = Math.floor(max);
       return Math.floor(Math.random() * (max - min + 1)) + min;
     }

     console.log(getRandomInt(1, 10)); // Número aleatório entre 1 e 10
     ```

### 7. **Outros Métodos Úteis:**

   - **`Math.sign(x)`:** Retorna o sinal de `x`. Retorna `1` se for positivo, `-1` se for negativo, e `0` se for zero.
     ```javascript
     console.log(Math.sign(10)); // 1
     console.log(Math.sign(-10)); // -1
     console.log(Math.sign(0)); // 0
     ```

   - **`Math.trunc(x)`:** Remove a parte decimal de `x`, retornando apenas a parte inteira.
     ```javascript
     console.log(Math.trunc(4.9)); // 4
     console.log(Math.trunc(-4.9)); // -4
     ```

   - **`Math.hypot(a, b, ..., n)`:** Retorna a raiz quadrada da soma dos quadrados de seus argumentos (teorema de Pitágoras generalizado).
     ```javascript
     console.log(Math.hypot(3, 4)); // 5 (hipotenusa de um triângulo retângulo com catetos 3 e 4)
     ```

### 8. **Conclusão:**

O objeto `Math` em JavaScript é uma poderosa ferramenta para realizar cálculos matemáticos que vão desde operações básicas até operações complexas, como trigonometria, logaritmos e geração de números aleatórios. Ele é amplamente utilizado em muitos contextos, como na criação de gráficos, jogos, e aplicações científicas. A simplicidade de acesso aos métodos e propriedades do `Math` o torna indispensável para qualquer desenvolvimento que envolva operações matemáticas em JavaScript.
*/