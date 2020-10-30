class Director {
	
	name	: String
	isFree	: Boolean = true;

	constructor(name: String){
		this.name 	= name
        this.isFree = this.isFree
	}

	getIsFre(): Boolean{
		return this.isFree;
	}

	getCall(): String{
		if(this.getIsFre() == true){
			this.isFree = false
			return `${this.name} get call`;
		}else{
			this.isFree = true
			return `${this.name} cant get call`;
		}
	}
	
}
