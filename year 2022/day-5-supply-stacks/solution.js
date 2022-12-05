const fs = require('fs');
const fileName = 'input.txt'
//const fileName = 'example.txt'
const data = fs.readFileSync(fileName, { encoding: 'utf8' }).split('\n\n')

// STACKS
const stacksLines = data[0].split('\n');
const lastStack = stacksLines.pop().split('');
const orderedStacks = {};
const indexes = [];

lastStack.forEach((item, index) => {
    if(item !== ' '){
      indexes.push(index);
      orderedStacks[item] = [];
    }
})

indexes.forEach((index, position) => {
  stacksLines.forEach(line => {
    if(line[index] !== ' ') {
      orderedStacks[position + 1].unshift(line[index]);
    }
  })
})

// INSTRUCTIONS PART 1
/*
const firstInstructions = data[1].split('\n');
firstInstructions.forEach(line => {
  const step = line.split(' ');
  for (let i = step[1]; i > 0; i--){
    const moveFrom = orderedStacks[step[3]];
    const moveTo = orderedStacks[step[5]];
    const removed = moveFrom.pop();
    moveTo.push(removed);
  }
})

let firstResult = '';
Object.values(orderedStacks).forEach(array =>{
  firstResult += array[array.length-1];
})

console.log('First part result:', firstResult);
*/

// INSTRUCTIONS PART 2
const secondInstructions = data[1].split('\n');
secondInstructions.forEach(line => {
  const step = line.split(' ');
  const moveFrom = orderedStacks[step[3]];
  const moveTo = orderedStacks[step[5]];
  const value = step[1];
  const removed = moveFrom.splice(moveFrom.length - value, value);
    moveTo.push(...removed);
})

let secondResult = '';
Object.values(orderedStacks).forEach(array =>{
  secondResult += array[array.length-1];
})

console.log(orderedStacks);
console.log('Second part result:', secondResult);
