const express = require('express')
const app = express()

//  home
app.get('/', function(req, res) {
  console.log('Hello World!');
  res.send('HelloWorld!!!!')
})

//  routing
app.get('/alien', function(req, res) {
  res.send('Welcome back! Audhil!')
})

//  dynamic url - request param - http://localhost:8080/alien/33
app.get('/alien/:id', function(req, res) {
  const id = req.params.id
  res.send('Welcome back! ID: ' + id)
})

//  dynamic url - query param - http://localhost:8080/alien?id=33
//  comment from line 11 to 13 to make it work
app.get('/alien', function(req, res) {
  const id = req.query.id
  res.send('Welcome back! Alien with ID: ' + id)
})


//  h/w port number
app.listen(8080, function(req, res) {
  console.log("server is running!");
})
