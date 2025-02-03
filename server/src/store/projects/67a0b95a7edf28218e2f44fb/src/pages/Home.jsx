import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div data-curate-edit-id="bafe4dc1-af1f-42aa-a5aa-443131553753">
            <div data-curate-edit-id="b604631a-34ad-4aca-ad25-b1d3bf333a2a" className="hero min-h-[70vh] bg-base-200" style={{backgroundImage: 'url(https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div data-curate-edit-id="7b815b0b-c32c-49e9-98c9-e02090abd7aa" className="hero-overlay bg-opacity-60"></div>
                <div data-curate-edit-id="c2490746-2a82-4677-892a-672768a43260" className="hero-content text-center text-neutral-content">
                    <div data-curate-edit-id="f7e1ce9a-d0ff-4af5-906d-462602f7e468" className="max-w-md">
                        <h1 data-curate-edit-id="f99ab17b-b970-448b-a209-8d8ed2890712" className="mb-5 text-5xl font-bold">Welcome to Delightful Dining</h1>
                        <p data-curate-edit-id="a326c79c-1a47-4336-b5fe-8dd83e97cc72" className="mb-5">Experience exquisite flavors in a warm, inviting atmosphere</p>
                        <Link data-curate-edit-id="f411000c-167c-447e-b5f4-1f34d0a82e2b" to="/menu" className="btn btn-primary">View Menu</Link>
                    </div>
                </div>
            </div>

            <div data-curate-edit-id="f15d7dbe-da82-4b39-9cf3-75899fadb77c" className="container mx-auto px-4 py-12">
                <div data-curate-edit-id="720f99ca-6c07-4a52-982a-afa741924f68" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div data-curate-edit-id="f1f5a621-28dc-4775-8468-c5545e0a2752" className="card bg-base-100 shadow-xl">
                        <figure data-curate-edit-id="80587678-3b35-4b63-a4bb-35b1b5191e1d"><img data-curate-edit-id="565f73aa-9f0d-42a6-ac35-0f1d94348bd5" src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" alt="Special Dish" /></figure>
                        <div data-curate-edit-id="da0b9879-2df0-4b76-8a20-1a7e8122af3a" className="card-body">
                            <h2 data-curate-edit-id="460b797c-b124-47d3-aaf3-a267b4f53fec" className="card-title">Special of the Day</h2>
                            <p data-curate-edit-id="114a8308-964d-4510-8ceb-fe61f849911f">Try our chef special creations prepared with fresh ingredients.</p>
                        </div>
                    </div>
                    <div data-curate-edit-id="f4511805-9693-4e80-b8d1-ad05032478d7" className="card bg-base-100 shadow-xl">
                        <figure data-curate-edit-id="c5891ab9-6b79-4778-a5a9-ce50b4026593"><img data-curate-edit-id="2b153512-c7c1-4521-862e-eca0d3e1552a" src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg" alt="Reservation" /></figure>
                        <div data-curate-edit-id="298a8d7f-fb9e-4804-8ad5-9881ee00cec4" className="card-body">
                            <h2 data-curate-edit-id="7b738d78-effa-402e-8754-b37058461e8c" className="card-title">Make a Reservation</h2>
                            <p data-curate-edit-id="4ef42d6a-9fab-4680-9501-9e90eb4738fe">Book your table for a memorable dining experience.</p>
                            <Link data-curate-edit-id="a31a2533-5737-4314-a60e-e3533c0af968" to="/contact" className="btn btn-primary">Reserve Now</Link>
                        </div>
                    </div>
                    <div data-curate-edit-id="077a8277-ca98-4b0d-8e30-8a6768d78a87" className="card bg-base-100 shadow-xl">
                        <figure data-curate-edit-id="67b86752-d6b6-42c6-adfe-51799abf162c"><img data-curate-edit-id="3565826a-69b9-4627-a877-b2aaf02bc3eb" src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" alt="Events" /></figure>
                        <div data-curate-edit-id="ffdbece4-7aab-40bf-ae4a-862e7fcd132b" className="card-body">
                            <h2 data-curate-edit-id="723a0ba8-6922-4409-a469-2eab5a6aa3fe" className="card-title">Private Events</h2>
                            <p data-curate-edit-id="f6e21022-9514-4e74-93ad-084d1107a3b1">Host your special occasions in our elegant venue.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;