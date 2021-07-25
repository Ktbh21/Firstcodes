//Creating the pattern//
//Detecting player click $(.btn).click(function () {})
//Detecting start btn  $(document).keypress(function () {})

//for animating the boxes TRYING TO SELECT THE BOX??  pcseq.length-1

/*function btnsel () {
if (pcpattern === "red")
{$("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)}
else if (pcpattern === "blue") {$("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100) }
else if (pcpattern === "yellow") {$("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100) }
else {$("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)  }

$("#" + pcpattern).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


}*/

/* Angela method for starter
var started = false;
$(document).keypress(function() {
  if (!started) {
      nextSequence();
      started = true;
    }
  });
 */

 // function for checking user seq against pc sequence
 //if checker is true generate next pc seq? pass in user seq length?
 //return index of user seq to this function to check? need length checker? sample function below
 /*{
  var a = [1, 2, 3, 5];
  var b = [1, 2, 3, 5];
   // if length is not equal
   if(a.length!=b.length)
    return "False";
   else
   {
   // comapring each element of array
    for(var i=0;i<a.length;i++)
    if(a[i]!=b[i])
     return "False";
     return "True";
   }
 }

 function checker (currentlv){

   for(var i=0;i<pcseq.length;i++)
    if(pcseq[i]!=playerseq[i])
     return "False";
     return "True";
 }

 */





//default vals
let playerseq = [];
let pcseq = [];
let pcdefault = ["red", "blue", "green", "yellow"];
let counter = 0



//Start functions and sequences
//Listener on doc for start, will trigger pc sequence when number is 0
//Run detect first to ensure counter 0
$(document).on("keypress", function(){
detect();
})

function detect () {
if (counter === 0) {
randNum();
} else {
$(document).off("keypress", function(){
return})
}

}


//function to generate PC seq
function randNum () {
var numgen = Math.floor(Math.random () * 4 );
var pcpattern = pcdefault[numgen];
pcseq.push(pcpattern);
//update counter var
counter ++
//dump player array
playerseq.length = 0;
//update h1 title
$("#level-title").text("level " + counter)

//fade effect for button
$("#" + pcpattern).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)

//generate sound for button
soundPlayer(pcpattern);
}

//PLAYER sequence, store player seq in array and insert animation
$(".btn").on("click", function (event)  {
var playerpress = event.target.id;
playerseq.push(playerpress);

//$("#" + playerpress).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
soundPlayer(playerpress);
animatePress(playerpress);
//checker for user answer
checker(playerseq.length-1);

})


function checker (currentlv) {

if (pcseq[currentlv] === playerseq[currentlv]) {
if (pcseq.length === playerseq.length) {
  setTimeout(function () {
    randNum();
  }, 1000)}
} else {
restartGame();
}
}


//function for restarting
function restartGame () {
  $("body").addClass("game-over");
  $("h1").text("Wrong answer, Press anykey to restart");
  soundPlayer("wrong")
  setTimeout(function () {
    $("body").removeClass("game-over");
  },300)
  playerseq.length = 0;
  pcseq.length = 0;
  counter = 0;



}


// function for sound and audio
function soundPlayer(name) {
var sound = new Audio("sounds\\" + name + ".mp3");
sound.play();
}

//function for animating keypresses
function animatePress(currcol) {
$("#" + currcol).addClass("pressed");
  setTimeout(function () {
$("#" + currcol).removeClass("pressed")
}, 100);

}
