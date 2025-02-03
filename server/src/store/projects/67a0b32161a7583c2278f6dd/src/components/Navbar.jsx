import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div data-curate-edit-id="a68291f8-e02e-4b4e-bc13-564d4525d61c" className="navbar bg-primary text-primary-content">
      <div data-curate-edit-id="c188633f-15ad-417d-a46d-2b0ebb7d3652" className="navbar-start">
        <div data-curate-edit-id="884761f6-0e7d-4c49-a9fb-c390f0f51b3d" className="dropdown">
          <div data-curate-edit-id="99e6a570-67b4-43c6-be61-07866adc2d90" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg data-curate-edit-id="76701fed-53a4-489a-8cd9-b3665edc2887" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path data-curate-edit-id="1a69447b-0425-4beb-a235-92acd44d7b35" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul data-curate-edit-id="ba1c3227-d0d4-4124-91cd-1db8bec31628" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li data-curate-edit-id="5ecb12d8-37c2-433e-ab6d-0e7001e4ab41"><Link data-curate-edit-id="ddbb8385-1b31-468a-a1c6-e0546645916c" to="/">Home</Link></li>
            <li data-curate-edit-id="96c49218-9b7d-4fdc-b980-12dcf256cc7e"><Link data-curate-edit-id="1693d5b4-263f-4c65-865d-5df4c0a6b530" to="/dashboard">Dashboard</Link></li>
            <li data-curate-edit-id="2feea368-be78-43bb-b9b0-445fe1aac1cc"><Link data-curate-edit-id="5e215009-ad6b-450d-94b2-728cf20f9b77" to="/exercises">Exercises</Link></li>
            <li data-curate-edit-id="6fc6b567-6b9f-480d-8234-dd24a79e10f4"><Link data-curate-edit-id="e9ab40bc-9bf4-490b-9542-790b33430cfa" to="/resources">Resources</Link></li>
          </ul>
        </div>
        <Link data-curate-edit-id="f405198e-d7e5-42f6-92ba-61066937584f" to="/" className="btn btn-ghost text-xl">Fitness Tracker Hub</Link>
      </div>
      <div data-curate-edit-id="31192bcf-b37e-463f-857e-6296eed37591" className="navbar-center hidden lg:flex">
        <ul data-curate-edit-id="4c4bf246-6f3a-48c0-8ce3-a11e645b4b12" className="menu menu-horizontal px-1">
          <li data-curate-edit-id="f80224d4-d7ec-457b-8150-46df4ecc0c4c"><Link data-curate-edit-id="a28a72ec-7774-48d0-b2ba-852374363bfc" to="/">Home</Link></li>
          <li data-curate-edit-id="442c3324-f0d6-4963-832f-885e0e96c5a1"><Link data-curate-edit-id="896d3788-03fc-4ea2-b4ee-6fc4619be4d3" to="/dashboard">Dashboard</Link></li>
          <li data-curate-edit-id="d0da2a6c-1621-4e03-ab54-1301b4c1d151"><Link data-curate-edit-id="53a3023e-2c4d-4583-bbab-2b64bfc46a81" to="/exercises">Exercises</Link></li>
          <li data-curate-edit-id="13dbdeb1-7ae6-4041-a9b0-0a95c5e8156a"><Link data-curate-edit-id="448e8618-4ee3-4a37-83ef-0e2d4b75ba87" to="/resources">Resources</Link></li>
        </ul>
      </div>
      <div data-curate-edit-id="150959fe-99ec-4b8c-b2e0-51372e26e26f" className="navbar-end">
        <Link data-curate-edit-id="3c4e8ef7-0e0f-46f1-aab5-4bd155f0437e" to="/login" className="btn btn-ghost">Login</Link>
        <Link data-curate-edit-id="e43b7258-1115-4163-92fd-73326c79e4f8" to="/register" className="btn btn-secondary">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;