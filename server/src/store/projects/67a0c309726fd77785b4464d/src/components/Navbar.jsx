import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div data-curate-edit-id="22bd55f7-3696-4e8b-9d15-f43217de0487" className="navbar bg-base-100 shadow-lg">
            <div data-curate-edit-id="dae2fa7a-2ab0-4ac0-8a01-741b41efe876" className="navbar-start">
                <div data-curate-edit-id="ff4e7604-31f7-454b-a021-d4ebe1e9a38f" className="dropdown">
                    <div data-curate-edit-id="09948f22-9a4b-467e-b94c-e88c9ddcf70f" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg data-curate-edit-id="fa18bdb0-e58d-44df-8c70-cff49a9e681e" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path data-curate-edit-id="31295ce5-a5e5-40df-a25c-0ec64d32884e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul data-curate-edit-id="b7a2756c-72aa-4ec3-b238-f0f9918fb671" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li data-curate-edit-id="d37edf9c-38d3-4c9f-b6de-4b613dab1e1b"><Link data-curate-edit-id="ca013aea-5195-4e22-82e2-c5ec46dd6280" to="/">Home</Link></li>
                        <li data-curate-edit-id="8715bd64-f3ff-4749-8f61-34b2d4ebf6e3"><Link data-curate-edit-id="28a8a9b8-d78d-42e3-a34c-abda29061cb1" to="/blog">Blog</Link></li>
                        <li data-curate-edit-id="08a8d625-9ece-4343-901f-f7cdf70fe9ac"><Link data-curate-edit-id="30e2ec6a-bfff-434a-88b6-3db4fbd0d9f4" to="/workouts">Workouts</Link></li>
                        <li data-curate-edit-id="6a8e580d-3a4c-44dd-9b94-6108882ad554"><Link data-curate-edit-id="72c7f37c-4500-44c1-8e1a-cb1a497a33f3" to="/meal-plans">Meal Plans</Link></li>
                        <li data-curate-edit-id="505db01d-247a-4ec4-a653-b5fec3d3a620"><Link data-curate-edit-id="b87b1834-5ef1-434d-8785-ed3e892a3bcb" to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <Link data-curate-edit-id="c5bb0fa2-82d9-40b9-b58d-dd7f095c9629" to="/" className="btn btn-ghost text-xl">FitLife</Link>
            </div>
            <div data-curate-edit-id="b2b5833d-394c-40a6-a676-0789c287bfb5" className="navbar-center hidden lg:flex">
                <ul data-curate-edit-id="bc27d6d4-f1d3-4e9d-9049-46c45e7f430c" className="menu menu-horizontal px-1">
                    <li data-curate-edit-id="bd600f62-0bea-4b0f-8f8a-a78938b57286"><Link data-curate-edit-id="0c27ba69-8c68-4656-8959-207602cddf4b" to="/">Home</Link></li>
                    <li data-curate-edit-id="74c7bafc-794e-4763-9f4d-4e9607a972ac"><Link data-curate-edit-id="ebca64a9-574a-4497-a11e-7be1328b3b0d" to="/blog">Blog</Link></li>
                    <li data-curate-edit-id="9609171e-6fc3-49dd-9e53-1d946957eb95"><Link data-curate-edit-id="ed1bfef9-80f5-44a8-a022-2cf480d5380a" to="/workouts">Workouts</Link></li>
                    <li data-curate-edit-id="9095cd72-c35a-4663-bfcf-38f0d5320df2"><Link data-curate-edit-id="e067abaa-b738-4fef-a07e-3e0bb45f4ff0" to="/meal-plans">Meal Plans</Link></li>
                    <li data-curate-edit-id="edc8808c-9dfd-4735-90c9-c288b3ca3571"><Link data-curate-edit-id="ae9736a8-36df-4331-8c1d-164dbbe16ccd" to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;