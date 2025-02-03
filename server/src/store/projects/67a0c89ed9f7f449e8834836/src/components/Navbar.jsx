import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div data-curate-edit-id="b5aec49a-3155-4a43-9965-0f00041a004e" className="navbar bg-primary text-primary-content">
      <div data-curate-edit-id="0db43b26-ac83-4ff4-9c64-a61723b7cf82" className="navbar-start">
        <div data-curate-edit-id="0e1cce0a-4a3a-4142-9ca9-9de3e385cb6d" className="dropdown">
          <label data-curate-edit-id="7cfdd81d-192e-418b-bd74-69cce6992c3f" tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg data-curate-edit-id="3d41acc9-5164-4629-a0e9-34b9f7707ca4" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path data-curate-edit-id="d1787bc8-cc5b-4876-99ee-01434862e6de" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul data-curate-edit-id="feafea57-e693-40b1-ad4a-1d17af9e991b" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52">
            <li data-curate-edit-id="a8bbaa22-c1ea-45f0-9035-4de21bd37750"><Link data-curate-edit-id="7fc87b57-5e09-45e3-84a9-c9fc5ee3f791" to="/">Home</Link></li>
            <li data-curate-edit-id="ed9bffa6-e9c2-4385-b504-5402f179f56f"><Link data-curate-edit-id="d1e26e61-5e7f-4343-bd54-6dc4e6201c32" to="/products">Products</Link></li>
          </ul>
        </div>
        <Link data-curate-edit-id="7468fdf5-7752-4562-8db2-eed3b8a1f0a1" to="/" className="btn btn-ghost normal-case text-xl">Fresh Mart</Link>
      </div>
      <div data-curate-edit-id="98ebb49e-e027-406f-b83d-0906154e619f" className="navbar-center hidden lg:flex">
        <ul data-curate-edit-id="68ad2b82-81d8-4325-8b95-4d6e6fab91e7" className="menu menu-horizontal px-1">
          <li data-curate-edit-id="1e24af11-a20d-49e5-9276-1ce760c478b7"><Link data-curate-edit-id="22c9e425-98d8-48f4-85f2-f43b29f97168" to="/">Home</Link></li>
          <li data-curate-edit-id="8b9d8053-c153-45fb-af13-a57ad101becc"><Link data-curate-edit-id="e4a4605a-cd1f-405c-84a7-41af84cf5154" to="/products">Products</Link></li>
        </ul>
      </div>
      <div data-curate-edit-id="8ac16ef8-0ca9-4d7a-b73b-3aec52c1eb86" className="navbar-end">
        <Link data-curate-edit-id="66a39957-60ad-451f-a778-fdb8627699ab" to="/cart" className="btn btn-ghost btn-circle">
          <div data-curate-edit-id="88314e5b-8e94-45f1-bc73-b9baab0abe43" className="indicator">
            <svg data-curate-edit-id="a3b1e5a4-f2b7-4b48-a181-4b7be95311e1" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path data-curate-edit-id="c2f36e59-5150-41d9-9c31-aa8698a7639a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span data-curate-edit-id="89320156-d223-404d-8b02-a13eebbaaa83" className="badge badge-sm indicator-item">0</span>
          </div>
        </Link>
        <Link data-curate-edit-id="b9860203-96e3-4dd7-a813-06355ee0ad10" to="/login" className="btn btn-ghost">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;