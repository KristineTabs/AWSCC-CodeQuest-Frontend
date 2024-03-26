//Task 1: JavaScriot to JSON
const product = {
    name: 'Gel Pen',
    price: 21.25,
    quantity: 1,
};

const productJSON = JSON.stringify(product);
console.log(productJSON);

//Task 2: JSON to JavaScript
const bookJSON = `{"title": "Wonder", "author": "RJ Palacio", "publishedYear": "2012"}`;
const book = JSON.parse(bookJSON);
console.log(book.author);

//Task 3: Advanced JSON Operations
const person = [
    {
        name: `Kristine`,
        age: `21`,
        city: `Quezon City`,
    },
    {
        name: `Alfred`,
        age: `18`,
        city: `Pasig City`,
    },
    {
        name: `Leaux`,
        age: `19`,
        city: `Makati City`,
    }
];

const personJSON = JSON.stringify(person);
const newPerson = JSON.parse(personJSON);

for (let i = 0; i < newPerson.length; i++) {
    console.log(newPerson[i].name);
    console.log(newPerson[i].city);
}