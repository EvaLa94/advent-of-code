const fs = require('fs');
const fileName = 'input.txt'
//const fileName = 'example.txt'
const data = fs.readFileSync(fileName, { encoding: 'utf8' }).split('\n');

// Object with priority values for each letter
const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const letterValues = {};
letters.forEach((letter, index) => {
  letterValues[letter] = index + 1
})

// Part 1
let valueSum = 0;

data.forEach(line => {
  const length = line.length
  const start = line.slice(0, length / 2).split('');
  const end = line.slice(length / 2, length).split('');
  for (value of start) {
    if (end.includes(value)) {
      valueSum += +letterValues[value];
      break;
    }
  }
})

console.log(valueSum);

// Part 2
let badgeSum = 0;

for (let i = 0; i < data.length; i += 3){
  const first = data[i].split('');
  const second = data[i+1].split('');
  const third = data[i+2].split('');
  for (value of first){
    if(second.includes(value) && third.includes(value)){
      badgeSum += letterValues[value];
      break;
    }
  }
}

console.log(badgeSum)
