function AleatorioEntre (max, min){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

/*Diferente da estrutura While, o Do/While não é necessário atribuir um valor inicial para a variável opcao */

let opcao = 0

// Não é muito usado o do while  

do {
    opcao = AleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1)

console.log("Pronto")