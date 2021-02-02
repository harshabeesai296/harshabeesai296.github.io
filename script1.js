'use strict';

// A modified random function to generate a random integer

let randNum = Math.floor(Math.random() * 10) * 2 + 1;
let score = 20;
let highScore = 0;
let allTimeHs = 0;

// A function to display the message to user

const dispMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

dispMessage('Start Guessing!!!');

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    dispMessage('Please enter a number!!🍄');
  } else if (guessNumber === randNum) {
    dispMessage('Your guess is correct!! 😇😇');
    document.querySelector('.number').textContent = guessNumber;
    document.querySelector('.number').style.width = '35rem';
    document.querySelector('body').style.backgroundColor = '#C0FA52';
    document.querySelector('.message').style.color = '#000000';
    document.querySelector('.score').style.color = '#000000';
    document.querySelector('.label-score').style.color = '#000000';
    document.querySelector('.label-highscore').style.color = '#000000';
    document.querySelector('h1').style.color = '#000000';
    document.querySelector('.guess').style.color = '#000000';
    document.querySelector('.between').style.color = '#000000';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNumber > randNum) {
    if (score > 1) {
      dispMessage('Too High! Come down!!');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      dispMessage('You lost the game! Click Again!');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessNumber < randNum) {
    if (score > 1) {
      dispMessage('Too Low! Go up!!');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      dispMessage('You lost the game! Click Again!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randNum = Math.floor(Math.random() * 10) * 2 + 1;
  document.querySelector('.message').style.color = '#ffffff';
  document.querySelector('.score').style.color = '#ffffff';
  document.querySelector('.label-score').style.color = '#ffffff';
  document.querySelector('.label-highscore').style.color = '#ffffff';
  document.querySelector('h1').style.color = '#ffffff';
  document.querySelector('.guess').style.color = '#ffffff';
  document.querySelector('.between').style.color = '#ffffff';

  highScore = score;

  if (highScore > allTimeHs) {
    allTimeHs = highScore;
  }

  document.querySelector('.highscore').textContent = allTimeHs;
  score = 20;
  document.querySelector('.score').textContent = 20;
  dispMessage('Please enter a number!!🍄');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.number').style.width = '15rem';
});
