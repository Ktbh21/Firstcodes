

let randomnum1 =Math.floor(Math.random()*6)+1;
let randomnum2 =Math.floor(Math.random()*6)+1;

let dice1result = "images//dice" + randomnum1 + ".png";
let dice2result = "images//dice" + randomnum2 + ".png";

let firstdiceimg = document.querySelector(".firstdice img");
let seconddiceimg = document.querySelector(".seconddice img");

firstdiceimg.setAttribute("src", dice1result);
seconddiceimg.setAttribute("src", dice2result);


if (randomnum1 === randomnum2){
  document.querySelector(".maintitle").textContent ="It's a Draw, Refresh again"
} else if (randomnum1 > randomnum2) {
  document.querySelector(".maintitle").textContent ="Player 1 wins, Now please choose"
} else {
document.querySelector(".maintitle").textContent ="Player 2 wins, Now please choose"
}


  /* Kevin's own noob solution*/
  /*

    let secondgen = seconddicegen();
    let firstgen = firstdicegen();
    let winner = diceresult();

    let titleselect = document.querySelector(".maintitle");
    let imgselectd1 = document.querySelector(".firstdice img");
    let imgselectd2 = document.querySelector(".seconddice img");
    let diceimage = ["images\\dice1.png", "images\\dice2.png","images\\dice3.png","images\\dice4.png","images\\dice5.png", "images\\dice6.png"]

    function firstdicegen () {
     let firstnumber = Math.floor(Math.random()*6)+1;
     return firstnumber;
    }
    function seconddicegen() {
      let secondnumber = Math.floor(Math.random()*6)+1;
       return secondnumber;
    }

    function diceresult(){
      var tally = (firstgen - secondgen);
      return tally;
    }

    if (winner === 0){
      titleselect.textContent ="It's a Draw, Refresh again"
    } else if (winner >0 && winner <7) {
      titleselect.textContent ="Player 1 wins, Now please choose"
    } else {
    titleselect.textContent ="Player 2 wins, Now please choose"
    }


    switch (firstgen){
    case 1: imgselectd1.setAttribute("src", diceimage[0]);
    break;
    case 2: imgselectd1.setAttribute("src", diceimage[1]);
    break;
    case 3: imgselectd1.setAttribute("src", diceimage[2]);
    break;
    case 4: imgselectd1.setAttribute("src", diceimage[3]);
    break;
    case 5: imgselectd1.setAttribute("src", diceimage[4]);
    break;
    case 6: imgselectd1.setAttribute("src", diceimage[5]);
    break;
  }

    switch (secondgen){
    case 1: imgselectd2.setAttribute("src", diceimage[0]);
    break;
    case 2: imgselectd2.setAttribute("src", diceimage[1]);
    break;
    case 3: imgselectd2.setAttribute("src", diceimage[2]);
    break;
    case 4: imgselectd2.setAttribute("src", diceimage[3]);
    break;
    case 5: imgselectd2.setAttribute("src", diceimage[4]);
    break;
    case 6: imgselectd2.setAttribute("src", diceimage[5]);
    break;
  }
*/
