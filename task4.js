// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

let statement = "I am a hard working person",
  output = "";

console.log(statement);

for (let i of statement) {
  output = i + output;
}
console.log(output);

console.log(statement.split("").reverse().join(""));

output = statement.split(" ").reverse().join(" ");

console.log(output);
