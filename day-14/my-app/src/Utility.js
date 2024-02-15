// In our utility.js file, write a function 
// that converts feet to meters
function feetToMeters(feet) 
{
    return feet / 3.28084
}

// Write another function metersToFeet
function metersToFeet(meters) 
{
    return meters * 3.28084
}

function decimalFeet(feet, inches)
{
    return feet + (inches / 12);
}

// Export each *named* function
export {feetToMeters, metersToFeet, decimalFeet} // named exports