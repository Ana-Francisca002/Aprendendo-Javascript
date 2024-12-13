// Js é estruturado em sentença e blocos de códigos

console.log("Olá mundo")

{
    console.log("Eai")
    console.log("Pessoas")
}



var b = 30 //dois escopos possíveis: global (acessível em todo o código) e funções (dentro de blocos de código)
var numero1 = 1

{
    var numero1 = 2
    console.log("Dentro: ", numero1)
}
console.log("Fora: ", numero1)

// o var é o único que pode ser redeclarado no mesmo escopo
var b = 15



let a = 20 

let numero2 = 10

{
    let numero2 = 20
    console.log("Dentro: ", numero2)
}
console.log("Fora: ", numero2)



const c = 50

