import readlineSync from 'readline-sync';

export const numberOfRounds = 3;
export const maxNumberToGenerate = 25;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const getAnswerToQuestion = (question) => {
  console.log(question);
  return readlineSync.question('Your answer: ');
};

export const checkAnswer = (answer, expectedAnswer, name) => {
  if (!(answer === expectedAnswer)) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};

export const printEndGameMessage = (name, rounds) => {
  if (rounds === 0) console.log(`Congratulations, ${name}!`);
};

// Functions for checking if input is valid
export const isNumeric = (answer) => {
  if (!parseInt(answer, 10)) return false;
  return true;
};

export const isYesOrNo = (answer) => {
  if (!(answer === 'yes' || answer === 'no')) return false;
  return true;
};
// ---

// max: max not included possible value
// min: min included possible value
export const getRandomNumber = (max = 2, min = 0) => Math.floor(Math.random() * (max - min) + min);
