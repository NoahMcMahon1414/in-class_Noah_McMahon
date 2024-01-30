'use strict';

// use querySelector and css selectors to get the none.css href
// log it

let h1 = document.querySelector(h1)

//select h1 and modify it's font-size




//add event listener to the button to track x and y of clicks
//log them
//log the target

let button = document.querySelector('button')
button.addEventListener('click', function(event) {
    
let message = "You clicked on " + event.offSetX + " and " + event.offSetY;

let clickedElement = event.target;
clickedElement.style.fontSize = "2em";

console.log(message)
console.log(clickedElement)

});

//key press event listener

document.addEventListener('keydown', function(event) {

    if(event.key == "ArrowUp")
    {
        console.log('Going Up')
    } else if (event.key == "ArrowDwn")
    {
        console.log("Arrow Down!")
    } 

});

//get all style sheet links, log them, then add even listeners to each




// track state of clicks
