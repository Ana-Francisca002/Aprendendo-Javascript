Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim 
}

const ImprimirResultados = function (nota){

    if(nota.entre(9, 10)){
        console.log("Aprovadíssimo!")
    } else if(nota.entre(7, 8.9)){
        console.log("Aprovado")
    } else if(nota.entre(4, 5)){
        console.log("Recuperação")
    } else if(nota.entre(0, 3)){
        console.log("Reprovado")
    } else {
        console.log("Nota inválida")
    }
}

ImprimirResultados(10)
ImprimirResultados(0)
ImprimirResultados(5)
ImprimirResultados(7)

/*Podemos caracterizar, desta forma, o prototype como sendo um método ou um construtor de classes (em nosso caso Objetos JavaScript “JSON”) para executar códigos ou até mesmo criar novos objetos.

A partir do prototype podemos atribuir funções e executar procedimentos aninhados ou não a partir de um objeto criado ao qual conterá as informações que poderemos utilizar durante o código. */