import React, {useState, useEffect} from "react";
import TextInput from "../components/TextInput";
import UniversalButton from "../components/UniversalButton";
import type { ProfileData } from "./interfaces";

interface ProfileProps {
    profileData: ProfileData | null;
    setProfileData: (data: ProfileData) => void;
}

const Profile: React.FC<ProfileProps> = ({ profileData, setProfileData }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setdob] = useState('');
    const [hobbies, setHobbies] = useState('');
    const [preexistingConditions, setpreexistingConditions] = useState('');
    const [allergies, setAllergies] = useState('');
    const [medication, setMedication] = useState('');

    useEffect(() => {
        if (profileData) {
            setFirstName(profileData.firstName || '');
            setLastName(profileData.lastName || '');
            setdob(profileData.dob || '');
            setHobbies(profileData.hobbies || '');
            setpreexistingConditions(profileData.preexistingConditions || '');
            setAllergies(profileData.allergies || '');
            setMedication(profileData.medication || '');
        }
    }, [profileData]);

    const handleSubmit = () => {
        const newProfileData: ProfileData = {
            firstName,
            lastName,
            dob,
            hobbies,
            preexistingConditions,
            allergies,
            medication,
        };
        setProfileData(newProfileData);
        alert("Profile is Saved");
    }

    return (
        <div style = {{maxWidth: '400px', margin: '2rem auto'}}>
            <h1>Patient Information</h1>

            <TextInput label="First Name" value={firstName} onChange={setFirstName} placeholder="" />
            <TextInput label="Last Name" value={lastName} onChange={setLastName} placeholder="" />
            <TextInput label="Date of Birth" value={dob} onChange={setdob} placeholder="" />
            <TextInput label="Hobbies" value={hobbies} onChange={setHobbies} placeholder="" />
            <TextInput label="Pre-exisiting Conditions" value={preexistingConditions} onChange={setpreexistingConditions} placeholder="" />
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