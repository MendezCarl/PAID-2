import React, {useRef, useState, useContext, useEffect} from "react";
import UniversalButton from "../components/UniversalButton";
import { AppDataContext } from "../context/AppDataContext";
import type { VideoSegment } from "./interfaces";

interface UploadProps {
    onVideoUpload: (url: string, fileName: string) => void;
}

const Upload: React.FC<UploadProps> = ({ onVideoUpload }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [videoPreviewUrl, setVideoPreviewUrl] = useState<string | null>(null);
    const [currentLabel, setCurrentLabel] = useState<string>("");
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [startTime, setStartTime] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const { appData, setAppData } = useContext(AppDataContext);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleTimeUpdate = () => {
            setCurrentTime(video.currentTime);
        };

        const handleDurationChange = () => {
            setDuration(video.duration);
        };

        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('durationchange', handleDurationChange);

        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('durationchange', handleDurationChange);
        };
    }, [videoPreviewUrl]);

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file && file.type.startsWith("video/")){
            const videoUrl = URL.createObjectURL(file);
            setVideoPreviewUrl(videoUrl);
            onVideoUpload(videoUrl, file.name);
            console.log("Selected file:", file.name);
        } else {
            alert("Please upload valid video file.")
        }
    }

    const handleStartLabeling = () => {
        if (!videoRef.current) return;
        
        setIsRecording(true);
        setStartTime(videoRef.current.currentTime);
    };

    const handleEndLabeling = () => {
        if (!videoRef.current || !currentLabel) return;

        const endTime = videoRef.current.currentTime;
        const newSegment: VideoSegment = {
            start: startTime,
            end: endTime,
            label: currentLabel
        };

        setAppData(prev => ({
            ...prev,
            videoSegments: [...prev.videoSegments, newSegment]
        }));

        setIsRecording(false);
        setCurrentLabel("");
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div style={{ 
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            height: "calc(100vh - 80px)",
            alignItems: "center"
        }}>
            <h1 style={{ color: "#2F75B5" }}>Upload the video</h1>

            <UniversalButton
                text="Upload File"
                type="button"
                onClick={handleButtonClick}
                className=""
            />

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{display: "none"}}
            />

            {videoPreviewUrl && (
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    height: "100%",
                    width: "60%",
                    maxWidth: "1200px"
                }}>
                    <div style={{
                        height: "50%",
                        backgroundColor: "#F3F2F1",
                        padding: "1rem",
                        borderRadius: "8px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem"
                    }}>
                        <h3 style={{ color: "#2F75B5" }}>Video Preview:</h3>
                        <div style={{
                            flex: 1,
                            backgroundColor: "white",
                            borderRadius: "4px",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <video
                                ref={videoRef}
                                src={videoPreviewUrl}
                                controls
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain"
                                }}
                            />
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: "#F3F2F1",
                        padding: "1rem",
                        borderRadius: "8px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem"
                    }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            color: "#2F75B5",
                            fontSize: "0.9rem"
                        }}>
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration)}</span>
                        </div>
                        <div style={{
                            height: "20px",
                            backgroundColor: "white",
                            borderRadius: "4px",
                            position: "relative",
                            overflow: "hidden"
                        }}>
                            {/* Progress bar */}
                            <div style={{
                                position: "absolute",
                                left: 0,
                                top: 0,
                                height: "100%",
                                width: `${(currentTime / duration) * 100}%`,
                                backgroundColor: "#2F75B5",
                                transition: "width 0.1s linear"
                            }} />
                            
                            {/* Labeled segments */}
                            {appData.videoSegments.map((segment, index) => (
                                <div
                                    key={index}
                                    style={{
                                        position: "absolute",
                                        left: `${(segment.start / duration) * 100}%`,
                                        width: `${((segment.end - segment.start) / duration) * 100}%`,
                                        height: "100%",
                                        backgroundColor: "rgba(255, 0, 0, 0.3)",
                                        borderLeft: "1px solid red",
                                        borderRight: "1px solid red"
                                    }}
                                />
                            ))}
                            
                            {/* Current recording segment */}
                            {isRecording && (
                                <div
                                    style={{
                                        position: "absolute",
                                        left: `${(startTime / duration) * 100}%`,
                                        width: `${((currentTime - startTime) / duration) * 100}%`,
                                        height: "100%",
                                        backgroundColor: "rgba(255, 0, 0, 0.5)",
                                        borderLeft: "1px solid red",
                                        borderRight: "1px solid red"
                                    }}
                                />
                            )}
                        </div>
                    </div>

                    <div style={{
                        height: "50%",
                        backgroundColor: "#F3F2F1",
                        padding: "1rem",
                        borderRadius: "8px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem"
                    }}>
                        <h3 style={{ color: "#2F75B5" }}>Label Video Segments:</h3>
                        <div style={{
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center"
                        }}>
                            <input
                                type="text"
                                value={currentLabel}
                                onChange={(e) => setCurrentLabel(e.target.value)}
                                placeholder="Enter label for segment"
                                style={{
                                    padding: "0.5rem",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc",
                                    flex: 1
                                }}
                            />
                            {!isRecording ? (
                                <UniversalButton
                                    text="Start Labeling"
                                    type="button"
                                    onClick={handleStartLabeling}
                                    className=""
                                />
                            ) : (
                                <UniversalButton
                                    text="End Labeling"
                                    type="button"
                                    onClick={handleEndLabeling}
                                    className=""
                                />
                            )}
                        </div>

                        <div style={{
                            flex: 1,
                            backgroundColor: "white",
                            borderRadius: "4px",
                            padding: "1rem",
                            overflow: "auto"
                        }}>
                            <h4>Labeled Segments:</h4>
                            {appData.videoSegments.map((segment, index) => (
                                <div key={index} style={{
                                    padding: "0.5rem",
                                    borderBottom: "1px solid #eee"
                                }}>
                                    {segment.label}: {segment.start.toFixed(2)}s - {segment.end.toFixed(2)}s
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Upload;