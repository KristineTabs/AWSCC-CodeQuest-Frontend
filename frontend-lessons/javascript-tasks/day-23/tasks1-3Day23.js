const buttonOne = document.getElementById("button1");

buttonOne.addEventListener("click", function(event) {
    alert("Button clicked!");
});

const buttonTwo = document.getElementById("button2");

buttonTwo.addEventListener("dblclick", function(event) {
    alert("Button double-clicked!");
});

const buttonThree = document.getElementById("button3");

buttonThree.addEventListener("mouseenter", function(event) {
    buttonThree.style.backgroundColor = "yellow";
});