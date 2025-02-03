import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div data-curate-edit-id="f233a75e-23d9-4ad7-91fd-c8cd3c143664" className="navbar bg-primary text-primary-content">
            <div data-curate-edit-id="28c4361d-baa4-45d6-aaba-677bbfd9bae7" className="navbar-start">
                <div data-curate-edit-id="718ad4ba-9342-4d28-b53f-b0aca5ccb43f" className="dropdown">
                    <div data-curate-edit-id="dc4b6993-87de-4650-be66-1a00ac6fb625" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg data-curate-edit-id="17ce9d13-ca6d-4d11-8896-a84ac83135f3" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path data-curate-edit-id="f0176f63-2da6-4b37-887b-a2fdb288d240" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul data-curate-edit-id="82fb183f-6520-4a4d-a81a-64101d9e627b" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li data-curate-edit-id="1f075b18-7dc2-4210-a6ce-b0d8511ab2da"><Link data-curate-edit-id="d7d5a372-e4f4-4c74-8522-3501fecd58ff" to="/">Home</Link></li>
                        <li data-curate-edit-id="485335cf-4e23-461a-bce7-c1de06b68291"><Link data-curate-edit-id="7f371390-2fc1-4d39-8940-3cdff999991a" to="/dashboard">Dashboard</Link></li>
                        <li data-curate-edit-id="9ccc0b63-fee7-4f90-997f-124cc861ac4f"><Link data-curate-edit-id="dccfb703-7581-4bae-a825-9edac4ed54a3" to="/workout-plans">Workout Plans</Link></li>
                        <li data-curate-edit-id="e7ab4806-f8ae-47bc-a272-0f5978ed4d94"><Link data-curate-edit-id="8dbe3039-c68f-4769-ae4b-afc9405a27f1" to="/nutrition">Nutrition</Link></li>
                    </ul>
                </div>
                <Link data-curate-edit-id="5fed00a0-6c7a-4146-94d6-91baa19c7aef" to="/" className="btn btn-ghost text-xl">Fitness Tracker Hub</Link>
            </div>
            <div data-curate-edit-id="dd362208-5a68-4ee0-ac3b-0df5c433105c" className="navbar-center hidden lg:flex">
                <ul data-curate-edit-id="549982bf-bfb0-49ee-a49e-b666c664caea" className="menu menu-horizontal px-1">
                    <li data-curate-edit-id="1d54bdf3-d6ef-44a4-afd8-9c4b53d02c3c"><Link data-curate-edit-id="15eca01b-8d8c-4134-8375-94e48c08017a" to="/">Home</Link></li>
                    <li data-curate-edit-id="21d6375c-3387-46e3-8949-0b4db580a9d5"><Link data-curate-edit-id="6b17d795-a7cc-4981-9419-1e5e9ebb3868" to="/dashboard">Dashboard</Link></li>
                    <li data-curate-edit-id="d75e2e32-26de-464f-84df-f1a9d3cde603"><Link data-curate-edit-id="c7fd51f1-a936-4a6a-a567-96f0e80167a2" to="/workout-plans">Workout Plans</Link></li>
                    <li data-curate-edit-id="4dfa0455-5764-4f07-8a17-78d04590335f"><Link data-curate-edit-id="47c62043-38d7-477c-95ed-f21a5e3256a1" to="/nutrition">Nutrition</Link></li>
                </ul>
            </div>
            <div data-curate-edit-id="7a01b82d-10af-4546-a4c3-330e1f4c5a24" className="navbar-end">
                <button data-curate-edit-id="f678341f-03cf-4cdc-92f2-3c1d61386a04" className="btn btn-ghost">Login</button>
                <button data-curate-edit-id="8d2340ff-4058-459f-8560-ecd81c18c77d" className="btn btn-secondary">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;