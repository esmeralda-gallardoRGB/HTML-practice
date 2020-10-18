/*
Everything in between is a comment.
*/

// This is a comment too but is in a single line

const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

/* The alert function, pops a box up when called

alert('Hi! I am a pop-up box')

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

*/

// The function below changes the image as we click on it

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ufo.png') {
      myImage.setAttribute('src','images/weather-baloon.jpg');
    } else {
      myImage.setAttribute('src','images/ufo.png');
    }
}