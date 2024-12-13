const escola = "42SP"

console.log(escola.charAt(0)) //Mostra as posições especificas da string
console.log(escola.charCodeAt(0)) //Mostra o código da tabela ascii que representa o elemento da string
console.log(escola.indexOf('4')) //Mostra o índice do digito na string
console.log(escola.substring(0,2)) //Especifica até onde será mostrada a string
console.log((escola).concat(" A melhor escola de programação do ").concat("MUUUNDO!")) //Concatena itens
console.log(escola.replace(4, 5)) //Substitui um item por outro
console.log("Ana, Maria,Pedro".split(",")) //Transforma em um array



const nome = "Rebeca"
//Simples
const concatena = 'Olá' + nome + '!'

//Template
const template = `
    Olá
${nome} !`

console.log(concatena, template)