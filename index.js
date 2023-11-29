
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var diceimgname1 = "images/dice" + randomnumber1 + ".png";


var diceimgname2 = "images/dice" + randomnumber2 + ".png";

document.querySelector(".img1").setAttribute("src",diceimgname1);


document.querySelector(".img2").setAttribute("src",diceimgname2);
if(randomnumber1 === randomnumber2){
    document.querySelector("h1").innerHTML = "DRAW";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}
else{
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins! "
}
