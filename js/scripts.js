// Business Logic

function Player(overallScore, currentScore, rollScore) {
  this.overallScore = overallScore; // Total amount of points
  this.currentScore = currentScore; // Current Score before rolling 1 or holding
  this.rollScore = rollScore; // Current value of die
  this.isTurn = true; // dictates which player is currently rolling
}

Player.prototype.randomRoll = function() {
  this.rollScore = Math.floor(Math.random() * 6) +1;
  return this.rollScore
}

Player.prototype.updateCurrentScore = function() {
  if (this.rollScore === 1) {
    this.currentScore = 0;
    this.switchTurn();
  } else {
    this.currentScore += this.rollScore;
  }
  return this.currentScore
}

 Player.prototype.switchTurn = function() {
    this.isTurn = !this.isTurn 
    return this.isTurn;
  }

Player.prototype.hold = function() {
  this.overallScore += this.currentScore;
  this.currentScore = 0;
  return this.overallScore;
}

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
  const player01 = new Player(0, 0, 0);
  const player02 = new Player(0, 0, 0);
  player02.isTurn = false; 

  // click roll 
  $("button#p1-button-roll").click(function(event) {
    event.preventDefault();
    let currentRoll = player01.randomRoll();
    let currentScore = player01.updateCurrentScore();
    $("#player1-rollDie").text(currentRoll);
    $("#current-score1").text(currentScore);

  // click hold
    $("button#p1-button-hold").click(function(event)  {
    event.preventDefault();
    player01.switchTurn();
    let overallScore = player01.hold();
    let currentScore = 0;
    $("#overall-score1").text(overallScore);
    $("#current-score1").text(currentScore);
    $("#p1-button-hold").hide();
    $("#p1-button-roll").hide();
    $("#p2-button-hold").show();
    $("#p2-button-roll").show();
    });
  });
});

// After hold button on line 68, 


// $(document).ready(function() {
//   $("button#p1-button-hold").click(function(event)  {
//     event.preventDefault();
//     let overallScore = player01.hold();
//     let currentScore = 0;
//     $("#overall-score1").text(overallScore);
//     $("#current-score1").text(currentScore);
//     $("#p1-button-hold").hide();
//     $("#p1-button-roll").hide();
//     $("#p2-button-hold").show();
//     $("#p2-button-roll").show();    
//   });
// });

// $(document).ready(function() {
//   $("button#p2-button-roll").click(function(event) {
//     event.preventDefault();
//     let currentRoll2 = player02.randomRoll();
//     let currentScore2 = player02.updateCurrentScore();
//     $("#player2-rollDie").text(currentRoll2);
//     $("#current-score2").text(currentScore2);
//   });
// });

$(document).ready(function() {
  $("button#p2-button-hold").click(function(event)  {
    event.preventDefault();
    let overallScore2 = player02.hold();
    let currentScore2 = 0;
    $("#p2-button-roll").hide();
    $("#p2-button-hold").hide();
    $("#p1-button-roll").show();
    $("#p1-button-hold").show();   
    $("#overall-score2").text(overallScore2);
    $("#current-score2").text(currentScore2);  
  });
});


// if (this.isTurn === false) {
//   $("button#p2-button-roll").hide();
//   $("button#p2-button-hold").hide();
// }
//  else {
//   $("button#p2-button-roll").show();
//   $("button#p2-button-hold").show();
// }

// Start with disabled flag on Player two because isTurn === false; 


// document.getElementById("p1-button-roll").disabled = true;
  // $("button#p1-button-hold").click(function(event){
  //   player01.hold(updateOverallScore);
  // });