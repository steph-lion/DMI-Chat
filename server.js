const http = require("http");
const express=require("express");
const app=express();
const hostname = '127.0.0.1';
const PORT = 3000;

const server = http.createServer(app);

const io=require("socket.io") (server);

app.set('view engine', 'ejs');

app.use(express.static('public'));

io.on('connection',function(socket){
  console.log("Nuova connessione socket aperta");
  socket.on('message', function(message){
    console.log(message);
  });
});

app.get('/',function(req,res){
  res.render('index.ejs');
});

/*app.get('/prova', function(req,res){
  let name="Stefano";
  res.render('prova.ejs', {name: name});
});*/

server.listen(PORT,hostname,() => {
  console.log(`Server running on port: ${PORT}`);
});