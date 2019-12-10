let playerRightNow ="O"
let alternateTurn = 0;
let endGame = false;

var button1 = button1
var button2 = button2
var button3 = button3
var button4 = button4
var button5 = button5
var button6 = button6
var button7 = button7
var button8 = button8
var button9 = button9

function switchPlayers() {
    alternateTurn = alternateTurn + 1
    if (playerRightNow === "X") {
        playerRightNow = "O";
    }
    else if (playerRightNow = "O"){
        playerRightNow = "X";
    }
}

function tieGame() {
    if(alternateTurn > 8 && endGame === false){
        $("h2").text("It's a tie!");
        endGame = true;
    }
}

function checkHorizontalWins() {
    win("#tile1", "#tile2", "#tile3"); 
    win("#tile4", "#tile5", "#tile6"); 
    win("#tile7", "#tile8", "#tile9");
}


function checkVerticalWins() {
    win("#tile1", "#tile4", "#tile7"); 
    win("#tile2", "#tile5", "#tile8"); 
    win("#tile3", "#tile6", "#tile9");
}

function checkDiagonalWins() {
    win("#tile1", "#tile5", "#tile9"); 
    win("#tile3", "#tile5", "#tile7"); 
}
function performLogic(button,tile) {
    if (gameIsOver === false) {
    $(button).hide();
    $(tile).html(alternateTurn);
    checkVerticalWins();
    checkDiagonalWins():
    checkHorizontalWins();
    tieGame();
    }


$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

