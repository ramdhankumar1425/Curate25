import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div data-curate-edit-id="62c5c608-7c30-4ba8-9746-27405725d3d9" className="navbar bg-primary text-primary-content">
      <div data-curate-edit-id="6afcc5b0-4658-47c8-a901-2352000ce5c0" className="navbar-start">
        <div data-curate-edit-id="6a5d94b5-2f24-4f4a-9add-c53233f3fda8" className="dropdown">
          <div data-curate-edit-id="79eedf7d-98df-42fe-9c8c-52ee0ef3a499" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg data-curate-edit-id="e153e22d-0131-4a45-a2e0-99ed0ab12d50" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path data-curate-edit-id="64177901-1864-48ba-954c-6fcc74c9c057" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul data-curate-edit-id="fa3b77d8-c529-4e2b-b43e-553f11e27e07" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52">
            <li data-curate-edit-id="64ae6b90-cd22-4c5d-9dc0-481362ac21b8"><Link data-curate-edit-id="7eb52e9c-0008-4d65-9aed-738903e48691" to="/">Home</Link></li>
            <li data-curate-edit-id="d8a78f96-87c9-4405-af14-969eeb805462"><Link data-curate-edit-id="36d9ea9e-a1cf-4cc8-b006-f15329b032e9" to="/exercises">Exercises</Link></li>
            <li data-curate-edit-id="a72283e7-cb8b-453f-b37e-3e318acc555b"><Link data-curate-edit-id="99713bae-19e6-4877-8c3e-293070edfb28" to="/calculator">Calorie Calculator</Link></li>
            <li data-curate-edit-id="e748f6a5-abb8-4afa-8a73-2d7cbacb240e"><Link data-curate-edit-id="f251b1e7-28ef-435d-8b2e-2f91edd7a189" to="/blog">Blog</Link></li>
            <li data-curate-edit-id="30714085-35e4-4ff8-bf6b-c7e2ac2adb09"><Link data-curate-edit-id="a4d3b531-8f84-4ef5-b1bb-1db8b29ab8d6" to="/progress">Progress</Link></li>
            <li data-curate-edit-id="8b5e8d6b-714a-4f21-84d6-38d51f709fe3"><Link data-curate-edit-id="253019f0-0e7b-4756-bf1e-6d9920d3b783" to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
        <Link data-curate-edit-id="63df6982-bea6-4509-a9a4-a7cb5ef89693" to="/" className="btn btn-ghost text-xl">Fitness Tracker Pro</Link>
      </div>
      <div data-curate-edit-id="d97e8bc8-5095-46ae-a0f1-65d0180ad3bd" className="navbar-end hidden lg:flex">
        <ul data-curate-edit-id="e02a7dec-16cc-47a6-808c-c697b3d8d7e2" className="menu menu-horizontal px-1">
          <li data-curate-edit-id="6b6eb598-bcb3-40c0-b690-f5279ef1bde7"><Link data-curate-edit-id="1c6ee7d3-5429-4c0d-8d64-46d72a857c70" to="/">Home</Link></li>
          <li data-curate-edit-id="91c30c84-0a5e-4d8f-b0ad-d6a8adc4a87b"><Link data-curate-edit-id="d8d8a002-2dbe-453e-a76a-56098b525c6e" to="/exercises">Exercises</Link></li>
          <li data-curate-edit-id="8ada020f-4f9e-4b14-98e6-f834b084a649"><Link data-curate-edit-id="bd186241-8525-45b7-bd08-f75a2b016d87" to="/calculator">Calorie Calculator</Link></li>
          <li data-curate-edit-id="349f1f0a-a9d1-489e-8c07-48248bf47eff"><Link data-curate-edit-id="0d729073-1a53-4358-be2c-9568a127becd" to="/blog">Blog</Link></li>
          <li data-curate-edit-id="9c1c4cc0-917b-4582-aeba-9ffea97bd619"><Link data-curate-edit-id="084afe60-d159-4d92-8675-4c51f0aaf216" to="/progress">Progress</Link></li>
          <li data-curate-edit-id="e192fbe6-4ed9-4979-9e44-11b997966f60"><Link data-curate-edit-id="07c0cdd3-579d-4e86-8f7b-ce344e1fd05a" to="/dashboard">Dashboard</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;