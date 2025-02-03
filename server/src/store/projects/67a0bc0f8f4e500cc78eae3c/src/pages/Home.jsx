import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div data-curate-edit-id="4a051ae9-cbf2-43ef-afa5-71218c03f9e3" className="hero min-h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
            <div data-curate-edit-id="3bdfc204-7aae-46cf-952a-bf9317ab598a" className="hero-overlay bg-opacity-60"></div>
            <div data-curate-edit-id="5c2e59a4-3986-428b-b59a-2b5426c39199" className="hero-content text-center text-neutral-content">
                <div data-curate-edit-id="a526add8-f54a-4b0a-a9bc-f065d2f8cf53" className="max-w-md">
                    <h1 data-curate-edit-id="542d3ecd-9d1e-422d-a965-3a2e89b9f2c2" className="mb-5 text-5xl font-bold">Track Your Fitness Journey</h1>
                    <p data-curate-edit-id="7dbf2d9d-fd7d-45d8-ba31-42f2bf3cf3e1" className="mb-5">Your all-in-one solution for tracking nutrition, workouts, and progress. Start your fitness journey today!</p>
                    <Link data-curate-edit-id="953274fc-b9be-4f76-b9db-3c33b5af8220" to="/dashboard" className="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;