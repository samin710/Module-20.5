// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

let colors = ["red", "blue", "green", "yellow", "orange"];

let reverseColor = [];

// for (const i of colors) {
//   reverseColor.unshift(i);
// }
// console.log(reverseColor);

// colors.reverse();
// console.log(colors);

for(let i = colors.length-1; i>=0; i--){
    reverseColor.push(colors[i]);
}

console.log(reverseColor);