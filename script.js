const express = require('express');

const app = express();
// app.set('view engine','ejs');
app.set('view engine','ejs');
app.get('/home/:user',function(req,res){
  res.render('index');
})


app.listen(8080);