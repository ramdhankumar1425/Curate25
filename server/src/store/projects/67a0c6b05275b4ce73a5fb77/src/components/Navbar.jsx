import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div data-curate-edit-id="eff941a7-4453-41f3-b7a4-9fb958db43ac" className="navbar bg-primary text-primary-content">
            <div data-curate-edit-id="4ed0255c-a765-4e8e-b098-97e0a6ce6907" className="navbar-start">
                <div data-curate-edit-id="0210f223-b00d-4e48-b5f6-f8bc0dd7ad7c" className="dropdown">
                    <div data-curate-edit-id="c50aad45-1f7e-4f22-abba-0fa1ee21c327" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg data-curate-edit-id="86560299-0f14-443e-89c7-e8c1d5e3367d" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path data-curate-edit-id="54565c3c-a0a2-473c-88ba-e9b9dcae96a0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul data-curate-edit-id="a51e0892-980c-4774-ac15-2130a04d2e78" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52">
                        <li data-curate-edit-id="00d5b48f-2006-460b-9aae-e632377392b3"><Link data-curate-edit-id="846ecb8a-2016-407c-ae89-32b5f39023a6" to="/">Home</Link></li>
                        <li data-curate-edit-id="3b2088e2-83e5-4114-83eb-ee4bd8735af6"><Link data-curate-edit-id="a9ac5ef6-75e0-4a7d-9ec0-3abf13063d38" to="/trade">Trade</Link></li>
                        <li data-curate-edit-id="db2917a0-2d2c-4aef-8416-b26c36ac4291"><Link data-curate-edit-id="066f0629-2d37-443d-ad7b-3471e3b6690a" to="/battle">Battle</Link></li>
                        <li data-curate-edit-id="f3b21d3b-b7cf-4932-932b-d804aa7befea"><Link data-curate-edit-id="e6be1f0c-eaec-4c4f-9116-0b0eae63d6a9" to="/leaderboard">Leaderboard</Link></li>
                    </ul>
                </div>
                <Link data-curate-edit-id="4750ab99-6ceb-47ae-adfe-3e787beb7efb" to="/" className="btn btn-ghost text-xl">Pokémon Card Battles</Link>
            </div>
            <div data-curate-edit-id="4318117b-b226-44b5-99a5-503dc26a00c8" className="navbar-center hidden lg:flex">
                <ul data-curate-edit-id="84f72c51-9b61-4baa-b4cd-4eac989c0140" className="menu menu-horizontal px-1">
                    <li data-curate-edit-id="9ba9e875-40b7-4ea4-9854-40757cb6898d"><Link data-curate-edit-id="5142a1fa-fc04-4dc2-ada1-ac564ffba614" to="/">Home</Link></li>
                    <li data-curate-edit-id="421bab1c-db29-4d30-93a6-a575f9715ad7"><Link data-curate-edit-id="c8c1c142-cd20-4576-af3b-1dcbb16c5cb5" to="/trade">Trade</Link></li>
                    <li data-curate-edit-id="8b9ce60e-8304-4626-a459-3a43eafebd4a"><Link data-curate-edit-id="dcc35e89-692e-457b-a78c-37ab2ee9916e" to="/battle">Battle</Link></li>
                    <li data-curate-edit-id="fe54b8b0-5a80-4b99-9474-f11b482a6250"><Link data-curate-edit-id="192362e8-4288-4226-a4f8-a052468f5517" to="/leaderboard">Leaderboard</Link></li>
                </ul>
            </div>
            <div data-curate-edit-id="ced63067-dea1-4eea-a3b9-8b68798873bc" className="navbar-end">
                <Link data-curate-edit-id="0fa46aac-2752-4cbe-96e8-10adb8cc65fd" to="/login" className="btn btn-ghost">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;