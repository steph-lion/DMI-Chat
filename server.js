const http = require("http");
const express=require("express");
const app=express();
const hostname = '127.0.0.1';
const PORT = 3000;
const server = http.createServer(app);
const io=require("socket.io") (server);

var num_rooms=0; //Numero di stanze disponibili
var numClients={}; //Numero di client per ogni stanza

app.set('view engine', 'ejs');
app.use(express.static('public'));

function get_num_rooms(){
  return num_rooms;
}
function get_clients_in_room(roomID){
  return numClients[roomID];
}

io.on('connection',function(socket){
  console.log("Nuova connessione socket aperta con "+socket.id);
  socket.on("join",(roomID)=>{
    //Sistemare un giorno con nome stanza scelta dall'utente
    socket.join(roomID);
    console.log(socket.rooms);
    socket.room = roomID;
    if (numClients[roomID] == undefined) {
        numClients[roomID] = 1;
        num_rooms++;
        
    } else {
        numClients[roomID]++;
    }
    console.log("Numero di socket nella stanza "+roomID+": "+numClients[roomID]);
  });
  socket.on('disconnect', function () {
    console.log("Socket "+socket.id+" disconnesso");
    numClients[socket.room]--;
    if(numClients[socket.room]==0){
      var pos=numClients.indexOf(socket.room);
      numClients.splice(pos,1);
      num_rooms--;
    }
  });
  
});

app.get('/',function(req,res){
  res.render('index.ejs');
});
app.get('/numrooms', function(req, res) {
  res.status(200).send(get_num_rooms().toString());
});
app.get('/clientsinroom', function(req, res) {
  res.send(get_clients_in_room());
});
/*app.get('/prova', function(req,res){
  let name="Stefano";
  res.render('prova.ejs', {name: name});
});*/

server.listen(PORT,hostname,() => {
  console.log(`Server running on port: ${PORT}`);
});