const fs = require('fs');
const fileName = 'input.txt'
//const fileName = 'example.txt'
const data = fs.readFileSync(fileName, { encoding: 'utf8' }).split('');

// The input number is the number of unique characters to be found
function detectPacket(number){
  // Number - 1 will be used since it is used as an array index
for(let i = number - 1; i < data.length - 1 ; i++){
  const chunck = [];
  for(let j = number - 1 ; j >= 0; j--){
    chunck.push(data[i - j])
  }
  if(chunck.length === Array.from(new Set(chunck)).length){
    // return i+1 since the elf start counting from 1 and not 0
    console.log(chunck)
    return (i+1);
    }
  } 
}
const firstResult= detectPacket(4);
const secondResult= detectPacket(14);
console.log(firstResult)
console.log(secondResult)