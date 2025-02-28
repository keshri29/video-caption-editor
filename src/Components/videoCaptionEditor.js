import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";


const VideoCaptionEditor = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);
  const [currentCaption, setCurrentCaption] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [playing, setPlaying] = useState(false); // To track whether video is playing or paused
  const playerRef = useRef(null);
  const [inputCaption, setInputCaption] = useState("");

  const loadVideo = () => {
    if (videoUrl) {
      setIsVideoLoaded(true); // Set the flag to indicate the video is loaded
    }
    setCaptions([]);
    setInputCaption("");
    setStartTime("");
    setEndTime("");
  };

  const addCaption = () => {
    const start = parseFloat(startTime);
    const end = parseFloat(endTime);

    if (!inputCaption || isNaN(start) || isNaN(end)) {
      alert("Please fill in all fields.");
      return;
    }

    if (start < 0 || end < 0) {
      alert("start or endtime can't be negative");
      return;
    }

    if (end <= start) {
      alert("End time must be greater than start time.");
      return;
    }

    // Check for overlapping intervals
    const isOverlapping = captions.some(
      (caption) =>
        (start >= caption.start && start < caption.end) || // New start overlaps existing interval
        (end > caption.start && end <= caption.end) || // New end overlaps existing interval
        (start <= caption.start && end >= caption.end) // New interval encompasses existing interval
    );

    if (isOverlapping) {
      alert("The new caption overlaps with an existing caption time stamp.");
      return;
    }
    if (inputCaption && startTime && endTime) {
      setCaptions([
        ...captions,
        {
          text: inputCaption,
          start: parseFloat(startTime),
          end: parseFloat(endTime),
        },
      ]);
      setInputCaption("");
      setStartTime("");
      setEndTime("");
    }
  };

  const getCurrentCaption = (currentTime) => {
    const activeCaption = captions.find(
      (caption) => currentTime >= caption.start && currentTime <= caption.end
    );
    return activeCaption ? activeCaption.text : "";
  };

  const togglePlayPause = () => {
    setPlaying(!playing); // Toggle play/pause state
  };

  return (
    <div>
      <div className="video-container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter video URL"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="video-input"
          />
          <button onClick={loadVideo} className="load-button">
            Load Video
          </button>
        </div>
        {isVideoLoaded && (
          <>
            <div className="video-wrapper">
              <ReactPlayer
                ref={playerRef}
                url={videoUrl}
                playing={playing}
                controls={true}
                width="100%"
                height="100%"
                onProgress={({ playedSeconds }) =>
                  setCurrentCaption(getCurrentCaption(playedSeconds))
                }
              />
              <div className="caption-display">{currentCaption}</div>
            </div>
            <div>
              <button onClick={togglePlayPause} className="play-button">
                Play/Pause
              </button>
            </div>
            <div className="caption-container bg-white p-6 rounded-lg shadow-md">
              <h3 className="caption-title">Add Caption</h3>
              <div className="caption-form">
                <input
                  type="text"
                  placeholder="Caption text"
                  value={inputCaption}
                  onChange={(e) => setInputCaption(e.target.value)}
                  className="caption-input"
                />
                <input
                  type="number"
                  placeholder="StartTime(sec)"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  min="0"
                  className="time-input"
                />
                <input
                  type="number"
                  placeholder="EndTime(sec)"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  min="0"
                  className="time-input"
                />
                <button onClick={addCaption} className="caption-button">
                  Add Caption
                </button>
              </div>
            </div>
            <div className="caption-list">
              <h4 className="caption-list-title">Captions List</h4>
              {captions.map((caption, index) => (
                <div key={index}>
                  {caption.start}s - {caption.end}s: {caption.text}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoCaptionEditor;
