// Interactive Timer
// Reference used: https://github.com/nodejs/node/blob/master/doc/api/readline.md
// Example used as guide: Tiny CLI

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

console.log(`Hello! Press b for BEEP or enter number for timer in seconds >`);

rl.prompt();

rl.on('line', (button) => {
  // if a number is pressed to set timer
  if(Number(button)){
    button = Number(button);
    console.log(`setting timer for ${button} seconds...`)
    setTimeout(() => {
      console.log(`BEEP!`);
      process.stdout.write('\x07');
      rl.prompt();
    }, button * 1000);
  // if b is pressed for beep noice
  } else if (button === 'b') {
    console.log(`BEEP!`);
    process.stdout.write('\x07');
  // if invalid input is entered
  } else {
    console.log(`Invalid input!`);
  }
  rl.prompt();
}).on('close', () => {
  console.log('Thanks for using me, ciao!');
});