function area(altura, largura){ //Esse tipo de função não é viável
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else{
        return area
    }
}

console.log(area())
console.log(area(2, 2))
console.log(area(2))
console.log(area(5, 5))
