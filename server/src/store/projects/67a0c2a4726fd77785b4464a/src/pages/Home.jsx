import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div data-curate-edit-id="1bdf3473-84fd-4ff5-a1f5-857348455ce8">
      <div data-curate-edit-id="b8bfee5a-42b6-4d9c-af42-2dd386d4d4de" className="hero min-h-[600px]" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg)' }}>
        <div data-curate-edit-id="d888433f-c46e-4272-a289-250dedcc1a44" className="hero-overlay bg-opacity-60"></div>
        <div data-curate-edit-id="f316bb0c-091b-47d6-b357-3e31b2c9a525" className="hero-content text-center text-neutral-content">
          <div data-curate-edit-id="1651759c-d0f0-4eea-8f93-0fec2c309c68" className="max-w-md">
            <h1 data-curate-edit-id="690f80be-9653-45b8-a338-522e3ad5aad9" className="mb-5 text-5xl font-bold">Transform Your Body</h1>
            <p data-curate-edit-id="99f6fc19-2dbf-4903-bedb-91f60a71a857" className="mb-5">Start your fitness journey today with expert guidance and proven workout plans.</p>
            <Link data-curate-edit-id="c384afe3-c78d-4516-90c8-9638f54799f2" to="/guide" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
      <div data-curate-edit-id="5077d96d-f559-4e7f-917e-2706cc86ad17" className="p-8">
        <h2 data-curate-edit-id="f5c9ff07-1fbe-4220-9927-fd60eda13c13" className="text-3xl font-bold text-center mb-8">Featured Categories</h2>
        <div data-curate-edit-id="003c3436-6581-45f6-b613-35d61883c11c" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div data-curate-edit-id="beda784d-312e-4430-8258-5f359716ba23" className="card bg-base-100 shadow-xl">
            <figure data-curate-edit-id="26ef253b-0b1a-4b2f-9449-c486555f0009"><img data-curate-edit-id="e0852c0d-8de6-4de1-9ae5-ecb73c281301" src="https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg" alt="Workouts" /></figure>
            <div data-curate-edit-id="3c693902-2535-4ec6-97b6-1123eab405e0" className="card-body">
              <h2 data-curate-edit-id="af95f3c6-5984-4d06-b44e-65f816512723" className="card-title">Workouts</h2>
              <p data-curate-edit-id="a11fb949-f913-4d91-9766-00e5b3f9fb92">Discover exercises for every muscle group</p>
              <div data-curate-edit-id="a60422e3-32e4-42cb-83a9-e9ac5a4330ac" className="card-actions justify-end">
                <Link data-curate-edit-id="c8aed697-dcae-4ddc-b0f8-5e916be2a665" to="/workouts" className="btn btn-primary">View</Link>
              </div>
            </div>
          </div>
          <div data-curate-edit-id="fca4f848-9067-4ca4-be14-bebaa1baa705" className="card bg-base-100 shadow-xl">
            <figure data-curate-edit-id="0ae0a0e6-2088-4383-8e59-58ec7aac9788"><img data-curate-edit-id="505c6174-a4ba-46c9-8b77-716f55f07c67" src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg" alt="Equipment" /></figure>
            <div data-curate-edit-id="3a753926-9f9c-4659-8eb4-4bb6c987c8a4" className="card-body">
              <h2 data-curate-edit-id="f3535c3c-16c7-4434-9a85-7c37c1a45487" className="card-title">Equipment</h2>
              <p data-curate-edit-id="d7eaabfe-6cbc-4e95-b8d0-3aebea691bfe">Learn about different gym equipment</p>
              <div data-curate-edit-id="db2f496d-58b8-4c53-8c4e-858685d1ed41" className="card-actions justify-end">
                <Link data-curate-edit-id="37ae7c6b-9dba-45a8-85be-56212ca1a349" to="/equipment" className="btn btn-primary">View</Link>
              </div>
            </div>
          </div>
          <div data-curate-edit-id="07d2b39b-5115-4f3f-b2b8-2184f0208821" className="card bg-base-100 shadow-xl">
            <figure data-curate-edit-id="005e8200-00c8-4e9d-b429-e167800b8b33"><img data-curate-edit-id="03396bd8-6481-49e1-961a-50bcd7888365" src="https://images.pexels.com/photos/3823207/pexels-photo-3823207.jpeg" alt="Blog" /></figure>
            <div data-curate-edit-id="f32e5639-5043-46be-898d-a4942676f0af" className="card-body">
              <h2 data-curate-edit-id="674b678f-4d76-4d70-897d-ccf47a328699" className="card-title">Blog</h2>
              <p data-curate-edit-id="14757ac0-1e43-495c-b4fa-1cf11559ae11">Tips on nutrition and wellness</p>
              <div data-curate-edit-id="2cc26c6e-1e85-4d80-ace5-12a51332873f" className="card-actions justify-end">
                <Link data-curate-edit-id="1d69da95-35ae-48cf-aa86-d0376ccee2c6" to="/blog" className="btn btn-primary">View</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;