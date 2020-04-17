
var userInput = document.getElementById("user_input");
var tiesCnt = 0;
var winsCnt = 0;
var lossCnt = 0;

document.getElementById("paragraph_1").innerText = "Press r, p or s to start playing:";

document.onkeyup = function(event){
    var value = event.key;
    if(value === "r" || value === "p" || value === "s")
    {
        correctValue(value);
    }
    else
        userInput.innerText = "Try again, please select a valid character.";
}

function correctValue(value){
    userInput.innerText = "You chose: " + value;

    var compValue = randomStr();
   document.getElementById("computer_chose").innerText = "Computer chose: " + compValue;

    if((value === 'p' && compValue === 'r') || (value === 'r' && compValue === 's') || (value === 's' && compValue === 'p'))
     ++winsCnt;

    if((value === 'r' && compValue === 'p') || (value === 's' && compValue === 'r') || (value === 'p' && compValue === 's'))
     ++lossCnt;

    if(compValue === value) 
      ++tiesCnt;
   

   document.getElementById("wins").innerText = "Wins: " + winsCnt;
   document.getElementById("loss").innerText = "Losses: " + lossCnt;
   document.getElementById("ties").innerText = "Ties: " + tiesCnt;

}

function randomStr(){
    var chars = "rps";
    var random = Math.floor(Math.random()*(chars.length));
    var randomChar = chars.substring(random, random+1);

    return randomChar;
}


