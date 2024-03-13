const express = require('express');
const app = express();

app.use(function(req,res,next){
  console.log("I am middleware");
  next();
})

app.use(function(req,res,next){
  console.log("I am middleware 2");
  next();
})
app.get('/',function(req,res){
  res.send('Hello i am your queries');
})

app.get('/profile',function(req,res){
  res.send('Hello i am from your profile');
})

app.get('/contact',function(req,res){
  res.send('Hello i am contact route');
})
app.get('/payment',function(req,res){
  res.send('Hello i am from payment');
})

app.listen(3005);