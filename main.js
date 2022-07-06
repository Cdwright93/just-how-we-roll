/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
 ********************/

const getRandomNumber = function (max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);
  return result;
};

/*******************
 * YOUR CODE BELOW *
 *******************/
//using the arrays need to populate the rolled dice.
function getCurrDice(caller) {
  if (caller == 6) {
    let roll = sixes[sixes.length - 1];
    console.log(roll);
    document.querySelector("#d6-roll").src = `images/d6/${roll}.png`;
    averageAnyRolls(sixes);
    document.querySelector("#d6-rolls-mean").innerHTML = `${averageAnyRolls(
      sixes
    ).toFixed(2)}`;
  }
  if (caller == 12) {
    let roll1 = doubleSixes[doubleSixes.length - 1];
    let roll2 = doubleSixes[doubleSixes.length - 2];
    console.log(roll1, roll2);
    document.querySelector("#double-d6-roll-1").src = `images/d6/${roll1}.png`;
    document.querySelector("#double-d6-roll-2").src = `images/d6/${roll2}.png`;
    averageAnyRolls(doubleSixes);
    document.querySelector(
      "#double-d6-rolls-mean"
    ).innerHTML = `${averageAnyRolls(doubleSixes).toFixed(2)}`;
  }
  if (caller == 24) {
    let roll = twelves[twelves.length - 1];
    console.log(roll);
    document.querySelector("#d12-roll").src = `images/numbers/${roll}.png`;
    averageAnyRolls(twelves);
    document.querySelector("#d12-rolls-mean").innerHTML = `${averageAnyRolls(
      twelves
    ).toFixed(2)}`;
  }
  if (caller == 20) {
    let roll = twenties[twenties.length - 1];
    console.log(roll);
    document.querySelector("#d20-roll").src = `images/numbers/${roll}.png`;
    averageAnyRolls(twenties);
    document.querySelector("#d20-rolls-mean").innerHTML = `${averageAnyRolls(
      twenties
    ).toFixed(2)}`;
  }
}
function averageAnyRolls(caller) {
  let sum = 0;
  caller.forEach((number) => {
    sum += number;
  });
  let average = sum / caller.length;
  return average;
}
function d6rollFunction() {
  let d6roll = getRandomNumber(6);
  sixes.push(d6roll);
  getCurrDice(6);
}
function doubleD6rollFunction() {
  let d6roll1 = getRandomNumber(6);
  let d6roll2 = getRandomNumber(6);
  doubleSixes.push(d6roll1);
  doubleSixes.push(d6roll2);
  getCurrDice(12);
}
function d12RollFunction() {
  let twelveroll = getRandomNumber(12);
  twelves.push(twelveroll);
  getCurrDice(24);
}
function d20RollFunction() {
  let twentyroll = getRandomNumber(20);
  twenties.push(twentyroll);
  getCurrDice(20);
}
function resetAll() {
  sixes.length = 0;
  doubleSixes.length = 0;
  twelves.length = 0;
  twenties.length = 0;
  document.querySelector("#d6-roll").src = "images/start/d6.png";
  document.querySelector("#double-d6-roll-1").src = "images/start/d6.png";
  document.querySelector("#double-d6-roll-2").src = "images/start/d6.png";
  document.querySelector("#d12-roll").src = "images/start/d12.jpeg";
  document.querySelector("#d20-roll").src = "images/start/d20.jpg";
  document.querySelector("#d6-rolls-mean").innerHTML = "";
  document.querySelector("#double-d6-rolls-mean").innerHTML = "";
  document.querySelector("#d12-rolls-mean").innerHTML = "";
  document.querySelector("#d20-rolls-mean").innerHTML = "";
}
/*******************
 * EVENT LISTENERS *
 *******************/

/******************
 * RESET FUNCTION *
 ******************/

/****************************
 * CLICK HANDLING FUNCTIONS *
 ****************************/

/****************
 * MATH SECTION *
 ****************/
