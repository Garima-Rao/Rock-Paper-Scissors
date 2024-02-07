let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const drawGame=()=>{
    msg.innerText="Game was draw.Play again.";
    msg.style.backgroundColor="#081b31";
    // console.log("game was draw");
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        // console.log("you win!");
    }
    else{
       compScore++;
       compScorePara.innerText=compScore;
       msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
       msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
    // console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    // console.log("comp choice=",compChoice);
    if(userChoice===compChoice){
        //draw game
      drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
        //scissor,paper
        userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
           userWin=compChoice==="scissors"?false:true;
        }
         else{
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

const genCompChoice=()=>{
    //rock paper scissor
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    // console.log("choice was clicked",userChoice);
    playGame(userChoice);
    });
});