import React from 'react';
import './App.css';
import {useEffect} from "react";
import {useRef} from "react";
import {useState} from "react";



function App() {

  const [socket,setSocket]=useState();

  const inputRef=useRef();

  function sendMessage(){
    if(!socket){
      return;
    }
    const message=inputRef.current.value;

    //socket.send("ping");
    // rather than doing this we can use useRef hook to send the msg we want to send 


    //send msg to the server
    //@ts-ignore
    socket.send(message);

  }
 

  //this part runs only once
  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    // when the msg came it will alert me
    ws.onmessage=(ev)=>{
      console.log(ev.data);

      alert(ev.data);
    }

  },[]);

  return (
    <div>
      <input ref={inputRef} type="text"  placeholder="Message...." />
      <button onClick={sendMessage}>Send</button>
    </div>
    
  )
}

export default App
