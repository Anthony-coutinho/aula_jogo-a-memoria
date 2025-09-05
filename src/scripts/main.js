
// variaveis

let menu = document.getElementById('menu');
let select = document.getElementById('numCards');
let button = document.getElementById('start');
let board = document.getElementById('board');

//função que cria o caminho para as imagens
function urlBuilder(number) {}

//instancias
let card = new CardManager(urlBuilder);
let boardMain = new BoardManager("board", 50, card);

// loop inicia 4. menor ou igual a 10. incrementa 2

// variavel - condição - ação
for(let i = 4;i<=10;i +=2 ){
    // valor do select multiplicado por ele mesmo
    let n = i * i;

// opções do usuario no select

let op = document.createElement('option');

//setar o valor para o op
op.value = n;       //propriedade value
op.innerHTML = n;   //mostrar na tela o valor

// colocar op como filho do select
select.appendChild(op);

}

button.addEventListener("click", () => {
    // deixando o menu escondido
    menu.classList.add("hidden");
    //fazendo o nosso tabuleiro aparecer
    board.classList.remove("hidden");
    boardMain.fill(select.value);
})