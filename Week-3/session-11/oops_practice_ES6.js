//-------------------------------------Inheritance----------------------------------------------

// Define the Vehicle class
class Vehicle {
    // Constructor function with 4 parameters
    constructor(make, year, model, color) {
      // Initialize instance properties with the provided values
      this.make = make;
      this.year = year;
      this.model = model;
      this.color = color;
    }
    
    // Method that logs the make and model of the vehicle
    drive() {
      console.log("Printing make and model of the vehicle")
      console.log(`${this.make} ${this.model}`)
    }
  }
  
  // Define the Car class that extends the Vehicle class
  class Car extends Vehicle {
    // Constructor function with 4 parameters
    constructor(make, model, year, color) {
      // Call the parent constructor with the provided values
      super(make, model, year, color);
    }
    
    // Getter for the numSeat property
    get numSeat() {
      return this._numseat;
    }
    
    // Setter for the numSeat property
    set numSeat(seat) {
      this._numseat = seat;
    }
  }
  
  // Define the RideShareCar class that extends the Car class
  class RideShareCar extends Car {
    // Constructor function with 5 parameters
    constructor(make, model, year, color, isAvailable) {
      // Call the parent constructor with the provided values
      super(make, model, year, color);
      
      // Initialize the isAvailable property with the provided value
      this.isAvailable = isAvailable;
    }
  }
  
  // Create a new instance of the RideShareCar class with some values for the constructor parameters
  let rideShareCar = new RideShareCar("Suzuki", "Swift desire", "2014", "white", true);
  
  // Log the rideShareCar object to the console
  console.log(rideShareCar);
  
  // Set the numSeat property to 3
  rideShareCar.numSeat = 3;
  
  // Log the updated rideShareCar object to the console
  console.log(rideShareCar);
  
  // Call the drive method of the rideShareCar instance to log the make and model of the vehicle
  rideShareCar.drive();


  //---------------------------------Polymorphisim---------------------------------------------------------

 // Define the base Shape class
class Shape{
    // Define the CalculateArea method, which will be overridden by subclasses
    CalculateArea(){

    }

  }

// Define the Rectangle subclass of Shape
  class Rectangle extends Shape {
    // Override the CalculateArea method to calculate the area of a rectangle
    CalculateArea(length,width){
        return length*width;
    }
  };

// Define the Triangle subclass of Shape
  class Triangle extends Shape {
    // Override the CalculateArea method to calculate the area of a triangle
    CalculateArea(base,height){
        return (base*height)/2;
    }
  };

// Define the Circle subclass of Shape
  class Circle extends Shape {
    // Override the CalculateArea method to calculate the area of a circle
    CalculateArea(radius){
        return Math.PI*radius*radius;
    }
  };

  // Create a new Rectangle object and calculate its area
  let rectangle = new Rectangle();
  console.log("area of Rectangle ",rectangle.CalculateArea(2,3));

  // Create a new Triangle object and calculate its area
  let triangle = new Triangle();
  console.log("area of triangle ",triangle.CalculateArea(10,3));

  // Create a new Circle object and calculate its area
  let circle = new Circle();
  console.log("area of Circle ",circle.CalculateArea(2));

  //------------------------------------------3 Abstraction and encapsulation-------------------------------

  // Define a BankAccount class that contains a constructor to set the initial values of account holder name, balance, and account number.
class BankAccount{
    #accountHolderName;
    #balance;
    #accountNumber
    constructor(accountHolderName,balance,accountNumber){
        this.#accountHolderName=accountHolderName;
        this.#accountNumber=accountNumber;
        this.#balance=balance;

    }
    // Define a method to withdraw money from the account.
    withdraw(amount){
        this.#balance=this.#balance-amount;

    }

    // Define a method to get the current balance of the account.
    getbalance(){
        return this.#balance
    }

    // Define a method to deposit money into the account.
    deposit(amount){
        this.#balance=this.#balance+amount;

    }

}

// Define a SavingAccount class that extends BankAccount and contains methods to withdraw and deposit money.
class SavingAccount extends BankAccount{

    // Define a method to withdraw money from the account, but check that there are sufficient funds before doing so.
    withdraw(amountWithdraw){
        let balance=super.getbalance();
        if(balance-amountWithdraw<=0){
            console.log("You cant withdraw Money Because you have less amount ");

        }
        else{
            super.withdraw(amountWithdraw);
            console.log("Balance after withdraw")
            console.log(super.getbalance());
        }
        
    }

    // Define a method to deposit money into the account and display the new balance.
    deposit(depositAmount){
        super.deposit(depositAmount);
        console.log("Balance after Deposit")
        console.log(super.getbalance());

    }
}

// Create a new SavingAccount object with initial values, and test its withdraw and deposit methods.
let savingAccount = new SavingAccount("Kanika",2926,"12345678");
console.log(savingAccount.getbalance());
savingAccount.withdraw(100);
savingAccount.withdraw(4000);

// Define a CheckingAccount class that extends BankAccount and contains methods to withdraw and deposit money.
class CheckingAccount extends BankAccount{
    // Define a method to withdraw money from the account and display the new balance.
    withdraw(amountWithdraw){
            super.withdraw(amountWithdraw);
            console.log("Balance after withdraw")
            console.log(super.getbalance());
    }

    // Define a method to deposit money into the account and display the new balance.
    deposit(depositAmount){
        super.deposit(depositAmount);
        console.log("Balance after Deposit")
        console.log(super.getbalance());

    }
}

// Create a new CheckingAccount object with initial values, and test its withdraw and deposit methods.
let checkingAccount = new CheckingAccount("Nivedita",2926,"123456789");
console.log(checkingAccount.getbalance());
checkingAccount.withdraw(100);
checkingAccount.withdraw(4000);
checkingAccount.deposit(1000);
