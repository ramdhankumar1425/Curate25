import React from 'react';

const Dashboard = () => {
    return (
        <div data-curate-edit-id="b166e46e-8eec-4595-9add-3e609dfffded" className="p-4 max-w-7xl mx-auto">
            <h2 data-curate-edit-id="b4cfa83f-e164-4c69-bddb-b5bdccd6a76b" className="text-3xl font-bold mb-6">Dashboard</h2>
            <div data-curate-edit-id="e657bfe7-ef1f-497f-8b69-b3ac014ee4f5" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div data-curate-edit-id="894213ca-8b5c-41a4-a7a5-bae1ad9d3ccf" className="card bg-base-200">
                    <div data-curate-edit-id="9cf679a6-612e-4404-99f7-5e318d83458a" className="card-body">
                        <h3 data-curate-edit-id="976c5116-0319-4f52-b7ad-f882d6d10a8b" className="card-title">Daily Calories</h3>
                        <div data-curate-edit-id="d7721a2c-e392-4825-8067-42b774153812" className="radial-progress text-primary" style={{"--value": 70}}>70%</div>
                        <p data-curate-edit-id="b1998409-3d97-46ee-83ad-8992a7f35eea">1400/2000 kcal consumed</p>
                    </div>
                </div>
                <div data-curate-edit-id="e6fd6cd3-6ad9-4ae3-b5b6-13f814e2c1c7" className="card bg-base-200">
                    <div data-curate-edit-id="7e4c2247-ee12-4e28-b9df-ca138ccf8298" className="card-body">
                        <h3 data-curate-edit-id="b11c2b25-ab46-48ea-b717-f9567517bfc7" className="card-title">Workout Progress</h3>
                        <p data-curate-edit-id="e5862539-6a76-4d93-9548-39723b3ef324">3/5 workouts completed this week</p>
                        <progress data-curate-edit-id="ebfcd002-5766-474b-b54f-d1eaca2cb959" className="progress progress-primary" value="60" max="100"></progress>
                    </div>
                </div>
                <div data-curate-edit-id="b102d3e8-345a-4dd1-8ecb-19184eada6de" className="card bg-base-200">
                    <div data-curate-edit-id="0b03d18a-8c54-43c4-bf96-5cf57dbc7e7c" className="card-body">
                        <h3 data-curate-edit-id="7d9b2a17-b815-4fb0-ac80-d17ffc83bc25" className="card-title">Goals</h3>
                        <ul data-curate-edit-id="f887e4a2-9799-479c-a3e0-c4f5a76dcd4b">
                            <li data-curate-edit-id="0b6d641c-e77d-4163-9121-81e375b89df8">Weight Goal: 150 lbs</li>
                            <li data-curate-edit-id="88d14411-9eee-49e9-b35b-38906de446b1">Daily Steps: 10,000</li>
                            <li data-curate-edit-id="42c0aadb-a3b9-46fd-a0a0-9f708ab5c122">Weekly Workouts: 5</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;