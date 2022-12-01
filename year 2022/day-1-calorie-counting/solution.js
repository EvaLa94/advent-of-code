// First Part

const fs = require('fs').promises;
fs.readFile('example.txt', 'utf8').then(data => {
  const list = data.split('\n');
  let maxCalories = 0;
  let currentCalories = 0;
  list.forEach(value =>{
    if (value === ''){
      maxCalories = currentCalories > maxCalories ? currentCalories : maxCalories;
      currentCalories = 0;
    } else {
      currentCalories += +value;
    }
  })
  console.log(maxCalories)
})

// Second Part

fs.readFile('input.txt', 'utf8').then(data => {
  const list = data.split('\n');
  list.push('');
  const maxCalories = [];
  let currentCalories = 0;
  list.forEach(value =>{
    if (value === ''){
      maxCalories.push(currentCalories);
      if (maxCalories.length > 3){
        maxCalories.sort((a, b) => b - a);
        maxCalories.pop();
      }
      currentCalories = 0;
    } else {
      currentCalories += +value;
    }
  })
  console.log(maxCalories.reduce((a, b) => a + b))
})