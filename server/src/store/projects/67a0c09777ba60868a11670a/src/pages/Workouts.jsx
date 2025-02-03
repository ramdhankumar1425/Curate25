import React from 'react';

const workouts = [
    { name: "Chest", exercises: ["Bench Press", "Push-ups", "Dumbbell Flyes"] },
    { name: "Back", exercises: ["Pull-ups", "Rows", "Deadlifts"] },
    { name: "Legs", exercises: ["Squats", "Lunges", "Leg Press"] }
];

const Workouts = () => {
    return (
        <div data-curate-edit-id="42499e50-1499-4543-9311-5865789bc22d" className="p-4">
            <h1 data-curate-edit-id="b4206287-fbbb-4a73-96f3-da6693b514e1" className="text-3xl font-bold mb-6">Workout Guide</h1>
            <div data-curate-edit-id="a17c9a7e-a2e5-49dd-aaeb-595b1273c917" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {workouts.map((group) => (
                    <div data-curate-edit-id="5122e072-ff99-4d6c-8353-c56b14d24069" key={group.name} className="card bg-base-100 shadow-xl">
                        <div data-curate-edit-id="83c5a2de-5cf2-49e1-b088-d7ece325a4d0" className="card-body">
                            <h2 data-curate-edit-id="77c15de8-4382-4fd7-9a63-7385491c2634" className="card-title">{group.name}</h2>
                            <ul data-curate-edit-id="76439bf3-8345-43b8-87cc-e6550b9e7574" className="list-disc list-inside">
                                {group.exercises.map((exercise) => (
                                    <li data-curate-edit-id="cb62481b-a35a-49d5-bf14-5eaa4db9b9c2" key={exercise}>{exercise}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Workouts;