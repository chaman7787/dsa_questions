
// Shift array elements to the left by one position
// let arr = [10,20,30,40,50];
// let copy = arr[0];

// for (let i = 0; i<arr.length -1;i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length -1] = copy;

// console.log(arr);


// left rotation by k element

// let arr = [10, 20, 30, 40, 50];

// let k = 2;
// k = k % arr.length; // handle large k

// for (let j = 0; j < k; j++) {
//     let first = arr[0];

//     for (let i = 0; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1];
//     }

//     arr[arr.length - 1] = first;
// }

// console.log(arr);


// right angle triangle pattern

const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter the number of rows: "));

for (let i=1;i<=n;i++){
    for (let j=1;j<=i;j++){
        process.stdout.write(j + " ");
    }
    console.log();
  
}