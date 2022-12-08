const fs = require('fs');
const fileName = 'input.txt'
//const fileName = 'example.txt'
const data = fs.readFileSync(fileName, { encoding: 'utf8' }).split('\n');

const directory = {'/': {}};
const path = [];
const navigator = (obj, path) => path.reduce((a, b) => a && a[b], obj);

// Generate object (nested folders and files)
data.forEach(line => {
  const array = line.split(' ');
  const first = array[0];
  const second = array[1];
  const third = array[2];
  if (first === '$'){
    if(second === 'cd'){
      if(third === '..'){
        // Access parent directory
        path.pop();
      } else {
        // Change directory
        path.push(third);
      }
    }
  } else if (first === 'dir'){
    // Create directory
    Object.assign(navigator(directory, path), {[second]: {}});
  } else if (!isNaN(first)){
    // Create file
    Object.assign(navigator(directory, path), {[second]: +first})
  }
})

//console.dir(directory, { depth: null });

// Get the size of a single folder
function dirSize(object){
  let sum = 0;
  for (const value of Object.values(object)) {
    if (typeof value === "number") {
      sum += value;
    }
    if (typeof value === "object") {
      sum += dirSize(value);
    }
  }
  return sum;
}

const sums = [];

// Check the size of all directories
function checkDir(object){
  for (const key of Object.keys(object)){
    if (typeof object[key] === "object") {
      sums.push(dirSize(object[key]));
      checkDir(object[key]);
    }
  }
}

checkDir(directory)

const firstSolution = sums.filter(element => element < 100000).reduce((a,b) => a + b);
const secondSolution = sums.sort((a, b) => a - b).find(element => element > 30000000 - (70000000 - Math.max(...sums)));

console.log('First part solution:', firstSolution);
console.log('Second part solution:', secondSolution);