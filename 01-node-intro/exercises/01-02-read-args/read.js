import fs from "fs";

const showContent = fs.readFileSync('data.txt', 'utf-8')
console.log(showContent)