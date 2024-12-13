const ImprimirNota = function (nota) {

    switch (Math.floor(nota)){
        case 10:
        case 9:         //o console de baixo vai valer tanto para o 10 quanto para o 9
            console.log("Honraria")
            break //serve para que ele saia do switch e não execute os outros cases
        
        case 8: case 7:
            console.log("Aprovado")
            break
        
        case 6: case 5:
            console.log("Recuperação")
            break

        case 4: case 5: case 3:
            console.log("Reprovado")
            break

        default:  //seria o "else" do switch
            console.log("Nota inválida")
    }
}

ImprimirNota(10)
ImprimirNota(7)
ImprimirNota(5)
ImprimirNota(11)