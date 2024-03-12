let shopping = ['tree', 24,'Asif', [22,33,44]];
console.log(shopping);
// displays array and its values
console.log(shopping.length);

// Length
let birds = ['Parrot','Owl','Falcon'];
console.log(birds);
console.log(birds.length);
// Push and Unshift
birds.push(1);
// Push adds item at the end of the Array
console.log(birds);

birds.unshift('Eagle');
// Unshift adds item at start of the Array
console.log(birds);

// Pop and Shift

birds.pop();
// pop removes last index value
console.log(birds);

birds.shift();
// Shift removes value at first index
console.log(birds);

// Splice : if you know index of item, use Splice to remove it
let birds2 = ['Parrot','Eagle','Falcon','Owl'];
console.log(birds2);
let f = birds2.indexOf('Falcon');
console.log(f);
// if (f!==-1) {
    // birds2.splice(0,3);
// It will go to index value 0 and delete values of three indexes incl 0
console.log(birds2);

// Slice: to delete values before the given index
let g = birds2.slice(2);
console.log(g);

// Function for Doubled Number
function double(number) {
    return number**2;
}
let numbers = [5,2,7,6,[10,14,13]];
let doubled = numbers.map(double);
console.log(doubled);

// Converting strings to Arrays
let data = "Lahore, Karachi, Peshawar, Quetta";
console.log(data);
// It was a string
let cities = data.split(",");
console.log(cities);
// split has changed the string to Array

// Convert Array to string
let data2 = ["Lahore", "Karachi", "Peshawar", "Quetta"];
console.log(data2);
// It was an Array
let cities2 = data2.join(", ");
console.log(cities2);
// Join has changed the Array to String

// tostring property
let data3 = ["Lhr", "Khi", "Psh", "Qta"];
console.log(data3);
let cities3 = data3.toString();
console.log(cities3);
let cities4 = cities3.split();
console.log(cities4);
let cities5 = cities4.toString();
// let cities6 = cities5.tostring()
console.log(cities5);
let cities6 = cities4.join(", ");
console.log(cities6);

// Empty Array
let arr = []
arr.push('A', 'B', 'C');
console.log(arr);
console.log(arr.length);
arr[5] = 'F';
console.log(arr);

// For each
let colors = ['Purple', 'Blue', 'Yellow'];
colors[5] = 'Green';
console.log(colors);

colors.forEach((item,index) => {
    console.log(`${index}:${item}`);
});

