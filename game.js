
let userClickedPattern=[];
let buttonColors = ["red","blue","green","yellow"];
let gamePattern = [];
let level = 0;
// alert("Hello World");
$(document).keypress(function (e) { 
    // alert("You Pressed A Key")
    nextSequence();
});

$(".btn").click(function()
{
    // let x =  $(":button").attr('id');
    // console.log(x);
    // alert($(".btn").attr("id"));
    // alert(this);
    // console.log(this.attr('id'));
    let userChosenColour = $(this).attr("id");
    // console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern)
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    
});
function checkAnswer(currentLevel)
{
    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
  
        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length){
  
          //5. Call nextSequence() after a 1000 millisecond delay.
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } else {
  
        console.log("wrong");
        let audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");}
        ,200);
        $("#level-title").html("Game Over, Press Any Key to Restart");
        startOver();
      }
}
function nextSequence() 
{
    userClickedPattern=[];
    level+=1;
    $("#level-title").html("level-"+level);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    
    //1. Use jQuery to select the button with the same id as the randomChosenColour
    //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
    let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
    
}
function playSound(name) 
{
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor)
{
    let x = "."+currentColor;
    $(x).addClass("pressed");
    setTimeout(function()
    {
        $(x).removeClass("pressed");
    },100);
    // $(this).removeClass("pressed","100");
}
function startOver()
{
    userClickedPattern=[];
    buttonColors = ["red","blue","green","yellow"];
    gamePattern = [];
    level = 0;
}