// Write a JavaScript program to convert a given number into hours and minutes.

let number = parseInt(prompt("Enter a value:"))

function convertTime(number) {
    const hours = Math.floor(number / 60)
    const minutes = number % 60;
    return hours + ":" + minutes;
}

alert(convertTime(number))