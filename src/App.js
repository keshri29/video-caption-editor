import "./styles/styles.css";
import React from 'react';
import VideoCaptionEditor from './Components/videoCaptionEditor';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoEditorLanding from "./Components/Header";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<VideoEditorLanding />} />
      <Route path="/editor" element={<VideoCaptionEditor />} />
    </Routes>
  </Router>
  );
}

export default App;
