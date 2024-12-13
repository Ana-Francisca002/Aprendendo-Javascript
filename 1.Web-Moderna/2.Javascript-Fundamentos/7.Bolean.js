let isAtivo = false
console.log(isAtivo)

//O sinal !(not) se colocado antes força o tipo boleano true
isAtivo = 1
console.log(!!isAtivo)

console.log("Situações que os valores são verdadeiros")
console.log(!!3)
console.log(!!-123)
console.log(!!" ")
console.log(!!"Texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("Converter para valores falsos")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

//Com o javascript é possível usar operações lógicas com strings
let nome = "Ana"
console.log(nome || "O usuário não foi encontrado")
