import {
  numberOfRounds, maxNumberToGenerate, getAnswerToQuestion,
  checkAnswer, printEndGameMessage, getRandomNumber, isYesOrNo,
} from '../index.js';
import greeting from '../cli.js';

const gameLauncher = () => {
  let rounds = numberOfRounds;
  const max = maxNumberToGenerate;

  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) if (num % i === 0) return false;
    return num > 1;
  };

  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (rounds) {
    const number = getRandomNumber(max);
    const question = `Question: ${number}`;
    const answer = getAnswerToQuestion(question);

    if (!isYesOrNo(answer)) break;

    const expectedAnswer = isPrime(number) ? 'yes' : 'no';

    if (!checkAnswer(answer, expectedAnswer.toString(), name)) break;
    rounds -= 1;
  }

  printEndGameMessage(name, rounds);
};

export default gameLauncher;
