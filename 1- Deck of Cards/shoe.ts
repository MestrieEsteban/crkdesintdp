class Shoe {
	
	cardList	: Card[];
	nbCard 		: Number;

	constructor(cardList : Card[]){
		this.cardList 	= cardList
        this.nbCard 	= this.cardList.length
	}

	getCard(): Card[]{
		return this.cardList
	} 

	getNbCard(): Number{
		return this.nbCard
	} 

	burnCard(card: Card):void{
		card.updateBurn();
	}


}
