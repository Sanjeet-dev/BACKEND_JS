// Please don't change the pre-written code
// Import the necessary modules here
const http = require('http');
const fs = require('fs');
const PORT = 8080;

const server = http.createServer((req,res)=>{
    const data = fs.readFileSync("index.html").toString();
    res.end(data);

})

server.listen(PORT, ()=>{
    console.log(`server is listening on port ${PORT}`)
})

// Write your code here

module.exports = server;
