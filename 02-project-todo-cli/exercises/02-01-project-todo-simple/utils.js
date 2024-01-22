import fs from "fs";
import clc from "cli-color";

const filePath = "data.txt";

export function write(input) {
  fs.appendFileSync(filePath, input + "\n");
  console.log(clc.bold.greenBright("=== Todo app ===\n"));
  console.log( `Todo "  ${input} " was added.`);
}

export function read() {
  const content = fs.readFileSync(filePath, "utf-8");
  const text = content;
  const list = text.trim().split("\n");

  header();
  console.log(`Total todos: ${list.length}\n`);
  for (let i = 0; i < list.length; i++) {
    console.log(`${i + 1}. ${list[i]}`);
  }
}

export function clear() {
  fs.writeFileSync(filePath, "");
  console.log("the file has been clear");
}

// function CLC for reuse
function header (){
  console.log(clc.bgYellowBright("=== TODO APP ==="))
}