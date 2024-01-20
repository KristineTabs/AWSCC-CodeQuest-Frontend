let temperature = 25;
let time = 23;
let day = 'Saturday';

if (temperature < 30) {
    console.log("It's hot.");
} else {
    console.log("It's cold.");
}

if (time <= 11) {
    console.log("Good morning!");
} else if (time <= 17) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

switch (day) {
    case 'Sunday':
        console.log("It's Sunday.");
        break;
    case 'Monday':
        console.log("It's Monday.");
        break;
    case 'Tuesday':
        console.log("It's Tuesday.");
        break;
    case 'Wednesday':
        console.log("It's Wednesday.");
        break;
    case 'Thursday':
        console.log("It's Thursday.");
        break;
    case 'Friday':
        console.log("It's Friday.");
        break;
    case 'Saturday':
        console.log("It's Saturday.");
        break;
    default:
        console.log("Unknown day.");
}