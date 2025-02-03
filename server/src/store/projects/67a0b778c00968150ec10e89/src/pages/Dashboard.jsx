import React from 'react';
import CalorieTracker from '../components/CalorieTracker';
import WorkoutLog from '../components/WorkoutLog';

const Dashboard = () => {
    return (
        <div data-curate-edit-id="769fd3af-9f08-43f9-8878-9edde4a9e5fd" className="container mx-auto px-4 py-8">
            <div data-curate-edit-id="47ef47f8-9514-4d5a-8086-ee460cfd3a31" className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <CalorieTracker data-curate-edit-id="ce050477-25fd-408e-8e72-f026b8a6e6e3" />
                <WorkoutLog data-curate-edit-id="704cc38b-5316-4365-85a3-fa58deb1ae91" />
            </div>
        </div>
    );
};

export default Dashboard;