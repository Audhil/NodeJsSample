var fs = require('fs')
// fs.readFile('calc.js','utf-8', function(err, data){
//   console.log(data);
// })
fs.writeFile('calc1.js','// Jack and jill', function(err){
  console.log('data saved!');
})
fs.appendFile('calc.js', '//  I got appended', function(err){
  console.log('file append succesful!');
})
//  delete the file
// fs.unlink('calc1.js',function(err){
//   console.log('file deleted!');
// })
