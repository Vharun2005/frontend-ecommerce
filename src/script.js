const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 3000

const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html'})
    fs.readFile(path.join(__dirname,'e-commerce','src','index.js'),'utf-8',(error, data)=>{
        if(error){
            res.writeHead(404)
            console.error(error)
        }
        else{
            res.write(data)
        }
        res.end()
    })
})




server.listen(PORT,(error)=>{
    if(error){
    console.error(`the error is ${error}`)
    }else{
        console.log('server is running in ' + PORT)
    }
})