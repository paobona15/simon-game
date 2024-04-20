var buttonColours = ["red", "blue", "green", "yellow"];
var buttons = [];
var playerButtons = [];
var started = false;
var level = 0;

 $("body").keypress(function(event) {
    if (!started) {
        $("#level-title").text("Level " + level);
        gameStart();
        started = true;
    }

}
)

function gameStart() {
    level ++;
    $("h1").text("Level " + level)
    gamePattern();
}
function gamePattern() {
    playerButtons = [];
    $("h1").text("Level " + level)
    var randomNumber = Math.floor(Math.random()*4);
    var colorPattern = buttonColours[randomNumber];
    buttons.push(colorPattern);
    animateColor(colorPattern);
    playSound(colorPattern);
}
function animateColor(name) {

    $("#" + name).animate({opacity: 0.5});
    setTimeout($("#"+ name).animate({opacity: 1}), 1000)
    }



function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
    
$(".btn").click(function() {
    var userChosenColor = $(this).attr("id")
    animateColor(userChosenColor);
    playSound(userChosenColor);
    playerButtons.push(userChosenColor);
    checkAnswer(playerButtons.length-1);
    }
)
function checkAnswer(currentLevel) {
        if (playerButtons[currentLevel] === buttons[currentLevel]) {
            console.log("nice");
        if (playerButtons.length === buttons.length){
            setTimeout(function () {
              gameStart();
            }, 1000);
        }
        }
         else {
            $("h1").text("Game Over, Press Any Key to Restart");
            var audio = new Audio("sounds/wrong.mp3");
            audio.play();
            startOver();
        }
    }

function startOver() {
    started=false;
    buttons = [];
    level = 0;
}