import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (!videoRef.current) return;

        if (isVideoPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isVideoPlaying]);

    return (
        <div className="w-full min-h-screen flex flex-col justify-between text-white bg-[url(/images/landing-bg.png)] bg-cover bg-center bg-black">
            {/* Header Section */}
            <Header />

            {/* Hero Section */}
            <div className="w-full min-h-[80vh] flex flex-col items-center space-y-10 bg-re d-500">
                <img
                    className="w-16 aspect-square mt-20"
                    src="images/logo.png"
                    alt="Logo"
                />
                <h1 className="text-center text-5xl font-bold mt-10">
                    Curate – Websites Made Easy with AI
                </h1>
                <h3 className="text-center text-lg mt-4 max-w-2xl">
                    Transform your thoughts into stunning websites effortlessly
                    with Curate. Our AI-powered platform helps you build
                    tailored websites from simple prompts, no technical skills
                    required!
                </h3>

                <Link to="/prompt">
                    <button className="px-14 py-5 border text-lg font-semibold tracking-wide font-inter rounded-xl hover:bg-blue-700 duration-500 hover:border-blue-500 hover:shadow-2xl">
                        Try it now
                    </button>
                </Link>
            </div>

            {/* Video Section */}
            <div className="flex items-center justify-center mb-20 relative">
                <video
                    ref={videoRef}
                    className="w-1/2 aspect-auto shadow-2xl rounded-lg border-4 border-blue-600 backdrop-blur-3xl"
                    src="video/curate.mp4"
                    playsInline
                ></video>
                <div className="absolute inset-0 flex items-center justify-center">
                    <button
                        onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                        className="p-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full opacity-0 hover:opacity-100 transition duration-300 "
                        style={isVideoPlaying ? {} : { opacity: 100 }}
                    >
                        {isVideoPlaying ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-pause"
                            >
                                <rect
                                    x="14"
                                    y="4"
                                    width="4"
                                    height="16"
                                    rx="1"
                                />
                                <rect
                                    x="6"
                                    y="4"
                                    width="4"
                                    height="16"
                                    rx="1"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-play"
                            >
                                <polygon points="6 3 20 12 6 21 6 3" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Features */}
            <div className="w-full py-16">
                <h2 className="text-3xl font-bold text-center text-white mb-8">
                    Key Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    <div className="text-center bg-blue-800 bg-opacity-60 p-6 rounded-lg shadow-lg hover:bg-opacity-80 transition-all">
                        <img
                            src="https://unsplash.com/photos/grey-flat-screen-computer-monitor-i1VQZsU86ok"
                            alt="Feature 1"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h4 className="text-xl font-semibold text-white">
                            AI-Powered Design
                        </h4>
                        <p className="text-gray-200 mt-2">
                            Generate custom website designs based on your inputs
                            in seconds.
                        </p>
                    </div>
                    <div className="text-center bg-blue-800 bg-opacity-60 p-6 rounded-lg shadow-lg hover:bg-opacity-80 transition-all">
                        <img
                            src="/path/to/feature-icon2.png"
                            alt="Feature 2"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h4 className="text-xl font-semibold text-white">
                            Easy Customization
                        </h4>
                        <p className="text-gray-200 mt-2">
                            Personalize your website with easy drag-and-drop
                            tools.
                        </p>
                    </div>
                    <div className="text-center bg-blue-800 bg-opacity-60 p-6 rounded-lg shadow-lg hover:bg-opacity-80 transition-all">
                        <img
                            src="/path/to/feature-icon3.png"
                            alt="Feature 3"
                            className="w-16 h-16 mx-auto mb-4"
                        />
                        <h4 className="text-xl font-semibold text-white">
                            Responsive Design
                        </h4>
                        <p className="text-gray-200 mt-2">
                            Ensure your website looks great on any device,
                            automatically.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default LandingPage;
