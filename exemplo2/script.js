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
    
    // alterando elemento da classe
    caixa[0].innerText = "Primeiro parágrafo alterado"
    caixa[1].innerText = "Segundo parágrado alterado"

    // alterando imagem
    imagem.src = "https://i.pinimg.com/736x/1e/af/d4/1eafd40c9c8782accc539ef52ad2c2ad.jpg"
}
