Q).Create a program to file that open the request file and return the content of file on terminal 
1)	// file1.js
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter file name to read: ", function(filename){
    fs.readFile(filename, 'utf8', (err, data) => {
        if(err){
            console.log("File not found or error reading file.");
        } else {
            console.log("\nFile Content:\n");
            console.log(data);
        }
        rl.close();
    });
});
Using a web page to read two file names from user and append content of first file into second file 
// file2.js
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter first file name: ", function(file1){
    rl.question("Enter second file name: ", function(file2){
        fs.readFile(file1, 'utf8', (err, data) => {
            if(err){
                console.log("Error reading first file.");
            } else {
              fs.appendFile(file2, data, (err) => {
                    if(err){
                        console.log("Error appending to second file.");
                    } else {
                        console.log(`Contents of ${file1} appended to ${file2} successfully!`);
                    }
                    rl.close() ; });   }  });     });
});
Question:
q. Create a Node.js Application to download jpg image from the Server.
// downloadImage.js
const fs = require('fs');
const https = require('https');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter Image URL (jpg): ", function(url){
    const file = fs.createWriteStream("downloaded_image.jpg");
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log("Image downloaded successfully as downloaded_image.jpg");
            rl.close();
        });
    }).on('error', (err) => {
        fs.unlink("downloaded_image.jpg", () => {});
        console.log("Error downloading image:", err.message);
        rl.close();
    });
});

Q. write code postgresSql database named studentdb and display 
npm init -y
npm install pg

const { Client } = require('pg');
const client = new Client({
  user: 'your_username',       
  host: 'localhost',
  database: 'studentdb',       
  password: 'your_password',   
  port: 5432,                
});
client.connect()
  .then(() => {
    console.log('Connected to studentdb successfully!');
  })
  .catch(err => {
    console.error('Connection failed:', err.stack);
  })
  .finally(() => {
    // Close the connection
    client.end();
  });

Q . create employee with appropriate fileds.
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
    position VARCHAR(50),
    salary NUMERIC(10,2),
    hire_date DATE DEFAULT CURRENT_DATE
);
const { Client } = require('pg');
const client = new Client({
    user: 'your_username',       
    host: 'localhost',
    database: 'studentdb',       
    password: 'your_password',   
    port: 5432,
});
client.connect()
  .then(async () => {
    console.log('Connected to studentdb successfully!');
await client.query(
      `INSERT INTO employees (name, position, salary) VALUES 
      ('Alice', 'Developer', 50000),
      ('Bob', 'Manager', 70000)`
    );
    console.log('Employees inserted successfully.');
    const res = await client.query('SELECT * FROM employees');
    console.log('Employee Records:');
   console.table(res.rows);
    await client.query(
      `UPDATE employees SET salary = 55000 WHERE name = 'Alice'`
    ); console.log('Alice salary updated.');
await client.query(
      `DELETE FROM employees WHERE name = 'Bob'`
    );
    console.log('Bob deleted from employees.');
   const finalRes = await client.query('SELECT * FROM employees');
    console.log('Final Employee Records:');
    console.table(finalRes.rows); })
  .catch(err => console.error('Database operation failed:', err.stack))
  .finally(() => client.end());




