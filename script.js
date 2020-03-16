function moveCheck(){
var tableContainer = document.getElementById("table-container");
var display = document.getElementById("XOXO-display");
//var emptyDisplay = document.getElementById("empty");
var blockOne = document.getElementById("block-one");
var blockTwo = document.getElementById("block-two");
var blockThree = document.getElementById("block-three");
var blockFour = document.getElementById("block-four");
var blockFive = document.getElementById("block-five");
var blockSix = document.getElementById("block-six");
var blockSeven = document.getElementById("block-seven");
var blockEight = document.getElementById("block-eight");
var blockNine = document.getElementById("block-nine");
var moves = 0;
// declaring blocks

//declaring move
var move = 0;

//onclick condition
tableContainer.onclick = function increase(){

 
    move++;
    if(move%2){
        var XOXO = "O";
      // console.log(XOXO);
    }
    else{
        XOXO = "X";
        //console.log(XOXO);
    }

    blockOne.onclick = function showInOne(){
        blockOne.innerHTML = (XOXO);
        blockOne = XOXO;
        console.log(blockOne);
        moves++;
        console.log(moves);
    }

    blockTwo.onclick = function showInTwo(){
        blockTwo.innerHTML = (XOXO);
        blockTwo = XOXO;
        console.log(blockTwo);
        moves++;
        console.log(moves);
    }

    blockThree.onclick = function showInThree(){
        blockThree.innerHTML = (XOXO);
        blockThree = XOXO;
        console.log(blockThree);
        moves++;
        console.log(moves);
    }

    blockFour.onclick = function showInFour(){
        blockFour.innerHTML = (XOXO);
        blockFour = XOXO;
        console.log(blockFour);
        moves++;
        console.log(moves);
    }

    blockFive.onclick = function showInFive(){
        blockFive.innerHTML = (XOXO);
        blockFive = XOXO;
        console.log(blockFive);
        moves++;
        console.log(moves);
    }

    blockSix.onclick = function showInSix(){
        blockSix.innerHTML = (XOXO);
        blockSix = XOXO;
        console.log(blockSix);
        moves++;
        console.log(moves);
    }

    blockSeven.onclick = function showInSeven(){
        blockSeven.innerHTML = (XOXO);
        blockSeven = XOXO;
        console.log(blockSeven);
        moves++;
        console.log(moves);
    }

    blockEight.onclick = function showInEight(){
        blockEight.innerHTML = (XOXO);
        blockEight = XOXO;
        console.log(blockEight);
        moves++;
        console.log(moves);
    }

    blockNine.onclick = function showInNine(){
        blockNine.innerHTML = (XOXO);
        blockNine = XOXO;
        console.log(blockNine);
        moves++;
        console.log(moves);
    }

    if(
        blockOne === "O" && blockTwo === "O" && blockThree === "O" ||
        blockOne === "O" && blockFour === "O" && blockSeven === "O" ||
        blockOne === "O" && blockFive === "O" && blockNine === "O" ||
        blockSeven === "O" && blockEight === "O" && blockNine === "O" ||
        blockThree === "O" && blockFive === "O" && blockSeven === "O" ||
        blockThree === "O" && blockSix === "O" && blockNine === "O" ||
        blockFour === "O" && blockFive === "O" && blockSix === "O" ||
        blockTwo === "O" && blockFive === "O" && blockEight === "O"
    ){
        alert("O's Won");
        console.clear();
        console.log(" O's Won");
        document.write("Reload the page to play again!");
    }

   else if(
        blockOne === "X" && blockTwo === "X" && blockThree === "X" ||
        blockOne === "X" && blockFour === "X" && blockSeven === "X" ||
        blockOne === "X" && blockFive === "X" && blockNine === "X" ||
        blockSeven === "X" && blockEight === "X" && blockNine === "X" ||
        blockThree === "X" && blockFive === "X" && blockSeven === "X" ||
        blockThree === "X" && blockSix === "X" && blockNine === "X" ||
        blockFour === "X" && blockFive === "X" && blockSix === "X" ||
        blockTwo === "X" && blockFive === "X" && blockEight === "X"
    ){
        alert("X's Won");
        console.clear();
        console.log("X's Won");
        document.write("Reload the page to play again!");


    }  
if(moves === 9 &&
    !(
        blockOne === "X" && blockTwo === "X" && blockThree === "X" ||
        blockOne === "X" && blockFour === "X" && blockSeven === "X" ||
        blockOne === "X" && blockFive === "X" && blockNine === "X" ||
        blockSeven === "X" && blockEight === "X" && blockNine === "X" ||
        blockThree === "X" && blockFive === "X" && blockSeven === "X" ||
        blockThree === "X" && blockSix === "X" && blockNine === "X" ||
        blockFour === "X" && blockFive === "X" && blockSix === "X" ||
        blockTwo === "X" && blockFive === "X" && blockEight === "X" ||
        blockOne === "O" && blockTwo === "O" && blockThree === "O" ||
        blockOne === "O" && blockFour === "O" && blockSeven === "O" ||
        blockOne === "O" && blockFive === "O" && blockNine === "O" ||
        blockSeven === "O" && blockEight === "O" && blockNine === "O" ||
        blockThree === "O" && blockFive === "O" && blockSeven === "O" ||
        blockThree === "O" && blockSix === "O" && blockNine === "O" ||
        blockFour === "O" && blockFive === "O" && blockSix === "O" ||
        blockTwo === "O" && blockFive === "O" && blockEight === "O"
    )
    ){
        console.log("its a draw");
        alert("It's a draw; Refresh the page to play again:)");
        moves--;
}

} 


}



moveCheck();



