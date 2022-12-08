import {
  cons, car, cdr,
} from '@hexlet/pairs';
import {
  numberOfRounds, maxNumberToGenerate, getAnswerToQuestion,
  checkAnswer, printEndGameMessage, isNumeric, getRandomNumber,
} from '../index.js';
import greeting from '../cli.js';

const gameLauncher = () => {
  let rounds = numberOfRounds;
  const max = maxNumberToGenerate;

  const gcd = (a, b) => {
    const remainder = a % b;
    if (remainder !== 0) return gcd(b, remainder);
    return b;
  };

  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  while (rounds) {
    let pair = cons(getRandomNumber(max, 1), getRandomNumber(max, 1));
    const question = `Question: ${car(pair)} ${cdr(pair)}`;
    const answer = getAnswerToQuestion(question);

    if (!isNumeric(answer)) break;

    if (car(pair) < cdr(pair)) pair = cons(cdr(pair), car(pair));
    const expectedAnswer = gcd(car(pair), cdr(pair));
    if (!checkAnswer(answer, expectedAnswer.toString(), name)) break;

    rounds -= 1;
  }

  printEndGameMessage(name, rounds);
};

export default gameLauncher;
