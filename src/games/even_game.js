import {
  numberOfRounds, maxNumberToGenerate, getAnswerToQuestion,
  checkAnswer, printEndGameMessage, isYesOrNo, getRandomNumber,
} from '../index.js';
import greeting from '../cli.js';

const gameLauncher = () => {
  let rounds = numberOfRounds;
  const max = maxNumberToGenerate;

  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (rounds) {
    const number = getRandomNumber(max);

    const question = `Question: ${number}`;
    const answer = getAnswerToQuestion(question);
    if (!isYesOrNo(answer)) break;
    const expectedAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (!checkAnswer(answer, expectedAnswer, name)) break;
    rounds -= 1;
  }

  printEndGameMessage(name, rounds);
};

export default gameLauncher;
