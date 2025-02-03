import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div data-curate-edit-id="bd2a2076-b1b0-483d-99c5-7e587fe567a8" className="navbar bg-primary text-primary-content">
            <div data-curate-edit-id="d9618f3c-4504-48f2-b87b-8a2588bc0fa4" className="navbar-start">
                <div data-curate-edit-id="7060b759-078b-4e0e-ae49-6d9867b15951" className="dropdown">
                    <div data-curate-edit-id="7ccba301-93be-4b51-9f19-c8c9bcdb839c" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg data-curate-edit-id="c506f505-95c9-456b-bada-8ccffdb33984" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path data-curate-edit-id="5c562ab0-d914-4970-9a66-48c5c009a3e5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul data-curate-edit-id="2b23111f-bd85-413d-8fb7-c8b54241cb5c" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li data-curate-edit-id="548aac95-3463-4e19-a0bc-f4450fe12228"><Link data-curate-edit-id="3475caef-4d16-49a6-88e0-8ac820367a46" to="/">Dashboard</Link></li>
                        <li data-curate-edit-id="7cb29d01-fbfc-4c52-baca-e5b09ac15cd0"><Link data-curate-edit-id="f887c85d-047c-4f3f-ad42-a3a321e0ff79" to="/calories">Calories</Link></li>
                        <li data-curate-edit-id="bd18d0b6-f995-4e1f-8bb8-c564d44c3f2f"><Link data-curate-edit-id="4a9a0035-e97a-4b81-8d8f-17da84322a64" to="/workouts">Workouts</Link></li>
                        <li data-curate-edit-id="266414a4-ee8a-4945-a518-bb19b74fd771"><Link data-curate-edit-id="744deec1-42e6-4eae-b9ed-153262930385" to="/goals">Goals</Link></li>
                        <li data-curate-edit-id="b14ebc45-fe3f-4e58-b625-efecd1a18fe2"><Link data-curate-edit-id="4cf75efd-a7de-4f7b-b976-d77b148aecc7" to="/reports">Reports</Link></li>
                    </ul>
                </div>
                <Link data-curate-edit-id="ea788a0e-760c-498b-a421-691feccda3af" to="/" className="btn btn-ghost text-xl">Fitness Tracker</Link>
            </div>
            <div data-curate-edit-id="dffdc66c-9366-4d5a-b8e2-38c64e57d5c6" className="navbar-center hidden lg:flex">
                <ul data-curate-edit-id="632a169b-af79-45f9-9b40-12103ce4cf78" className="menu menu-horizontal px-1">
                    <li data-curate-edit-id="49871dfc-a216-4dfb-b172-d3dc3791e9d5"><Link data-curate-edit-id="b7d2835f-69aa-4ccd-8b5b-b28e231c6364" to="/">Dashboard</Link></li>
                    <li data-curate-edit-id="5b9d668d-4f2a-4131-8370-833c84b2ffb5"><Link data-curate-edit-id="55f590ee-87c7-4b3b-9e2a-3d1b57827a0c" to="/calories">Calories</Link></li>
                    <li data-curate-edit-id="f9ea2cf7-28d7-4c3d-b8c7-0c2c94ccba68"><Link data-curate-edit-id="d51b6183-773f-4cf6-b6c6-7fc83b33e0d7" to="/workouts">Workouts</Link></li>
                    <li data-curate-edit-id="01ae9f29-26d3-4177-b63f-1c8647f74375"><Link data-curate-edit-id="f65cb751-87bf-49aa-9bae-a0d166b7378c" to="/goals">Goals</Link></li>
                    <li data-curate-edit-id="4bae7730-64c7-4175-8c5a-637ac4dc9e57"><Link data-curate-edit-id="7c70a992-2bf6-489d-a28a-1806c17f46b8" to="/reports">Reports</Link></li>
                </ul>
            </div>
            <div data-curate-edit-id="c13f648a-3c72-4fb4-8a38-c51d2743f900" className="navbar-end">
                <button data-curate-edit-id="58f3bca4-dc21-4718-8737-795949f2ea4e" className="btn btn-ghost btn-circle">
                    <div data-curate-edit-id="e1d3b586-6ca9-45f4-a334-98bbe9378430" className="indicator">
                        <svg data-curate-edit-id="b1d41589-c209-45b9-8218-debe61a94f55" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path data-curate-edit-id="c65e4c33-8a89-4baa-a2ee-80daa8cbbda3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span data-curate-edit-id="69cdce6f-ed7e-4326-9be6-f4bb24a976e0" className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;