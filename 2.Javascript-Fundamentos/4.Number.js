const peso1 = 1.0
const peso2 = Number("2.0")

//Ver se o número é inteiro
console.log(Number.isInteger(peso1))

//Se o valor é finito
console.log(Number.isFinite(peso1))


// ALGUNS CUIDADOS

console.log(7/0)
console.log("10"/2)
console.log("show"*5)
console.log(0.1 + 0.7)

/*
O objeto `Number` em JavaScript é uma função construtora que permite criar valores numéricos. Ele também oferece métodos estáticos para manipular e verificar números. Embora em JavaScript todos os números sejam do tipo `number`, o objeto `Number` fornece uma camada adicional de funcionalidade. Vamos entender isso passo a passo:

### 1. **Criação de Números com `Number`:**
   - Você pode criar um número utilizando a função `Number`. Isso é útil quando você precisa converter outros tipos de dados (como strings) em números.

   ```javascript
   const num1 = Number(10);    // Cria o número 10
   const num2 = Number("20");  // Converte a string "20" em número 20
   const num3 = Number("abc"); // Tenta converter a string "abc", mas retorna NaN (Not-a-Number)
   ```

   - **Exemplo:**
     ```javascript
     const num = Number("100");
     console.log(num); // 100
     ```

   - **Uso comum:** Converter strings que representam números em valores numéricos reais.

### 2. **Verificação de Valores com Métodos Estáticos:**

   O objeto `Number` possui vários métodos estáticos que ajudam a verificar ou manipular números.

   - **`Number.isInteger(value)`:** Verifica se o valor é um número inteiro.
     ```javascript
     console.log(Number.isInteger(10)); // true
     console.log(Number.isInteger(10.5)); // false
     ```

   - **`Number.isFinite(value)`:** Verifica se o valor é um número finito (não é `Infinity`, `-Infinity`, ou `NaN`).
     ```javascript
     console.log(Number.isFinite(20)); // true
     console.log(Number.isFinite(Infinity)); // false
     ```

   - **`Number.isNaN(value)`:** Verifica se o valor é `NaN`.
     ```javascript
     console.log(Number.isNaN(NaN)); // true
     console.log(Number.isNaN(10)); // false
     ```

### 3. **Propriedades de Precisão e Limites:**

   O objeto `Number` também fornece algumas propriedades importantes para trabalhar com números, especialmente quando se trata de limites e precisão.

   - **`Number.MAX_VALUE`:** Retorna o maior valor numérico possível em JavaScript.
     ```javascript
     console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
     ```

   - **`Number.MIN_VALUE`:** Retorna o menor valor positivo que pode ser representado.
     ```javascript
     console.log(Number.MIN_VALUE); // 5e-324
     ```

   - **`Number.EPSILON`:** Representa a diferença mínima entre 1 e o menor número maior que 1 que pode ser representado. Isso é útil para cálculos precisos com números de ponto flutuante.
     ```javascript
     console.log(Number.EPSILON); // 2.220446049250313e-16
     ```

### 4. **Lidando com Precisão de Números de Ponto Flutuante:**

   Em JavaScript, os números de ponto flutuante podem ter problemas de precisão, como você viu na soma de `0.1 + 0.7`. `Number` fornece propriedades e métodos que ajudam a minimizar esses problemas.

   - **Exemplo de uso de `Number.EPSILON`:**
     ```javascript
     function areEqual(a, b) {
       return Math.abs(a - b) < Number.EPSILON;
     }

     console.log(areEqual(0.1 + 0.2, 0.3)); // true
     ```

### 5. **Conversão de Tipos:**

   Além de criar números, `Number` pode ser utilizado para converter diferentes tipos de dados em números.

   - **Conversão explícita:**
     ```javascript
     const str = "123";
     const num = Number(str); // Converte a string "123" para o número 123
     console.log(num); // 123
     ```

   - **Conversão automática:** Quando operações matemáticas são realizadas em tipos diferentes, o JavaScript tenta automaticamente converter o tipo de dado para um número.
     ```javascript
     console.log("100" - 50); // 50 (a string "100" é convertida em número)
     console.log("100" + 50); // "10050" (concatenação, pois o operador `+` não força a conversão para número)
     ```

### 6. **Diferença entre `Number` e `number`:**

   - **`number`:** É o tipo de dado primitivo para números em JavaScript.
     ```javascript
     const n = 10;
     console.log(typeof n); // "number"
     ```

   - **`Number`:** É o objeto global que contém propriedades e métodos úteis para manipular números. Pode ser usado como função construtora ou para acessar métodos estáticos.
     ```javascript
     const n = new Number(10);
     console.log(typeof n); // "object"
     ```

   Na maioria dos casos, você vai usar `number` (o tipo primitivo). Você só usará `Number` quando precisar das funcionalidades extras oferecidas por ele, como conversões ou verificações específicas.

### 7. **Conclusão:**

O objeto `Number` em JavaScript serve como uma ferramenta para manipular números de maneira mais avançada, permitindo conversões de tipos, verificações de integridade, controle de precisão, e acesso a valores limite. É uma parte essencial da linguagem quando você precisa realizar operações numéricas mais sofisticadas e precisa garantir precisão e correção nas suas operações.
*/