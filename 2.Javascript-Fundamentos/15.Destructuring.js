// Essa é uma maneira de retirar dados de um estrutura 

const pessoa = {
    nome: "Ana",
    idade: "19",
    endereco: {
        rua: "Coração de Jesus",
        numero: 243
    }
}

const {nome, idade} = pessoa //Tire de dentro do objeto pessoa os atributos nome e idade


// Destruction em um array

const [a] = [10]

const [n1, n2, n3, n4, n5] = [10, 20 , 30, 40, 50]
console.log(n1, n2, n3, n4, n5)


// Destruction em função

function rand({min = 0, max=1000}){

    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = {min: 40, max: 50}
console.log(rand(obj))


// Fazendo usando destructing para fazer teste em array


function rand2([min=0, max=1000]){
    if (min > max) [min, max] = [max, min]
    const resultado = Math.random() * (max - min) + min
    return Math.floor(resultado)
}

console.log(rand2([50, 40]))

/*
O método **destructuring** em JavaScript é uma maneira conveniente de extrair dados de objetos e arrays, atribuindo esses valores a variáveis individuais de forma concisa. Vou explicar cada exemplo que você forneceu para ilustrar como o destructuring funciona.

### 1. **Destructuring em Objetos:**

```javascript
const pessoa = {
    nome: "Ana",
    idade: "19",
    endereco: {
        rua: "Coração de Jesus",
        numero: 243
    }
}

const { nome, idade } = pessoa; // Tire de dentro do objeto pessoa os atributos nome e idade
```

- **Explicação:**
  - Aqui, você está utilizando destructuring para extrair as propriedades `nome` e `idade` do objeto `pessoa` e atribuí-las diretamente a variáveis com o mesmo nome.
  - `const { nome, idade } = pessoa;` é equivalente a:
    ```javascript
    const nome = pessoa.nome;
    const idade = pessoa.idade;
    ```
  - Como resultado, `nome` terá o valor `"Ana"` e `idade` terá o valor `"19"`.

### 2. **Destructuring em Arrays:**

```javascript
const [a] = [10];
```

- **Explicação:**
  - Aqui, você está utilizando destructuring para extrair o primeiro elemento do array `[10]` e atribuí-lo à variável `a`.
  - `const [a] = [10];` é equivalente a:
    ```javascript
    const a = 10;
    ```
  - A variável `a` terá o valor `10`.

```javascript
const [n1, n2, n3, n4, n5] = [10, 20, 30, 40, 50];
console.log(n1, n2, n3, n4, n5);
```

- **Explicação:**
  - Nesse exemplo, você está extraindo múltiplos valores do array `[10, 20, 30, 40, 50]` e os atribuindo a variáveis individuais (`n1`, `n2`, `n3`, `n4`, `n5`).
  - Cada variável recebe o valor correspondente na mesma posição no array. Assim, `n1` será `10`, `n2` será `20`, e assim por diante.
  - Quando você imprime as variáveis, verá a saída: `10 20 30 40 50`.

### 3. **Destructuring em Funções (Objetos):**

```javascript
function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = { min: 40, max: 50 };
console.log(rand(obj));
```

- **Explicação:**
  - Esta função `rand` usa destructuring no parâmetro para extrair as propriedades `min` e `max` de um objeto passado como argumento.
  - Os valores de `min` e `max` têm valores padrão (`0` e `1000` respectivamente), que serão usados se as propriedades não forem passadas.
  - O método `Math.random()` gera um número aleatório entre `min` e `max`, e `Math.floor()` arredonda o valor para baixo, retornando um número inteiro.
  - Quando você chama `rand(obj)`, onde `obj = { min: 40, max: 50 }`, ele gera um número aleatório entre 40 e 50.

### 4. **Destructuring em Funções (Arrays):**

```javascript
function rand2([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min];
    const resultado = Math.random() * (max - min) + min;
    return Math.floor(resultado);
}

console.log(rand2([50, 40]));
```

- **Explicação:**
  - Aqui, a função `rand2` usa destructuring em um array passado como argumento. O array é desembrulhado em duas variáveis `min` e `max`.
  - Assim como na função anterior, `min` e `max` têm valores padrão.
  - A função também verifica se `min` é maior que `max` e, se for, inverte os valores para garantir que `min` seja sempre o menor.
  - A função então gera e retorna um número aleatório entre `min` e `max`.
  - Ao chamar `rand2([50, 40])`, onde o array é `[50, 40]`, a função inverte `min` e `max` para `[40, 50]` antes de calcular o valor aleatório.

### Resumo:

- **Destructuring** é uma forma concisa de extrair valores de objetos e arrays e atribuí-los a variáveis.
- Em **objetos**, destructuring permite acessar rapidamente propriedades específicas sem precisar acessar cada uma manualmente.
- Em **arrays**, destructuring permite extrair elementos por posição e atribuí-los diretamente a variáveis.
- Em **funções**, destructuring é útil para extrair valores diretamente dos parâmetros, tornando o código mais claro e menos propenso a erros.
*/