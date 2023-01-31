// // const helpers = require("./helpers");
// const { sum } = require("./helpers");

// // const total = helpers.sum(10, 200);
// const total = sum(110, 200)
// console.log(total);
// // console.log("getting started with nodejs");
// // function sum(a, b){
// //     return a + b;
// // }

// // const total = sum(3, 4);
// // console.log(total)

// // console.log('nodemon is watching us!')

// const http = require("http");

// const server = http.createServer(function(req, res) {
//     res.writeHead(200, {"Content-Type": "text/html"});
//     res.end("Hello from node!");
// });

// server.listen(8000);

// const fs = require("fs");

// // fs.watch("target.txt", () => console.log("File changed"));
// // console.log("Now watching target.txt for file changes");

// const fileName = "target.txt";

// // fs.readFile(fileName, (err, data) => {
// //     if(err) {
// //         throw err;
// //     }
// //     console.log(data.toString());
// // });

// // Because nodejs is asychronous, this line below gets printed first
// // Even though it is written after the above lines, it is a simple operation
// // and node determined it can be processed first.
// // console.log("Now watching target.txt for file changes");


// //To use synchronous functions, use the Sync keyword
// const data = fs.readFileSync(fileName);
// console.log(data.toString());
// console.log("Now watching target.txt for file changes");

const express = require('express');

const app = express();

// get put post delete
app.get('/api', function(req, res){
    res.json({
        // "message": "hello from node api"
        user: {
            name: "Daniel",
            age: "30",
        }
    });
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
