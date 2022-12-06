#!/usr/bin/env node

import {
  cons, car, cdr,
} from '@hexlet/pairs';
import {
  numberOfRounds, maxNumberToGenerate, greeting,
  getAnswerToQuestion, checkAnswer, printEndGameMessage, isInputNumeric,
} from '../src/index.js';
import askForName from '../src/cli.js';

let rounds = numberOfRounds;
const max = maxNumberToGenerate;

const gcd = (a, b) => {
  const remainder = a % b;
  if (remainder !== 0) return gcd(b, remainder);
  return b;
};

greeting();
const name = askForName();
console.log('Find the greatest common divisor of given numbers.');

while (rounds) {
  let pair = cons(Math.floor(Math.random() * max + 1), Math.floor(Math.random() * max + 1));
  const question = `Question: ${car(pair)} ${cdr(pair)}`;
  const answer = getAnswerToQuestion(question);

  if (!isInputNumeric(answer)) break;

  if (car(pair) < cdr(pair)) pair = cons(cdr(pair), car(pair));
  const expectedAnswer = gcd(car(pair), cdr(pair));
  if (!checkAnswer(answer, expectedAnswer.toString(), name)) break;

  rounds -= 1;
}

printEndGameMessage(name, rounds);
