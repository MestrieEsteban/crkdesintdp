class Hand {

	card: Card[]
	score: Number = 0
	burned: Boolean = false

	constructor(card: Card[]) {
		this.card 	= card
		this.score 	= this.score
		this.burned = this.burned
	}

	getCard(): Card[] {
		return this.card;
	}

	getScore(): Number {
		this.calculeScore();
		return this.score;

	}

	calculeScore() {
		this.card.forEach(e => {
			if (Number(e.getValue()) in [11, 12, 13]) {
				this.score = Number(this.score) + 10;
			}
			else {
				this.score = Number(this.score) + Number(e.getValue());
			}
		});
	}

	isBlackJack(): Boolean {
		let bg: Number = 0;
		let i = 0;
		if (1 in this.card) {
			this.card.forEach(e => {
				if (Number(e.getValue()) in [10, 11, 12, 13]) {
					bg = Number(bg) + Number(e.getValue());
					if (i == this.card.length) {
						if (bg >= 21) {
							this.isBurn();
							return false;
						} else {
							return true
						}
					} else {
						i++;
					}

				}else{
					return false
				}
			});
		}else{
			return false
		}
	}

	isBurn(): void{
		this.burned = true;
	}
	
	getBurn(): Boolean{
		return this.burned
	}
}
