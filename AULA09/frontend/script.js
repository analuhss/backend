// ===============
// ELEMENTOS HTML
// ===============
// Foto do cachorro
const dogImage =  document.getElementById("dogImage");

// nome raça
const breedName = document.getElementById("breedName");

// cachorro aleatório
const randomBtn = document.getElementById("randomBtn");

// botão que busca por raça
const serachBtn = document.getElementById("searchBtn");

// campo de texto onde o usuário digita a raça
const breedInput = document.getElementById("breedInput");

// area onde fica a imagem do cachorro
const dogArea = document.querySelector(".dog-area")
// Usamos querySelector porque é uma classe (.dog-area)


// ====================
// URL DA API
// ====================

const API = "http://localhost:3000/api/cachorros"

// ===================
// FUNÇÃO PRINCIPAL
// ===================


async function buscarCachorro (url) {
    // adiciona a classe "loading"
    // normalmente usada para mostrar a animação de carregamento

    dogArea.classList.add("loading");

    try {
        const response = await fetch(url);
        // converte a resposta para JSON

        const data = await response.join();
        // mostra no console a resposta da  API

        console.log("Resposta da API:", data)

        // vamos verificar se a API retornou o erro 
        if (data.status === "error") {
            // mostra a imagem de erro na tela
            // breedName - Elemento HTML
            // .textContent - Propriedade que define o texto do elemento
            // data - Objeto com os dados recebidos da API
            // .message - Propiedade que contém a mensagem ou URL

            breedName.textContent = data.message;

            // remove a imagem
            dogImage.src = "";

            // execução da função
            return;
        }

        // coloca a imagem do cachorro na tela
        // o src decide qual imagem será definida
        dogImage.src = data.message;

        // extrai o nome da raça da URL da imagem
        // exemplo da URL:
        // http://localhost:3000/fotos/husky/1.png

        const partes = data.message.split("/")

        // pega a posição 5 do array
        // que corresponde ao nome da raça

        const raca = partes[5]

        // coloca a primeira letra maiuscula

        // ex: husky -->

        breedName.textContent = 
            raca.charAt(0).toUpperCase() + raca.slice(1)
            // raca.charAt(0) - pega a primeira letra
            // .toUpperCase() - Transforma em letra maisúscula
            // raca.slice(1) - pega o texto a partir da segunda letra
    } catch (erro) {
        // caso o servidor esteja desligado
        // ou aconteça algum erro na requisição

        console.error(erro);
        // mostra mensagem na tela
        breedName.textContent = 
            "📴 servidor offline - rode: node server.js"

            // remova a imagem
            dogImage.src = "";
    }   finally {
        // remova a classe carregameto
        // independenmente de erro ou sucesso.
        dogArea.classList.remove("loading")
    }
}

// ==================
// AÇÕES
// ==================