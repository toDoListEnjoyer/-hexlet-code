#!/usr/bin/env node

import {
  numberOfRounds, maxNumberToGenerate, greeting,
  getAnswerToQuestion, checkAnswer, printEndGameMessage, isInputNumeric,
} from '../src/index.js';
import askForName from '../src/cli.js';

let rounds = numberOfRounds;
const maxStartNumber = maxNumberToGenerate;

const maxLength = 10;
const minLength = 5;
const maxDifference = 5;

greeting();
const name = askForName();
console.log('What number is missing in the progression?');

while (rounds) {
  const progression = [];
  const progressionLength = Math.floor(Math.random() * (maxLength - 4) + minLength);
  progression.push(Math.floor(Math.random() * maxStartNumber));
  const difference = Math.floor(Math.random() * maxDifference + 1);
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[i - 1] + difference);
  }
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const expectedAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  const question = `Question: ${progression.join(' ')}`;
  const answer = getAnswerToQuestion(question);

  if (!isInputNumeric(answer)) break;

  if (!checkAnswer(answer, expectedAnswer.toString(), name)) break;
  rounds -= 1;
}

printEndGameMessage(name, rounds);
