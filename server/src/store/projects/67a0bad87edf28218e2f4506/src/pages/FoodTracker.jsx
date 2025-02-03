import React from 'react';

const FoodTracker = () => {
    return (
        <div data-curate-edit-id="359eb4ad-20cc-475c-a5fd-8e376173e15f" className="p-4">
            <h1 data-curate-edit-id="71b46328-7321-45f2-b45e-e2c5fa295cc5" className="text-3xl font-bold mb-4">Food Tracker</h1>
            <div data-curate-edit-id="7c0bd733-cf73-43d6-815f-2fec58fa6c44" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div data-curate-edit-id="ece38e04-ac3d-4fb5-b021-8331565569fc" className="card bg-base-200">
                    <div data-curate-edit-id="b7834e8b-e354-4c4f-a0aa-b0d13a4793b5" className="card-body">
                        <h2 data-curate-edit-id="860290ad-60f9-4292-8143-d67987d0a51e" className="card-title">Add Food</h2>
                        <input data-curate-edit-id="106d6c06-6bf7-497a-8930-f41b618485a4" type="text" placeholder="Search food" className="input input-bordered w-full" />
                        <button data-curate-edit-id="9531cfb3-9dda-4eed-b3f3-983b515fe526" className="btn btn-primary mt-2">Add Entry</button>
                    </div>
                </div>
                <div data-curate-edit-id="456c1d20-4bbc-4029-afe2-18e363989b20" className="card bg-base-200">
                    <div data-curate-edit-id="9efe997b-5154-4423-9387-70b12fa3b37b" className="card-body">
                        <h2 data-curate-edit-id="255c13cd-025f-4b4b-ad60-a1edde554184" className="card-title">Today's Meals</h2>
                        <div data-curate-edit-id="7e669d75-57f2-469a-9044-4528cda94637" className="overflow-x-auto">
                            <table data-curate-edit-id="5481a17f-a069-4e06-b108-180cbe8a7daf" className="table w-full">
                                <thead data-curate-edit-id="ccc4a79b-a5b7-4f48-8e77-1d3e9bb05c19">
                                    <tr data-curate-edit-id="ea36b22a-29e9-40bc-911e-6046c53401ab">
                                        <th data-curate-edit-id="8d1d2f49-9353-42c3-a9d3-4a8ae7d57517">Meal</th>
                                        <th data-curate-edit-id="74b8b174-2fe7-463e-b46f-ec705cae9e29">Calories</th>
                                        <th data-curate-edit-id="def04918-37c8-4567-a5cf-5705658dde51">Action</th>
                                    </tr>
                                </thead>
                                <tbody data-curate-edit-id="425149a2-0a90-4a67-8830-8da8a7970038">
                                    <tr data-curate-edit-id="a1565945-56de-4282-9648-33a907e04a2d">
                                        <td data-curate-edit-id="00bf98ce-98d8-4890-b39a-5d6fc9752e96">Breakfast</td>
                                        <td data-curate-edit-id="bd71c02b-4df2-42fe-b4c2-afc0dd4349c9">400</td>
                                        <td data-curate-edit-id="398233f1-39c4-4dd3-a683-869a1c8c863e"><button data-curate-edit-id="99060beb-fe78-4680-99bf-1b70a5ced263" className="btn btn-xs btn-error">Delete</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodTracker;