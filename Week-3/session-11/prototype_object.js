'use strict'
let Person=
{
    name:"kanika",
    email:"kala.kanika1998@gmail.com",
    getAge: function(){
        return this.age
    },
    setAge: function(ageValue){
        this.age=ageValue

    }
    
}
Object.defineProperty(Person,"name",{
    writable:false
});
Object.defineProperty(Person,"email", {
    writable:false 
});
Object.defineProperty(Person,"age",{
    set(ageValue){
        this.age=ageValue

        
    }
});
// below line will return undefined because age is only writable
console.log(Person.age);
console.log(Object.getOwnPropertyDescriptors(Person));
// if below line is uncommented will through an error becaise email is not writable
//Person.email="kanikakala";

//----------------------------------------2 Part----------------------------------------------------

class Vechile {
    constructor(make,model,year){

        this.model=model;
        this.make=make;
        this.year=year;
    }

         getDetails(){

            let result= `${this.make} ${this.model} ${this.year}`;
            return result;
        }

    }


class Car extends Vechile{
    constructor(numberDoor,make,model,year){
        super(make,model,year);
        this.numberDoor= numberDoor;

    }
    getDetails(){
        let str=super.getDetails()
        return str+" "+this.numberDoor;
    }
}

let vechile = new Vechile(2023,"KIA","EV6");
let car = new Car(2,"Mahindra","Thar",2023);
console.log(vechile.getDetails());
console.log(car.getDetails());



