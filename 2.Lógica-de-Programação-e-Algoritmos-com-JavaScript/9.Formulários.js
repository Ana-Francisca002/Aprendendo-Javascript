const form = document.querySelector("form") //selecionando o formulário
const res = document.querySelector("h3") //selecionando o h3

form.addEventListener("submit", (e) => {
    const nome= form.nome.value    //obtem o nome do form
    res.innerText = `Olá ${nome}`  //exibe a resposta do programa
    e.preventDefault()             //evita o envio do form
})