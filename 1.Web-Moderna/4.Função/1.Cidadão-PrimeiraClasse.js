// Higher-Order Function
// First-Class Object

// Função de forma literal
function fun1(){}

// Armazenar uma função em uma variável
const fun2 = function (){}

// Função em um array
const array = [function(a, b){return a + b}, fun1, fun2]
console.log(array[0](2, 3)) //Pegou o índice 0 (a primeira função) e atribuiu os valores dos parâmetros

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return "Opa"}
console.log(obj.falar())


// Passar função como parâmetro
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  function processUserInput(callback) {
    const name = "Alice";
    callback(name);
  }
  
  processUserInput(greet);

// Função retornando/contendo outra função
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(2, 3)(0)