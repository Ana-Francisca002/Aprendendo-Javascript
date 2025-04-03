const pessoa = {

    saudacao : "Bom dia",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

/*O código funciona corretamente porque a função falar é definida dentro do objeto pessoa e é chamada como um método desse objeto.

Em JavaScript, quando uma função é chamada como um método de um objeto, o contexto de this é definido como o objeto que a função está sendo chamada. Isso é conhecido como "ligação de contexto" (context binding). */



const falar = pessoa.falar
falar()

/* O código não funciona porque a função falar é chamada fora do contexto do objeto pessoa. */



const falardePessoa = pessoa.falar.bind(pessoa)
falardePessoa()

// aqui o bind amarrou o sentido do objeto pessoa a essa função falardePessoa