import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div data-curate-edit-id="517c9bc5-7133-42c0-b2b1-bab646924960" className="flex flex-col gap-8">
      <div data-curate-edit-id="f36bfe54-3078-4a6c-af47-4a2948ccc7ad" className="hero min-h-[500px] bg-base-200">
        <div data-curate-edit-id="1fd0f0c5-b617-4653-aa56-9595fda43afb" className="hero-content text-center">
          <div data-curate-edit-id="02acec7e-4527-4619-96d7-e70936cdc7f7" className="max-w-md">
            <h1 data-curate-edit-id="ab443470-b8e6-4f13-a858-b305c58e9f91" className="text-5xl font-bold">Transform Your Life</h1>
            <p data-curate-edit-id="01170dc9-c220-4a3b-81b8-8c921a9cc7ae" className="py-6">Track your fitness journey, manage your nutrition, and achieve your health goals with our comprehensive fitness tracking platform.</p>
            <Link data-curate-edit-id="767bcf2c-e2b3-47b8-97df-781f92937865" to="/register" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
      
      <div data-curate-edit-id="2a1af390-29f6-44a8-9377-96e6b2d1c8d8" className="container mx-auto px-4 py-8">
        <div data-curate-edit-id="20bba328-460d-4498-8508-4c10686f21a6" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div data-curate-edit-id="947abd89-4113-4435-bcec-a48bec722928" className="card bg-base-100 shadow-xl">
            <figure data-curate-edit-id="82a11e52-5cf1-4a73-8b98-1997ca29c23a"><img data-curate-edit-id="6590e58b-d861-4362-9e9f-3938ca95acb6" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438" alt="Fitness" /></figure>
            <div data-curate-edit-id="3c894118-15f3-4bb4-af09-4a513e21c8f0" className="card-body">
              <h2 data-curate-edit-id="d322ec5d-c462-44f8-90e7-89db9e726342" className="card-title">Track Workouts</h2>
              <p data-curate-edit-id="04fdd425-51dc-4193-8f39-6b286fc61a7c">Log your exercises and monitor your progress with our intuitive tracking system.</p>
            </div>
          </div>
          
          <div data-curate-edit-id="99300666-0a6e-4331-ac12-8d126ad326fa" className="card bg-base-100 shadow-xl">
            <figure data-curate-edit-id="2af8c139-daf3-42b3-824e-28f0a126c4ab"><img data-curate-edit-id="c64e65df-8ef8-438c-bbc2-0eca4d3a80e1" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061" alt="Nutrition" /></figure>
            <div data-curate-edit-id="889aa822-1a69-48f1-8c21-d614f1630e31" className="card-body">
              <h2 data-curate-edit-id="f6a0c79b-40ef-4255-a5a3-4f13d999e9fd" className="card-title">Monitor Nutrition</h2>
              <p data-curate-edit-id="c30cc645-67da-423b-a337-534ffb98bbec">Keep track of your daily calorie intake and maintain a balanced diet.</p>
            </div>
          </div>
          
          <div data-curate-edit-id="63771019-ffd7-4f02-804c-f7396acae910" className="card bg-base-100 shadow-xl">
            <figure data-curate-edit-id="ee18f19e-e5de-421a-ab82-aeec6c4a7ee8"><img data-curate-edit-id="25ccdc45-1045-4ac8-a17e-351a89cddb16" src="https://images.unsplash.com/photo-1535743686920-55e4145369b9" alt="Goals" /></figure>
            <div data-curate-edit-id="67312cc8-a443-49df-9792-4858fe18771c" className="card-body">
              <h2 data-curate-edit-id="971e01e3-ba70-4e8f-9556-ce04d43c2297" className="card-title">Set Goals</h2>
              <p data-curate-edit-id="cffbcbe4-8c5d-4964-be96-4a4630805a5a">Define and achieve your fitness goals with our goal tracking features.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;