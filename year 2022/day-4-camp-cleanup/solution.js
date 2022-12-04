const fs = require('fs');
const fileName = 'input.txt'
//const fileName = 'example.txt'
const data = fs.readFileSync(fileName, { encoding: 'utf8' }).split('\n');

// First part
function checkPair(pair){
  const first = +pair.slice(0, pair.indexOf('-'));
  const second = +pair.slice(pair.indexOf('-')+1, pair.indexOf(','));
  const third = +pair.slice(pair.indexOf(',')+1, pair.lastIndexOf('-'));
  const forth = +pair.slice(pair.lastIndexOf('-')+1);
    if((first <= third && second >= forth) || (first >= third && second <= forth)){
      return true;
    } else {
      return false;
    }
}

function findContainedPairs(array){
  let count = 0;
  array.forEach(pair => {
    if(checkPair(pair)) {
      count ++;
    }
  })
  return count
}

console.log('First part solution:', findContainedPairs(data));

// Second part
function checkOverlappingPair(pair){
  const first = +pair.slice(0, pair.indexOf('-'));
  const second = +pair.slice(pair.indexOf('-')+1, pair.indexOf(','));
  const third = +pair.slice(pair.indexOf(',')+1, pair.lastIndexOf('-'));
  const forth = +pair.slice(pair.lastIndexOf('-')+1);
    if((second < third) || forth < first){
      return false;
    } else {
      return true;
    }
}

function findOverlappingPairs(array){
  let count = 0;
  array.forEach(pair => {
    if(checkOverlappingPair(pair)) {
      count ++;
    }
  })
  return count
}

console.log('Second part solution:', findOverlappingPairs(data));