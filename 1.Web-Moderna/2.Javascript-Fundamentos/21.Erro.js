function tratarErro(erro){

    throw new Error("Poxa, deu erro...")
}

function imprimirNome(obj){

    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch(e){

        tratarErro(e)
    }
}

const obj = {nome: 'Ana'}
imprimirNome(obj)

/*
O tratamento de erros em JavaScript permite que você lide com situações inesperadas de maneira controlada, evitando que seu programa quebre ou se comporte de forma inadequada. O código que você forneceu demonstra como capturar e tratar erros usando as construções `try...catch`.

Vamos detalhar o que cada parte do código faz:

### 1. **Função `tratarErro(erro)`**

```javascript
function tratarErro(erro) {
    throw new Error("Poxa, deu erro...");
}
```

- **Explicação:**
  - Esta função recebe um erro como argumento (`erro`), mas ao invés de lidar com o erro de forma detalhada, ela simplesmente lança (throw) uma nova instância do objeto `Error` com uma mensagem personalizada: `"Poxa, deu erro..."`.
  - Lançar um erro significa interromper a execução normal do programa e transferir o controle para o bloco de código `catch` mais próximo (ou para o final do stack de chamadas, caso não haja um `catch`).

### 2. **Função `imprimirNome(obj)`**

```javascript
function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratarErro(e);
    }
}
```

- **Bloco `try`:**
  - Dentro do bloco `try`, o código tenta acessar a propriedade `name` do objeto `obj` e convertê-la para letras maiúsculas com `toUpperCase()`.
  - Se o objeto `obj` não tiver a propriedade `name`, ou se `name` for `undefined`, isso resultará em um erro porque você não pode chamar `toUpperCase()` em `undefined`.

- **Bloco `catch`:**
  - Se ocorrer um erro no bloco `try`, o controle é passado para o bloco `catch`.
  - A variável `e` captura o erro que foi lançado no bloco `try`.
  - Em vez de lidar diretamente com o erro dentro de `catch`, ele chama a função `tratarErro(e)`, que lança uma nova exceção com a mensagem `"Poxa, deu erro..."`.

### 3. **Criação e Passagem de Objeto**

```javascript
const obj = {nome: 'Ana'};
imprimirNome(obj);
```

- **Explicação:**
  - Aqui, você cria um objeto `obj` com a propriedade `nome`, mas a função `imprimirNome` está esperando uma propriedade chamada `name` (em inglês).
  - Ao chamar `imprimirNome(obj)`, o código dentro do `try` tentará acessar `obj.name`, mas `name` não existe no objeto, resultando em `undefined`.
  - Isso causará um erro quando o código tentar chamar `toUpperCase()` em `undefined`.

### 4. **Fluxo de Erro e Saída**

- Quando o erro ocorre dentro de `try`, ele é capturado pelo `catch`.
- O `catch` então chama `tratarErro(e)`, que lança um novo erro com a mensagem `"Poxa, deu erro..."`.
- Como esse erro não é capturado por outro bloco `try...catch`, ele pode resultar em uma interrupção da execução do programa, e a mensagem de erro `"Poxa, deu erro..."` será exibida.

### **Resumo:**

1. **`try`:** Tenta executar um bloco de código que pode gerar um erro.
2. **`catch`:** Captura e lida com qualquer erro que ocorrer no bloco `try`.
3. **`throw`:** Lança manualmente um erro, interrompendo a execução normal.
4. **`Error`:** É uma classe padrão em JavaScript para representar erros. Criar uma instância de `Error` permite que você forneça uma mensagem que descreva o problema.

No seu exemplo, o erro é tratado, mas em vez de apenas capturá-lo, ele é lançado novamente com uma mensagem personalizada. Isso pode ser útil quando você deseja padronizar a forma como os erros são relatados ou quando deseja manipular o erro em um nível superior do código.
*/