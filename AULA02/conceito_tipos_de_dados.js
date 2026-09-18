// TIPOS DE DADOS

// No javascript, tudo o que armazenamos em variáveis tem um tipo. Esss tipos definem o que podems fazer com os valres.

// String (textos)
// Number (números)
// Boolen (verdadeiro ou falso)
// Object (objetos, que agrupam informações)
// Array (Lista de valores)
// NUl (valor vazio)
// Undefined (quando algo não foi definifo)

// STRING (Textos)
// uma string é um texto, sempre escrito entre aspas ("" ou '')
let nome = "Mega Brain";
//a string já é definid pela aspas

let mensagem = "Olá mundo!"

console.log(nome);
console.log(mensagem);

let saudacao = "Olá," + nome + "!";
console.log(saudacao); //Exibe olá mega brain

// TYPEOF
// O typeof serve para descobrir o tipo de um valor ou variável

let nomeDois = "Bryan";
console.log(typeof nomeDois);

//____________________________________________________________________

let soma = 10 + 5;
console.log(soma)

// Boolean (Verdadeiro ou falso)
// um boolean pode ter apenas dois valores: true (verdadeiro) ou false (falso)

let maiorDeIdade = true;
let menorDeIdade = false;

console.log(maiorDeIdade); //Exibe true
console.log(menorDeIdade); //Exibe false

let idade = 10;

let podeDirigir = idade >= 18;

console.log(podeDirigir)