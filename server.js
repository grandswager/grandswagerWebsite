// import modules
const express = require('express');
const path = require('path');

// the express server setup
const app = express();
const PORT = 3000;

// the routes
app.use(express.static('public'));
app.use(express.static('files'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));

// the error messages
app.use((req, res, next) => {
  res.status(404).send(`
  <h2 onclick='window.location.replace("https://grandswager.repl.co/")' style="cursor:pointer;background:#ADD8E6;font-family:sans-serif;">grandswager</h2>
  <center style="font-family:sans-serif">
    <h1>Error 404 not found.</h1><br><br><br>
    <h3 onclick='window.history.back()' style="color:blue;cursor:pointer;">Return</h3>
  </center>
  `);
});
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send(`
  <h2 onclick='window.location.replace("https://grandswager.repl.co/")' style="cursor:pointer;background:#ADD8E6;font-family:sans-serif;">grandswager</h2>
  <center style="font-family:sans-serif">
    <h1>Error 500 something broke.</h1><br><br><br>
    <h3 onclick='window.history.back()' style="color:blue;cursor:pointer;">Return</h3>
  </center>
  `);
});

// start the server
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));