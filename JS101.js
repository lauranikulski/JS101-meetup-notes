
// First off, you can use 2 slashes for one line comments and 

/* for multiline 
comments */ 




// ***Multiply two numbers***
// You are given two numbers. How can you get them to multiply?

function add(a, b){
    return a + b; 
} 
console.log(add(5,6));











// ***Find out if a number is even or odd***
// Pass in a number and find out if it is an odd or even one. 

function even_or_odd(number) {
    if (number % 2 === 0) {
        return 'even'; 
    } else {
        return 'odd'; 
    }
}
console.log(even_or_odd(16)); 













// *** Area of a Triangle*** 
// Write a function that tells you the area of a given triangle. 
// You are given the height and base of the triangle. 
 function triArea(base, height) {
    return (base * height) /2; 
 }
console.log(triArea(7,4)); 













// ***Convert minutes into seconds *** // 
// Write a function that accepts minutes as an argument, and tells you how many seconds there are in
// those minutes. 

function minsToSecs(mins) {
    return mins * 60;
}
console.log(minsToSecs(4.5)); 













// ***Make a Boolean value return a word*** 
// Pass in a Boolean value (true/false) and let it return 'yes' if true and 'no' if false  
function boolToWord(bool){
   if (bool===true) {
       return 'Yes';  
   } else if (bool===false) {
       return 'No'; 
   } else {
       return 'please return a valid boolean'; 
   }
}; 
console.log(boolToWord('again')); 















// ***Do I qualify for free shipping? *** 
// Let's say you want to find out if the sum of two items is less or more 
// than a certain amount, eg imagine you're an online shop and you want
// to tell customers whether they're eligible for free shipping.
// The function needs to take in 3 arguments: eligShipAmount, item1, item2. 

function freeShipping(eligShipAmount, item1, item2) {
  if (item1 + item2 >= eligShipAmount) {
      return true; 
  } else {
      return false; 
  }
}; 
console.log(freeShipping(100, 60, 80)); 











// *** How many legs? ***
// You're a farmer, and for whatever reason, you would like to count your animal's legs. 
// You have chickens, cattle and pigs, in that order. 
// You want to know all of the animals' legs, combined. 
function animals(chickens, cows, pigs) {
    let chickenLegs = chickens * 2; 
    let cattleLegs = cows *4; 
    let pigLegs = pigs * 4; 
    return chickenLegs + cattleLegs + pigLegs; 
}
console.log(animals(5,2,8)); 













// ***How much water do you need to drink?*** 
// Let's say you love marathon running. It is important to stay hydrated, so you need to 
// drink 0.5 L of water per hour of running. You know roughly how long you will be running
// for, now you want to calculate how much water you need to bring, rounded down to the 
// next smallest number. 


function litres(time) {
    const litres = 0.5; 
    return Math.floor(time*litres); 
}; 
console.log(litres(2)); 











// ***Mini Calculator*** 
// You want to create a function that can handle four basic mathematical operations. (+-*/)
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return the result of the numbers after applying the chosen operation.
 
// Examples
// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7

function basicOp(operation, value1, value2) {
    switch(operation) {
        case '+': return value1+value2; 
        break; 
        case '-': return value1-value2; 
        break; 
        case '*': return value1*value2; 
        break; 
        case '/': return value1/value2; 
        break; 
        default: return 'operation must be a +-*/'; 
    }
}; 
console.log(basicOp('$', 3, 10)); 








// ***Do I need to go out to buy more paint?*** 
// You have a bucket containing paint and you'd like to create 
// a function that returns the number of complete walls that 
// you can paint, before you need to head to the shops to buy more.

// n is the number of square meters you can paint.
// w and h are the widths and heights of a single wall in meters.

// Don't count a wall if you don't manage to paint all of it before running out. 
// All walls have the same dimensions.
// All numbers are positive integers.


function paintWall(n, w, h) {
    let singleWall = w*h; 
    return Math.floor(n/singleWall); 
}
console.log(paintWall(41, 3, 6)); 














// ***Is it divisible by x AS WELL AS y?*** 
// Create a function that checks if a number n is divisible by two numbers x AND y. 
// For argument's sake, all inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
        return true; 
    } else {
        return false; 
    }  
}; 
console.log(isDivisible(29, 7, 3)); 














// ***What century is it?*** 
// You are given a year (AD), return what century it is in. 
// Eg 
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 21
// Hint: Try breaking down this task into 2 sub tasks that need to be accomplished!  

function century(year) {
    return Math.ceil(year/100); 
}
console.log(century(2148)); 












// ***Take a Number, Get a String***  
// You are given a number and want to get that number back as a string. 
// Eg 
// 123 --> "123"
// 999 --> "999"

function numberToString(num) {
    return String(num);  
}; 
console.log(numberToString(789)); 














// ***Remove first and last character*** 
// Try to remove the first and last characters of a string. You're given
// one parameter, the original string. You don't have to worry with strings
// with less than two characters.



const removeChar = str => str.slice(1, -1); 
console.log(removeChar('Codecademy'));  












// ***Go Golfing*** 
// In golf, each hole has a par, meaning, the average number of strokes a golfer makes in order to sink the ball. 
// Depending on how far above or below par your strokes are, there is a different nickname.
// Par and Stroke will always be positive numbers. 

// Strokes	Return
//  1	"Hole-in-one!"
//  <= par - 2	"Eagle"
//  par - 1	"Birdie"
//  par	"Par"
//  par + 1	"Bogey"
//  par + 2	"Double Bogey"
//  >= par + 3	"Go Home!"


const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes === 1) {
        return names[0];
    } 
    else if (strokes <= par -2) {
        return names[1]; 
    }
    else if (strokes <= par -2) {
        return names[1]; 
    }    else if (strokes === par -1) {
        return names[2]; 
    }    else if (strokes === par) {
        return names[3]; 
    }    else if (strokes === par + 1) {
        return names[4]; 
    }    else if (strokes === par + 2) {
        return names[5]; 
    } else {
        return names[6]; 
    }
}; 
console.log(golfScore(4,10)); 

















