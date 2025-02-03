import React from 'react';

const Contact = () => {
    return (
        <div data-curate-edit-id="a0487673-481d-4a5d-9a7f-f7a14c6eb684" className="container mx-auto px-4 py-8">
            <div data-curate-edit-id="fc727e88-b25b-4c56-b1d4-259df9e713c5" className="max-w-md mx-auto">
                <h1 data-curate-edit-id="6c175fc0-7db0-4476-983a-3569f0994e73" className="text-4xl font-bold text-center mb-8">Contact Me</h1>
                <form data-curate-edit-id="d67a9dc7-2402-41d1-8854-7215958d5234" className="space-y-4">
                    <div data-curate-edit-id="661d1040-796d-4942-b98e-7b60a67f56a8" className="form-control">
                        <label data-curate-edit-id="37d4c200-b54b-43d6-848b-2665acf4cce5" className="label">
                            <span data-curate-edit-id="0ac6fd9d-a567-445f-9580-2a5f4fd31927" className="label-text">Name</span>
                        </label>
                        <input data-curate-edit-id="91c184c5-c1e1-4840-a5dc-7a45f87416dc" type="text" placeholder="Your name" className="input input-bordered" />
                    </div>
                    <div data-curate-edit-id="14efaf07-5fbf-4a54-bd8b-f913d6a86fb5" className="form-control">
                        <label data-curate-edit-id="40e43886-9e43-4c50-bf7d-01b4cabd4995" className="label">
                            <span data-curate-edit-id="ab66be12-8c8b-4e63-b50d-a300893bca46" className="label-text">Email</span>
                        </label>
                        <input data-curate-edit-id="d10cf523-c161-4fab-89b5-833c5145dcc1" type="email" placeholder="your.email@example.com" className="input input-bordered" />
                    </div>
                    <div data-curate-edit-id="a3679657-b893-4654-a576-7c77e858c3ca" className="form-control">
                        <label data-curate-edit-id="ce2861e4-c8ac-43c5-ac85-3bb38a221aef" className="label">
                            <span data-curate-edit-id="9744ee1d-32fa-4431-aaa3-ec8003745da7" className="label-text">Message</span>
                        </label>
                        <textarea data-curate-edit-id="461cb620-f3d3-4ea9-bcf3-71471ffe5162" className="textarea textarea-bordered h-24" placeholder="Your message"></textarea>
                    </div>
                    <button data-curate-edit-id="434547bd-33b4-49c4-948a-b2c6084a6d84" className="btn btn-primary w-full">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;