// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function invokeCallback(callback) {
    setTimeout(callback, 2000);
}

function displayMessage(){
    console.log('This text appeared after 2 seconds. First attempt.');
}

invokeCallback(displayMessage);

// function displayMessage(){
//     console.log('This text appeared after 2 seconds. Second attempt')
// }

// setTimeout(displayMessage, 2000);
