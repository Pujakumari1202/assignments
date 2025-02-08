import {WebSocketServer} from 'ws';

const wss=new WebSocketServer({port:8080});

//event handler
wss.on("connection",function(socket){
    console.log("user connected");
    // server will response back hello to client
    // socket.send("hello");

    // every 5 sec server will send this msg
    // setInterval(()=>{
    //     //server response back to the client
    //     socket.send("Current price of solana is "+ Math.random());
    // },5000);

    // client send msg to the server
    // socket.on("message",(e)=>{
    //     console.log(e.toString());
    // })


    //ping pong
    socket.on("message",(e)=>{
        if(e.toString()==="ping"){
            socket.send("pong");
        }
    })



})