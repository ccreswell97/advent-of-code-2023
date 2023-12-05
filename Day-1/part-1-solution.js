const fs = require('fs');
let textData = fs.readFileSync('input.txt', 'utf8').split('\n');

let totalNumber = 0;
textData.map((line) => {
    const r = /[0-9]/g;
    const numbers = line.match(r)
    const concatNum = parseInt(numbers[0] + numbers.pop());
    totalNumber += concatNum;
})

console.log(totalNumber)