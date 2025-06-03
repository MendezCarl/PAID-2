import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Evaluate from './pages/Evaluate'
import Profile from './pages/Profile'
import Save from './pages/Save'
import Upload from './pages/Upload'
import Navbar from "./components/Navbar"
import ExcelLayout from "./components/ExcelLayout"
import type { ProfileData } from './pages/interfaces'
import { AppDataProvider } from './context/AppDataContext'

const App: React.FC = () => {
  const [sharedVideoUrl, setSharedVideoUrl] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  const handleVideoUpload = (url: string, fileName: string) => {
    setSharedVideoUrl(url);
    setUploadedFileName(fileName);
  };

  return (
    <AppDataProvider>
      <Router>
        <div style={{ 
          minHeight: '100vh',
          backgroundColor: '#F3F2F1'
        }}>
          <Navbar />
          <ExcelLayout>
            <Routes>
              <Route path = '/' element = {<Home />} />
              <Route path = '/profile' element = {<Profile profileData={profileData} setProfileData={setProfileData} />} />
              <Route path = '/evaluate' element = {<Evaluate videoUrl={sharedVideoUrl} uploadedFileName={uploadedFileName} />} />
              <Route path = '/upload' element = {<Upload onVideoUpload={handleVideoUpload} />} />
              <Route path = '/save' element = {<Save profileData={profileData} />} /> 
            </Routes>
          </ExcelLayout>
        </div>
      </Router>
    </AppDataProvider>
  );
};

export default App;