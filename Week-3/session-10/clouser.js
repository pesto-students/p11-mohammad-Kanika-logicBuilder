function counter(){
    let count=0
    return function (){
        return count=count+1
    }
}
// when we called a counter function the return function got attached to counter() function obejct
// 1. {}
//2 {}.function(){ return count=count+1}
// we return the this value we created in first step
let firstCounter= new counter();
let secondCounter= new counter();
// calling firstCounter 5 times
let arrAnsFistCounter=[];
for (i=0;i<5;i++){
    arrAnsFistCounter.push(firstCounter());

}
// calling second counter three times 
let arrAnsSecondCounter =[];
for(i=0;i<3;i++){
    arrAnsSecondCounter.push(secondCounter());
};

console.log("firstValuesArray:",arrAnsFistCounter);
console.log("secondValuesArray:",arrAnsSecondCounter);



