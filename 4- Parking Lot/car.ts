class Car extends Vehicle {
	constructor(name) {
		super(name)
	}

	getName() {
		return `${super.getName()}`
	}

}