let express = require("express"); // got access to application
let expressApp = express(); // ();

// Http call for base route
expressApp.get("/", (req, res) => {
    console.log(req);
  res.write("This is my base route");
  res.end();
});

expressApp.get("/user", (req, res) => {
  res.write("This is user route");
  res.end();
});

// expressApp.get("/user/:userId", (req, res) => {
//   res.write("This is user " + req.params[0]);
//   res.end();
// });

// //using regular expressions
// expressApp.get(/^\/user\/(\d{2})$/, (req, res) => {
//   res.write("This is user " + req.params[0]);
//   res.end();
// });

expressApp.listen(4000, () => {
  console.log("server is up and running");
});

// let http = require("http");

// let server = http.createServer((req, res) => {
//   console.log(req);
//     res.write("this is working");
//   res.end();
// });

// server.listen(5780, () => {
//   console.log("server is starting and running");
// });
