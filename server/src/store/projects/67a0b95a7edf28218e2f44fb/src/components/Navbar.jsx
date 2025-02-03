import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div data-curate-edit-id="693c0565-1917-44e6-812d-5ab032b33410" className="navbar bg-base-100 shadow-lg">
            <div data-curate-edit-id="124d4b0c-9a1e-441e-a7a9-10e5d5f2020e" className="navbar-start">
                <div data-curate-edit-id="66e6baec-dc42-4982-a257-9fc520dc870a" className="dropdown">
                    <div data-curate-edit-id="4d07675f-1ad6-4a58-a393-2ecf057a0679" tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg data-curate-edit-id="f7ac8de7-6657-4a44-954c-9a3028f77eb2" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path data-curate-edit-id="c19750e1-fadd-49e4-a350-43275b1139f7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul data-curate-edit-id="166d1e60-8b15-4c34-bda0-e7e17cd7041a" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li data-curate-edit-id="2eafbaf6-5137-45e8-8d2d-0c9ab37115b1"><Link data-curate-edit-id="cab80cf3-c4a8-4b31-99f0-e15b33f98cb4" to="/">Home</Link></li>
                        <li data-curate-edit-id="26ae205b-55d0-4d7d-89a5-ed978e131314"><Link data-curate-edit-id="b6b445a7-65e5-48ea-9237-717f1552021b" to="/menu">Menu</Link></li>
                        <li data-curate-edit-id="fffa5115-2d27-4be0-a7a9-7dd0a6eb23ec"><Link data-curate-edit-id="78ad2dd0-1638-4324-a649-631e02053ca1" to="/about">About</Link></li>
                        <li data-curate-edit-id="ae7102d4-9c91-4f09-ae72-62afa074b430"><Link data-curate-edit-id="eabf5d5b-3eef-4d95-bd14-41af76da8513" to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <Link data-curate-edit-id="5e43c339-56ef-4e58-b06b-6fc68b7653f0" to="/" className="btn btn-ghost text-xl">Delightful Dining</Link>
            </div>
            <div data-curate-edit-id="ced6ca8d-01e8-4219-af8e-2d80f2c6c706" className="navbar-end hidden lg:flex">
                <ul data-curate-edit-id="608c2893-d65a-43ec-98fb-554f53f75ccf" className="menu menu-horizontal px-1">
                    <li data-curate-edit-id="857b2543-a5ec-4c93-a52f-8d794e3e3599"><Link data-curate-edit-id="584e1e7e-707e-4672-bd62-145fac396894" to="/">Home</Link></li>
                    <li data-curate-edit-id="a14bc97b-2737-4da7-b2bc-5423b1443d13"><Link data-curate-edit-id="1c67dd51-ad54-4d1a-b17d-1fcb086ca617" to="/menu">Menu</Link></li>
                    <li data-curate-edit-id="302e70df-acd0-4af1-9117-db3949cc129e"><Link data-curate-edit-id="5d31f776-603b-4c91-92f3-293f9bc7987d" to="/about">About</Link></li>
                    <li data-curate-edit-id="f8aaaea3-b3ae-4202-9fe9-44534c0c1214"><Link data-curate-edit-id="2853690c-2111-47c9-9b0c-84a9f52e70fd" to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;