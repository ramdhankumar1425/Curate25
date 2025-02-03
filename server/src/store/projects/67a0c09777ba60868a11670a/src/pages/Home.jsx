import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div data-curate-edit-id="fb08aae3-f063-4221-8f26-93b5697cd3cb" className="flex flex-col gap-8">
            <div data-curate-edit-id="21d88401-2f08-4751-8ba1-477c3cc9f148" className="hero min-h-[70vh] bg-base-200" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg)', backgroundSize: 'cover' }}>
                <div data-curate-edit-id="b2207f26-0958-4451-97f5-8f463f6865e6" className="hero-overlay bg-opacity-60"></div>
                <div data-curate-edit-id="d94f1d16-8abb-4a85-ad4e-e884ce2d6285" className="hero-content text-center text-neutral-content">
                    <div data-curate-edit-id="e5c5368f-a536-4961-9f4f-962bcb831ac5" className="max-w-md">
                        <h1 data-curate-edit-id="4d5e022a-ebac-4a8a-946b-124706e94283" className="mb-5 text-5xl font-bold">FitGuide</h1>
                        <p data-curate-edit-id="3b3f43d9-848e-4714-9692-e972e833a3b3" className="mb-5">Your complete guide to workouts and gym equipment</p>
                        <Link data-curate-edit-id="84f075e6-bc7c-4ff3-9507-285494ed60db" to="/workouts" className="btn btn-primary">Start Training</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;