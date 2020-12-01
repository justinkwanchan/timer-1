// Simple Timer
// timer will beep after a specified anount of time has passed
// for an unlimited number of alarms using command line arguments

// beep noise
// process.stdout.write('\x07');

const alarmArr = process.argv.splice(2);

for (let alarm of alarmArr) {
  alarm = Number(alarm);
  if (typeof alarm === 'number' && alarm > 0){
    setTimeout(() => {
      process.stdout.write('\x07');
      process.stdout.write(`Alarm at ${alarm} seconds! \n`);
    }, alarm * 1000);
  }
};