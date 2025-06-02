import React, {useState} from "react";
import TextInput from "../components/TextInput";
import UniversalButton from "../components/UniversalButton";

const Profile: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');

    const handleSubmit = () => {
        console.log({name, email, bio});
        alert("Profile is saved")
    }

    return (
        <div style = {{maxWidth: '400px', margin: '2rem auto'}}>
            <h1>Patient Information</h1>

            <TextInput label="first-Name" value={firstName} onChange={setFirstName} placeholder="" />
            <TextInput label="last-Name" value={lastName} onChange={setLastName} placeholder="" />

            <UniversalButton
                text="Save"
                type="submit" 
                onClick={handleSubmit}
                className="w-full"
            />            
        </div>

        
    )
}

export default Profile;