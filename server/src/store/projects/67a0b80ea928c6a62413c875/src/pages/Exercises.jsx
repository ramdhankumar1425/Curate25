import React from 'react';

const Exercises = () => {
    return (
        <div data-curate-edit-id="305ee2d3-e82f-49ac-96d6-ce37b150d779" className="p-4 max-w-7xl mx-auto">
            <h1 data-curate-edit-id="ef0d55e7-e476-4851-a785-79f60935bb0b" className="text-3xl font-bold mb-6">Exercise Database</h1>
            <div data-curate-edit-id="6f5e8f2c-3dad-4f06-9292-cf6ef082c362" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {['Push-ups', 'Squats', 'Deadlifts'].map((exercise) => (
                    <div data-curate-edit-id="700eacca-61ed-4db5-ba1e-82b18bc5a5e6" key={exercise} className="card bg-base-200">
                        <div data-curate-edit-id="d1e8a687-4c1a-4203-a7a5-2f47bd8a8f39" className="card-body">
                            <h2 data-curate-edit-id="1be11208-4b49-47b3-bda8-ceaae60d8213" className="card-title">{exercise}</h2>
                            <p data-curate-edit-id="b20ea6af-2cb7-4c35-820a-e020b24e05a8">Target muscles and instructions</p>
                            <div data-curate-edit-id="73d1015f-b06f-44a9-83bd-b63424b76233" className="card-actions justify-end">
                                <button data-curate-edit-id="5722d1d1-160c-4c0d-9653-9c5cf1a6cfe8" className="btn btn-primary">Add to Workout</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Exercises;