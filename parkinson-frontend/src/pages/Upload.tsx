import React, {useRef} from "react";
import UniversalButton from "../components/UniversalButton";

const Upload: React.FC = () => {

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file){
            console.log("Selected file:", file.name);
        }
    }

    return (
        <div>
            <h1>This is the Upload page</h1>

            <UniversalButton
            text=""
            type="button"
            onClick={}
            className=""
            />
        </div>
        
    )
}

export default Upload;