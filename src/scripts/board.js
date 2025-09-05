class BoardManager {
    //dependensias -> objetos que manipula as cartas do tabuleiro
    cardManager;
    //Elementos DOM -> receberá a referencia dos elementos
    node;

    //Numeros Contagem
    numlmgs;
    carNumCards;

    constructor(id, numImgs, cardManager) {

        this.node = document.getElementById(id)

        this.numlmgs = numImgs;
        this.cardManager = cardManager;
    }
    //esse metodo limpa o tabuleiro
    clear() {
        this.node.innerHTML = ""
    }

    fill(NumberCards) {
        if (NumberCards > 2 * this.numlmgs) {

            //mostrar mensagem de erro 
            console.error(`Error: Não há imagens suficientes para ${this.NumberCards} carrtas.`);
            
            //ajustar o numero de cartas, e continuar o jogo
            NumberCards = 2 * this.numlmgs;

        }


        this.clear();                             //limpa o tabuleiro
        this.addCard(this.cardManager.gen(1))    //adiciona uma nova carta ao tabuleiro

    }

    // este metodo adiciona uma carta ao tabuleiro
    addCard(card) { 
        this.node.appendChild(card);
    }

} 