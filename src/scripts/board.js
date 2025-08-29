class BoardManager {
    //dependensias -> objetos que manipula as cartas do tabuleiro
cardManager;
//Elementos DOM -> receberá a referencia dos elementos
node;

//Numeros Contagem
numlmgs;
carNumCards;

constructor(id, numImgs, cardManager){

    this.node = document.getElementById(id)

    this.numlmgs = numImgs;
    this.cardManager = cardManager;
}
//esse metodo limpa o tabuleiro
clear(){
    this.node.innerHTML = ("")    
}

fill(NumberCards){}
addCard(card){}

} 