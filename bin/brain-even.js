#!/usr/bin/env node

import {
  numberOfRounds, maxNumberToGenerate, greeting,
  getAnswerToQuestion, checkAnswer, printEndGameMessage,
} from '../src/index.js';
import askForName from '../src/cli.js';

let rounds = numberOfRounds;
const max = maxNumberToGenerate;

greeting();
const name = askForName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (rounds) {
  const number = Math.floor(Math.random() * max);
  const question = `Question: ${number}`;
  const answer = getAnswerToQuestion(question);
  if (!(answer === 'yes' || answer === 'no')) break; // Check for correct input
  const expectedAnswer = number % 2 === 0 ? 'yes' : 'no';
  if (!checkAnswer(answer, expectedAnswer, name)) break;
  rounds -= 1;
}

printEndGameMessage(name, rounds);
