"use strict";

class player{
    
   
   
    constructor(name){
        this.score = 0;
        this.name = name;
        this.gesture = null;

    }


}




class player extends computer{
    
    
    constructor(){

    }

}




class game{
   
   
    constructor(){
        this.gesture = gestureChosen;
        this.playerOne = new player(" ");
        this.playerTwo = new player(" ");
        this.gesture = ["rock", "paper", "scissors", "lizzard", "spock"];


    }


} 
 
let game = new game();
let player = new playerOne(" ");
let player = new playerTwo(" ");
console.log("game", game);