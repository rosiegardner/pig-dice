// Business Logic

const player01 = new Player(0, 0, 0, true);
const player02 = new Player(0, 0, 0, false);

function Player(overallScore, currentScore, rollScore, turn) {
  this.overallScore = overallScore; // Total amount of points
  this.currentScore = currentScore; // Current Score before rolling 1 or holding
  this.rollScore = rollScore; // Current value of die
  this.isTurn = turn; // dictates which player is currently rolling
}

Player.prototype.randomRoll = function() {
  this.rollScore = Math.floor(6*Math.random()) +1;
}

// 

Player.prototype.updateCurrentScore = function() {
  if (this.rollScore === 1) {
    this.currentScore = 0;
    this.isTurn = false; 
  } else {
    this.currentScore += this.roll;
  }
}

// Player.prototype.updateOverallScore = function () {

// }

// function Player(turn, newDice) {
//   this.roll = 0;
//   this.currentScore = 0;
//   this.overallScore = 0;
//   this.isTurn = turn; // dictates which player is currently rolling
// }


// User interface

$(document).ready(function(event) {
  $("button#p1-button-roll").click(function(event) {
    event.preventDefault();
    let currentRoll = player01.randomRoll();
    console.log(currentRoll);
    $("#player1-rollDie").text(currentRoll);
  });
});

  // $("button#p1-button-hold").click(function(event){
  //   player01.hold(updateOverallScore);
  // });