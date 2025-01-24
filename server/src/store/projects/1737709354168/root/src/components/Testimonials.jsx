import React from "react";

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            quote: "Amazing app that changed my life!",
            role: "User",
        },
        { name: "Jane Smith", quote: "Best app I've ever used!", role: "User" },
        {
            name: "Mike Johnson",
            quote: "Incredibly intuitive and helpful!",
            role: "User",
        },
    ];

    return (
        <div className="py-20 px-4 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                    What Our Users Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <p className="text-gray-600 mb-4">
                                "{testimonial.quote}"
                            </p>
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
