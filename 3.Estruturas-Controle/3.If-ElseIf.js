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
