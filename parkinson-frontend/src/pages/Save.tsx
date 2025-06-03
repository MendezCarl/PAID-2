import React, { useState, useContext } from "react";
import type { ProfileData } from "./interfaces";
import { AppDataContext } from "../context/AppDataContext";

interface SaveProps {
  profileData: ProfileData | null;
}

const Save: React.FC<SaveProps> = ({ profileData }) => {
  const [fileName, setFileName] = useState("patient_data.json");
  const { appData } = useContext(AppDataContext);

  const handleSave = () => {
    const dataToSave = {
      patient: profileData,
      videoData: {
        segments: appData.videoSegments
      }
    };
    const json = JSON.stringify(dataToSave, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName.endsWith('.json') ? fileName : fileName + '.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <h1>Save Patient Data</h1>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="filename">File Name: </label>
        <input
          id="filename"
          type="text"
          value={fileName}
          onChange={e => setFileName(e.target.value)}
          style={{ width: '70%' }}
        />
      </div>
      <button onClick={handleSave} style={{ padding: '0.5rem 1rem' }}>Download JSON</button>
      
      {appData.videoSegments.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Video Segments to be saved:</h3>
          <ul>
            {appData.videoSegments.map((segment, index) => (
              <li key={index}>
                {segment.label}: {segment.start.toFixed(2)}s - {segment.end.toFixed(2)}s
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Save;