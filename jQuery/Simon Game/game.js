let started = true;
let level = 0;

//ARRAY OF BUTTON COLORS
let buttonColors = ['red', 'blue', 'green', 'yellow'];

//GAME PATERN - ARRAY SIM. OF MEMORY
let gamePattern = [];

//USER CLICKED PATTERN
let userClickedPattern = [];

//FUNTION nextSequence
function nextSequence() {
    userClickedPattern = [];
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level += 1;
    $("#level-title").text("Level " + level);
}

//USER CLICK ON BUTTON
$(".btn").click(function () {
    let userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

//FUNCTION TO PLAY EQUIVALENT SOUND
function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

//FUNCTION TO ANIMATE BUTTON
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
};

//START THE GAME WHEN A BUTTON IS CLICKED
$(document).keypress(function () {
    if (started === true) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = false;
    }
});

//CHECK ANSWER FUNCTION 
function checkAnswer(currentLevel) {
if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
} else {
    let wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
}
}

//FUNCTION TO RESTART THE GAME
function startOver() {
    level = 0;
    gamePattern = [];
    started = true;
}