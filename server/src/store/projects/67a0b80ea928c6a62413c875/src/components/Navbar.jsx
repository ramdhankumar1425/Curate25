import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div data-curate-edit-id="bfb67bf0-8cf8-4b61-be3b-c9fd1c235bba" className="navbar bg-primary text-primary-content">
            <div data-curate-edit-id="fa9f097d-01a7-4f4c-8491-1e616f873b05" className="navbar-start">
                <div data-curate-edit-id="fc614afe-5248-44a6-a4d0-5af502e0c23b" className="dropdown">
                    <div data-curate-edit-id="020582c2-bd67-449b-82be-877ec9867a56" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg data-curate-edit-id="da34b723-1071-4dcf-b2ca-7523c5708d5a" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path data-curate-edit-id="c6b22074-71d0-4d24-9b15-88daf2ce299a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul data-curate-edit-id="16e3d01b-6dd8-4082-b153-ba3f0993f888" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li data-curate-edit-id="dacfded1-1fde-4a53-ad1d-d06afde05bfb"><Link data-curate-edit-id="21a23ee9-d0f2-4d73-b84f-5b03532a3292" to="/">Dashboard</Link></li>
                        <li data-curate-edit-id="ee7167b1-b277-493b-b29a-fb9a331ce284"><Link data-curate-edit-id="2ab60aec-a7d6-43e0-86e4-25b46336ec09" to="/exercises">Exercises</Link></li>
                        <li data-curate-edit-id="6b4dfd6c-077e-4e22-a1cc-6b346a38f8ac"><Link data-curate-edit-id="98c4dc7c-96f6-44c1-9336-30bd2e0cba1a" to="/nutrition">Nutrition</Link></li>
                        <li data-curate-edit-id="731f98dd-6f81-4871-8cd6-6b1ea862af89"><Link data-curate-edit-id="73e19f9f-0b73-4251-8dcd-f03906331ae4" to="/progress">Progress</Link></li>
                        <li data-curate-edit-id="69756916-5244-45f5-9d21-c242ca8603ab"><Link data-curate-edit-id="a2ee3b1a-587f-4b54-b116-d00dc2ef29d4" to="/profile">Profile</Link></li>
                    </ul>
                </div>
                <Link data-curate-edit-id="a901bbfc-2ae5-4b31-bf39-e072261332d8" to="/" className="btn btn-ghost text-xl">Fitness Tracker</Link>
            </div>
            <div data-curate-edit-id="d03b519d-5ea7-46b9-ad0d-9ff0a2b0f452" className="navbar-center hidden lg:flex">
                <ul data-curate-edit-id="38af91b8-9085-4070-bf8b-af76c25c6172" className="menu menu-horizontal px-1">
                    <li data-curate-edit-id="2036f53f-a3cc-42e1-9b73-c0932ec4a2ce"><Link data-curate-edit-id="315d0525-64f8-4430-8434-8c0715a27af2" to="/">Dashboard</Link></li>
                    <li data-curate-edit-id="06730869-f86d-45d7-a932-9dcffaa68150"><Link data-curate-edit-id="4fe2c370-43d1-44f5-9fda-1839b2d174b8" to="/exercises">Exercises</Link></li>
                    <li data-curate-edit-id="86ddbf8c-5b4f-4b69-a7c1-2b81198d2bef"><Link data-curate-edit-id="4c4c1395-ca46-42fb-84f5-4ca69db7ef17" to="/nutrition">Nutrition</Link></li>
                    <li data-curate-edit-id="58cc77bd-2ae8-4a11-8ab8-fe85976786b0"><Link data-curate-edit-id="d3cc7ee2-3ff3-4d38-a854-821d464b0999" to="/progress">Progress</Link></li>
                    <li data-curate-edit-id="3718459c-6b3a-4ef8-8a30-59c0ae460eac"><Link data-curate-edit-id="1d043416-f490-45b9-b704-78a92a4cd2d9" to="/profile">Profile</Link></li>
                </ul>
            </div>
            <div data-curate-edit-id="8300569c-7535-4ebe-979a-5aec8cc37cad" className="navbar-end">
                <div data-curate-edit-id="a77d56c5-884d-43c7-adc9-425e8f72f740" className="avatar placeholder">
                    <div data-curate-edit-id="1fe32b35-6059-4dab-8e95-a656857979e9" className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <span data-curate-edit-id="271cba57-92c5-4d7f-92af-822259e79516" className="text-xs">User</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;