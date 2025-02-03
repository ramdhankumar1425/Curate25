import React from 'react';

const equipment = [
    { name: "Dumbbells", description: "Versatile weights for various exercises" },
    { name: "Barbell", description: "Essential for compound movements" },
    { name: "Bench", description: "Multi-purpose workout station" }
];

const Equipment = () => {
    return (
        <div data-curate-edit-id="f3573a04-0ed5-4527-9a29-37eee7eea8c1" className="p-4">
            <h1 data-curate-edit-id="6fe80c55-6528-40f9-bdcf-2bae309a172d" className="text-3xl font-bold mb-6">Equipment Guide</h1>
            <div data-curate-edit-id="5ebbe8b5-50dc-4554-a779-d09e281448da" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {equipment.map((item) => (
                    <div data-curate-edit-id="d7f15905-fcac-4ed1-9bb2-3dbe0e50fd8f" key={item.name} className="card bg-base-100 shadow-xl">
                        <div data-curate-edit-id="1e2dd3d2-6d67-4ce2-aac7-8698dd53f74d" className="card-body">
                            <h2 data-curate-edit-id="3a95b4ac-5e1a-4c43-8b21-c18b7c440b85" className="card-title">{item.name}</h2>
                            <p data-curate-edit-id="36e6cb8e-38c3-4b0c-8ddb-ef42bd041af5">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Equipment;