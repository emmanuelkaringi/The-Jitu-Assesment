//Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

const array1 = [2, "11", 3, "a2", false, 5, 7, 1]

const array2 =[2, 3, 0, 5, 7, 8, true, false]

const array3 = [6, 9, true, 3, 0, false, 'Random', 6, 7, 'String']
console.log(
    // Convert each element in the array to a number if it is a string that matches the regular expression. Converts any non number to 0.
    array3.map(function(elt){
        return /^\d+$/.test(elt) ? parseInt(elt):0;
    })

    // Add up all of the numbers in the array.
    .reduce(function(a,b){
        return a+b
    })
)