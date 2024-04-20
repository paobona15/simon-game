var buttons = [];
var playerButtons = [];
$("body").keypress(function(event) {
    
    gamePattern();
    
    console.log(buttons);
    console.log(event.target);
}
)
function gameStart() {

}
function gamePattern() {
    var colorPattern = Math.floor(Math.random()*4)+1;
    buttons.push(colorPattern);
    $("h1").text("Level " + buttons.length)
    for (var x=1; x<=4; x++) {
    if (colorPattern===x) {
    $(".btn").eq(x-1).animate({opacity: 0.5});
    setTimeout($(".btn").eq(x-1).animate({opacity: 1}), 1000)
    }
    switch (colorPattern) {
        case 1:
            var audio = new Audio("./sounds/green.mp3");
            audio.play();
            break;
        case 2:
            var audio = new Audio("./sounds/red.mp3");
            audio.play();
            break;
        case 3:
            var audio = new Audio("./sounds/yellow.mp3");
            audio.play();
            break;
        case 4:
            var audio = new Audio("./sounds/blue.mp3");
            audio.play();
            break;
        default:
            break;
    }
}
}