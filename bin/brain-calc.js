#!/usr/bin/env node

import {
  cons, car, cdr,
} from '@hexlet/pairs';
import {
  numberOfRounds, maxNumberToGenerate, greeting,
  getAnswerToQuestion, checkAnswer, printEndGameMessage,
} from '../src/index.js';
import askForName from '../src/cli.js';

const operations = ['+', '-', '*'];
let rounds = numberOfRounds;
const max = maxNumberToGenerate;

greeting();
const name = askForName();
console.log('What is the result of the expression?');

while (rounds) {
  const opIndex = Math.floor(Math.random() * operations.length);
  const pair = cons(Math.floor(Math.random() * max), Math.floor(Math.random() * max));
  const question = `Question: ${car(pair)} ${operations[opIndex]} ${cdr(pair)}`;
  const answer = getAnswerToQuestion(question);

  if (!parseInt(answer, 10)) break; // Check for correct input

  let expectedAnswer = 0;
  if (operations[opIndex] === '+') {
    expectedAnswer = car(pair) + cdr(pair);
  } else if (operations[opIndex] === '-') {
    expectedAnswer = car(pair) - cdr(pair);
  } else {
    expectedAnswer = car(pair) * cdr(pair);
  }

  if (!checkAnswer(answer, expectedAnswer.toString(), name)) break;
  rounds -= 1;
}

printEndGameMessage(name, rounds);
