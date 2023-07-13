import React from "react";
import { ReactMediaRecorder } from "react-media-recorder";

const RecordView = () => (
  <div>
    <ReactMediaRecorder
      audio
      audioConstraints={{
         volume: 1, // Adjust the volume value (0 to 1)
       }}
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          <p>{status}</p>
          <button onClick={startRecording}>Start Recording</button>
          <button onClick={stopRecording}>Stop Recording</button>
          {mediaBlobUrl && <audio src={mediaBlobUrl} controls />}
        </div>
      )}
    />
  </div>
);

export default RecordView;
