//This line imports the HTTP module to create a server.
const http = require ('http')

//These lines define the hostname and port where the server will run.
const hostname = '127.0.0.1'
const port = 3000


//This function creates the server. It takes a callback function with two arguments: req (request) and res (response).

const server = http.createServer((req, res) =>{
   // This line sets the HTTP status code of the response to 200, which means "OK".
    res.statusCode = 200
    //This line sets the response header to indicate that the server will send plain text.
    res.setHeader('Content-type','text/plain')
    // This line ends the response and sends the "Hello, World!" message.   
    res.end('Hello, Nodejs! \n')

})

// This function tells the server to listen on the specified port and hostname and logs a message to the console when the server starts running.
server.listen(port, hostname, () =>{
    console.log(`Server is running at http://${hostname}:${port}/`)
})