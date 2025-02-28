import React, { useState } from 'react';

function CaptionEditor({ onAddCaption, limit }){
  const [timestamp, setTimestamp] = useState(0);
  const [caption, setCaption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCaption(parseFloat(timestamp), caption );
    setTimestamp('');
    setCaption('');
  };

  return (
    <form onSubmit={handleSubmit} className="caption-form">
      <label>
        Timestamp (seconds):
        <input
          type="number"
          step="1"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          min="0"
          max={limit}
          required
        />
      </label>
      <label>
        Caption:
        <input
          type="text"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Caption</button>
    </form>
  );
}

export default CaptionEditor;
