function greet() { //1
    console.log("Hi!");
}

greet(); //2

function greet(name) {
    console.log(`Hi, ${name}!`); //3
}

greet(`Kristine`); //calling the function for 3

function addNumbers(a, b) { //4
    return a + b;
}

const result = addNumbers(7, 29); //5

function calculateAverage(nums) { //6
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum / nums.length;
}

const numbers = [69, 55, 49, 20, 51]; //7
const ave = calculateAverage(numbers);
console.log(`The average of the array of numbers is ${ave}`);