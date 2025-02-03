import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div data-curate-edit-id="fcdd58c3-7ab8-457b-94ea-8dc189fc8e0c" className="navbar bg-primary text-primary-content">
            <div data-curate-edit-id="6dcc7a3a-484f-456b-81e7-8f13aa634476" className="navbar-start">
                <div data-curate-edit-id="760c8fcc-98cd-480b-bb13-b052243f0435" className="dropdown">
                    <div data-curate-edit-id="15afeee3-0158-4e26-95de-e358e78be83c" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg data-curate-edit-id="6c940f81-497f-4dca-bc21-1b04708dbb86" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path data-curate-edit-id="d19c327b-2b63-466d-a410-357863b66c75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul data-curate-edit-id="1dfba511-208f-44d3-a789-dbc8a1d6292d" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li data-curate-edit-id="269cd944-a3ef-41ff-bcfc-bcfd90bab1f2"><Link data-curate-edit-id="8ca8aa96-c221-4c55-a537-8ffbbe0a9ee8" to="/">Home</Link></li>
                        <li data-curate-edit-id="fb883d70-f193-4c39-9357-eef94cfcdafd"><Link data-curate-edit-id="5da8f81f-0464-4a5b-80cd-f5ef82373d47" to="/workouts">Workouts</Link></li>
                        <li data-curate-edit-id="36abd0bd-b5f8-4429-9b56-15245e12924c"><Link data-curate-edit-id="e2f8cdfe-7d12-4873-aea8-a1340b674deb" to="/equipment">Equipment</Link></li>
                    </ul>
                </div>
                <Link data-curate-edit-id="77284a34-b470-4944-8aa2-c60cc1711702" to="/" className="btn btn-ghost text-xl">FitGuide</Link>
            </div>
            <div data-curate-edit-id="6862d71f-ec75-44ac-b801-300bd937e231" className="navbar-center hidden lg:flex">
                <ul data-curate-edit-id="97a3737f-f490-4095-8d84-f7bf6bf31860" className="menu menu-horizontal px-1">
                    <li data-curate-edit-id="cb63c96f-2458-4b46-8e99-6a7d297699b3"><Link data-curate-edit-id="e1dd8b5b-9c52-41e4-bfc3-b4755257e200" to="/">Home</Link></li>
                    <li data-curate-edit-id="6d917e73-f072-492f-a354-ebf75afd512b"><Link data-curate-edit-id="174fbbd0-602a-437e-81e4-8affff2093c2" to="/workouts">Workouts</Link></li>
                    <li data-curate-edit-id="e8e66449-1660-45ef-a183-2657e79707ae"><Link data-curate-edit-id="c79f38c0-4444-4e12-a2a9-4b732be406c1" to="/equipment">Equipment</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;