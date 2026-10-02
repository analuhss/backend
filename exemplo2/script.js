// ==========================================
//      Selecionando elementos do DOM
// ==========================================

// Selecionando por ID
console.log(document.getElementById("titulo"));
// para visualização no console
let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo");
let imagem = document.getElementById("imagemteste");

// selecionando por classes
let caixa = document.getElementsByClassName("box")

console.log(titulo);
console.log(caixa);
console.log(imagem);

// ================================
// FUNÇÃO PARA ALTERAR O CONTEÚDO
// ================================

function alterar() {
    titulo.innerHTML = "Analu para presidente"
    subtitulo.innerText = "Só que não"
    paragrafo.innerText = "texto mudado pelo jS"
}