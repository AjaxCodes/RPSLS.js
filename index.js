"use strict";

class player{
    
    constructor(){
        this.score = 0;
        this.name = null;;
        this.gesture = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        this.gestureChosen = null;
    }
}

class human extends player{
    
   constructor(){
        super();
       
        createName();
    }
    createName(){
        prompt('enter your name.')
        this.name = userInput
        console.log(userInput);
     }

     selectGesture(){
        let  user = prompt('press 0 for rock, 1 for paper, 2 for scissors, 3 for lizard, 4 for spock.');
       switch (user){
           
          case '1':
            gestureChosen = gesture[0];
             console.log(gestureChosen);
             
            break;
          case '2':
            gestureChosen = gesture[1];
             console.log(gestureChosen);
           break;
           case '3':
            gestureChosen = gesture[2];
              console.log(gestureChosen);
               break;
           case '4':
            gestureChosen = gesture[4];
               console.log(gestureChosen);
            break;
           default:
              selectGesture(); // restart function
           break;
        }
    }
}

class computer extends player{
    
    constructor(){
        super();
    }
    createName(){
        this.name = 'Steve Dave';
    }

    selectGesture(){
        let result = Math.floor(Math.random() * gesture.length);
        this.gestureChosen = gesture[result];;
    }
}

class game{
    constructor(){
        this.gesture = gestureChosen;
        this.playerOne = null;
        this.playerTwo = null;
    }

    displayRules(){
        var user = prompt('The rules are : Each player has a turn. Player 1 then Player 2. Whichever players chosen gesture has a winning value will recieve a point. The first player to score 2 points wins. "gestures are as follows. Rock. Paper. Scissors. Lizard. Spock. 0 Rock beats scisors and lizard. 1 paper beats rock and spock. 2 scissors beats paper and lizard. 3 lizard beats spock and paper. 4 spock beats rock and scissors.');
        switch (user){
            case '1':
               this.playerOne = new human();
                this.playerTwo = new human();
              break;
              case '2':
                this.playerOne = new human();
                this.playerTwo = new computer();
              break;
              default:
                displayRules(); // restart function
           break;
        }
    }

    ruleSet(){
        while (playerOne.score < 2 && playerTwo.score < 2){
                playerOne.ChooseGesture();
                playerTwo.ChooseGesture();
                CompareGestures();
         }            
    }

    createScoring(){
        if (playerOne.score > 2 || playerTwo.score > 2)
        {
            console.log("Game Over");
        }
        else if (playerOne.score < 2 || playerTwo.score < 2) 
        {
            playerOne.ChooseGesture();
        }
    }

    compareGesture(){
        if (playerOne.gestureChosen === playerTwo.gestureChosen)
        {
            Console.log("Tie");
        }
        else if (playerOne.gestureChosen === "rock")
        {
            if (playerTwo.gestureChosen === "scissors" || playerTwo.gestureChosen === "lizard")
            {
                playerOne.score++;
            }
            else
            {
                playerTwo.score++;
            }
        }
        else if (playerOne.gestureChosen === "paper")
        {
            if (playerTwo.gestureChosen === "rock" || playerTwo.gestureChosen === "spock")
            {
                playerOne.score++;
            }
            else 
            {
                playerTwo.score++;
            } 
        }
        else if (playerOne.gestureChosen === "scissors")
        {
            if (playerTwo.gestureChosen === "paper" || playerTwo.gestureChosen === "lizard")
            {
                playerOne.score++;
            }
            else
            {
                playerTwo.score++;
            }
        }
        else if (playerOne.gestureChosen === "lizard")
        {
            if (playerTwo.gestureChosen === "spock" || playerTwo.gestureChosen === "paper")
            {
                playerOne.score++;
            }
            else
            {
                playerTwo.score++;
            }
        }
        else if (playerOne.gestureChosen === "spock")
        {
            if (playerTwo.gestureChosen === "rock" || playerTwo.gestureChosen === "scissors")
            {
                playerOne.score++;
            }
            else
            {
                playerTwo.score++;
            }
          }
       }
    
    
}
let game = new game();
console.log("game", game);