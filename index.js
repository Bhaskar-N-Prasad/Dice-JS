
var randomNumber1 = Math.floor((Math.random()*6)+1);//for getting numbers from 1-6;

var randomDiceImage = "dice" + randomNumber1 + ".png";//for getting dice1,dice2..

var randomImagesrc = "images/" + randomDiceImage;//since in images folder images/dice1.png

var image1 = document.querySelectorAll("img")[0];//selects first img element

image1.setAttribute("src",randomImagesrc);//sets to dice images

var randomNumber2 = Math.floor((Math.random()*6)+1);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImagesrc2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImagesrc2);

if( randomNumber1>randomNumber2){
    var heading = document.querySelector("h1");
    heading.innerHTML = "Player1 Wins";
}
else if( randomNumber1<randomNumber2){
    var heading = document.querySelector("h1");
    heading.innerHTML = "Player2 Wins";
}
else{
    var heading = document.querySelector("h1");
    heading.innerHTML = "Draw";
}