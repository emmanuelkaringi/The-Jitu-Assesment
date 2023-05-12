// Write a JavaScript program to create an array by taking the first and last elements from a given array of integers. The length must be larger than or equal to 1.

let value1 = parseInt(prompt("Enter a value1:"));
let value2 = parseInt(prompt("Enter a value2:"));
let value3 = parseInt(prompt("Enter a value:3"));

const parentArray = [value1, value2, value3];

function newArray(parentArray) {
    let childArray = [];

    childArray.push(parentArray[0], parentArray[parentArray.length - 1]);

    return childArray;
}

// console.log("Your new array is: " + newArray(parentArray))
alert("Your new array is: " + newArray(parentArray))