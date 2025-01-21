const http = require('http')
const fs = require ('fs')

const PORT=3000

const Server=http.createServer((req,res) => {
    switch (req.url){
        case '/home':
            fs.readFile('./home.html',(error, data)=>{
                res.statusCode=200
                res.setHeader('Content-Type','text/html')
                res.end(data)
            }) 
            break;
        case '/about':
            fs.readFile('./about.html',(error, data) => {
                res.statusCode=200
                res.setHeader('Content-Type','text/html')
                res.end(data)
            })  
            break;

            default:
                res.statusCode=400
                res.setHeader('Content-Type', 'text')
                res.end('Not Found')
                break;
        

    }
})
    

Server.listen(PORT,() =>{
    console.log('Server is running...')
})