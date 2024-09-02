// Par nome/valor

//Esse é um modo de organizar os dados no código

const saudacao = "Opa" //Contexto léxico 1

function exec(){

    const saudacao = "Uepa" //Contexto léxico 2
    return saudacao
}

/*
Na programação, o conceito de "par nome/valor" é fundamental para a organização e estruturação de dados. Vamos detalhar isso usando o exemplo que você forneceu.

### 1. **Par Nome/Valor:**

- **Nome:** O nome (ou chave) é um identificador que você usa para acessar um valor específico.
- **Valor:** O valor é o dado ou a informação associada ao nome. Pode ser de vários tipos, como números, strings, objetos, funções, etc.

Na declaração `const saudacao = "Opa"`, `saudacao` é o **nome** (ou identificador), e `"Opa"` é o **valor** associado a esse nome.

### 2. **Contexto Léxico (Escopo):**

O escopo (ou contexto léxico) determina onde e como as variáveis e funções podem ser acessadas. Dependendo do escopo, o mesmo nome pode ter diferentes valores.

### 3. **Exemplo Explicado:**

Vamos analisar o exemplo em partes:

```javascript
const saudacao = "Opa"; // Contexto léxico 1
```
Aqui, `saudacao` é um identificador que tem o valor `"Opa"`. Esse valor está associado a esse nome no **Contexto Léxico 1** (geralmente o escopo global ou um escopo superior).

```javascript
function exec() {
    const saudacao = "Uepa"; // Contexto léxico 2
    return saudacao;
}
```
Dentro da função `exec`, você tem outra declaração `const saudacao = "Uepa";`. Aqui, `saudacao` é novamente o nome, mas agora tem um valor diferente: `"Uepa"`. Este nome está no **Contexto Léxico 2**, que é o escopo da função `exec`.

### 4. **Diferença e Importância do Contexto Léxico:**

- **Contexto Léxico 1:** Fora da função `exec`, `saudacao` refere-se ao valor `"Opa"`.
- **Contexto Léxico 2:** Dentro da função `exec`, `saudacao` refere-se ao valor `"Uepa"`.

Esses dois valores são independentes um do outro porque estão em contextos diferentes. O valor de `saudacao` dentro da função não interfere no valor de `saudacao` fora dela, e vice-versa.

### 5. **Importância do Par Nome/Valor:**

O par nome/valor permite que você organize e acesse dados de maneira estruturada no seu código. Dependendo do escopo, o mesmo nome pode se referir a valores diferentes, o que é essencial para a modularidade e organização do código.

### 6. **Conclusão:**

- **Nome:** É um identificador que você usa para referenciar um valor.
- **Valor:** É o dado que está associado a um nome.
- **Contexto Léxico (Escopo):** Determina a acessibilidade dos nomes e valores no código.

No seu exemplo, a função `exec` retorna `"Uepa"` porque dentro dessa função, `saudacao` refere-se ao valor `"Uepa"` no contexto léxico da função. Fora dessa função, `saudacao` refere-se ao valor `"Opa"`. Essa distinção é importante para entender como os dados são organizados e manipulados em diferentes partes do código.
*/