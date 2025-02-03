import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div data-curate-edit-id="672d0629-2272-471d-8d45-089a505b941b" className="w-full">
            <div data-curate-edit-id="3f9a215a-213f-4a36-a098-ed42295df35f" className="hero min-h-[500px] bg-base-200">
                <div data-curate-edit-id="96013237-4cb7-4591-8181-85308f9c2126" className="hero-content text-center">
                    <div data-curate-edit-id="0a07f7b1-df99-402c-8ebd-5bdffd83dfe5" className="max-w-md">
                        <h1 data-curate-edit-id="8e1e401f-a44b-4c95-ba43-1b57e80c4f3a" className="text-5xl font-bold">Track Your Fitness Journey</h1>
                        <p data-curate-edit-id="995e5f75-b651-4efc-b3d3-2aabf9330b1e" className="py-6">Start your fitness journey today with FitTrack. Track calories, log workouts, and achieve your fitness goals.</p>
                        <Link data-curate-edit-id="7227a77f-d9e3-446e-a6b8-370698abd164" to="/register" className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
            
            <div data-curate-edit-id="6764df49-238f-4ba2-9b76-3ae14c99e1ef" className="container mx-auto px-4 py-8">
                <div data-curate-edit-id="7f5c437d-de36-41be-bf8d-6ca5a63baeef" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div data-curate-edit-id="393b0549-b4e5-4899-abf8-7ce04cf68730" className="card bg-base-100 shadow-xl">
                        <div data-curate-edit-id="401d88cb-3455-4d8d-b9c0-4420f0d3cda9" className="card-body">
                            <h2 data-curate-edit-id="fba18457-10f9-41f7-81d6-ac1ded1c1c96" className="card-title">Track Calories</h2>
                            <p data-curate-edit-id="c5548c42-dd02-4167-8261-8783df3b29e7">Log your meals and monitor your daily calorie intake with our comprehensive food database.</p>
                        </div>
                    </div>
                    <div data-curate-edit-id="8afa31d4-cf3b-4060-87bd-97db51942dd6" className="card bg-base-100 shadow-xl">
                        <div data-curate-edit-id="0f43b121-1ff0-4e72-bbf9-215a33e713bd" className="card-body">
                            <h2 data-curate-edit-id="e4aaa927-53cd-4981-81b2-c1fe072180a8" className="card-title">Workout Library</h2>
                            <p data-curate-edit-id="642859ce-0b88-49d3-9223-64e175b1e3d1">Access our extensive library of exercises with detailed instructions and video demonstrations.</p>
                        </div>
                    </div>
                    <div data-curate-edit-id="845bdabc-cc03-461d-8be9-b88ddaba16f2" className="card bg-base-100 shadow-xl">
                        <div data-curate-edit-id="e3cb5ed0-16ed-41ce-b24a-d694649df791" className="card-body">
                            <h2 data-curate-edit-id="a95e928e-3108-4600-a9b2-78b37b435dee" className="card-title">Progress Tracking</h2>
                            <p data-curate-edit-id="ac5bbf34-aca9-42e9-b7aa-ddcabd3c216b">Monitor your fitness progress with detailed statistics and visual charts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;