let userScore=0;
let compScore=0;
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
// const compitem=document.querySelector("#comp-item");
// const useritem=document.querySelector("#user-item");


const genCompChoice=()=>{
    const options=['rock','paper','scissors'];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game Draw!";
    msg.style.backgroundColor="#081b31";

};

const showWinner=(userWin,compChoice,userChoice)=>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win ,your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose ,${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor="red";


    }
};

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    // compitem.innerText=userChoice;
    // useritem.innerText=compChoice;

    if(userChoice===compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper")
        {
            userWin=compChoice==="scissors" ? false :true;
        }
        else
        {
            userWin=compChoice==="rock" ? false :true;
        }
        showWinner(userWin,compChoice,userChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);

    })
})
