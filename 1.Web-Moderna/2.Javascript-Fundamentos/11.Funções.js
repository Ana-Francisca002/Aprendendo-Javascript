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
