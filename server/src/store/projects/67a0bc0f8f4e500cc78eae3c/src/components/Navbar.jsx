import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div data-curate-edit-id="44c3cd8a-5c98-4597-83a7-bd046acc8760" className="navbar bg-primary text-primary-content">
            <div data-curate-edit-id="38791df1-3c63-4213-aada-aae2e2cadae8" className="navbar-start">
                <div data-curate-edit-id="cc43f784-6684-46c9-aa3c-baedec3f526f" className="dropdown">
                    <div data-curate-edit-id="94d5c48c-71a9-49b1-afdb-c7e5e6dec780" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg data-curate-edit-id="c557bbcd-e83b-470c-8af1-3eadc03d06ea" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path data-curate-edit-id="416f2333-e0a4-43dd-b738-90034aad04cb" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul data-curate-edit-id="096f038f-6e4c-445a-835a-2f8fa3a7d185" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li data-curate-edit-id="86ad765a-eabd-4952-b09e-59b73268d8f5"><Link data-curate-edit-id="8461c279-15fe-43fa-a873-d6a8580ce149" to="/">Home</Link></li>
                        <li data-curate-edit-id="ee4a3091-4e60-47e5-a1fe-fcbde0099fdd"><Link data-curate-edit-id="8c07c323-7156-4cdc-8149-1708f1424037" to="/dashboard">Dashboard</Link></li>
                        <li data-curate-edit-id="c242c999-6d77-45b0-b2f4-14e48a8f1bb8"><Link data-curate-edit-id="0f5978a6-3702-4b75-8e04-fe4b5a6663ed" to="/nutrition">Nutrition</Link></li>
                        <li data-curate-edit-id="3a5f4f9d-63dc-46a6-9941-3d9f0725143b"><Link data-curate-edit-id="baf76314-e241-4fa8-a913-772b5c138098" to="/workouts">Workouts</Link></li>
                        <li data-curate-edit-id="df8da4cd-9989-404a-af2b-62a3e5103692"><Link data-curate-edit-id="7e570e96-6d1b-4d3e-9489-3e9f910c987b" to="/progress">Progress</Link></li>
                        <li data-curate-edit-id="0f19b9c6-1322-4994-8b0e-b0ebe95cb8c6"><Link data-curate-edit-id="55e02128-1465-456e-82ec-06c1cbb00d12" to="/profile">Profile</Link></li>
                    </ul>
                </div>
                <Link data-curate-edit-id="34f52341-2769-4443-885b-90de1819c6b0" to="/" className="btn btn-ghost text-xl">Fitness Tracker</Link>
            </div>
            <div data-curate-edit-id="60c3c10b-810e-4927-af1a-c7cc45c1ba61" className="navbar-center hidden lg:flex">
                <ul data-curate-edit-id="cb262ac0-0908-4f4a-baad-7ea4bbf200a3" className="menu menu-horizontal px-1">
                    <li data-curate-edit-id="142ecdaa-f8fe-4e06-9003-dc138cb7219a"><Link data-curate-edit-id="ceabd324-d978-4542-8985-a92f50a12438" to="/dashboard">Dashboard</Link></li>
                    <li data-curate-edit-id="aec53f7c-c7e4-48a8-b6bf-75d038a90f17"><Link data-curate-edit-id="b1ad9447-8d89-4e27-9c36-d8fbe54eb1e4" to="/nutrition">Nutrition</Link></li>
                    <li data-curate-edit-id="5ee0b008-1828-4cbd-9445-5cf8677a6165"><Link data-curate-edit-id="637dd31f-d5ce-4d15-b56b-8c46db2514bc" to="/workouts">Workouts</Link></li>
                    <li data-curate-edit-id="ad9f2e67-ffd4-41c9-b24c-4d81a8be3b45"><Link data-curate-edit-id="3b5522ad-d9ee-4770-be6c-a155e4bf4fb4" to="/progress">Progress</Link></li>
                    <li data-curate-edit-id="9fb2ffe1-04bc-4fa7-81d8-f3f3f01b5357"><Link data-curate-edit-id="e5fb4003-4aae-47dd-b422-0df35088a80a" to="/profile">Profile</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;