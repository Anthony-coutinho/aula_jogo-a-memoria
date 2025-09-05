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

        //retornar o clone
        return clone

    }
}