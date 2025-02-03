import React from 'react';

const Settings = () => {
    return (
        <div data-curate-edit-id="0c999d04-2283-45ee-b4ae-22932c61f211" className="card bg-base-100 shadow-xl">
            <div data-curate-edit-id="48aaf526-e049-4773-9fbe-731399a5c9d1" className="card-body">
                <h2 data-curate-edit-id="67846c48-d609-4537-885d-ea556568687f" className="card-title">Settings</h2>
                <div data-curate-edit-id="b24fe623-ea92-4e7e-9115-69368c4e8537" className="form-control">
                    <label data-curate-edit-id="36288093-2aa0-408a-bb06-dc0cc0d9e03f" className="label">
                        <span data-curate-edit-id="1f2989b5-e63d-4002-9bbe-8d555e4c1d74" className="label-text">Default Absence Threshold</span>
                    </label>
                    <input data-curate-edit-id="7b7223a7-6035-413b-8907-c6b0cdaf7f0f" type="number" placeholder="5" className="input input-bordered w-full max-w-xs" />
                </div>
                <div data-curate-edit-id="a8c516a6-147f-41d6-b484-45e6ca7a5bf5" className="card-actions justify-end">
                    <button data-curate-edit-id="68e880f8-2d75-4a88-b26f-17b30ac11b1e" className="btn btn-primary">Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default Settings;