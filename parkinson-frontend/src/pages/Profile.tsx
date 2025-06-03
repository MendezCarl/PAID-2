import React, {useState} from "react";
import TextInput from "../components/TextInput";
import UniversalButton from "../components/UniversalButton";
import type { ProfileData } from "./interfaces";

const Profile: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setdob] = useState('');
    const [hobbies, setHobbies] = useState('');
    const [preexistingConditions, setpreexistingConditions] = useState('');
    const [allergies, setAllergies] = useState('');
    const [medication, setMedication] = useState('');

    const handleSubmit = () => {
        const profileData: ProfileData = {
            firstName,
            lastName,
            dob,
            hobbies,
            preexistingConditions,
            allergies,
            medication,
        };

        console.log(profileData);
        alert("Profile is Saved");
    }

    return (
        <div style = {{maxWidth: '400px', margin: '2rem auto'}}>
            <h1>Patient Information</h1>

            <TextInput label="first-Name" value={firstName} onChange={setFirstName} placeholder="" />
            <TextInput label="last-Name" value={lastName} onChange={setLastName} placeholder="" />
            <TextInput label="Date of Birth" value={dob} onChange={setdob} placeholder="" />
            <TextInput label="hobbies" value={hobbies} onChange={setHobbies} placeholder="" />
            <TextInput label="Pre-exisiting conditions" value={preexistingConditions} onChange={setpreexistingConditions} placeholder="" />
            <TextInput label="Allergies" value={allergies} onChange={setAllergies} placeholder="" />
            <TextInput label="Medication" value={medication} onChange={setMedication} placeholder="" />

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