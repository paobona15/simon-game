var buttons = [];
$("body").click(function(event) {
    gamePattern();
    console.log(event.target);
    console.log(buttons);
}
)
function gameStart() {

}
function gamePattern() {
    var colorPattern = Math.round(Math.random()*3)+1;
    buttons.push(document.querySelectorAll(".btn")[x-1]);
    for (var x=1; x<=4; x++) {
    if (colorPattern===x) {
    $(".btn").eq(x-1).animate({opacity: 0.5});
    }

 
    //setTimeout(function (), 1000);
}
}