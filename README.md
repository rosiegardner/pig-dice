<Describe> function Player()

*Test: This constructor function for Player will initialize a new Player object with its attributes assigned to the values passed in to the constructor function.
Code: Player()
Input: overallScore, currentScore, rollScore, turn.
Expected Output: "overallScore, currentScore, rollScore, turn."

<Describe> Player.prototype.randomRoll()

*Test: This prototype will randomized a number between 1-6 for the current value of the die roll score.
*Code: randomRoll()
*Expected output: Current value of "rollScore"

<Describe> Player.prototype.updateCurrentScore()

*Test: This prototype will reset the current rollScore back to 0 if die is equal to the value of 1.
*Code: updateCurrentScore()
*Input: 1;
*Expected Output: 0;

*Test: This prototype will update the current value of rollScore if the die roll is greater than 1.
*Code: updateCurrentScore()
*Input: 2, 3, 4, 5, 6.
*Expected Output: "True;"

*Test: This prototype will combine the value of rollScore to currentScore.
*Code: updateCurrentScore()
Expected Output: "return this.currentScore"

<Describe> Player.prototype.hold()

*Test: This prototype will reset the value of currentScore to 0 once submitted.
*Code: hold()
*Expected Output: 0;

*Test: Once hold button is submitted it will combine the value of currentScore and overallScore.
*Code: hold()
Expected Output: "return this.overallScore"
