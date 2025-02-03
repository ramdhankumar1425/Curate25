import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div data-curate-edit-id="fb86d652-98bd-4bc9-984a-ad051a2f930f" className="navbar bg-primary text-primary-content">
            <div data-curate-edit-id="f8425ed3-79ac-45ac-b9cb-d635dd68c37e" className="navbar-start">
                <div data-curate-edit-id="61cb0b73-365f-4a6d-b57b-7b5803d675b2" className="dropdown">
                    <div data-curate-edit-id="86c647dc-ba92-4a7c-81c7-c558ab90c9a6" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg data-curate-edit-id="d2450994-40b7-4f15-833b-d9db75abf5c7" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path data-curate-edit-id="5b6b4ed5-53b7-4bd7-a59b-7f83b7910dd7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul data-curate-edit-id="e4de8107-a66b-4115-ac65-3f30b54087bc" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li data-curate-edit-id="ef4f65d0-08eb-4b82-9bef-ab640822d1ba"><Link data-curate-edit-id="6e18211a-ec55-481d-8175-f7c874642171" to="/">Dashboard</Link></li>
                        <li data-curate-edit-id="eb91de5e-ec55-481b-8ecb-88d16c1c93e8"><Link data-curate-edit-id="ccc86d78-7c8f-4b8b-bf85-0a69e818ea90" to="/food-tracker">Food Tracker</Link></li>
                        <li data-curate-edit-id="355fb63f-2333-4988-bbc1-eafb3fec9681"><Link data-curate-edit-id="c1eed5f5-706a-40f1-a02a-bd44df5e7936" to="/workout-library">Workout Library</Link></li>
                        <li data-curate-edit-id="b879b9e9-c07e-40da-ba6b-c1bbb19ce3e8"><Link data-curate-edit-id="3827be02-c363-4ac2-980d-a634758bd8d7" to="/progress">Progress</Link></li>
                        <li data-curate-edit-id="e52d86e9-a8a4-4ac4-9ab3-dcc2e8b4a7a7"><Link data-curate-edit-id="a16fe843-a29b-41bb-88f1-6b59aec8e575" to="/goals">Goals</Link></li>
                        <li data-curate-edit-id="07c7f50f-2f84-4a3b-a1e5-f1f4518a83b5"><Link data-curate-edit-id="0b7b1997-66a3-4560-82d4-f5508fbd34c0" to="/community">Community</Link></li>
                    </ul>
                </div>
                <Link data-curate-edit-id="520f01fa-f2bc-4b94-9984-7f6cb85452f4" to="/" className="btn btn-ghost text-xl">Fitness Tracker</Link>
            </div>
            <div data-curate-edit-id="58e988fb-96fc-4d09-bf3a-9f998bdcfa13" className="navbar-center hidden lg:flex">
                <ul data-curate-edit-id="79d3f911-7d7f-4a46-a45c-721478d34ca2" className="menu menu-horizontal px-1">
                    <li data-curate-edit-id="48a85b88-6e65-4a4e-aeb7-2b8053002a58"><Link data-curate-edit-id="35a6d158-6d16-4357-9f86-66c65f18a940" to="/">Dashboard</Link></li>
                    <li data-curate-edit-id="ff7bd96e-6ee6-438a-b692-98829f5e2303"><Link data-curate-edit-id="9f51a647-1bea-4d6c-b391-07c4bd3da2fd" to="/food-tracker">Food Tracker</Link></li>
                    <li data-curate-edit-id="6ce9ddf5-2b4a-4023-bd42-a125867a7d7a"><Link data-curate-edit-id="a87ac950-e421-4aba-a717-c07eb6e3ea64" to="/workout-library">Workout Library</Link></li>
                    <li data-curate-edit-id="71feb934-2f40-485d-b5f0-b734c3a68a66"><Link data-curate-edit-id="8f53f055-aebd-4034-a402-1983deac6d48" to="/progress">Progress</Link></li>
                    <li data-curate-edit-id="a923a11d-5c8a-4ffb-9f8d-7f56392ed2e2"><Link data-curate-edit-id="918f73e9-7d07-404b-b6d7-8edd3ec26ab2" to="/goals">Goals</Link></li>
                    <li data-curate-edit-id="a90e8abb-b58d-4ad4-915b-9c6e30060f97"><Link data-curate-edit-id="0c10ca87-ab68-4f99-a27a-74c3df6b4c24" to="/community">Community</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;