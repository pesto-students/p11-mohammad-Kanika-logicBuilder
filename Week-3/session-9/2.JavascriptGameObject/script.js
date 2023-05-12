games ={
    lives:3,
    coins:0,
    points:function(){
        let x= this.points=this.coins*10;
        this.coins=2;
       
    },
    playerdies:function(){
        if(this.lives>0) this.lives=this.lives-1;
    },

    
    newGame:function(){
        this.lives=3;
        this.coins=0;
    }
}

console.log("lives = ",games.lives);
console.log("Coins = ",games.coins);
let p=games.points()
console.log("points = ",p);
 p=games.points()
console.log("points = ",p);
games.playerdies();
console.log("lives = ",games.lives);
games.playerdies();
games.playerdies();
console.log("lives = ",games.lives);
games.newGame()
console.log("lives = ",games.lives);
console.log("coin = ",games.coins);


