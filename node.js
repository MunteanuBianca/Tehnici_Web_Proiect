const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
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

const userDetails =[];
app.post('/rezervari', function (req, res) {
  let ok=1;
  const details = {firstname, lastname, email, nr, sosire, plecare, camera, guests, requests} = req.body;
  for( let i=0; i< userDetails.length; i++) {
    if(sosire == userDetails[i]['sosire'] && plecare == userDetails[i]['plecare'] && camera == userDetails[i]['camera']) {
      ok=0;
    }
  }
  console.log(ok);
  userDetails.push(details);
  if(ok==1)
    res.render('Rezervari_realizate.ejs' ,{firstname, lastname, email, nr, sosire, plecare, camera, guests, requests});
  else {
      res.status(404).sendFile("Rezervare_esuata.html", {root: path.join(__dirname)});
  }
});

app.use('/public', express.static(path.join(__dirname)));

app.use((req, res, next) => {
  res.status(404).sendFile("404.html", {root: path.join(__dirname)});
});


app.listen(process.env.PORT || 3003);
