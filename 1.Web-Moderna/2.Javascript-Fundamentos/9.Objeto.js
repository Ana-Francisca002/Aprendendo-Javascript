// Objeto é composto por chaves e valores

const produt1 =  {}
produt1.nome =  "Poco X3 Pro"
produt1.preco = 4900.90
produt1.desconto = 0.20

console.log(produt1)


const produt2 = {

    nome: "Camisa Polo",
    preco: 50.0,
    outroObj: {

        blabla: 0
    }
}

console.log(produt2)


// Objetos no js são criados apartir de funções

console.log(typeof Object)
console.log(typeof new Object)

const cliente = function (){}
console.log(typeof cliente)
console.log(typeof new cliente)

class produto {}
console.log(typeof produto)
console.log(typeof new produto)