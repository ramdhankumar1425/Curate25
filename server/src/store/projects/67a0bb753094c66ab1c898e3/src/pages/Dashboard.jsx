import React from 'react';

const Dashboard = () => {
    return (
        <div data-curate-edit-id="9d4a5fb0-2b69-422f-899f-81eab69761ff" className="grid gap-6">
            <div data-curate-edit-id="8d8476cf-72a7-45f1-bbc1-1d21eebfc3f3" className="stats shadow">
                <div data-curate-edit-id="1335bfe6-e6f6-43a0-8158-28a1132be0a8" className="stat">
                    <div data-curate-edit-id="ed29c850-0686-45fa-a319-7a97f7dee34c" className="stat-title">Daily Calories</div>
                    <div data-curate-edit-id="ef97b9be-20f5-427a-93ab-644e01b5b32a" className="stat-value">1,200 / 2,000</div>
                    <div data-curate-edit-id="4ad42b43-c722-4f82-8bba-5d216238d80c" className="stat-desc">Remaining: 800 kcal</div>
                </div>
                <div data-curate-edit-id="b6c9f824-c189-4a8b-a80c-23a80a065791" className="stat">
                    <div data-curate-edit-id="c8c11939-769f-446c-9703-b6983610769e" className="stat-title">Calories Burned</div>
                    <div data-curate-edit-id="79a53301-07f8-433d-aea0-22f898e88320" className="stat-value">450</div>
                    <div data-curate-edit-id="5153d4a0-7b5b-43b8-ba1b-d52022cf78f6" className="stat-desc">↗︎ 40 (2%)</div>
                </div>
                <div data-curate-edit-id="ab865c4b-b1cf-4f39-861c-0efc8e407222" className="stat">
                    <div data-curate-edit-id="ae495066-6466-4e8a-bc24-d67e1dd1d968" className="stat-title">Active Minutes</div>
                    <div data-curate-edit-id="8735907f-e5b7-436b-858a-6087165d1f4f" className="stat-value">89</div>
                    <div data-curate-edit-id="5e588ff0-54d5-417a-b87f-521ebcec788b" className="stat-desc">Target: 150 min</div>
                </div>
            </div>

            <div data-curate-edit-id="4fdf2669-54bd-4fb6-9afa-69bdb034418c" className="grid md:grid-cols-2 gap-6">
                <div data-curate-edit-id="26690033-9278-4a4e-8276-9b6b84565798" className="card bg-base-100 shadow-xl">
                    <div data-curate-edit-id="4c3c473c-9494-4c20-b468-75d5d48450b2" className="card-body">
                        <h2 data-curate-edit-id="0f7bf227-8adb-4bd1-98fa-218f1db42b4a" className="card-title">Recent Workouts</h2>
                        <div data-curate-edit-id="85ab2508-22b9-4301-a229-4859f41abc11" className="overflow-x-auto">
                            <table data-curate-edit-id="5ec51046-3210-434a-998d-7858c769e368" className="table w-full">
                                <tbody data-curate-edit-id="18b9c0c7-27af-452c-be22-8c45e240417f">
                                    <tr data-curate-edit-id="88c32d6d-2d78-4168-89f7-e6659621defe"><td data-curate-edit-id="69c2c784-7e40-45d6-8ee6-60e22680be77">Running</td><td data-curate-edit-id="6bd52984-6cef-4167-8e71-85b8738df176">30 mins</td><td data-curate-edit-id="eb571971-584a-46d7-93fe-933025ec9d01">300 kcal</td></tr>
                                    <tr data-curate-edit-id="68741419-590f-4dbe-a677-91a045a51954"><td data-curate-edit-id="2604a212-5561-4b5a-9eed-debb7cab58f8">Weight Training</td><td data-curate-edit-id="b2be8e48-cbb5-47f4-b920-368d5b791315">45 mins</td><td data-curate-edit-id="ea2df5ed-8ca5-413c-a6eb-6d173c1b84fd">150 kcal</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div data-curate-edit-id="cbe7c965-674a-4e3a-9ee6-34b544339c39" className="card bg-base-100 shadow-xl">
                    <div data-curate-edit-id="d8c1bddd-d34e-4fb0-b4be-434626f312a5" className="card-body">
                        <h2 data-curate-edit-id="cc827f07-f9fc-4c29-9e23-58b82a7c3737" className="card-title">Daily Goals</h2>
                        <ul data-curate-edit-id="fd1d4124-983a-427e-ac0c-6471654e5f70" className="space-y-2">
                            <li data-curate-edit-id="59da5876-2f42-48a7-9be9-c3c065a4fc42">
                                <div data-curate-edit-id="e5563c0a-c58b-406e-8e01-7381c8892cb1" className="flex justify-between items-center mb-1">
                                    <span data-curate-edit-id="7ce53c20-5e18-402c-ab46-7b71707ae777">Calories Goal</span>
                                    <span data-curate-edit-id="76aa4aab-2629-48ad-a970-26ed840b80da">60%</span>
                                </div>
                                <progress data-curate-edit-id="8ebbdc6a-f874-4ebc-86e5-07500d40c68b" className="progress progress-primary w-full" value="60" max="100"></progress>
                            </li>
                            <li data-curate-edit-id="86e7cf19-7312-4392-8877-23e9349a24b2">
                                <div data-curate-edit-id="fac10065-bfc6-4d2a-81e8-13169431b06c" className="flex justify-between items-center mb-1">
                                    <span data-curate-edit-id="2289a82a-ba6a-486c-b407-7ba57825ea29">Exercise Goal</span>
                                    <span data-curate-edit-id="d675d58f-f197-4c5d-8caf-d26f01b9f6cb">45%</span>
                                </div>
                                <progress data-curate-edit-id="ab349879-0f36-40b9-8c42-6a259bf72d4a" className="progress progress-secondary w-full" value="45" max="100"></progress>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;