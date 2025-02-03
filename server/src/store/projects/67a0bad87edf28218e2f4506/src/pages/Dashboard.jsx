import React from 'react';

const Dashboard = () => {
    return (
        <div data-curate-edit-id="a268eff3-e9e6-450d-b658-b4b387595960" className="p-4">
            <div data-curate-edit-id="459323d6-6f51-473c-bcaa-ba51cd5d6065" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div data-curate-edit-id="71483a65-b42c-4103-9de6-dac9f197241b" className="card bg-base-200">
                    <div data-curate-edit-id="f5085a07-03db-437a-85f0-b59e27e745cf" className="card-body">
                        <h2 data-curate-edit-id="f6ae3ae2-6cd5-4c60-818b-39c73e32f915" className="card-title">Daily Stats</h2>
                        <p data-curate-edit-id="14424d1c-500a-472f-9589-c6bc08c0c886">Calories: 1,200/2,000</p>
                        <p data-curate-edit-id="5387963f-b168-4933-9977-e79fcbcae205">Steps: 8,000/10,000</p>
                        <p data-curate-edit-id="73ce32c9-2360-42cb-91fb-66af8bd0dd1e">Water: 6/8 glasses</p>
                    </div>
                </div>
                <div data-curate-edit-id="2c5c308b-ab8d-4a85-ac0f-96e6130690d3" className="card bg-base-200">
                    <div data-curate-edit-id="baf54285-fd2c-4531-8b10-2df54b3dbe2d" className="card-body">
                        <h2 data-curate-edit-id="9d78188d-9569-4c64-984c-69fad6b0ac2e" className="card-title">Recent Workouts</h2>
                        <ul data-curate-edit-id="43b4925f-61bd-4de7-b13d-b6088310bc74">
                            <li data-curate-edit-id="b94bd948-ae0b-40ce-b5c3-3e74ab91b959">Upper Body - 45 mins</li>
                            <li data-curate-edit-id="e3e593c0-e9e1-458b-b0dc-74b301a0a284">Cardio - 30 mins</li>
                            <li data-curate-edit-id="259ed85b-fc66-48c4-9774-e352ded69bdd">Legs - 60 mins</li>
                        </ul>
                    </div>
                </div>
                <div data-curate-edit-id="c7f6f919-5a89-4477-bfeb-fdb9caeed1f4" className="card bg-base-200">
                    <div data-curate-edit-id="2f0e7c31-121b-495d-ad67-0e76244808f4" className="card-body">
                        <h2 data-curate-edit-id="4fb4d4a8-c02f-4e5e-8c45-ab90b86faee8" className="card-title">Goals Progress</h2>
                        <progress data-curate-edit-id="ae11d551-e531-48e3-8d14-d6cbeb492e15" className="progress progress-primary w-full" value="70" max="100"></progress>
                        <p data-curate-edit-id="cba17717-ca52-418e-8802-a6b4bc1bf38b">Weight Loss Goal: 70%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;