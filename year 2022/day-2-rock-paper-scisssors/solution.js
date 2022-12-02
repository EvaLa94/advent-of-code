const fs = require('fs');
const fileName = 'input.txt'
const data = fs.readFileSync(fileName, { encoding: 'utf8' }).replaceAll(' ', '').split('\n');

const firstColumn = { A: 'Rock', B: 'Paper', C: 'Scissors' }
const secondColumn = { X: 'Rock', Y: 'Paper', Z: 'Scissors' }
const secondColumnCorrect = { X: 'lose', Y: 'draw', Z: 'win' }
const shape = { Rock: 1, Paper: 2, Scissors: 3 }
const outcome = { lose: 0, draw: 3, win: 6 }

const game = {
  draw: [['Scissors', 'Scissors'], ['Rock', 'Rock'], ['Paper', 'Paper']],
  win: [['Rock', 'Paper'], ['Paper', 'Scissors'], ['Scissors', 'Rock']],
  lose: [['Rock', 'Scissors'], ['Paper', 'Rock'], ['Scissors', 'Paper']],
}

// First Part Result

function checkScore(play) {
    const opponent = firstColumn[play[0]];
    const player = secondColumn[play[1]];
    let result;
    Object.entries(game).forEach(([key, value]) => {
      value.forEach(comb => {
        if (comb[0] === opponent && comb[1] === player) {
          result =  key;
        }
      })
    })
    return outcome[result] + shape[player];
}

const result = data.map(element => checkScore(element)).reduce((a, b) => a + b);
console.log(result)

// Second Part Result

function checkScoreCorrect(play){
    const opponent = firstColumn[play[0]];
    const match = secondColumnCorrect[play[1]];
    let player;
    game[match].forEach(comb => {
      if (comb[0] === opponent){
        player = comb[1]
      }
    })
    return outcome[match] + shape[player];
}

const result = data.map(element => checkScoreCorrect(element)).reduce((a, b) => a + b);
console.log(result)
