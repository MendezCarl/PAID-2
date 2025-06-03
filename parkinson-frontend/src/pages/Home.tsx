import React, {useRef, useState} from "react";
import UniversalButton from "../components/UniversalButton";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";

const Home: React.FC = () => {
    //ref to the hidden file input
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const openFileExplorer = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0){
            Array.from(files).forEach((file) => {
                console.log('Selected file:', file.name);
            });
            alert("Files uploaded")
        } else{
            alert("Files not uploaded")
        }
    };

    const uploadExistingPatientData = () => {
        openFileExplorer()
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '2rem',
            gap: '1.5rem'
        }}>
            <h1 style={{
                fontSize: '2.5rem',
                color: '#2F75B5',
                marginBottom: '1rem'
            }}>Welcome to the Parkinson AI Diagnosis System</h1>
            
            <p style={{
                fontSize: '1.2rem',
                maxWidth: '800px',
                lineHeight: '1.6'
            }}>If you have existing patient data, you can upload by clicking the button below. It will populate files in the profile page.</p>
            
            <UniversalButton text="Upload Patient Data" onClick={uploadExistingPatientData} />
            
            <p style={{
                fontSize: '1.2rem',
                maxWidth: '800px',
                lineHeight: '1.6'
            }}>If you are registering a new patient, just move through the pages in order.</p>

            <input 
                type="file"
                accept="image/*"
                multiple
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{display: 'none'}}
            />
        </div> 
    );
};

export default Home;