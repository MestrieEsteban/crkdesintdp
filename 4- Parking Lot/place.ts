class Place {
	
	id: Number
	status: Boolean
	
	constructor(id : Number){
		this.id = id;
		this.status = false
	}

	getStatus(){
		return this.status
	}

	getId(){
		return this.id
	}
	
}
