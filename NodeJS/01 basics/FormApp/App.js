const http = require('http')
const fs = require('fs')
const path = require('path')


const hostname = '127.0.0.1'
const port = 5000


const server = http.createServer((req, res) =>{
    let filePath = path.join(__dirname,  req.url === '/' ? 'index.html' : req.url)
    let extname = path.extname(filePath)


    if(extname === '' && req.method !== 'POST'){
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

    if(req.method === 'POST' && req.url ==='/submit-form'){
        let body = ''
        req.on('data', chunk =>{
            body += chunk.toString();
        })

        req.on('end', () =>{
            console.log('Received Form Data' , body)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Thank you for your submission!</h1>');
        })
    }else{


        const contentType = contentTypeMap[extname] || 'text/plain'

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
        
    }




    // check if the file is an image
   
})


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})