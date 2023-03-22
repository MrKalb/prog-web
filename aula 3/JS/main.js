import {TestClass} from "./another-class.js"

let variableLet; 
var variableVar; 
const variableConst = "";

let string = 'C'; 
let stringA = ""; 
let number = 1.0; 
let bool = true; 
let array = [1,2,3,4,5,6,7]
let arrayString = ["abc", "def", "aio"]
let obj = {
    id: 1, 
    name: 'Igor', 
    description: "Some description"
};

for (let index = 0; index < array.length; index++) {
    console.log(array[index]) 
}

array.forEach(element => {
    console.log(element)
});

for (let object in obj) {
   console.log(`${object}: ${obj[object]}`)
}

for (let iterator of array) {
    console.log("here we go " + iterator)
}

if(1 === "1") {
    console.log("deu true")
}

if (bool == true) {
    console.log("deu true")
}

const testClass = new TestClass(1, "Igor", "Some Description");

console.log(testClass.id)

testClass._id(2);

console.log(testClass.id)
