// dependendo da forma como você chama a função o this pode variar e se faz necessário amarrar o sentido do this há função

//tendo e em vista esses problemas (para além de diminuir sintaxe) foram criadas as arrows function que tem essa função de "amarrar" o bind há sua respectiva função

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    setTimeout(function() {
      console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }, 1000);
  }
  
  const joao = new Pessoa('João', 30);

/*Nesse exemplo, a função Pessoa é uma função construtora que cria um novo objeto com as propriedades nome e idade. Dentro da função Pessoa, há uma chamada para setTimeout que executa uma função anônima após 1 segundo.

Aqui está o problema: a função anônima dentro de setTimeout não tem acesso ao contexto de this da função Pessoa. Em vez disso, this se refere ao objeto global (normalmente window no navegador ou global em Node.js).

Portanto, quando a função anônima é executada, this.nome e this.idade são undefined, porque o objeto global não tem essas propriedades. */
  