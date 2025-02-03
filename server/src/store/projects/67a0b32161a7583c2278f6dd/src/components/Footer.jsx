import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer data-curate-edit-id="c5a576ba-acb9-43ef-ae7a-cb8da69dd083" className="footer p-10 bg-neutral text-neutral-content">
      <div data-curate-edit-id="54640a71-ad36-4539-a624-5e09b9c51c7c">
        <span data-curate-edit-id="26d2b413-09c5-4369-92f6-bef22491765a" className="footer-title">Services</span> 
        <Link data-curate-edit-id="e51014bf-a528-4a2a-b427-b6335a113e91" to="/exercises" className="link link-hover">Exercises</Link>
        <Link data-curate-edit-id="962c1801-d155-44bc-8483-7a1477de7784" to="/resources" className="link link-hover">Resources</Link>
        <Link data-curate-edit-id="e5877ee0-68d8-40f7-8a07-a0c30ab386d0" to="/dashboard" className="link link-hover">Dashboard</Link>
      </div> 
      <div data-curate-edit-id="51338d03-5e32-4b47-aee8-73d2cfb14af2">
        <span data-curate-edit-id="76fd3791-523a-40f4-814c-e7fe64e39946" className="footer-title">Company</span> 
        <Link data-curate-edit-id="7265fc22-7ead-4a6b-8f64-0cd55ff38290" to="/" className="link link-hover">About us</Link>
        <Link data-curate-edit-id="01fa899d-613a-420c-a277-8d6c9d7c92ff" to="/" className="link link-hover">Contact</Link>
        <Link data-curate-edit-id="c91eaa6f-9851-4d70-81fc-964f12275118" to="/" className="link link-hover">Terms of use</Link>
        <Link data-curate-edit-id="a24cd6d7-7467-4807-bcdb-f008321ec4de" to="/" className="link link-hover">Privacy policy</Link>
      </div> 
      <div data-curate-edit-id="dc7bfaa3-c75c-4a64-b24e-142a80fa424b">
        <span data-curate-edit-id="d161596d-f110-4563-b260-6b3c52a8514a" className="footer-title">Social</span> 
        <div data-curate-edit-id="6b3aead2-b67d-4d25-9664-62d234bff184" className="grid grid-flow-col gap-4">
          <a data-curate-edit-id="572f2a7b-f6cf-4a50-b9a1-20f300174ce4"><svg data-curate-edit-id="dc2d517c-8a98-475d-9218-9b214f3cffd8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path data-curate-edit-id="6c959ead-9d3f-4a00-abde-bb8f8ecb23c1" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
          <a data-curate-edit-id="0f41f23a-16c7-4598-8897-e9093b671037"><svg data-curate-edit-id="40c51da5-382b-4c9f-914e-81740e9808f1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path data-curate-edit-id="0575cbca-4dca-458c-82f7-ccab412b7569" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
          <a data-curate-edit-id="799aa5f8-84de-4c07-ac55-439ec17ceabe"><svg data-curate-edit-id="4e480352-1fe6-4b2a-a1cd-7c493b191bd3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path data-curate-edit-id="333b12c8-6ec0-433a-ba51-6a58e56325fe" d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;