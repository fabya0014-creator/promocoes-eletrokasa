const produtos = [];

function adicionarProduto() {
    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const parcelas = document.getElementById("parcelas").value;
    const categoria = document.getElementById("categoria").value;

    const imagem = document.getElementById("imagem").files[0];

    const leitor = new FileReader();

    leitor.onload = function (e) {

        produtos.push({
            id: Date.now(),
            nome,
            preco,
            parcelas,
            categoria,
            imagem: e.target.result
        });

        listarProdutos();

        document.getElementById("formProduto").reset();
    };

    if (imagem) {
        leitor.readAsDataURL(imagem);
    }
}

function listarProdutos() {

    const lista = document.getElementById("listaProdutos");
    lista.innerHTML = "";

    produtos.forEach(produto => {

        lista.innerHTML += `
            <div class="produto">
                <img src="${produto.imagem}" width="180">
                <h3>${produto.nome}</h3>
                <p>${produto.preco}</p>
                <p>${produto.parcelas}</p>
                <p>${produto.categoria}</p>
            </div>
        `;

    });

}<form id="formProduto">

    <input id="nome" placeholder="Nome do produto">

    <input id="preco" placeholder="Preço">

    <input id="parcelas" placeholder="Parcelas">

    <input id="categoria" placeholder="Categoria">

    <input type="file" id="imagem" accept="image/*">

    <button type="button" onclick="adicionarProduto()">
        Adicionar
    </button>

</form>

<div id="listaProdutos"></div>