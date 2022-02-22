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
  this.rollScore = Math.floor(Math.random() * 6) +1;
  return this.rollScore
}

Player.prototype.updateCurrentScore = function() {
  if (this.rollScore === 1) {
    this.currentScore = 0;
    this.isTurn = false; 
  } else {
    this.currentScore += this.rollScore;
  }
  return this.currentScore
}

Player.prototype.disablePlayer = function() {
  if (this.isTurn === false) {

  }
}

// if its 1 or you click hold, switch player
// If we do an if/else statement saying if click.HOLD button in HTML, is that technically mixing business & user interface logic. 
// If we click hold, add the value of the currentScore to the overallScore

Player.prototype.hold = function() {
  this.overallScore += this.currentScore;
  this.currentScore = 0;
  return this.overallScore;
}

// we need to reset current score afterwards. 
// we are going to dim out when turn = false; 
//

//Player.prototype.hold = function() {
//  this.overallScore += this.currentScore;
//  this.currentScore = 0;
//  return this.overallScore;
//}


// Player.prototype.winner = function() {
//  if (this.overallScore >= 100) {
//  alert = ("you won!");  
// }
// }

// }

// User interface

$(document).ready(function() {
  $("button#p1-button-roll").click(function(event) {
    event.preventDefault();
    let currentRoll = player01.randomRoll();
    let currentScore = player01.updateCurrentScore();
    $("#player1-rollDie").text(currentRoll);
    $("#current-score1").text(currentScore);
    // if player clicks hold, add currentScore to overallScore
  });
});

$(document).ready(function() {
  $("button#p2-button-roll").click(function(event) {
    event.preventDefault();
    let currentRoll2 = player02.randomRoll();
    let currentScore2 = player02.updateCurrentScore();
    $("#player2-rollDie").text(currentRoll2);
    $("#current-score2").text(currentScore2);
  });
});

$(document).ready(function() {
  $("button#p1-button-hold").click(function(event)  {
    event.preventDefault();
    let overallScore = player01.hold();
    let currentScore = 0;
    $("#overall-score1").text(overallScore);
    $("#current-score1").text(currentScore);
  });
});

$(document).ready(function() {
  $("button#p2-button-hold").click(function(event)  {
    event.preventDefault();
    let overallScore2 = player02.hold();
    let currentScore2 = 0;
    $("#overall-score2").text(overallScore2);
    $("#current-score2").text(currentScore2);  
  });
});

// Start with disabled flag on Player two because isTurn === false; 


// document.getElementById("p1-button-roll").disabled = true;
  // $("button#p1-button-hold").click(function(event){
  //   player01.hold(updateOverallScore);
  // });