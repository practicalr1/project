:1) Node.js Application for Basic Mathematical Operations
// math.js
let a = 20;   
let b = 10;
console.log("Addition =", a + b);
console.log("Subtraction =", a - b);
console.log("Multiplication =", a * b);
console.log("Division =", a / b);

2) Node.js Program to Create Simple Web Server (Hello World)
// server.js
const http = require('http');
const server = http.createServer((req, res) => {
    res.write("Hello World");
    res.end();
});
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

1) Write a Node.js program to display basic system information using the OS core module. 
var os = require('os');
console.log("Platform: " + os.platform());
console.log("CPU Architecture: " + os.arch());
console.log("Total Memory: " + os.totalmem());
console.log(“type of system”,os.type());

2) Write a Node.js program to write data into a file using the File System core module. 
var fs = require('fs');
fs.writeFileSync("sample.txt", "Node.js File System Module");
console.log("File written successfully");
fs.appendFileSync("sample.txt", "Node.js File System Module");
console.log("Append successfully");

3) Write a Node.js program to generate a hash value using the Crypto core module. 
var crypto = require('crypto');
var data = "bca123";
var hash = crypto.createHas
h('sha256')
.update(data)
 .digest('hex');
console.log("Hashed Password:", hash);

1) Create a simple Login System using the Event module in Node.js.
// login.js
const EventEmitter = require('events');
const event = new EventEmitter();
// Login event
event.on('login', (username, password) => {
    if (username === "admin" && password === "1234") {
        console.log("Login Successful");
    } else {
        console.log("Invalid Username or Password");
    }
});
event.emit('login', "admin", "1234");

 2) Write a Node.js program using the Path module to create a file path and display the file name, directory location, file extension, and complete path details. 
// pathdemo.js
const path = require('path');
let filepath = "/users/student/docs/example.txt";
console.log("File Name :", path.basename(filepath));
console.log("Directory :", path.dirname(filepath));
console.log("Extension :", path.extname(filepath));
console.log("Complete Path :", path.resolve(filepath));

3) Write a Node.js program that prints a formatted string, displays an object clearly, and reads a file asynchronously.
// fileasync.js
const fs = require('fs');
const util = require('util');
let name = "Geeta";
let age = 23;
console.log(util.format("Name: %s Age: %d", name, age));
let student = {
    id: 1,
    name: "Riya",
    course: "BCA"
};
console.log(util.inspect(student));
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading file");
        return;
    }   console.log("File Content:");
    console.log(data);    });
Local Module

1)Create a local module to calculate the factorial of a number. 
//Create a module file-> fact.js
function factorial(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}
module.exports = factorial;
//main.js
const factorial = require('./factorial');
let num = 5;
console.log("Factorial =", factorial(num));
//node app.js

Q.)Create a local total mark, percentage, and result of a student.
Marks.js->
function calculate(m1, m2, m3) {
let total = m1 + m2 + m3;
    let percentage = total / 3;
let result = (percentage >= 40) ? "Pass" : "Fail";
return { total, percentage, result };
}

module.exports = calculate;
app.js
           const calculate = require('./result');
           let res = calculate(70, 65, 80);
console.log("Total Marks =", res.total);
console.log("Percentage =", res.percentage);
console.log("Result =", res.result);

1)	Create a local module for string operations (uppercase, lowercase, length) and use it in a program to display results

Str.js
function toUpper(str) {
    return str.toUpperCase();
}

function toLower(str) {
    return str.toLowerCase();
}

function length(str) {
    return str.length;
}

module.exports = { toUpper, toLower, length };

//app3.js

const strOp = require('./stringModule');

let text = "NodeJS Practical";

console.log("Uppercase :", strOp.toUpper(text));
console.log("Lowercase :", strOp.toLower(text));
console.log("Length :", strOp.length(text));

Q.) Local Module Used in HTTP Server
Message.js
function getMessage() {
    return "Welcome to Node.js Web Server using Local Module!";
}
           module.exports = getMessage;
server.js
          const http = require('http');
const message = require('./message');

const server = http.createServer((req, res) => {
    res.write(message());
    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
Third party module
1) npm init -y
npm install express
//library.js
Npm install express //type in terminal (where your folder saved )
const express = require('express');
const app = express();
// Book data
const books = [
    { id: 101, name: "Java Programming", author: "James Gosling" },
    { id: 102, name: "NodeJS Guide", author: "Ryan Dahl" },
    { id: 103, name: "Database System", author: "Elmasri" } ];
app.get('/book/:id', (req, res) => {
let bookId = req.params.id;
 let book = books.find(b => b.id == bookId);
if (book)
        res.send(book);
    else
        res.send("Book Not Found");
});
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000"); });

2)	Write program using Lodash to accept number from user dsiply max number 
npm install lodash
const _ = require("lodash");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter numbers separated by comma: ", function(input){
 let numbers = input.split(",").map(Number);
 let max = _.max(numbers);
console.log("Maximum Number:", max);
 rl.close(); });


