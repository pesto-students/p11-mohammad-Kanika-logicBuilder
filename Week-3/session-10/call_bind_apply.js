class Calculator{
    constructor(numberOne,numberTwo){
        this.numberOne=numberOne;
        this.numberTwo=numberTwo;
    }
    add(numberOne,numberTwo){
        return numberOne+numberTwo;

    }
    subtract(numberOne,numberTwo){
        return numberOne-numberTwo;
    }
    multiply(numberOne,numberTwo){
        return numberOne*numberTwo;
    }
    divide(){
        return numberOne/numberTwo;
    }
    
}

class ScientificCalculator extends Calculator{
    square(numberOne){
        return Math.sqrt(numberOne);
    }
    cube(number){
        return Math.cbrt(numberOne);
    }
    power(number,power){
        return Math.pow(number,power);
    }
    
}
// new instance of ScientificCalculator
let scientificCalculatorObj = new ScientificCalculator();
let sum=Calculator.prototype.add.call(null,10,5);
console.log("sum of two number:",sum);

let difference=Calculator.prototype.subtract.apply(null,[10,5]);
console.log("difference between two numbers:",difference);

let multiplyBytwo = function (number){
    return number*2
}
let multiplyBytwoBind = scientificCalculatorObj.multiply.bind(multiplyBytwo,2);








