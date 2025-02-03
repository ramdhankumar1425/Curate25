import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div data-curate-edit-id="db36d080-8b9b-4d30-91e7-5fefbce05104" className="navbar bg-base-100 shadow-lg">
      <div data-curate-edit-id="e21a9aaf-af1a-4392-aeea-cf251f74a15d" className="navbar-start">
        <div data-curate-edit-id="7335e30b-91fb-41dc-9d5b-2a166d25d585" className="dropdown">
          <div data-curate-edit-id="2979caf5-0f19-4da6-bc1c-1c1fb789696f" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg data-curate-edit-id="ed82bbb1-4604-41a7-87a7-c17898dce3c8" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path data-curate-edit-id="098a1b6a-e09e-4fd8-9033-822b102c0971" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul data-curate-edit-id="04b47a1b-4269-4849-85f0-08b95be7cadb" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li data-curate-edit-id="f14bf8f7-95bc-42b3-8ce8-10dcb62a1498"><Link data-curate-edit-id="e9c6e609-ad06-4bee-b8a6-e9c2b6aa7842" to="/">Home</Link></li>
            <li data-curate-edit-id="6e7e39d1-5a32-4bb9-b98d-8207d479632f"><Link data-curate-edit-id="53e86f6d-92a3-487b-8602-c29b8fcd3f9b" to="/workouts">Workouts</Link></li>
            <li data-curate-edit-id="41adac7d-1efc-4af6-a08e-e07253fd2fba"><Link data-curate-edit-id="f5791f59-b1e3-4e8b-af28-b7054b1ba816" to="/equipment">Equipment</Link></li>
            <li data-curate-edit-id="a19ab578-94fb-401f-b936-2f2c542fbe3b"><Link data-curate-edit-id="558f36b6-9e96-49a5-b698-beb52daec039" to="/guide">Beginners Guide</Link></li>
            <li data-curate-edit-id="11be4ed6-27b6-462d-ab11-1aed70c1e11d"><Link data-curate-edit-id="ed8f8ca0-1311-49c5-b272-914f92e21156" to="/blog">Blog</Link></li>
          </ul>
        </div>
        <Link data-curate-edit-id="f47c1517-93ca-492b-a0a9-f6660777ead9" to="/" className="btn btn-ghost text-xl">FitPro</Link>
      </div>
      <div data-curate-edit-id="213652c7-9e97-4cb0-a5c5-5a2ada1a7c77" className="navbar-center hidden lg:flex">
        <ul data-curate-edit-id="774e3f09-ec76-48eb-9bbc-7b0376b0ba2f" className="menu menu-horizontal px-1">
          <li data-curate-edit-id="98052c43-ac16-455c-8444-82d36ba50e8f"><Link data-curate-edit-id="572de536-6aa2-4424-a28b-28ee433d25f0" to="/">Home</Link></li>
          <li data-curate-edit-id="68a314ed-f70a-4073-b77e-ccd26eb5bd51"><Link data-curate-edit-id="44a68b65-f831-444e-8957-e78615b2a476" to="/workouts">Workouts</Link></li>
          <li data-curate-edit-id="f50b62d9-1732-4bb3-88fa-3892aa98a0f7"><Link data-curate-edit-id="a9cd5b81-5b3f-4b7f-a605-9081c46f6734" to="/equipment">Equipment</Link></li>
          <li data-curate-edit-id="a0566d99-d37f-420a-b6ee-3d550c6a9183"><Link data-curate-edit-id="a310e9d7-2b9e-4097-a45c-9cf57d18d377" to="/guide">Beginners Guide</Link></li>
          <li data-curate-edit-id="94872772-f225-47bb-b6d1-aef2ee932f35"><Link data-curate-edit-id="c2d35cf1-ec97-4b24-8239-c690382073f4" to="/blog">Blog</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;