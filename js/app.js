'use strict';

let counter = 0;
alert(
  'Hello and Welcome to my About Me page. \n\nLet\'s play a simple 5-questions game to help us get acquainted.'
);
alert(
  'The rules are simple, answer 5 \'yes or no\' questions about myself, the responses are not case-sensitive and \'y\' and \'n\' are acceptable.\n\nReady?'
);

function fq1() {
  let q1 = prompt('First, is my name Carlos?').toLowerCase();
  if (q1 === 'y' || q1 === 'yes') {
    alert('correct. Well done.');
    counter++;
  } else if (q1 === 'n' || q1 === 'no') {
    alert('incorrect. c\'mon, the answer is in the header.');
  } else {
    alert('invalid response');
  }
}
fq1();

function fq2() {
  let q2 = prompt('Do I live in Seattle?').toLowerCase();
  if (q2 === 'y' || q2 === 'yes') {
    alert('correct');
    counter++;
  } else if (q2 === 'n' || q2 === 'no') {
    alert('incorrect');
  } else {
    alert('invalid response');
  }
}
fq2();

function fq3() {
  let q3 = prompt('But am I from Seattle?').toLowerCase();
  if (q3 === 'n' || q3 === 'no') {
    alert('correct. I\'m actually from Houston');
    counter++;
  } else if (q3 === 'y' || q3 === 'yes') {
    alert('incorrect, I\'m originally from Houston');
  } else {
    alert('invalid response');
  }
}
fq3();

function fq4() {
  let q4 = prompt('Are my favorite burgers from Dick\'s').toLowerCase();
  if (q4 === 'n' || q4 === 'no') {
    alert('correct. I\'m a Whataburger man.');
    counter++;
  } else if (q4 === 'y' || q4 === 'yes') {
    alert('incorrect. Dick\'s is pretty good, but it\'s Whataburger for me.');
  } else {
    alert('invalid response');
  }
}
fq4();

function fq5() {
  let q5 = prompt('Finally, am I learning a lot at Code Fellow?').toLowerCase();
  if (q5 === 'y' || q5 === 'yes') {
    alert('correct. I\'m learning a ton');
    counter++;
  } else if (q5 === 'n' || q5 === 'no') {
    alert('incorrect. Code Fellows is the best');
  } else {
    alert('invalid response');
  }
}
fq5();


let userName = prompt('And now a little about you. What\'s your name?');
alert('well, ' + userName + ', it\'s a pleasure to meet you!');

function fq6() {
  let counter2 = 0;
  let ans = 32;
  let attempts = 4;
  while (attempts) {
    let q6 = parseInt(prompt('Ready for another game? \n\nGuess a number between 1 and 50'));
    attempts--;
    counter2++;
    if (q6 > ans) {
      console.log(`Your guess is TOO HIGH. \n${attempts} attempts remaining`);
    } else if (q6 < ans) {
      console.log(`Your guess is TOO LOW. \n${attempts} attempts remaining`);
    } if (attempts === 0) {
      console.log('Sorry, you\'re out of guesses. 32 is the correct answer')
    } else if (q6 === ans) {
      console.log(
        `Congrats! You guessed the correct number in ${counter2}/4 attempts`
      );
      counter++;
      break;
    }
  }
}
fq6();

function fq7() {
  let localBrew = ['fremont', 'reubens', 'georgetown', 'elysian', 'redhook'];
  let guesses = 6;
  while (guesses) {
    guesses--;
    counter++;
    let q7 = prompt('Seattle has excellent local beer, can you name one of my favorites?');
    for (let i = 0; i < localBrew.length; i++) {
      if (q7 === localBrew[i]) {
        alert(`correct! ${localBrew} are some of my other favorites.`);
        guesses = 0;
        counter++;
        break;
      }
    }
  }
}
fq7();

alert(`Thanks for playing! You got ${counter}/7 questions correct. Way to go, champ.`)
