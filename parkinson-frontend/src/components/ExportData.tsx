import React, { useContext } from 'react';
import { AppDataContext } from '../context/AppDataContext';
import UniversalButton from './UniversalButton';

const ExportData: React.FC = () => {
    const { appData } = useContext(AppDataContext);

    const handleExport = () => {
        // Create a copy of the data without the video file (since it can't be serialized)
        const exportData = {
            ...appData,
            videoFile: null // Remove the video file from export
        };

        // Convert to JSON string
        const jsonString = JSON.stringify(exportData, null, 2);

        // Create a blob and download link
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'parkinsons-data.json';
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        
        // Cleanup
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div>
            <UniversalButton
                text="Export Data"
                type="button"
                onClick={handleExport}
                className=""
            />
        </div>
    );
};

export default ExportData; 