// INÍCIO BACKEND - JAVASCRIPT
    
// VARIÁVEIS

// Antigo, pode ser redeclarado e mudar o valor
var idade = 10
var idade = 20 //ele não gera erro, pois aceita ser redefinido

// Mais moderno, pode mudar de valor, mas ão pode ser redeclarado
let nome = "Ana"
nome = "Luiza" // agora a váriavel é "Luiza" e não mais dafne
// let nome = "jose" <- daria erro ❌

// Mais usado e consolidao

const pi = 3.14;
//pi = 40; // ❌
// const é fixo não muda o valor

//----------------------------------
// FORMAS DE ESCREVER UM CÓDIGO
//----------------------------------

// CAMEL CASE --- A MAIS FAMOSA
// - Primeira palavra minúscula
// - palavras seguintes com letra maiúscula

// let nomeCompleto; let idadeUsuário; functionCalcularIdade()

//_____________________________________________

// PASCAL CASE
// - Todas as palavras começam com letra maiúscula

// class UsuarioSistema {
    //     constructor(nome, idade) {
        //         this.nome = nome;
        //         this.idade = idade;
        //     }
        // }
        
//_____________________________________________

// SNAKE CASE
// - Palavras separadas por underscore_

// let nome_completo; let total_vendas;