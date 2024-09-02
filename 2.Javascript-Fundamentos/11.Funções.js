// Função sem retorno

function imprimirSoma(a, b){

    console.log(a + b)

}

imprimirSoma(2, 5)
imprimirSoma()
imprimirSoma(2)
imprimirSoma(2, 5, 1, 7)


// Função com retorno
function soma(c=4, d=3){

    return c + d
}

console.log(soma())
console.log(soma(2))
console.log(soma(7, 8))


// Armazenando função em variável
const Divide = function (a, b){

    console.log(a / b)
}

Divide(6, 3)


// Armazenando função arrow em uma variável
const multiplica= (a, b) => {
    return a * b
}

console.log(multiplica(5, 5))


// Retorno implícito
const subtração = (a, b) => a - b
console.log(subtração(3, 2))

/*
A diferença entre uma função que retorna algo e uma função que não retorna nada é fundamental no design de software e no uso dessas funções em seu código. Vamos explorar essa diferença e como ela afeta a utilidade e importância de uma função.

### 1. **Funções que Retornam Algo:**

Quando uma função retorna um valor, ela produz uma saída que pode ser usada para diversos fins. Esse valor pode ser armazenado em uma variável, passado como argumento para outra função, ou utilizado diretamente no fluxo de controle do programa.

- **Exemplo:**
  ```javascript
  function add(a, b) {
    return a + b;
  }

  const sum = add(3, 5); // sum agora é 8
  console.log(sum); // 8
  ```

- **Utilidade:**
  - **Reusabilidade:** O valor retornado pode ser usado em diferentes partes do código, o que torna a função mais versátil e reutilizável.
  - **Composição:** Funções que retornam valores podem ser facilmente encadeadas ou compostas com outras funções.
  - **Controle de fluxo:** Funções que retornam valores podem ser usadas para controlar o fluxo do programa com base em condições.

### 2. **Funções que Não Retornam Nada (ou Retornam `undefined`):**

Quando uma função não retorna nada explicitamente, ela ainda pode realizar ações ou efeitos colaterais, como modificar variáveis globais, alterar o estado de objetos, ou interagir com o usuário (ex., exibir uma mensagem).

- **Exemplo:**
  ```javascript
  function logMessage(message) {
    console.log(message);
  }

  logMessage("Hello, World!"); // Exibe "Hello, World!" no console, mas não retorna nada
  ```

- **Utilidade:**
  - **Efeitos colaterais:** Funções que não retornam valores são úteis para realizar operações que alteram o estado do sistema ou têm efeitos colaterais (como escrever em um arquivo, modificar uma variável global, ou exibir dados na tela).
  - **Procedimentos:** Essas funções são frequentemente chamadas de procedimentos, pois executam uma série de instruções sem a necessidade de fornecer uma saída.

### 3. **Importância e Utilidade:**

A importância de uma função não está necessariamente ligada ao fato de retornar ou não um valor, mas sim ao contexto e ao propósito para o qual ela foi criada.

- **Funções que retornam algo:**
  - São geralmente mais **úteis** em contextos onde o resultado da operação precisa ser reutilizado ou passado adiante. Por exemplo, uma função que calcula a área de um círculo e retorna o valor pode ser usada em cálculos adicionais.
  - Facilitam a composição e modularidade do código, permitindo que resultados intermediários sejam facilmente combinados em operações mais complexas.

- **Funções que não retornam nada:**
  - São importantes em situações onde o objetivo é realizar uma ação específica, como registrar uma mensagem, iniciar um processo, ou modificar um estado existente.
  - São essenciais em aplicações onde o comportamento esperado é mais importante do que o valor de retorno, como em manipulações de UI ou em controladores de sistemas.

### 4. **Conclusão:**

A decisão de fazer uma função retornar algo ou não depende do que você quer que a função faça e como pretende usar o resultado da função. Funções que retornam algo são úteis para cálculos, lógica condicional, e construção de pipelines de dados. Funções que não retornam nada são úteis para executar procedimentos, como interações com o usuário ou manipulação de estados.

Ambos os tipos de funções têm sua importância e utilidade dependendo do contexto. O mais importante é entender o propósito da função no seu código e escolher o tipo de retorno que melhor atende às suas necessidades.
*/