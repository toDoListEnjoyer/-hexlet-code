import readlineSync from 'readline-sync';

const askForName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default askForName;
