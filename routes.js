const fs = require('fs');

const requestHandler = (req, res) => {
    if(req.url === '/') {
        res.write('<html><title>node</title><body><form action = "/message", method="POST"><input type = "text", name = "name"></input><Button type= "submit">SEND</Button></form></body></html>');
        return res.end();
        
        
    }
    
    if(req.url === '/message' && req.method==='POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            console.log(body);
            const message = Buffer.concat(body).toString();
            console.log(message);
            const messageValue = message.split("=")[1];
    
            fs.writeFile("message.text", messageValue, ()=>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
            
    
        });
      
    }
};

module.exports = requestHandler;
