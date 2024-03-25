const express = require('express');

const app = express();
app.set('view engine','ejs');
app.use(express.static('./public'))
app.get('/home',function(req,res){
  res.render('index');
})

app.get('/contact',function(req,res){
  res.render('contact');
})



app.listen(8080);