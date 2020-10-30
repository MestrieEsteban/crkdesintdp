class Parking {
	
	places : Place[]
	vehicle : Vehicle[]

	constructor(place : Place[], vehicle : Vehicle[]){
		this.places = place
		this.vehicle = vehicle
	}

	getEmptyPlace(){
		this.places.forEach(e => {
			if(e.getStatus() == false ){
				return e
			}else{
				return false
			}
		})
	}

	parkVehicle(vehicle: Vehicle){
		let place = this.getEmptyPlace()
		vehicle.updateParked();
		vehicle.park(place.id);

	}

	getPlace(){
		return this.places;
	}

	getVehicle(){
		return this.vehicle;
	}

	

	
	
}
