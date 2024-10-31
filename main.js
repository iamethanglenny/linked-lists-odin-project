const LinkedList = require('./linked-list');

const myList = LinkedList();

myList.append(10);
myList.append(20);
myList.append(30);

console.log(myList.toString()); // (10) -> (20) -> (30) -> null

myList.prepend(5);
console.log(myList.toString()); // (5) -> (10) -> (20) -> (30) -> null

myList.insertAt(15, 2);
console.log(myList.toString()); // (5) -> (10) -> (15) -> (20) -> (30) -> null

myList.removeAt(3);
console.log(myList.toString()); // (5) -> (10) -> (15) -> (30) -> null

console.log("Size of list:", myList.size()); // Size of list: 4
console.log("Contains 15?", myList.contains(15)); // Contains 15? true
console.log("Find index of 30:", myList.find(30)); // Find index of 30: 3