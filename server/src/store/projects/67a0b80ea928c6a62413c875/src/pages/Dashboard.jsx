import React from 'react';

const Dashboard = () => {
    return (
        <div data-curate-edit-id="4228f1c2-94ff-4dfb-b46e-977e542c5f4f" className="p-4 max-w-7xl mx-auto">
            <h1 data-curate-edit-id="58eec26e-b34a-490d-9968-f8366e57b6bc" className="text-3xl font-bold mb-6">Dashboard</h1>
            <div data-curate-edit-id="9a5f9247-3ae7-4d30-9154-558c808bd63c" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div data-curate-edit-id="de8ccc25-a917-4e8c-9d4b-263d30fe54f0" className="card bg-base-200">
                    <div data-curate-edit-id="a1d7ca1b-c04a-40c0-ac73-1df0ccfad23c" className="card-body">
                        <h2 data-curate-edit-id="43e70388-4b60-4ae8-b990-e81ec9f144d7" className="card-title">Daily Calories</h2>
                        <p data-curate-edit-id="985d4e21-de06-4385-80a6-0ef48d1674b5">1,800 / 2,000 kcal</p>
                        <progress data-curate-edit-id="4c34ae34-fa96-48e1-9dd1-50c65909fbc2" className="progress progress-primary" value="80" max="100"></progress>
                    </div>
                </div>
                <div data-curate-edit-id="39c3e888-bd4e-431c-beb3-8de886615ea6" className="card bg-base-200">
                    <div data-curate-edit-id="607e6f2a-b37c-4230-91e8-81efcd866efe" className="card-body">
                        <h2 data-curate-edit-id="c8c1c798-830f-4cbe-93e4-250c9dbbfbeb" className="card-title">Workout Progress</h2>
                        <p data-curate-edit-id="80257f87-fd01-4109-97ea-1c74100bc3e2">3/5 workouts completed this week</p>
                        <progress data-curate-edit-id="192f5eb7-8414-4c75-9e71-2b1769d5d672" className="progress progress-secondary" value="60" max="100"></progress>
                    </div>
                </div>
                <div data-curate-edit-id="e69fa37b-1732-475f-9ca4-f0b13ecdd83e" className="card bg-base-200">
                    <div data-curate-edit-id="f1bd9298-03c5-4d35-a860-c3db6ea84876" className="card-body">
                        <h2 data-curate-edit-id="67c60635-9f43-492b-af81-5831c1b7df79" className="card-title">Weight Goal</h2>
                        <p data-curate-edit-id="db0cbe1a-e48d-48c0-a57a-1338c5819560">Current: 70kg | Target: 65kg</p>
                        <progress data-curate-edit-id="f37b3e92-6d49-411b-98c4-95510f4f5108" className="progress progress-accent" value="40" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;