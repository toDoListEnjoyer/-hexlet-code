import readlineSync from 'readline-sync';
import askForName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askForName();

let rounds = 3;
const max = 100;

console.log('Answer "yes" if the number is even, otherwise answer "no".');
while (rounds) {
  const number = Math.floor(Math.random() * max);
  const isEven = number % 2 === 0;
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (!(answer === 'yes' || answer === 'no')) break; // Check for correct input
  if (answer === 'yes' === isEven) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  rounds -= 1;
}

if (rounds === 0) console.log(`Congratulations, ${name}!`);
