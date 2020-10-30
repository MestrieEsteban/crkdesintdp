class Vehicle {
	
	name : String;
	isParked : Boolean;
	place: Number;

	constructor(name: String){
		this.name 		= name
		this.isParked 	= false
	}

	getName():String{
		return this.name
	}

	park(slot:Number){
		this.place = slot
	}

	updateParked(){
		if(this.isParked == false){
			this.isParked = true
		}
	}


	
	
}
