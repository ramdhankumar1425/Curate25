import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div data-curate-edit-id="40a649bf-1b54-4663-a9bf-c609d6f4164d" className="navbar bg-primary text-primary-content">
            <div data-curate-edit-id="13730448-eb7d-4139-81b5-1f0e54c21824" className="navbar-start">
                <div data-curate-edit-id="934dafd0-53ae-4935-be1e-ccd5cb717678" className="dropdown">
                    <div data-curate-edit-id="1c54ac55-8497-4bf5-b607-700b5a3b304d" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg data-curate-edit-id="9def26a3-fbea-4da2-ab77-fc2def53fd2d" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path data-curate-edit-id="19807d6e-b8e9-4d04-84a0-8e1fe87bcaf4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul data-curate-edit-id="1ed583ff-6b39-4302-a10b-426156db6531" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li data-curate-edit-id="7ced61df-43ff-44eb-9884-76a999031fae"><Link data-curate-edit-id="8dda7f39-6e92-45e4-9dc0-f2fbc344e09f" to="/">Home</Link></li>
                        <li data-curate-edit-id="1f262057-124c-41b1-b739-752c9663a854"><Link data-curate-edit-id="78e32b4b-4905-449b-b0f7-5c9a95c179f0" to="/products">Products</Link></li>
                        <li data-curate-edit-id="29d582e8-4af4-4ae6-a257-0125099556d9"><Link data-curate-edit-id="ac6ddaa6-cefb-4a4e-bda7-ead0d4c3d6d3" to="/cart">Cart</Link></li>
                    </ul>
                </div>
                <Link data-curate-edit-id="6837275e-f6b6-4755-85a1-0960744b7253" to="/" className="btn btn-ghost text-xl">Fresh Mart</Link>
            </div>
            <div data-curate-edit-id="2969fc17-0145-4b20-9245-a3cb1305538b" className="navbar-center hidden lg:flex">
                <ul data-curate-edit-id="f3952926-8451-4326-ba62-f035d2aff2ee" className="menu menu-horizontal px-1">
                    <li data-curate-edit-id="dd19893c-28df-4be1-8164-ef0b615c863f"><Link data-curate-edit-id="42dc2ac3-4689-4dbb-bcfc-3225b717c5ff" to="/">Home</Link></li>
                    <li data-curate-edit-id="9b0f8efd-c000-4720-bcaa-a398c8b8e82b"><Link data-curate-edit-id="bb26f099-1054-4e94-bef7-fa7d798ab6d7" to="/products">Products</Link></li>
                    <li data-curate-edit-id="431145fa-e836-4ace-99aa-3e7207d0d584"><Link data-curate-edit-id="228f19a0-4c72-43b5-86c2-adc0c48174bb" to="/cart">Cart</Link></li>
                </ul>
            </div>
            <div data-curate-edit-id="be05cc21-9441-453e-bedc-a95852acdaaf" className="navbar-end">
                <Link data-curate-edit-id="e10b07e8-c4a6-4f2e-b28e-f8a3019dd59b" to="/login" className="btn">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;