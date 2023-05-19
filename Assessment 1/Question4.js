// Write a JavaScript program to find the types of a given angle.
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

const angle = parseInt(prompt("Enter an angle:"));

function typesOfAngle (angle) {
    if(angle < 90) {
        alert("This is an acute angle")
    }else if(angle === 90){
        alert("This is a Right angle")
    }else if(angle <180 ) {
        alert ("This is an Obtuse angle")
    }else if( angle === 180) {
        alert ("This is a Straight angle")
    } else {
        alert ("This angle cannot be recognized")
    }
}

typesOfAngle(angle)
