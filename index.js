var buttonColor = ["green","red","yellow","blue"]
var gamePattern = [];
var userPattern = [];
var start = false;
var level = 0 ;




$(document).keydown("A",function()
{
    if(start === false)
    {
        // level++;
        
        start = true;
        nextSequence()

    }
})


$(".Start_button").click(function()
{
    if(start === false)
    {
        start = true;
        nextSequence()
        $(this).hide();
    }
    
})




function nextSequence()
{
    level++;
    userPattern = [];
    var randomColor = Math.floor((Math.random()*4));
    gamePattern.push(buttonColor[randomColor]);
    animateButton(buttonColor[randomColor]);
    playSound(buttonColor[randomColor]);
    $("h1").text("LEVEL " + level);

   
    
}


$(".btn").click(function(event)
{
    var userColor = event.target.id;
    userPattern.push(userColor)
    animateButton(userColor);
    playSound(userColor);
    gamePlay(userPattern.length-1)

});

function gamePlay(index){
    if(gamePattern[index] === userPattern[index]){

        if(gamePattern.length === userPattern.length){
            setTimeout(function(){
                nextSequence()
            },1000)
        }
        
    }
    else{
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },100)
        playSound("wrong");
        $("h1").text("Game Over Press any Button to Play Again \n Your Score is " +(level -1));
        gameOver()
    }
}

function gameOver(){
    start = false;
    gamePattern = [];
    level = 0;
}


function animateButton (color)
{
    $("."+color).addClass("pressed");

    setTimeout(function(){
        $("."+color).removeClass("pressed");
    },100)

}


function playSound(btn){
    var audio = new Audio("./sounds/"+btn+".mp3");
    audio.play();

}


