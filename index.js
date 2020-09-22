"use strict";

class player{
    
   constructor(name){
        this.score = 0;
        this.name = name;
        this.gesture = ["rock", "paper", "scissors", "lizzard", "spock"];
        this.gestureChosen = null;
    }
}

class player extends computer{
    
    constructor(){
        super();
        this.score = 0;
        this.name = name;
        this.gesture = ["rock", "paper", "scissors", "lizzard", "spock"];
        this.gestureChosen = gesture[result];;
        let result = Math.floor(Math.random() * gesture.length);
    }
}

class game{
    constructor(){
        this.gesture = gestureChosen;
        this.playerOne = new player("Aj");
        this.playerTwo = new player("Douglas");
    }
}
   
   function displayRules(){
        var user = prompt('The rules are : Each player has a turn. Player 1 then Player 2. Whichever players chosen gesture has a winning value will recieve a point. The first player to score 2 points wins. "gestures are as follows. Rock. Paper. Scissors. Lizard. Spock. 0 Rock beats scisors and lizard. 1 paper beats rock and spock. 2 scissors beats paper and lizard. 3 lizard beats spock and paper. 4 spock beats rock and scissors.');
        switch (user){
            case '1':
                playerOne = new human(' ');
                playerTwo = new human(' ');
              break;
              case '2':
                playerOne = new human(' ');
                playerTwo = new computer();
              break;
              default:
                displayRules(); // restart function
           break;
        }
    }
    displayRules();
    
    function ruleSet(){
        while (playerOne.score < 2 && playerTwo.score < 2){
                playerOne.ChooseGesture();
                playerTwo.ChooseGesture();
                CompareGestures();
         }            
    }
    function createScoring(){
        if (playerOne.score > 2 || playerTwo.score > 2)
        {
            console.log("Game Over");
        }
        else if (playerOne.score < 2 || playerTwo.score < 2) 
        {
            playerOne.ChooseGesture();
        }
    }
    ruleSet();

    function selectGesture(){
        
        // YOULL NEED TO REDO THIS BUT THIS IS THE BASIC THING

       let  user = prompt('press 0 for rock, 1 for paper, 2 for scissors, 3 for lizard, 4 for spock.');
       switch (user){
           
          case '1':
              gesture[0] = gestureChosen();
             console.log(playerChoice);
             
            break;
          case '2':
              gesture[1] = gestureChosen();
             console.log(playerChoice);
           break;
           case '3':
              gesture[2] = gestureChosen();
              console.log(playerChoice);
               break;
           case '4':
              gesture[3] = gestureChosen();
               console.log(playerChoice);
            break;
           default:
              selectGesture(); // restart function
           break;
        }
    }
    selectGesture();

    function compareGesture(){
        if (playerOne.gesture == playerTwo.gesture)
        {
            Console.log("Tie");
        }
        else if (playerOne.gesture == "rock")
        {
            if (playerTwo.gesture == "scissors" || playerTwo.gesture == "lizard")
            {
                playerOne.score++;
            }
            else
            {
                playerTwo.score++;
            }
        }
        else if (playerOne.gesture == "paper")
        {
            if (playerTwo.gesture == "rock" || playerTwo.gesture == "spock")
            {
                playerOne.score++;
            }
            else 
            {
                playerTwo.score++;
            } 
        }
        else if (playerOne.gesture == "scissors")
        {
            if (playerTwo.gesture == "paper" || playerTwo.gesture == "lizard")
            {
                playerOne.score++;
            }
            else
            {
                playerTwo.score++;
            }
        }
        else if (playerOne.gesture == "lizard")
        {
            if (playerTwo.gesture == "spock" || playerTwo.gesture == "paper")
            {
                playerOne.score++;
            }
            else
            {
                playerTwo.score++;
            }
        }
        else if (playerOne.gesture == "spock")
        {
            if (playerTwo.gesture == "rock" || playerTwo.gesture == "scissors")
            {
                playerOne.score++;
            }
            else
            {
                playerTwo.score++;
            }
          }
       }
       compareGesture();
    
let game = new game();
let player = new playerOne("Aj");
let player = new playerTwo("Douglas");
console.log("game", game);