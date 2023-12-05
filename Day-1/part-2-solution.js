const fs = require('fs');
let textData = fs.readFileSync('input.txt', 'utf8').split('\n');
let data = [
    'threekv33eightninethree',
    'fourxrsxhclj99twosevennine7htxdr',
    '5hdhtdxgktztjdjrhkmlblsevenseven1four8',
    '25xmvshkbmtkmvqpfhgq8fivefqctjm6two',
    'nine533two',
    'sixmbkjzpcxvfive2',
    'threethreethree'
]

const textNumbers = new Map([
    ['one', 'o1e'],
    ['two', 't2o'],
    ['three', 't3e'],
    ['four', 'f4r'],
    ['five', 'f5e'],
    ['six', 's6x'],
    ['seven', 's7n'],
    ['eight', 'e8t'],
    ['nine', 'n9e'],
]);

let totalNum = 0;
textData.map((line) => {
    console.log(line);
    textNumbers.forEach((value, key) => {
        if (line.includes(key)) {
            line = line.replaceAll(key, value);
        }
    })
    const r = /[0-9]/g;
    const numbers = line.match(r)
    const concatNum = parseInt(numbers[0] + numbers.pop());
    totalNum += concatNum;
})

console.log(totalNum);