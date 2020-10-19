/*
Everything in between is a comment.
*/

// This is a comment too but is in a single line

//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

/* The alert function, pops a box up when called

alert('Hi! I am a pop-up box')

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

*/

// Image switcher code //

//The function below changes the image as we click on it

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ufo.png') {
      myImage.setAttribute('src','images/weather-baloon.jpg');
    } else {
      myImage.setAttribute('src','images/ufo.png');
    }
}

// Personalized welcome message code //

//This takes references to the new button and the heading, storing each inside variables 
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/* The function below is to set the personalized greeting.
The setUserName() function contains a prompt() function, which displays a dialog box, 
similar to alert() */

// With the if...else statement we check if there is no name (or name = null)
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Unidentified flying objects, ' + myName;
  }
}

// Initialization code, it structures the app when it first loads.  
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Unidentified flying objects, ' + storedName;
}

// This allows the user to enter a different name by pressing the button. 
myButton.onclick = function() {
  setUserName();
}










