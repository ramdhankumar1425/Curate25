import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div data-curate-edit-id="c02324d0-5d18-4734-9dc3-64a9da21d387" className="pt-16">
            <div data-curate-edit-id="cc0c0bc5-37d9-499e-8911-ebb2a9812bbf" className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg)' }}>
                <div data-curate-edit-id="7b184477-80a4-4211-8afa-dafdcf4c007f" className="hero-overlay bg-opacity-60"></div>
                <div data-curate-edit-id="74cd01f1-ed8c-432f-9101-577d659e28e9" className="hero-content text-center text-neutral-content">
                    <div data-curate-edit-id="c9cc3d71-0cb0-4bf9-b549-a0a4cb5c21a5" className="max-w-md">
                        <h1 data-curate-edit-id="2e9b8cbc-9135-46b6-959c-eef6266c6f23" className="mb-5 text-5xl font-bold">Transform Your Fitness Journey</h1>
                        <p data-curate-edit-id="296a1c7a-2d78-4bbf-bbbd-9233f9796f54" className="mb-5">Discover premium fitness equipment and expert guidance to achieve your fitness goals.</p>
                        <Link data-curate-edit-id="df5195f9-0cac-45ea-a5d3-f85d1aebcb46" to="/products" className="btn btn-primary">Explore Equipment</Link>
                    </div>
                </div>
            </div>

            <div data-curate-edit-id="a8b5023b-03d3-488d-ae8a-83e68ba57c72" className="container mx-auto px-4 py-16">
                <h2 data-curate-edit-id="06ac9970-8270-493b-aa4e-5bff574aa119" className="text-4xl font-bold text-center mb-8">Featured Categories</h2>
                <div data-curate-edit-id="78bd1199-f4a8-4ffd-946b-89b1b3e7f771" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div data-curate-edit-id="4c7637d9-cc17-4d85-bc6b-557a8a6aedbf" className="card bg-base-100 shadow-xl">
                        <figure data-curate-edit-id="6969a5cf-7497-4b01-bef4-65a069b2f798"><img data-curate-edit-id="e3375a6b-7658-4884-82f6-619aa7e314bc" src="https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg" alt="Cardio" /></figure>
                        <div data-curate-edit-id="c5db52d7-c6fd-47bf-a86a-cc6e5b42cb5b" className="card-body">
                            <h3 data-curate-edit-id="d1b49476-f569-4ed9-8369-a36cf7a46798" className="card-title">Cardio Equipment</h3>
                            <p data-curate-edit-id="1b6105bf-633a-4c44-975d-29f6af4d9a0a">High-quality treadmills, bikes, and ellipticals for your cardio needs.</p>
                            <div data-curate-edit-id="ea7a1b70-b827-49ed-94a6-ab1ddafa7f82" className="card-actions justify-end">
                                <Link data-curate-edit-id="571e48fd-6e26-4b6e-bf45-62521f087548" to="/products/cardio" className="btn btn-primary">View More</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div data-curate-edit-id="9abf1372-0f6a-4f09-a549-719d3c6e79bb" className="card bg-base-100 shadow-xl">
                        <figure data-curate-edit-id="3801b887-5829-4bf4-88f3-3d60be973ffe"><img data-curate-edit-id="8264331b-3678-47d9-84e8-5328c3449716" src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg" alt="Strength" /></figure>
                        <div data-curate-edit-id="36e0b0fc-16d8-49f1-a0b7-d0e6380f7c74" className="card-body">
                            <h3 data-curate-edit-id="8dc6b166-b2f6-4b15-acd8-12eb240370a7" className="card-title">Strength Training</h3>
                            <p data-curate-edit-id="65e48fbf-8c92-45e1-8247-26aa539c1716">Complete range of weights and machines for strength training.</p>
                            <div data-curate-edit-id="fc7f4108-3dfc-4d5b-9693-66f789961579" className="card-actions justify-end">
                                <Link data-curate-edit-id="d4e31001-43ab-436e-9479-5ed4e31e5f34" to="/products/strength" className="btn btn-primary">View More</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div data-curate-edit-id="195edbc8-0c91-483e-a35a-0b4fe3c1a1f3" className="card bg-base-100 shadow-xl">
                        <figure data-curate-edit-id="9820fa2c-929f-40a6-aa8a-12cfd64ad73e"><img data-curate-edit-id="48bdf96d-0073-4f73-a80f-cab0b01cae7f" src="https://images.pexels.com/photos/4397840/pexels-photo-4397840.jpeg" alt="Accessories" /></figure>
                        <div data-curate-edit-id="9befb920-88b4-4042-ba28-5c6285fc17dc" className="card-body">
                            <h3 data-curate-edit-id="954f033f-254f-47b6-9902-717f7d529a90" className="card-title">Accessories</h3>
                            <p data-curate-edit-id="a0cd100a-3b7c-4432-a072-e39675d01245">Essential accessories to complement your workout routine.</p>
                            <div data-curate-edit-id="f3094b70-c006-492d-a955-d7fbc83a4900" className="card-actions justify-end">
                                <Link data-curate-edit-id="2a1e91fe-3531-45cb-8c79-ffea7f8133e1" to="/products/accessories" className="btn btn-primary">View More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;