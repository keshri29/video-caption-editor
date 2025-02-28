import React, { useState } from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer ({ videoUrl,captions, handleDetails }){
  const [currentCaption, setcurrentCaption] = useState('');
  const handleCaptionDelay = (time)=>{
    if(captions[time]){
      setcurrentCaption(captions[time])
      setTimeout(()=>{setcurrentCaption('')}, captions[time].length*1000)
    }
    
    
  }
  return (
    <div className="video-player">
      <ReactPlayer
        url={videoUrl}
        controls={true}
        width='500px'
        onDuration={(e)=>handleDetails({duration: e})}
        onProgress={(e)=>handleCaptionDelay(Math.floor(e.playedSeconds))}
      />
      <span style={{color:'white', marginTop: '2%', fontWeight:'bold' }}>
        {currentCaption?`Custom caption: ${currentCaption}`: '' }
      </span>
    </div>
  );
}

export default VideoPlayer;
