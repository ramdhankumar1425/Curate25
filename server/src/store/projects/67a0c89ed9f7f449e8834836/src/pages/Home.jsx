import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div data-curate-edit-id="fbc4308a-b733-44cd-a949-dba8ee6b8ba4" className="container mx-auto px-4">
      <div data-curate-edit-id="5e1fec23-d033-4c05-af04-329263b39b7b" className="hero min-h-[500px] bg-base-200 rounded-lg my-8">
        <div data-curate-edit-id="9c281634-476c-4696-915b-99ddad0d34f9" className="hero-content flex-col lg:flex-row">
          <img data-curate-edit-id="731df5bf-7d10-4409-b867-e82c03083e6c" src="https://images.unsplash.com/photo-1542838132-92c53300491e" alt="Fresh Vegetables" className="max-w-sm rounded-lg shadow-2xl" />
          <div data-curate-edit-id="255afbea-df0b-4e56-9476-ca8136659360">
            <h1 data-curate-edit-id="9ee192d9-a997-4d19-807a-a19cf5d56667" className="text-5xl font-bold">Fresh Groceries Delivered</h1>
            <p data-curate-edit-id="fd93beeb-9537-47f6-a9f2-ed1e8fdd15b2" className="py-6">Get fresh vegetables, fruits, and groceries delivered to your doorstep.</p>
            <Link data-curate-edit-id="cc530d05-5618-4d73-99df-a0d26100a200" to="/products" className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;