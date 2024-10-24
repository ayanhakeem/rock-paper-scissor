let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");


const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="game was draw,play again!";
    msg.style.backgroundColor="#081b31";
};

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win!");
        msg.innerText="you win!";
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose");
        msg.innerText="you lose. play again!";
        msg.style.backgroundColor="red";
    }
    
};

const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};

const playgame=(userchoice) => {
    console.log("userchoice=",userchoice);
    const compchoice=gencompchoice();
    console.log("compchoice=",compchoice);

    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playgame(userchoice);

    });
});

