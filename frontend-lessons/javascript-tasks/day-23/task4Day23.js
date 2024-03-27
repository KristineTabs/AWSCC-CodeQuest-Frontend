const input = document.getElementById("inputOne");

input.addEventListener("keypress", function(event) {
    console.log("You pressed: ", event.key);
});