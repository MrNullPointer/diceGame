
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSrcLeft = "images/" + "dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSrcRight = "images/" + "dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSrcLeft);
image2.setAttribute("src", randomImageSrcRight);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏁 Player 1 Wins! ";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏁 ";
}
else {
    document.querySelector("h1").innerHTML = "❌ Draw! ❌";
}
 