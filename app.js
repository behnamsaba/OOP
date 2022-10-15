//part one:

class Vehicle{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "BEEP!"
    }
}

// let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// console.log(myFirstVehicle.honk());

// Part Two

class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 4;
    }
    
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`

    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
// console.log(myFirstCar.toString());
// console.log(myFirstCar.numWheels);


// Part Three

class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 2;
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
    revEngine(){
        return "VROOM!"
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
// console.log(myFirstMotorcycle.toString());
// console.log(myFirstMotorcycle.honk());
// console.log(myFirstMotorcycle.revEngine());
// console.log(myFirstMotorcycle.numWheels);

//Part Four

class Garage{
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];  
        
    }
    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return "Vehicle only"
        }
        if(this.vehicles.length >= this.capacity){
            return "full"
        }
        this.vehicles.push(newVehicle);
        return "added"
    }


}

let garage = new Garage(2);


