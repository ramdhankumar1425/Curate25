import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((id) => (
                    <Link
                        key={id}
                        to={`/products/${id}`}
                        className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                        <img
                            src={`https://images.unsplash.com/photo-${
                                1588702547 - `${id}`
                            }`}
                            alt={`Laptop ${id}`}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">
                                Laptop Model {id}
                            </h2>
                            <p className="text-gray-600">Starting from $999</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Products;
