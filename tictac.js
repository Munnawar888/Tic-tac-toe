console.log('Welcome to tictactoe')
let winmusic = new Audio("winner.mp3")
let Turn = new Audio("turn.mp3")
let Gameover = new Audio("gameover.mp3")
let turn = "X"
let gameover = false;
//function to change turn
const changeTurn = () =>{
    return turn === "X"? "0": "X"
}

//function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
     wins.forEach(e =>{
     if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== ("") )) 
     { document.querySelector('.info').innerText = boxtext[e[0]].innerText + "won"
         gameover= true 
         document.querySelector('.img').style.width = '100px';
    } 

}) 
}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            Turn.play();
            checkWin();
            if (!gameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;}
              
        }
    }
    )
})

//reset
let reset = document.querySelector('#reset');
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ''
    });
    turn = "X";
    isgameover = false
    document.getElementsByClassName('info')[0].innerText ="Turn for" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})