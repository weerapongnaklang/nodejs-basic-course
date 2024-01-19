import fs from 'fs';
const args = process.argv;
const input = args[2]

fs.writeFileSync('data.txt', input)


console.log(args[2]);
console.log(args[3]);