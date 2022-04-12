const http = require('http')  //  require http module
http.createServer(function (req, res) {
    // res.write("Welcome back Man!")
    // res.end()
    //  above 2 lines are equal to below res.end("Welcome back Audhil!")
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.end("Welcome back Audhil!")
}).listen(8080)
