import HeroSection from "../components/HeroSection";
import Header from "../components/Header";

function PromptPage() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-between text-white bg-[url(/images/promptpage-bg.png)] bg-cover bg-center">
            {/* Header Section */}
            <Header />

            {/* Hero Section */}
            <HeroSection />
        </div>
    );
}

export default PromptPage;
