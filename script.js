console.log("Welcome to Biraj's Tic Tac Toe")
let music=new Audio("music.mp3")
let audioturn=new Audio("game.mp3")

let turnOfPlayer = "X"
let isgameover=false;

const changeTurn=()=>{

    return turnOfPlayer==="X"?"0":"X"
}

const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+ " WINS"
            isgameover=true
            document.querySelector('.excited-gif').getElementsByTagName('img')[0].style.width="200px"
        }

    })
}

let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText==''){
            boxtext.innerText=turnOfPlayer;
            turnOfPlayer=changeTurn();
            audioturn.play();
            checkWin();
            if(!isgameover)
            document.getElementsByClassName("info")[0].innerText="TURN FOR  "+turnOfPlayer;
        }
    })
})


reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext'); 
    Array.from(boxtexts).forEach(element =>{
        element.innerText=""
    });
    turnOfPlayer="X"
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText="TURN FOR  "+turnOfPlayer;
    document.querySelector('.excited-gif').getElementsByTagName('img')[0].style.width="0px"
})