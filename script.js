const express = require('express')
const app = express();

app.use(function(req,res,next){
  console.log("I am middleware");
  next();
})

app.get('/',function(req,res){
  res.send("Hello i am queries hehe");
})

app.get('/profile',function(req,res){
  res.send("Hello i am from your profile");
})
app.use(function(req,res,next){
  console.log("I am middleware after profile");
  next();
})
app.get('/userid',function(req,res){
  res.send("Hello i am dashboard");
})

app.get('/userid/profile',function(req,res){
  res.send("Hello i am profile klmewnfnwejkf");
})
app.listen(8080);