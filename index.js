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
    $("h1").text("Level " + level)
    var randomNumber = Math.floor(Math.random()*4)-1;
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
    
    }
)
