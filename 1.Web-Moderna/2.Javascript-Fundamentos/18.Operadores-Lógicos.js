/*
    || -> OU
    & -> E
    !! -> NOT
*/

function comprar (trabalho1, trabalho2){

    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv = trabalho1 && trabalho2
    //const comprarNotebook = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarNotebook = trabalho1 != trabalho2 //funciona igual o de cima
    const manterSaudavel = !comprarSorvete

    //Para conseguir retornar mais de uma constante é só colocar em formato de objeto
    return {comprarSorvete, comprarNotebook, manterSaudavel}
}

console.log(comprar(true, true))
console.log(comprar(false, true))
console.log(comprar(true, false))
console.log(comprar(false, false))