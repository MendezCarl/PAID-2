export interface ProfileData{
    firstName: string;
    lastName: string;
    dob: string;
    hobbies: string;
    preexistingConditions: string;
    allergies: string;
    medication: string;
}

export interface VideoSegment{
    start: number;
    end: number;
    label: string;
}

export interface AppData{
    profileData: ProfileData | null;
    videoSegments: VideoSegment[];
    videoFile: File | null;
}

