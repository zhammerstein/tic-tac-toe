const square = document.getElementsByClassName("square");
const circle = document.getElementsByClassName("circle");
const cross = document.getElementsByClassName("cross");
const turntext = document.getElementsByClassName("turntext");
const wintext = document.getElementsByClassName("wintext");

let player1turn = true;
let player2turn = false;
let moves = 0;
let gameover = false;

for (let x = 0; x < 9; x++){

    square[x].addEventListener("click", function(){

        if (player1turn === true){
            
            

            if (cross[x].style.visibility === "visible"){
                return;
                
            }else{

            circle[x].style.visibility = "visible";
            player1turn = false;
            player2turn = true;
            moves += 1;
            winConditions();
            if (gameover === true){
                return;
            }else{
            turntext[0].textContent = "X's turn!";
            }
            }
            

        }else if (player2turn === true){

            if (circle[x].style.visibility === "visible"){
                return;

            }else{

            cross[x].style.visibility = "visible";
            player2turn = false;
            player1turn = true;
            moves += 1;
            winConditions();
            if (gameover === true){
                return;
            }else{
            turntext[0].textContent = "O's turn!";
            }
            }
        }
    });

}

function winConditions(){


    if (circle[0].style.visibility && circle[1].style.visibility && circle[2].style.visibility === "visible"
        || circle[3].style.visibility && circle[4].style.visibility && circle[5].style.visibility === "visible"
        || circle[6].style.visibility && circle[7].style.visibility && circle[8].style.visibility === "visible"
        || circle[2].style.visibility && circle[4].style.visibility && circle[6].style.visibility === "visible"
        || circle[0].style.visibility && circle[4].style.visibility && circle[8].style.visibility === "visible"
        || circle[0].style.visibility && circle[3].style.visibility && circle[6].style.visibility === "visible"
        || circle[1].style.visibility && circle[4].style.visibility && circle[7].style.visibility === "visible"
        || circle[2].style.visibility && circle[5].style.visibility && circle[8].style.visibility === "visible"
    ){
        player1turn = false;
        player2turn = false;
        turntext[0].textContent = "O wins!";
        turntext[0].style.color = "green";
        gameover = true;


    }else if (cross[0].style.visibility && cross[1].style.visibility && cross[2].style.visibility === "visible"
        || cross[3].style.visibility && cross[4].style.visibility && cross[5].style.visibility === "visible"
        || cross[6].style.visibility && cross[7].style.visibility && cross[8].style.visibility === "visible"
        || cross[2].style.visibility && cross[4].style.visibility && cross[6].style.visibility === "visible"
        || cross[0].style.visibility && cross[4].style.visibility && cross[8].style.visibility === "visible"
        || cross[0].style.visibility && cross[3].style.visibility && cross[6].style.visibility === "visible"
        || cross[1].style.visibility && cross[4].style.visibility && cross[7].style.visibility === "visible"
        || cross[2].style.visibility && cross[5].style.visibility && cross[8].style.visibility === "visible"
    ){
        player1turn = false;
        player2turn = false;
        turntext[0].textContent = "X wins!";
        turntext[0].style.color = "green";
        gameover = true;

}else{
    return;
}


}

const refresh = () => {
    window.location.reload(true);
}
