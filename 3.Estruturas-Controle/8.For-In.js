const notas = [7, 6, 9, 2, 5, 10]

for (i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    noma: "Ana",
    idade: 19,
    peso: 54
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}