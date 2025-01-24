import React from "react";

const Features = () => {
    const features = [
        {
            title: "Easy to Use",
            description: "Intuitive interface for the best experience",
        },
        {
            title: "Fast Performance",
            description: "Lightning-fast response times",
        },
        { title: "Secure", description: "Your data is always protected" },
        { title: "24/7 Support", description: "We're here to help anytime" },
    ];

    return (
        <div className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center p-6">
                            <h3 className="text-xl font-bold mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
