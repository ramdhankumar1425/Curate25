import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth0 } from "@auth0/auth0-react";

function LandingPage() {
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
    const navigate = useNavigate();
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleTryNowClick = () => {
        if (isLoading) return;

        if (!isAuthenticated) {
            loginWithRedirect();
            return;
        }

        navigate("/prompt");
    };

    useEffect(() => {
        if (!videoRef.current) return;

        if (isVideoPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isVideoPlaying]);

    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            navigate("/prompt");
        }
    }, [isAuthenticated, isLoading]);

    return (
        <div className="w-full min-h-screen flex flex-col text-white bg-[url(/images/landing-bg.png)] bg-cover bg-center bg-black">
            {/* Header Section */}
            <Header />

            {/* Hero Section */}
            <div className="w-full flex flex-col items-center px-4 space-y-6 sm:space-y-10 mb-10">
                <img
                    className="w-12 sm:w-16 aspect-square mt-10 sm:mt-20"
                    src="images/logo.png"
                    alt="Logo"
                />
                <h1 className="text-center text-3xl sm:text-5xl font-bold mt-6 sm:mt-10">
                    Curate – Websites Made Easy with AI
                </h1>
                <h3 className="text-center text-base sm:text-lg mt-0 sm:mt-4 max-w-2xl">
                    Transform your thoughts into stunning websites effortlessly
                    with Curate. Our AI-powered platform helps you build
                    tailored websites from simple prompts, no technical skills
                    required!
                </h3>

                <button
                    onClick={handleTryNowClick}
                    className="px-10 sm:px-14 py-3 sm:py-5 border text-lg font-semibold tracking-wide font-inter rounded-xl hover:bg-blue-700 duration-500 hover:border-blue-500 hover:shadow-2xl"
                >
                    Try it now
                </button>
            </div>

            {/* Video Section */}
            <div className="flex items-center justify-center relative px-4 sm:mb-10">
                <video
                    ref={videoRef}
                    className="w-full max-w-2xl aspect-auto shadow-2xl rounded-lg border-4 border-blue-600 backdrop-blur-3xl"
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
            <div className="w-full py-16 px-4">
                <h2 className=" text-3xl sm:text-4xl font-bold text-center text-white mb-12">
                    Why Choose Curate?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    <div className="text-center bg-none border border-blue-700 bg-opacity-60 p-6 rounded-lg shadow-lg hover:bg-opacity-80 transition-all">
                        <img
                            src="images/aipowered-design.png"
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
                    <div className="text-center bg-none border border-blue-700 bg-opacity-60 p-6 rounded-lg shadow-lg hover:bg-opacity-80 transition-all">
                        <img
                            src="images/web-page-customisation.png"
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
                    <div className="text-center bg-none border border-blue-700 bg-opacity-60 p-6 rounded-lg shadow-lg hover:bg-opacity-80 transition-all">
                        <img
                            src="images/responsive-design.png"
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
