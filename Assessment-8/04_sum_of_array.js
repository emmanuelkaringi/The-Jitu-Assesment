//Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

const array1 = [2, "11", 3, "a2", false, 5, 7, 1]

const array2 =[2, 3, 0, 5, 7, 8, true, false]

console.log(
    array2.map(function(elt){
        return /^\d+$/.test(elt) ? parseInt(elt):0;
    })
    .reduce(function(a,b){
        return a+b
    })
)