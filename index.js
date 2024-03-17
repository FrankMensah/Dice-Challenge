var randDiceOne = Math.random();
var randDiceTwo = Math.random();

randDiceOne = Math.floor(randDiceOne * 6) + 1;
randDiceTwo = Math.floor(randDiceTwo * 6) + 1;


console.log(randDiceOne);
console.log(randDiceTwo);

document.querySelector('.img1').setAttribute('src', 'images/dice' + randDiceOne + '.png');
document.querySelector('.img2').setAttribute('src', 'images/dice' + randDiceTwo + '.png');

if(randDiceOne > randDiceTwo){

  document.querySelector("h1").innerHTML = "Player 1 Win";

}
else if(randDiceTwo > randDiceOne){

  document.querySelector("h1").innerHTML = "Player 2 Win";

}
else{

  document.querySelector("h1").innerHTML = "Draw";

}
