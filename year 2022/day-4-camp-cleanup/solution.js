const fs = require('fs');
const fileName = 'input.txt'
//const fileName = 'example.txt'
const data = fs.readFileSync(fileName, { encoding: 'utf8' }).split('\n');

// First part

/*
LOGIC
  1 ---- 2
3 -------- 4
1 > 3 and 2 < 4

1 -------- 2
  3 ---- 4
1 < 3 and 2 > 4
*/
function checkPair(pair){
  const pairArray = pair.split(/-|,/gm);
  const first = +pairArray[0];
  const second = +pairArray[1];
  const third = +pairArray[2];
  const forth = +pairArray[3];
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
/*
LOGIC
1 --- 2
        3 --- 4
2 < 3

        1 --- 2
3 --- 4
4 < 1
*/

function checkOverlappingPair(pair){
  const pairArray = pair.split(/-|,/gm);
  const first = +pairArray[0];
  const second = +pairArray[1];
  const third = +pairArray[2];
  const forth = +pairArray[3];
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
