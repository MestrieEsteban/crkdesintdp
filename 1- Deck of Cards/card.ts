class Card {
	
	value 		: Value;
	color 		: Color;
	enseigne 	: Enseigne;
	visible 	: Boolean;

	constructor(value : Value, color: Color, enseigne: Enseigne){
		this.value = value
        this.color = color
        this.enseigne = enseigne
        this.visible = this.visible
	}

	getValue():Number{
		return(this.value);
	}

	getColor():String{
		return(this.color);
	}

	getEnseigne():String{
		return(this.enseigne);
	}

	getVisible():Boolean{
		return(this.visible);
	}

	updateVisible():void{
		if(this.visible = false){
			this.visible = true
		}else{
			this.visible = false
		}
	}

	getAll():Card{
		return this;
	}


}

type Value = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
type Color = 'RED' | 'BLACK' 
type Enseigne = "CLUB" | "HEART" | "SPADE" | "DIAMOND"