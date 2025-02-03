import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div data-curate-edit-id="c4eb4b37-cbf1-44bd-9329-1a8c5c22692b" className="navbar bg-base-100 shadow-lg fixed top-0 z-50">
            <div data-curate-edit-id="65fcd7d7-824d-4b6d-b41a-2bdf5c122941" className="navbar-start">
                <div data-curate-edit-id="f0a6aea3-0d01-44a5-8d82-06041ea11c28" className="dropdown">
                    <div data-curate-edit-id="74a25bfb-92e8-47eb-9b3f-cdca7dbca4a6" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg data-curate-edit-id="e967d7c3-cfc8-4ef4-a07c-192b4ae120b3" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path data-curate-edit-id="76048991-05e4-4058-a49b-0ce2ca8089cd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul data-curate-edit-id="7fef80aa-341d-4f80-a2a1-da39f7507bfe" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li data-curate-edit-id="e608c85c-d03b-4096-a321-3f3a11ff85a3"><Link data-curate-edit-id="fd5ac860-50a7-4c92-a431-7edd68128d46" to="/">Home</Link></li>
                        <li data-curate-edit-id="414645c5-1ee1-4995-8a26-e92f70a71745"><Link data-curate-edit-id="2420ddaf-84a0-45a5-893b-c1b9a6ffcd8f" to="/products">Products</Link></li>
                        <li data-curate-edit-id="cbaa9689-8592-45fc-aac9-b030bf7d6c00"><Link data-curate-edit-id="3d2272ee-0770-4cdd-89ef-359f1d9aa5c4" to="/exercises">Exercises</Link></li>
                        <li data-curate-edit-id="c5ec9e96-754d-488f-8e13-f343a9208e2c"><Link data-curate-edit-id="9c507a76-4573-43ae-bde1-bda4ac49dcc5" to="/blog">Blog</Link></li>
                    </ul>
                </div>
                <Link data-curate-edit-id="3fc422f3-50d5-4a57-92e9-5c7c42ad1acf" to="/" className="btn btn-ghost text-xl">MuscleBlaze</Link>
            </div>
            <div data-curate-edit-id="7e889532-2da6-4455-a427-1b61963cca95" className="navbar-center hidden lg:flex">
                <ul data-curate-edit-id="71a3d19b-394e-4760-a446-5f9f162f6a27" className="menu menu-horizontal px-1">
                    <li data-curate-edit-id="3517c7ae-8047-4945-82e0-817ea533b8c3"><Link data-curate-edit-id="b34a65ef-bc9c-4e6b-be20-03fd783a0717" to="/">Home</Link></li>
                    <li data-curate-edit-id="13e29677-4a34-45bd-93ff-ec71cb5468dc"><Link data-curate-edit-id="e0308edc-9607-46ce-82d0-9e93f2bcc8ec" to="/products">Products</Link></li>
                    <li data-curate-edit-id="e208e5c4-583c-4967-af49-e20ae0c03a34"><Link data-curate-edit-id="7c8f99dc-e8c7-4381-b1a3-a04e8aa6660e" to="/exercises">Exercises</Link></li>
                    <li data-curate-edit-id="c5682a84-ac76-4075-9ee5-e40b66f1e606"><Link data-curate-edit-id="575fa217-0299-4465-8725-69669e2adf6c" to="/blog">Blog</Link></li>
                </ul>
            </div>
            <div data-curate-edit-id="5e935692-08ca-4ae7-8ab0-271850fdfd9f" className="navbar-end">
                <button data-curate-edit-id="d395c752-164f-43e7-b20a-3d213f6c39b0" className="btn btn-primary">Contact Us</button>
            </div>
        </div>
    );
};

export default Navbar;