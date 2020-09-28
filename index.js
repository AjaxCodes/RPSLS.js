"use strict";

class Player{
    constructor(name){
        this.score = 0;
        this.name = name;
    }
}
    class Human extends Player{
    constructor(name){
        super(name);
       this.createName();
    }
    createName(){
        let userInput = prompt('WHAT IS YOUR NAME!');
        return userInput;
    }

    selectGesture(gesture){
        let userInput = prompt('press 1: for Rock, 2: for Paper, 3: for Scissors, 4: for Lizard, 5: for Spock.');
       switch (userInput){
           
        case '1':
            this.gestureChosen = gesture[0];
            console.log(this.gestureChosen);
            return this.gestureChosen;
        case '2':
            this. gestureChosen = gesture[1];
            console.log(this.gestureChosen);
            return this.gestureChosen;
        case '3':
            this.gestureChosen = gesture[2];
            console.log(this.gestureChosen);
            return this.gestureChosen;
         case '4':
            this.gestureChosen = gesture[3];
            console.log(this.gestureChosen);
            return this.gestureChosen;
        case '5':
            this.gestureChosen = gesture[4];
            console.log(this.gestureChosen);
            return this.gestureChosen;
        default:
             this.selectGesture(gesture); // restart function
        break;
        }
    }
}

class Computer extends Player{
    constructor(name){
        super(name);
        
        
    }
    selectGesture(gesture){
        let result = Math.floor(Math.random() * gesture.length);
        this.gestureChosen = gesture[result];;
    }
    
}
class Game{

    constructor(){
        this.playerOne = null;
        this.playerTwo = null;
        this.gesture = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
        this.gestureChosen = null;
       
    }
       

    runGame(){
        this.gameSetup();
        this.gameLoop();
        this.createScoring();
        
    }

    gameSetup(){
       let userInput = prompt('The rules are : Each player has a turn. Player 1 goes, then Player 2. Whichever players chosen gesture has a winning value will recieve a point. The first player to score 2 points wins. This is a best out of 3 series Gestures are as follows. Rock. Paper. Scissors. Lizard. Spock. 0: Rock beats Scissors, and Lizard. 1: Paper beats Rock, and Spock. 2: Scissors beats Paper, and Lizard. 3: Lizard beats Spock, and Paper. 4: Spock beats Rock, and Scissors. /////////  press :1 for 2 human players, and press 2: for human v computer');
        switch (userInput){
            case '1':
               this.playerOne = new Human('Tony');
               this.playerTwo = new Human('Ezekiel');
            break;
            case '2':
                this.playerOne = new Human();
                this.playerTwo = new Computer('T-1000');
            break;
            default:
                this.gameSetup(); // restart function
            break;
        }
    }

    gameLoop(){
        while (this.playerOne.score < 2 && this.playerTwo.score < 2){
               this.playerOne.selectGesture(this.gesture);
               this.playerTwo.selectGesture(this.gesture);
               this.compareGesture();
         }            
    }

    displayWinner(){
        if (this.playerOne.score > this.playerTwo.score ){
            console.log('Game Over', 'playerOne WINS!!!');
        }
        else if (this.playerOne.score < this.playerTwo.score ){
                console.log('Game Over', 'playerTwo WINS!!!');
        }
        
    }

    compareGesture(){
        if (this.playerOne.gestureChosen === this.playerTwo.gestureChosen){
            console.log('Tie');
        }
        else {
            if (this.playerOne.gestureChosen === 'Rock'){

            if (this.playerTwo.gestureChosen === 'Scissors'|| this.playerTwo.gestureChosen === 'Lizard'){
                this.playerOne.score++;
                console.log(this.playerOne.score);
            }
            else{
                this.playerTwo.score++;
                console.log(this.playerOne.score);
            }
        }
        else if (this.playerOne.gestureChosen === 'Paper'){

            if (this.playerTwo.gestureChosen === 'Rock' || this.playerTwo.gestureChosen === 'Spock'){
               this.playerOne.score++;
               console.log(this.playerOne.score);
               console.log(this.playerTwo.score);
            }
            else{
                this.playerTwo.score++;
                console.log(this.playerTwo.score);
            } 
        }
        else if (this.playerOne.gestureChosen === 'Scissors'){

            if (this.playerTwo.gestureChosen === 'Paper' || this.playerTwo.gestureChosen === 'Lizard'){
                this.playerOne.score++;
                console.log(this.playerOne.score);
                console.log(this.playerTwo.score);
            }
            else{
                this.playerTwo.score++;
                console.log(this.playerOne.score);
                console.log(this.playerTwo.score);
            }
        }
        else if (this.playerOne.gestureChosen === 'Lizard'){

            if (this.playerTwo.gestureChosen === 'Spock' || this.playerTwo.gestureChosen === 'Paper'){
                this.playerOne.score++;
                console.log(this.playerOne.score);
                console.log(this.playerTwo.score);
            }
            else{
                this.playerTwo.score++;
                console.log(this.playerOne.score);
                console.log(this.playerTwo.score);
            }
        }
        else if (this.playerOne.gestureChosen === 'Spock'){

            if (this.playerTwo.gestureChosen === 'Rock' || this.playerTwo.gestureChosen === 'Scissors'){
                this.playerOne.score++;
                console.log(this.playerOne.score);
                console.log(this.playerTwo.score);
            }
            else{
                this.playerTwo.score++;
                console.log(this.playerOne.score);
                console.log(this.playerTwo.score);
            }
        }
    }
}
}
let game = new Game;
game.runGame();