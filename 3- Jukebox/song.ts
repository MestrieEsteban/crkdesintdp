class Song {
	
	name: String
	artiste: String
	price: Number

	constructor(name: String, artiste: String, price: Number){
		this.name = name 
		this.artiste = artiste
		this.price = price
	}

	getName():String{
		return this.name
	}

	getArtiste():String{
		return this.artiste
	}

	getPrice():Number{
		return this.price
	}

}
