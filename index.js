// function randomIntFromInterval(min, max) { // min and max included
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }
//
// const rndInt = randomIntFromInterval(1, 6)
// console.log(rndInt)
// var randomNumber1 = Math.floor(Math.random() * 6);
// function randomImage(){
//   if (randomNumber1 === 1){
//      document.querySelector('.img1').src("images/dice1.png");
//   }else if(randomNumber1 === 2){
//      document.querySelector('.img1').src("images/dice2.png");
//   }else if(randomNumber1 === 3){
//      document.querySelector('.img1').src("images/dice3.png");
//   }else if(randomNumber1 === 4){
//      document.querySelector('.img1').src("images/dice4.png");
//   }else if(randomNumber1 === 5){
//      document.querySelector('.img1').src("images/dice5.png");
//   }else{
//      document.querySelector('.img1').src("images/dice6.png");
//   }
// }
// randomImage();
// document.querySelector('img').setAttribute("src",randomNumber1);

var randomNumber1 = Math.floor(Math.random() * 6)+1;

function randomImage1() {
  if (randomNumber1 === 1) {
    document.querySelector('.img1').setAttribute("src", "images/dice1.png");
  } else if (randomNumber1 === 2) {
    document.querySelector('.img1').setAttribute("src", "images/dice2.png");
  } else if (randomNumber1 === 3) {
    document.querySelector('.img1').setAttribute("src", "images/dice3.png");
  } else if (randomNumber1 === 4) {
    document.querySelector('.img1').setAttribute("src", "images/dice4.png");
  } else if (randomNumber1 === 5) {
    document.querySelector('.img1').setAttribute("src", "images/dice5.png");
  } else {
    document.querySelector('.img1').setAttribute("src", "images/dice6.png");
  }
}
randomImage1();

var randomNumber2 = Math.floor(Math.random() * 6)+1;

function randomImage2() {
  if (randomNumber2 === 1) {
    document.querySelector('.img2').setAttribute("src", "images/dice1.png");
  } else if (randomNumber2 === 2) {
    document.querySelector('.img2').setAttribute("src", "images/dice2.png");
  } else if (randomNumber2 === 3) {
    document.querySelector('.img2').setAttribute("src", "images/dice3.png");
  } else if (randomNumber2 === 4) {
    document.querySelector('.img2').setAttribute("src", "images/dice4.png");
  } else if (randomNumber2 === 5) {
    document.querySelector('.img2').setAttribute("src", "images/dice5.png");
  } else {
    document.querySelector('.img2').setAttribute("src", "images/dice6.png");
  }
}
randomImage2();

function changeTitle() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
  } else if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
  }
}
changeTitle();
