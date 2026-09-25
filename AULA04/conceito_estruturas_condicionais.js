// Estrutura Conicionais (Tomando Decisões)

// As estruturas permitem executar diferentes blocos de código dependendo de uma condição

// IF / ELSE - CONDICIONAIS
// Verifica se uma condição é verdadeira e executa o código dentro dele, se acondição for falsa, o ELSE pode executar outro bloco do código

let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}

// IF, ELSE IF, ELSE (Múltiplas condiçoes)

let idade10 = 10;

if (idade10 < 12) {
    console.log("Você é uma criança")
} else if (idade10 < 18) {
    console.log("Você é um adolescente")
} else {
    console.log("Você é um adulto")
}