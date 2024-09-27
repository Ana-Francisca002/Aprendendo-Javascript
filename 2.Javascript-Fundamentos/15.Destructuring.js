// Essa é uma maneira de retirar dados de um estrutura 

const pessoa = {
    nome: "Ana",
    idade: "19",
    endereco: {
        rua: "Coração de Jesus",
        numero: 243
    }
}

const {nome, idade} = pessoa //Tire de dentro do objeto pessoa os atributos nome e idade


// Destruction em um array

const [a] = [10]

const [n1, n2, n3, n4, n5] = [10, 20 , 30, 40, 50]
console.log(n1, n2, n3, n4, n5)


// Destruction em função

function rand({min = 0, max=1000}){

    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = {min: 40, max: 50}
console.log(rand(obj))


// Fazendo usando destructing para fazer teste em array


function rand2([min=0, max=1000]){
    if (min > max) [min, max] = [max, min]
    const resultado = Math.random() * (max - min) + min
    return Math.floor(resultado)
}

console.log(rand2([50, 40]))
