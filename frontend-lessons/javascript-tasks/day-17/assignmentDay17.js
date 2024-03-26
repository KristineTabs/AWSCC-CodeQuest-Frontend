//Task 1: Array Basics

const cities = ["Quezon City", "Caloocan City", "Pasig City", "Makati City", "Pasay City"];
console.log(cities[2]);
cities[1] = "Mandaluyong City";
console.log(cities[1]);

//Task 2: Array Operations

const fruits = ["apple", "banana", "mango", "pear"];
fruits.push("watermelon");
fruits.pop();
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//Task 3: Advanced Array Techniques

const numbers = [5, 4, 9, 2, 8];
const doubledNumbers = numbers.map(function(number) {
    return number * 2;
});
console.log(doubledNumbers);

const greater = numbers.filter(function(numbers) {
    return numbers > 5;
});
console.log(greater);

//Task 4: Array Manipulation

const colors = ["blue", "green", "purple", "pink"];
colors.unshift("yellow");
colors.shift();

const slicedColors = colors.slice(1, 3);
console.log(slicedColors);

//Task 5: Array Splicing

const characters = ["Ichikawa", "Yamada", "Yuki", "Itsuomi", "Rei", "Miri"];
characters.splice(2, 0, "Shin", "Emma");
console.log(characters);

characters.splice(4, 3);
console.log(characters);