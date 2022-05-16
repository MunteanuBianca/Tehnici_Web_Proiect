const express = require('express');
const res = require('express/lib/response');
const app = express();
// app.use(express.static(__dirname ));
// http.createServer(function (req, res) {
//   //Open a file on the server and return its content:
//   fs.readFile('Hotel_pagina_principala.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);
const path = require('path');
app.get('/principala', function(req, res){
  res.sendFile('Hotel_pagina_principala.html',{root:path.join(__dirname)});
});
app.get('/restaurant', function(req, res){
  res.sendFile('Restaurant.html',{root:path.join(__dirname)});
});
app.get('/rezervari', function(req, res){
  res.sendFile('Rezervari.html',{root:path.join(__dirname)});
});
app.get('/istoric', function(req, res){
  res.sendFile('Istoric.html',{root:path.join(__dirname)});
});
app.use('/public', express.static(path.join(__dirname)));
app.listen(3003);
