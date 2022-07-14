"use strict";

alert(
  "Hello and Welcome to my About Me page. \nLet's play a simple 5-questions game to help us get acquainted."
);
alert(
  "The rules are simple, answer 5 'yes or no' questions about myself, the responses are not case-sensitive and 'y' and 'n' are acceptable.\n\nReady?"
);

function fq1() {
let q1 = prompt("First, is my name Carlos?").toLowerCase();
if (q1 === "y" || q1 === "yes") {
  // console.log("correct");
  alert("correct. Well done.");
} else if (q1 === "n" || q1 === "no") {
  // console.log("incorrect");
  alert("incorrect. c'mon, the answer is in the header.");
} else {
  // console.log("try again");
  alert("try again");
}
}
fq1();

function fq2() {
let q2 = prompt("Do I live in Seattle?").toLowerCase();
if (q2 === "y" || q2 === "yes") {
  // console.log("correct");
  alert("correct");
} else if (q2 === "n" || q2 === "no") {
  // console.log("incorrect");
  alert("incorrect");
} else {
  // console.log("try again");
  alert("try again");
}
}
fq2();

function fq3() {
let q3 = prompt("But am I from Seattle?").toLowerCase();
if (q3 === "n" || q3 === "no") {
  // console.log("correct");
  alert("correct. I'm actually from Houston");
} else if (q3 === "y" || q3 === "yes") {
  // console.log("incorrect");
  alert("incorrect, I'm originally from Houston");
} else {
  // console.log("try again");
  alert("try again");
}
}
fq3();

function fq4() {
let q4 = prompt("My favorite burgers are Dick's").toLowerCase();
if (q4 === "n" || q4 === "no") {
  // console.log("correct");
  alert("correct. I'm a Whataburger man.");
} else if (q4 === "y" || q4 === "yes") {
  // console.log("incorrect");
  alert("incorrect. Dick's is pretty good, but it's Whataburger for me.");
} else {
  // console.log("try again");
  alert("try again");
}
}
fq4();

function fq5() {
let q5 = prompt("Finally, am I learning a lot at Code Fellow?").toLowerCase();
if (q5 === "y" || q5 === "yes") {
  // console.log("correct");
  alert("correct. I'm learning a ton");
} else if (q5 === "n" || q5 === "no") {
  // console.log("incorrect");
  alert("incorrect. Code Fellows is the best");
} else {
  // console.log("try again");
  alert("try again");
}
}
fq5();

function game() {
let userName = prompt("And now a little about you. What's your name?");
alert("well, " + userName + ", it's a pleasure to meet you. Take care!");

let counter = 0;
let ans = '32';
let attempts = 4;
while (attempts) {
  let q = prompt("guess a number");
  attempts--;
  counter++;
  if (q > ans) {
    console.log(`Your guess is TOO HIGH. \n${attempts} attempts remaining`);
  } else if (q < ans) {
    console.log(`Your guess is TOO LOW. \n${attempts} attempts remaining`);
  } else if (q === ans) {
    console.log(
      `congrats! You guessed the correct number in ${counter}/4 attempts`
    );
    break;
  }
}
}
game();