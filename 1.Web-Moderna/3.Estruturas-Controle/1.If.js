function SoNoticiaBoa(nota){
    if(nota >= 7){
        console.log("Você passou com: " + nota)
    }
}

SoNoticiaBoa(0)
SoNoticiaBoa(10)

function Verdade(valor){
    //O teste que será feito para que o valor seja mostrado é o bolean (true ou false)
    if(valor){
        console.log("Verdade..." + valor)
    }
}

Verdade("")
Verdade(null)
Verdade(undefined)
Verdade(" ")
Verdade("?")
Verdade("0")
Verdade("-1")
Verdade({})
Verdade([])