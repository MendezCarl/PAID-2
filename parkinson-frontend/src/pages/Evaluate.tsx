import React, { useRef, useEffect } from "react";
import UniversalButton from "../components/UniversalButton";

interface EvaluateProps {
    videoUrl: string | null;
    uploadedFileName: string | null;
}

const Evaluate: React.FC<EvaluateProps> = ({ videoUrl, uploadedFileName }) => {
    const mainVideoRef = useRef<HTMLVideoElement>(null);
    const speedVideoRef = useRef<HTMLVideoElement>(null);
    const amplitudeVideoRef = useRef<HTMLVideoElement>(null);

    // Determine correlated videos based on uploaded file name
    let speedSrc = "/speed.mp4";
    let amplitudeSrc = "/amplitude.mp4";
    if (uploadedFileName?.startsWith("fist_")) {
        speedSrc = "/fist_speed.mp4";
        amplitudeSrc = "/fist_amplitude.mp4";
    }

    // Add error handling for video loading
    useEffect(() => {
        const speedVideo = speedVideoRef.current;
        const amplitudeVideo = amplitudeVideoRef.current;

        const handleError = (e: Event) => {
            const video = e.target as HTMLVideoElement;
            console.error(`Error loading video: ${video.src}`, video.error);
        };

        if (speedVideo) {
            speedVideo.addEventListener('error', handleError);
        }
        if (amplitudeVideo) {
            amplitudeVideo.addEventListener('error', handleError);
        }

        return () => {
            if (speedVideo) {
                speedVideo.removeEventListener('error', handleError);
            }
            if (amplitudeVideo) {
                amplitudeVideo.removeEventListener('error', handleError);
            }
        };
    }, []);

    const handleAnalyze = () => {
        // Get all video elements
        const mainVideo = mainVideoRef.current;
        const speedVideo = speedVideoRef.current;
        const amplitudeVideo = amplitudeVideoRef.current;

        if (mainVideo && speedVideo && amplitudeVideo) {
            // Reset all videos to start
            mainVideo.currentTime = 0;
            speedVideo.currentTime = 0;
            amplitudeVideo.currentTime = 0;

            // Play all videos simultaneously
            Promise.all([
                mainVideo.play(),
                speedVideo.play(),
                amplitudeVideo.play()
            ]).catch(error => {
                console.error("Error playing videos:", error);
            });
        }
    };

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'row',
            gap: '2rem',
            padding: '2rem',
            height: 'calc(100vh - 80px)',
            maxWidth: '100%',
            boxSizing: 'border-box',
            overflow: 'auto'
        }}>
            <div style={{ 
                flex: '2',
                maxWidth: '60%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h1 style={{ 
                    color: '#2F75B5',
                    marginBottom: '1.5rem',
                    fontSize: 'clamp(20px, 5vw, 24px)',
                    fontWeight: '500'
                }}>Video Analysis</h1>
                {videoUrl ? (
                    <div style={{
                        backgroundColor: '#F3F2F1',
                        padding: '1rem',
                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        <h3 style={{ 
                            color: '#2F75B5',
                            marginBottom: '0.5rem',
                            fontSize: 'clamp(16px, 4vw, 18px)',
                            fontWeight: '500'
                        }}>Video to Analyze:</h3>
                        <div style={{
                            width: '100%',
                            maxHeight: '400px',
                            position: 'relative',
                            backgroundColor: 'white',
                            borderRadius: '4px',
                            overflow: 'hidden'
                        }}>
                            <video
                                ref={mainVideoRef}
                                src={videoUrl}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    borderRadius: '4px'
                                }}
                                controlsList="nodownload noplaybackrate nofullscreen"
                                preload="auto"
                            />
                        </div>
                        <div style={{ 
                            marginTop: '0.5rem',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <UniversalButton
                                text="Analyze"
                                type="button"
                                onClick={handleAnalyze}
                                className=""
                            />
                        </div>
                        <div style={{
                            backgroundColor: 'white',
                            padding: '1rem',
                            borderRadius: '4px',
                            marginTop: '1rem'
                        }}>
                            <h3 style={{ 
                                color: '#2F75B5',
                                marginBottom: '0.5rem',
                                fontSize: 'clamp(16px, 4vw, 18px)',
                                fontWeight: '500'
                            }}>Evaluation</h3>
                            <p style={{
                                color: '#333',
                                fontSize: '1rem',
                                lineHeight: '1.5'
                            }}>&lt;insert evaluation&gt;</p>
                        </div>
                    </div>
                ) : (
                    <p>Please upload a video in the Upload page first.</p>
                )}
            </div>
            <div style={{ 
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                height: '100%',
                maxWidth: '40%'
            }}>
                <div style={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#F3F2F1',
                    padding: '1rem',
                    borderRadius: '8px'
                }}>
                    <h3 style={{ 
                        color: '#2F75B5',
                        marginBottom: '1rem',
                        fontSize: 'clamp(14px, 3vw, 16px)',
                        fontWeight: '500'
                    }}>Speed Analysis</h3>
                    <video
                        ref={speedVideoRef}
                        src={speedSrc}
                        style={{
                            width: '100%',
                            maxHeight: '200px',
                            objectFit: 'contain',
                            borderRadius: '4px',
                            backgroundColor: 'white'
                        }}
                        controlsList="nodownload noplaybackrate nofullscreen"
                        preload="auto"
                    />
                </div>
                <div style={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#F3F2F1',
                    padding: '1rem',
                    borderRadius: '8px'
                }}>
                    <h3 style={{ 
                        color: '#2F75B5',
                        marginBottom: '1rem',
                        fontSize: 'clamp(14px, 3vw, 16px)',
                        fontWeight: '500'
                    }}>Amplitude Analysis</h3>
                    <video
                        ref={amplitudeVideoRef}
                        src={amplitudeSrc}
                        style={{
                            width: '100%',
                            maxHeight: '200px',
                            objectFit: 'contain',
                            borderRadius: '4px',
                            backgroundColor: 'white'
                        }}
                        controlsList="nodownload noplaybackrate nofullscreen"
                        preload="auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default Evaluate;