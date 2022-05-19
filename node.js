const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const fs = require('fs');
const formidable=require('formidable');
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
app.get('/fetch', function(req, res){
  res.sendFile('rezervari.json',{root:path.join(__dirname)});
});

app.post('/rezervari',function(req,res){
  var userDetails;
  if (fs.existsSync("rezervari.json"))
  {
  var date= fs.readFileSync("rezervari.json");
  userDetails=JSON.parse(date);
  }
  else {
    userDetails=[];
  }
  let ok=1;
  const details = {firstname, lastname, email, nr, data_sosire, data_plecare, camera, guests, requests} = req.body;
  for( let i=0; i< userDetails.length; i++) {
    if(data_sosire == userDetails[i]['data_sosire'] && data_plecare == userDetails[i]['data_plecare'] && camera == userDetails[i]['camera']) {
      ok=0;
    }
  }
  if(ok==1) {
    userDetails.push(details);
    res.render('Rezervari_realizate.ejs' ,{firstname, lastname, email, nr, data_sosire, data_plecare, camera, guests, requests});
    fs.writeFileSync("rezervari.json",JSON.stringify(userDetails));
    // userDetails.pop();
    // fs.writeFileSync("rezervari.json",JSON.stringify(userDetails));
  }
  else {
    res.status(404).sendFile("Rezervare_esuata.html", {root: path.join(__dirname)});
  }
});


app.use('/public', express.static(path.join(__dirname)));

app.use((req, res, next) => {
  res.status(404).sendFile("404.html", {root: path.join(__dirname)});
});


app.listen(process.env.PORT || 3003);
