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
        <div>
            <h1>This is the Home page</h1>
            <UniversalButton text = "Upload Patient Data" onClick={uploadExistingPatientData} />

            <input 
                type = "file"
                accept =  "image/*"
                multiple
                ref = {fileInputRef}
                onChange={handleFileChange}
                style={{display: 'none'}}
            />
        </div> 
    );
};

export default Home;