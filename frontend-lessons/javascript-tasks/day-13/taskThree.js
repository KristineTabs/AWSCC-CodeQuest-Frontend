let isMorning = true;
let isRaining = true;

//&&
if (isMorning && isRaining) {
    console.log("It is a rainy morning.");
} else {
    console.log("It's a sunny morning.");
}

//||
if (isMorning || isRaining) {
    console.log("It is either raining or morning.");
} else {
    console.log("It's neither morning nor raining.");
}

//!
console.log(!isMorning);