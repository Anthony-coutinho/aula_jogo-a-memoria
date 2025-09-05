class CardManager {
    //atributos
    FlippedCards = new Set();
    urlFactory;

    constructor(factory) {
        //atribuir uma função a urlFactory
        this.urlFactory = factory
    }

    gen(heroNumber){
        let template = document.getElementById("cardTemplate"); //referenciar o template
        let clone = template.content.cloneNode(true); //criar clone

        clone.children[0].addEventListener("click",
            event => this.onClick(event)
        )

        //retornar o clone
        return clone

    }
    //Captura o eventos de clique
    onClick(event){
    this.flip(event.target);
    }
    //vira a carta
    flip(cardNode){

    cardNode.children[0].classList.add("selected");

    }
    //desvira a carta
    unFlip(cardNode){

    cardNode.children[0].classList.remove("selected");

    }
    //método que não deixa o usuario virar duas cartas
    disable(cardNode){
    cardNode.children[0].classList.add("matched");
    this.unFlip(cardNode)
    
        
    }

}

