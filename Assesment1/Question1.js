// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

let value1= parseInt(prompt("Enter first number:"));

let value2= parseInt(prompt("Enter second number"));

if (value1 === 8 || value2 === 8) {
    alert("One of your inputed values is 8.")
}else if(value1+value2=== 8) {
    alert("The sum of the two values is 8")
}else if(value1-value2=== 8 || value2-value1 === 8){
    alert("The difference of the two values is equal to 8")
}else {
    alert("Values inputed do not match with 8")
}
