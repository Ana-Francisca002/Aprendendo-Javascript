function soma(){ //Mesmo sem parâmetros, tem parâmetros
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2, 3, 6, 8))