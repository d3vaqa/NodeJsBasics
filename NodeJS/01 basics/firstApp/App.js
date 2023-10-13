const http = require('http')
const fs = require('fs')
const path = require('path')


const hostname = '127.0.0.1'
const port = 5000


const server = http.createServer((req, res) =>{
    const filePath = path.join(__dirname,  req.url === '/' ? 'index.html' : req.url)
    let extname = path.extname(filePath)

    if(extname === ''){
        filePath += '.html'
        extname = '.html'
    }

    // set the Content-Type based on teh file extenstion

    const contentTypeMap = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.jpg': 'image/jpeg',
        '.png': 'image/png',

    }


    const contentType = contentTypeMap[extname] || 'text/plain'


    // check if the file is an image
    const isImage = ['.png', '.jpg', '.jpeg'].includes(extname)
    // read html file ans serve it

    fs.readFile(filePath, isImage ? null : 'utf8' , (err, data) =>{
        if(err){
            res.statusCode = 404
            res.end("404 Not Found")
            return

        }
        res.statusCode = 200
        res.setHeader('Content-Type', contentType)
        res.end(data)
    })
})


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})