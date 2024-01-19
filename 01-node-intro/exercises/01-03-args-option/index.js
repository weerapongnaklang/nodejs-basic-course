import fs from "fs";

const filePath = "data.txt";
const option = process.argv[2];
const input = process.argv[3];
// add option arg 

// add condition if node index.js (w)
if (option === "w"){
// ---------- original ---------
fs.appendFileSync(filePath, input + "\n");
console.log("appended:", input);
// console.log(input, "was written in", filePath);
} else{
  console.log('invalid option')
}
