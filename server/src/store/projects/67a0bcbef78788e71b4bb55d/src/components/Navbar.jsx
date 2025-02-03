import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div data-curate-edit-id="20768611-2006-413a-98f6-d385f49866de" className="navbar bg-primary text-primary-content">
            <div data-curate-edit-id="d3efbcbd-cb34-4ae6-a4cb-a46775e12e3f" className="navbar-start">
                <div data-curate-edit-id="c0ef4812-8965-43a3-a2b9-419b1e36cfc5" className="dropdown">
                    <div data-curate-edit-id="469741d1-e683-4297-9fe3-03ce6a8023dc" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg data-curate-edit-id="ade58602-0413-4755-ae8d-b7801bcf5fba" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path data-curate-edit-id="94294702-07aa-4b46-b020-5fc80f19a2b6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul data-curate-edit-id="cece0694-af31-4ce7-b395-aa488321306c" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li data-curate-edit-id="8c467357-a71d-4e00-b30e-295e10149616"><Link data-curate-edit-id="84686b2e-b7c7-4a4e-8d3b-08781a447429" to="/dashboard">Dashboard</Link></li>
                        <li data-curate-edit-id="1dfd5e36-1676-4ed9-b1e8-577dd90364e6"><Link data-curate-edit-id="eebf3492-3bdf-49e8-b807-343c7d3878c9" to="/workout">Workout</Link></li>
                        <li data-curate-edit-id="c41f6ab8-d67c-4e13-b5c5-76fde6e65d77"><Link data-curate-edit-id="fb0f6198-abe0-4bc3-a05f-161ab85f370c" to="/nutrition">Nutrition</Link></li>
                        <li data-curate-edit-id="3b25b502-89a1-42aa-94fb-3e58f1c95d45"><Link data-curate-edit-id="3f8b4050-7097-4786-ad2b-a99720fcdd58" to="/progress">Progress</Link></li>
                        <li data-curate-edit-id="5fdd902b-c1d5-42aa-a6ef-7e3a71c2d10b"><Link data-curate-edit-id="2a746319-5b45-4347-816c-b665a82cd640" to="/profile">Profile</Link></li>
                    </ul>
                </div>
                <Link data-curate-edit-id="146a39f5-84a7-4c64-8865-4d751eed429a" to="/" className="btn btn-ghost text-xl">FitTrack</Link>
            </div>
            <div data-curate-edit-id="11950750-9e12-4806-8c3b-b732f45d3c35" className="navbar-center hidden lg:flex">
                <ul data-curate-edit-id="75d9532e-67c8-4c7a-9b5c-4e960c949c70" className="menu menu-horizontal px-1">
                    <li data-curate-edit-id="e17f4e4b-3b7c-420b-9bba-4bda7ebacdb9"><Link data-curate-edit-id="d83d60ad-48df-4388-946d-d566ec4c6d6c" to="/dashboard">Dashboard</Link></li>
                    <li data-curate-edit-id="f7a8bbac-8505-4672-96b4-36057c90a2e1"><Link data-curate-edit-id="48ff9542-213e-430f-b0cc-a90214f980e9" to="/workout">Workout</Link></li>
                    <li data-curate-edit-id="ab6aed0d-5d1a-4ebd-8892-fe9ff58e7215"><Link data-curate-edit-id="d1ee62d5-fd1b-4def-ab62-0837fcee886d" to="/nutrition">Nutrition</Link></li>
                    <li data-curate-edit-id="d9975ecf-d299-443b-9528-49f73a1b5e45"><Link data-curate-edit-id="fb188bf7-6521-43b4-8255-386b02ca0d21" to="/progress">Progress</Link></li>
                    <li data-curate-edit-id="51bfee79-5497-40e7-a004-32f8fb6ee9d2"><Link data-curate-edit-id="9e4d6af7-1fc7-4b88-80e3-806e268a7d86" to="/profile">Profile</Link></li>
                </ul>
            </div>
            <div data-curate-edit-id="36f1140d-6a2a-404c-bb54-45f1cd8aec89" className="navbar-end">
                <Link data-curate-edit-id="307a38fb-c828-4908-85eb-42869846db85" to="/login" className="btn btn-ghost">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;