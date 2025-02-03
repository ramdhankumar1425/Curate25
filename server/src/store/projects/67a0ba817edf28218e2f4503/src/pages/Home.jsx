import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div data-curate-edit-id="f9b50e4f-0b25-47c5-9524-d02d33952c72">
      <div data-curate-edit-id="2ee1d5b7-afa6-469d-ba1c-0624d2560558" className="hero min-h-[600px]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)' }}>
        <div data-curate-edit-id="0e806171-6e33-4e52-b889-7d7bc8ec8bda" className="hero-overlay bg-opacity-60"></div>
        <div data-curate-edit-id="19efd761-d2ef-4d19-bf8f-59dfb0bc9150" className="hero-content text-center text-neutral-content">
          <div data-curate-edit-id="e6a7dcff-6c80-449e-9c72-771823cfd111" className="max-w-md">
            <h1 data-curate-edit-id="dcda8f2f-1372-4f44-9516-70555042d7b8" className="mb-5 text-5xl font-bold">Transform Your Life</h1>
            <p data-curate-edit-id="ae834f4d-fddf-451f-a34c-fef10f4d639a" className="mb-5">Start your fitness journey today with Fitness Tracker Pro. Track your workouts, count calories, and achieve your goals.</p>
            <Link data-curate-edit-id="bad46ef8-3d38-4027-9a17-80667ee8653d" to="/dashboard" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>

      <div data-curate-edit-id="04f9ba9c-5210-408e-955a-9087ddd2e10b" className="container mx-auto py-12 px-4">
        <div data-curate-edit-id="afb96b7f-961e-4e0c-aaed-5fdebe2aeec8" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div data-curate-edit-id="3026a0ec-b4c8-4128-a3fc-378f41a54415" className="card bg-base-100 shadow-xl">
            <figure data-curate-edit-id="1c40c5e4-2d7d-4226-a908-98887f430f77"><img data-curate-edit-id="e314347b-c749-4b7f-9baa-883813128818" src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd" alt="Workout" /></figure>
            <div data-curate-edit-id="7ca10089-dd56-4a83-b5c5-eae2a2a92e98" className="card-body">
              <h2 data-curate-edit-id="a6c50aef-6faa-453b-9324-47444ff36a60" className="card-title">Workout Library</h2>
              <p data-curate-edit-id="dd1d2390-fda4-4876-a3e6-9a40c9aa3e5f">Access hundreds of exercises with detailed instructions and video guides.</p>
            </div>
          </div>
          
          <div data-curate-edit-id="6ad8ee6c-f19f-4b2d-8f09-6084123f0bc7" className="card bg-base-100 shadow-xl">
            <figure data-curate-edit-id="ec7cecbd-3884-48e4-a2fc-dfcaa30097e1"><img data-curate-edit-id="efd57be9-11ee-4e1f-bdd6-46928e43e20a" src="https://images.unsplash.com/photo-1498837167922-ddd27525d352" alt="Nutrition" /></figure>
            <div data-curate-edit-id="c308f7b7-4f64-4aaa-a036-b5688769a8d6" className="card-body">
              <h2 data-curate-edit-id="c9045665-1aee-483d-8bb9-31be3a12015f" className="card-title">Nutrition Tracking</h2>
              <p data-curate-edit-id="b7a30265-309a-409d-8428-b7f02a111157">Track your daily calories and macronutrients with our easy-to-use calculator.</p>
            </div>
          </div>
          
          <div data-curate-edit-id="4c551d23-b478-4ebd-877d-358ba32dfe3a" className="card bg-base-100 shadow-xl">
            <figure data-curate-edit-id="22785f2d-66c1-450a-8345-d85aac52c27a"><img data-curate-edit-id="57c1ea3f-bd00-4863-8b06-0a703ae16189" src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8" alt="Progress" /></figure>
            <div data-curate-edit-id="cd67abea-8c79-4e44-8a9d-d712f1d43eb3" className="card-body">
              <h2 data-curate-edit-id="29181d94-5291-4892-b2d3-e8c97a3e9354" className="card-title">Progress Monitoring</h2>
              <p data-curate-edit-id="c0d12171-7038-4661-9a57-b3d011234834">Monitor your fitness journey with detailed progress tracking and analytics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;