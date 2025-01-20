let userSeq=[];
let gameSeq=[];
let started=false;
let level=0;


let h2=document.querySelector("h2");
let btns=["yellow" , "red","purple", "green" ]



document.addEventListener("keypress", function()
{
    if(started==false)
    {
     console.log("game started!")
        start=true;
    }
  
    levelUp();
});




function gameFlash(btn)
{
    btn.classList.add("flash")
    setTimeout(function( ) {
       btn.classList.remove("flash")
    }, 125);
}



function levelUp()
{
    userSeq=[];
level++;
h2.innerText=`Level ${level}`;
//random btn
let randIdx=Math.floor(Math.random()*3)
let randColor=btns[randIdx];
 let randBtn=document.querySelector(`.${ randColor}`);
 gameSeq.push(randColor)
 console.log(gameSeq);
    gameFlash(randBtn);
}


function userFlash(btn)
{
    btn.classList.add("userflash")
    setTimeout(function( ) {
       btn.classList.remove("userflash")
    }, 125);
}

function checkAns(idx)
{
    
    if(userSeq[idx]==gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
        {
           setTimeout(levelUp,1000)
        }
       

    }else{
        h2.innerHTML=`game Over! Your Score is <b>${level}</b> <br> Press Any key to Start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function()
    {
        document.querySelector("body").style.backgroundColor="white";
    },350)
        reset();
    }
}

function btnPress()
{
    let btn=this;
    userFlash(btn);


    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    
}


let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click" , btnPress);
}

function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}