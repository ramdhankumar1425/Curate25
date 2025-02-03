import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer data-curate-edit-id="6e30aff4-f3ab-4422-9b06-6516437a989e" className="footer p-10 bg-neutral text-neutral-content mt-10">
            <div data-curate-edit-id="51b7e2fa-ba72-4881-b6f2-88a7ff73ec59">
                <span data-curate-edit-id="b3826ef7-cf13-4dab-bd29-feb45e05ebdd" className="footer-title">Company</span> 
                <Link data-curate-edit-id="ad69d902-a8f7-4b43-8249-d5eff09f5254" to="/" className="link link-hover">About us</Link>
                <Link data-curate-edit-id="f720a9e3-a956-4121-ac1b-ce170e945fd8" to="/contact" className="link link-hover">Contact</Link>
                <Link data-curate-edit-id="ac6e1241-2ca1-4754-924a-3cba735cef39" to="/careers" className="link link-hover">Careers</Link>
            </div> 
            <div data-curate-edit-id="6fb50adb-1f7e-4888-8ebe-ef98be0888ac">
                <span data-curate-edit-id="a63925a5-0025-4790-8f99-51d525df1ebc" className="footer-title">Products</span> 
                <Link data-curate-edit-id="7f784db9-63f8-4ca0-8209-ca5d1ece52ef" to="/products/cardio" className="link link-hover">Cardio Equipment</Link>
                <Link data-curate-edit-id="9dbe01bb-e400-47ca-ba85-061187418061" to="/products/strength" className="link link-hover">Strength Training</Link>
                <Link data-curate-edit-id="412d375f-daa9-43f1-ba09-eb66c2f07cc5" to="/products/accessories" className="link link-hover">Accessories</Link>
            </div> 
            <div data-curate-edit-id="21ca3cca-c5c0-4dd5-aa78-3495d3ff35c5">
                <span data-curate-edit-id="e6bf15f9-a47d-476c-a1f0-56a1f24c3ef9" className="footer-title">Legal</span> 
                <Link data-curate-edit-id="f8d9e6f7-feb8-4616-a8a6-a112ac2169bf" to="/terms" className="link link-hover">Terms of use</Link>
                <Link data-curate-edit-id="66e4d13b-0fe4-4e6b-8600-e24aa106fa4b" to="/privacy" className="link link-hover">Privacy policy</Link>
                <Link data-curate-edit-id="0db527c2-518f-49a1-a19a-38ce3c76f2c6" to="/cookie" className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;