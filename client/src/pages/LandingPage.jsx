import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

function LandingPage() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-between text-white bg-[url(/images/landing-bg.png)] bg-cover bg-center bg-black">
            {/* Header Section */}
            <Header />

            {/* Hero Section */}
            <HeroSection />
        </div>
    );
}

export default LandingPage;
