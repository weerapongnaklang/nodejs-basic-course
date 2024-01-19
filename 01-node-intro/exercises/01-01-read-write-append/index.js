import fs from "fs";

const fileName = "data.txt";
fs.writeFileSync(fileName, "Hello World\n");
fs.appendFileSync(fileName, "This is a second line");

const showContent = fs.readFileSync(fileName, "utf-8");
console.log(showContent);
