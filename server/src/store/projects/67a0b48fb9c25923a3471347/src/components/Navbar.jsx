import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div data-curate-edit-id="6a976ef4-d99e-40e9-b415-cc1f0ef08a95" className="navbar bg-primary text-primary-content">
            <div data-curate-edit-id="bf45c46e-633b-4eb1-a006-146259367c17" className="navbar-start">
                <div data-curate-edit-id="6c98e92f-fbad-4f33-994b-48bb253fb1f3" className="dropdown">
                    <div data-curate-edit-id="cf261a4d-4c91-443a-9abf-24a6a5139c53" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg data-curate-edit-id="c4323260-ad22-478c-bf09-5eb9c190480a" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path data-curate-edit-id="1592a8a9-0834-4046-8685-c156fbd03ea2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul data-curate-edit-id="3093f8e7-5c4b-4b29-a9ec-e58ccbe303dc" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li data-curate-edit-id="7a7e4f59-0fec-4017-96b1-072350a2b622"><Link data-curate-edit-id="b76177b6-a83e-4b3b-8634-f1a646f6dcfc" to="/">Home</Link></li>
                        <li data-curate-edit-id="554443ce-7745-4c9c-af68-3ca3960717b3"><Link data-curate-edit-id="0a335c51-b9f6-4d9a-aed6-3d16b77e68c3" to="/dashboard">Dashboard</Link></li>
                        <li data-curate-edit-id="84bca781-cf6c-43a1-9b9c-766dc2a0ba84"><Link data-curate-edit-id="6f7e47e3-cae2-47be-bcd5-6af0237fe4da" to="/food-log">Food Log</Link></li>
                        <li data-curate-edit-id="f51c3d5d-c9ea-4cd3-a8e6-dda017e6b08c"><Link data-curate-edit-id="2bd04646-55c0-49e5-8111-e4640940ee72" to="/workouts">Workouts</Link></li>
                        <li data-curate-edit-id="5724da37-c491-4383-a8d2-a30b9e0cb36b"><Link data-curate-edit-id="99fb1566-29ee-4ae3-ae6f-3e3b596f4eed" to="/blog">Blog</Link></li>
                        <li data-curate-edit-id="8c1f5a0c-8bce-48dc-a137-0a1a668f41e7"><Link data-curate-edit-id="eaa37ce7-bbfd-4e80-af4f-a57eecebb164" to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <Link data-curate-edit-id="6f810fb1-f2eb-43b1-b43c-de4d57b7b83d" to="/" className="btn btn-ghost text-xl">FitTrack</Link>
            </div>
            <div data-curate-edit-id="120481e3-eaf7-4f45-815f-311523c91ffc" className="navbar-center hidden lg:flex">
                <ul data-curate-edit-id="cd22875b-8a45-4dfb-b0cc-b9dc9f488d54" className="menu menu-horizontal px-1">
                    <li data-curate-edit-id="1547623c-7319-4217-8248-a9e5705c9878"><Link data-curate-edit-id="bbe826f8-f6ba-4b67-b30b-56f16e9a6580" to="/dashboard">Dashboard</Link></li>
                    <li data-curate-edit-id="27adb44e-5a3a-4bb0-814b-1a142854d3db"><Link data-curate-edit-id="5591d52b-433b-4b0a-9c3a-2305f0ccf12c" to="/food-log">Food Log</Link></li>
                    <li data-curate-edit-id="0e07bdb5-f8d8-48f0-86bd-5e41af4660ee"><Link data-curate-edit-id="4d33868c-f5a1-4fa5-bcbd-1889a304170b" to="/workouts">Workouts</Link></li>
                    <li data-curate-edit-id="1234b0be-7fa0-4f78-9202-04eca8f98684"><Link data-curate-edit-id="651c911c-f22c-4beb-8baf-baaea2eb4366" to="/blog">Blog</Link></li>
                    <li data-curate-edit-id="c4e4ff62-1227-4c00-8ba0-ba1f0374a94b"><Link data-curate-edit-id="97823593-101c-48bb-803c-2054d9b1a44b" to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div data-curate-edit-id="cecc9e59-e0a7-4d30-9c8a-3f4265b7e67c" className="navbar-end">
                <Link data-curate-edit-id="7d8a8585-1928-4bc6-84fe-5e28bdb7d588" to="/login" className="btn btn-ghost">Login</Link>
                <Link data-curate-edit-id="e1e3decd-2354-43e7-9771-62ac5f44a2ff" to="/register" className="btn btn-accent">Register</Link>
            </div>
        </div>
    );
};

export default Navbar;