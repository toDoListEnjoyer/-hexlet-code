#!/usr/bin/env node

import {
  numberOfRounds, maxNumberToGenerate, greeting,
  getAnswerToQuestion, checkAnswer, printEndGameMessage, isNumeric, getRandomNumber,
} from '../../src/index.js';
import askForName from '../../src/cli.js';

let rounds = numberOfRounds;
const maxStartNumber = maxNumberToGenerate;

const maxLength = 10;
const minLength = 5;
const maxDifference = 5;
const minDifference = 1;

greeting();
const name = askForName();
console.log('What number is missing in the progression?');

while (rounds) {
  const progression = [];
  const progressionLength = getRandomNumber(maxLength + 1, minLength);
  progression.push(getRandomNumber(maxStartNumber));

  const difference = getRandomNumber(maxDifference + 1, minDifference);
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[i - 1] + difference);
  }
  const hiddenIndex = getRandomNumber(progression.length);
  const expectedAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  const question = `Question: ${progression.join(' ')}`;
  const answer = getAnswerToQuestion(question);

  if (!isNumeric(answer)) break;

  if (!checkAnswer(answer, expectedAnswer.toString(), name)) break;
  rounds -= 1;
}

printEndGameMessage(name, rounds);
