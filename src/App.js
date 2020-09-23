import React,{useState} from 'react';
import './App.css';


function App() {

 

   const streamCamVideo =() => {
    var video = document.getElementById("videoElement");
   
    navigator.mediaDevices.enumerateDevices()
    .then(devices => {
      console.table(devices)
      var camera = devices.filter(device => device.kind === "videoinput");
      
      if (camera[0]) {
        console.log(camera[0].deviceId)
       
        var constraints = { deviceId: { exact: camera[0].deviceId } };
        
       //video.srcObject =navigator.mediaDevices.getUserMedia({ video: constraints });
        //video1.srcObject =navigator.mediaDevices.getUserMedia({ video: constraints1 });
        return navigator.mediaDevices.getUserMedia({ video: constraints });
      }
    })
    .then(stream => video.srcObject = stream)
    .catch(e => console.error(e));
  }

  const secondVideo = () =>{
    var video1 = document.getElementById("videoElement1");
    navigator.mediaDevices.enumerateDevices()
    .then(devices => {
      console.table(devices)
      var camera = devices.filter(device => device.kind === "videoinput");
      
      if (camera) {
        console.log(camera[1].deviceId)
        var constraints = { deviceId: { exact: camera[1].deviceId } };
       
        
       //video.srcObject =navigator.mediaDevices.getUserMedia({ video: constraints });
        //video1.srcObject =navigator.mediaDevices.getUserMedia({ video: constraints1 });
        return navigator.mediaDevices.getUserMedia({ video: constraints});
      }
    })
    .then(stream => video1.srcObject = stream)
    .catch(e => console.error(e));
  }

  return (
    <div className="App">
      <div id="container">
          <video autoPlay={true}  id="videoElement"></video>
          <video autoPlay={true} id="videoElement1"></video>
        </div>
        <br/>
        <button onClick={streamCamVideo}>Start streaming</button>
        <button onClick={secondVideo}>Second streaming</button>
    </div>
  );
}

export default App;
