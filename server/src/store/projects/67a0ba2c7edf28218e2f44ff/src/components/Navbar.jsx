import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div data-curate-edit-id="79ca477e-5350-4e1c-a7ce-9d54d3705f85" className="navbar bg-primary text-primary-content">
            <div data-curate-edit-id="51e8c8f3-b1f4-480d-bd2e-777a714bc07f" className="navbar-start">
                <div data-curate-edit-id="35ecf5da-0900-4346-a0f6-dc01f2e95863" className="dropdown">
                    <div data-curate-edit-id="968b74cb-fbcf-4cbc-99e9-b965d7eb42ff" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg data-curate-edit-id="a66bc02a-258c-460f-86ad-2bfb322de300" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path data-curate-edit-id="d8e9d6b7-f3a8-4a76-904f-ee29ec65e877" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul data-curate-edit-id="0482e497-2e29-4035-8fc4-90ed33c570f8" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base-content">
                        <li data-curate-edit-id="ee780176-dbf2-466e-9a6b-a6bea074b4ef"><Link data-curate-edit-id="3a966b14-ab9f-44ab-96d5-a758a78b7e1d" to="/">Dashboard</Link></li>
                        <li data-curate-edit-id="52ab58ef-2a7f-4f09-b657-73cb67670df4"><Link data-curate-edit-id="d5bffa89-6df0-4121-b03b-503bea0bf5d1" to="/students">Students</Link></li>
                        <li data-curate-edit-id="380fe9e2-cb60-465c-b83f-bd2455464de2"><Link data-curate-edit-id="8ce0a754-6ec2-40ad-9510-fc613e2bf08f" to="/reports">Reports</Link></li>
                        <li data-curate-edit-id="79f74b40-4606-4a09-92da-6cedf457839f"><Link data-curate-edit-id="b397095b-2fc9-4ba3-801a-6a7dace029e4" to="/settings">Settings</Link></li>
                    </ul>
                </div>
                <Link data-curate-edit-id="29332557-7600-4e6b-9623-724ef3c71e6b" to="/" className="btn btn-ghost text-xl">Student Attendance Tracker</Link>
            </div>
            <div data-curate-edit-id="3cb6e1aa-ad82-4b39-baad-8c30cdeedc57" className="navbar-center hidden lg:flex">
                <ul data-curate-edit-id="9b9b6894-58b5-4e6c-be2d-9b9f57d30cf9" className="menu menu-horizontal px-1">
                    <li data-curate-edit-id="7b656728-34ce-42ab-9741-17cef822eb90"><Link data-curate-edit-id="d8f03d35-6516-4dd6-a51e-f231161133f5" to="/">Dashboard</Link></li>
                    <li data-curate-edit-id="8b862f4a-8df7-45dd-b3f6-d2e69a1d859d"><Link data-curate-edit-id="85cc3bbe-871e-43d9-b708-88aff8590ed6" to="/students">Students</Link></li>
                    <li data-curate-edit-id="f9f2d248-9df6-4e5c-9c2c-a14b01c8fe0f"><Link data-curate-edit-id="ca34b716-08a0-4fcc-89fa-4d6f087083e1" to="/reports">Reports</Link></li>
                    <li data-curate-edit-id="428c557a-e092-461e-9679-70fd33c83f25"><Link data-curate-edit-id="fd9f22fa-cc27-4ca8-bd71-8d51ec38add8" to="/settings">Settings</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;