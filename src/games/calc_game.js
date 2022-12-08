import {
  cons, car, cdr,
} from '@hexlet/pairs';
import {
  numberOfRounds, maxNumberToGenerate, greeting,
  getAnswerToQuestion, checkAnswer, printEndGameMessage, isNumeric, getRandomNumber,
} from '../index.js';
import askForName from '../cli.js';

const gameLauncher = () => {
  const operations = ['+', '-', '*'];
  let rounds = numberOfRounds;
  const max = maxNumberToGenerate;

  greeting();
  const name = askForName();
  console.log('What is the result of the expression?');

  while (rounds) {
    const opIndex = getRandomNumber(operations.length);
    const pair = cons(getRandomNumber(max), getRandomNumber(max));
    const question = `Question: ${car(pair)} ${operations[opIndex]} ${cdr(pair)}`;
    const answer = getAnswerToQuestion(question);

    if (!isNumeric(answer)) break;

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
};

export default gameLauncher;
