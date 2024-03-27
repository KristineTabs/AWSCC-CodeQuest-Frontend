const myList = document.getElementById("list");
const removeItem = myList.children[0];
myList.removeChild(removeItem);

const lastItem = myList.lastElementChild;
lastItem.remove();

myList.innerHTML = "";