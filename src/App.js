import React from 'react';
import './App.css';

function App() {

   const streamCamVideo =() => {
    var video = document.querySelector("video");
    navigator.mediaDevices.enumerateDevices()
    .then(devices => {
      console.table(devices)
      var camera = devices.filter(device => device.kind === "videoinput");
      if (camera) {
        var constraints = { deviceId: { exact: camera.deviceId } };
        return navigator.mediaDevices.getUserMedia({ video: constraints });
      }
    })
    .then(stream =>video.srcObject = stream)
    .catch(e => console.error(e));
  }

  return (
    <div className="App">
      <div id="container">
          <video autoPlay={true} id="videoElement"></video>
        </div>
        <br/>
        <button onClick={streamCamVideo}>Start streaming</button>
    </div>
  );
}

export default App;
