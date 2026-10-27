const btnCadastrar = document.getElementById('btnCadastrar')
const btnCancelar = document.getElementById('btnCancelar')
const modal = document.getElementById('modalCadastro')
const form = document.getElementById('formGame')
const lista = document.getElementById('listarGames')
const mensagemVazia = document.getElementById('mensagemVazia')

btnCadastrar.addEventListener("click", () =>{
    modal.showModal();
})

btnCancelar.addEventListener("click", () =>{
    modal.close();
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const game = document.getElementById("game").value.trim()
    const desenvolvedor = document.getElementById("desenvolvedor").value.trim()
    const genero = document.getElementById("genero").value.trim()
    const imagem = document.getElementById("imagem").value.trim()
    const preco = Number(document.getElementById("preco").value)

    criarCard(game, desenvolvedor, genero, imagem, preco)
    form.requestFullscreen()
    modal.close()
})

function criarCard(game, desenvolvedor, genero, imagem, preco){
    mensagemVazia.hidden = true;
    const card = document.createElement("article")
    card.classList.add("card-disco")
    const capa = document.createElement("div")
    capa.classList.add("capa")
    const imagemCapa = document.createElement("img")
    imagemCapa.src = imagem
    capa.appendChild (imagemCapa)
    const info = document.createElement("div")
    info.classList.add("info-disco")
    const titulo = document.createElement("h3")
    titulo.textContent = game
    const nomedesenvolvedor = document.createElement("p")
    nomedesenvolvedor.textContent = "desenvolvedor: " + desenvolvedor
    const nomeGenero = document.createElement("p")
    nomeGenero.textContent = "Gênero: " + genero;
    const valor = document.createElement("strong")
    valor.classList.add("preco")
    valor.textContent = preco.toLocaleString("pt-BR", {style: "curency", currency: "BRL"})
    info.append(titulo, nomedesenvolvedor, nomeGenero, valor)
    card.append(capa, info)
    lista.append(card)
}