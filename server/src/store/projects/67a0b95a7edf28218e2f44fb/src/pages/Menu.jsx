import React from 'react';

const Menu = () => {
    const menuItems = {
        appetizers: [
            { name: "Bruschetta", price: "$8.99", description: "Toasted bread with fresh tomatoes and basil" },
            { name: "Calamari", price: "$12.99", description: "Crispy fried squid with marinara sauce" }
        ],
        mainCourse: [
            { name: "Grilled Salmon", price: "$24.99", description: "Fresh salmon with seasonal vegetables" },
            { name: "Beef Tenderloin", price: "$29.99", description: "Prime cut beef with potato puree" }
        ],
        desserts: [
            { name: "Tiramisu", price: "$8.99", description: "Classic Italian dessert" },
            { name: "Chocolate Lava Cake", price: "$9.99", description: "Warm chocolate cake with vanilla ice cream" }
        ]
    };

    return (
        <div data-curate-edit-id="aff49bb9-6323-47cd-9016-bfdf20f56422" className="container mx-auto px-4 py-8">
            <h1 data-curate-edit-id="eefd3c2f-2a24-47a7-82f0-6e85a8930a02" className="text-4xl font-bold text-center mb-8">Our Menu</h1>
            
            <div data-curate-edit-id="20839280-596d-4987-867c-f7755a5ce93b" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div data-curate-edit-id="31002a02-09fe-4f6b-9ee1-49535f192801" className="menu-card">
                    <div data-curate-edit-id="7bc2192d-769a-4286-88a5-cb57443889b4" className="card-body">
                        <h2 data-curate-edit-id="b21fc1b7-68f1-4717-81c9-2c8f56e6c897" className="card-title">Appetizers</h2>
                        {menuItems.appetizers.map((item, index) => (
                            <div data-curate-edit-id="e3121efd-fc6f-4ec8-b20c-8c4120938599" key={index} className="menu-item">
                                <div data-curate-edit-id="7553de6b-8a8e-4891-9a04-8d7c28e12876">
                                    <h3 data-curate-edit-id="5d14d183-c02c-4746-b3dd-55b9517b3717" className="font-bold">{item.name}</h3>
                                    <p data-curate-edit-id="335e7310-e70a-4a42-be6f-17a4d6bd4aa5" className="text-sm">{item.description}</p>
                                </div>
                                <span data-curate-edit-id="1603e9b4-ab47-446e-ae85-b8f7a83b9695" className="font-bold">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div data-curate-edit-id="bba2793e-0ed9-441b-a1e5-b063766ada88" className="menu-card">
                    <div data-curate-edit-id="f2ad8047-79f8-462f-ac63-8fbe41007a00" className="card-body">
                        <h2 data-curate-edit-id="caa07a9e-2313-4968-a678-ba6bd8862614" className="card-title">Main Course</h2>
                        {menuItems.mainCourse.map((item, index) => (
                            <div data-curate-edit-id="4c04a0ef-eeff-423a-89a1-c8568acb213d" key={index} className="menu-item">
                                <div data-curate-edit-id="0f11e6aa-8c56-4e58-89f5-de2379f22c57">
                                    <h3 data-curate-edit-id="2c5b674e-141f-4503-80a9-d572696b1a8a" className="font-bold">{item.name}</h3>
                                    <p data-curate-edit-id="872b0f43-379c-478d-88a8-fb6df632a4ff" className="text-sm">{item.description}</p>
                                </div>
                                <span data-curate-edit-id="d6e8cf51-b970-4191-a119-883573a4f18d" className="font-bold">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div data-curate-edit-id="53c6d3a6-3309-4160-90f7-869b1e794394" className="menu-card">
                    <div data-curate-edit-id="e9eb6c6e-acce-43b8-b0ca-2ba9c412ad9c" className="card-body">
                        <h2 data-curate-edit-id="1422acb6-b8dc-4fad-8fc2-629581550237" className="card-title">Desserts</h2>
                        {menuItems.desserts.map((item, index) => (
                            <div data-curate-edit-id="8fece8e4-6a33-40f4-9ddd-5b2a3cb673ea" key={index} className="menu-item">
                                <div data-curate-edit-id="6804f60d-f638-4113-8cd1-e7a736bcd8ab">
                                    <h3 data-curate-edit-id="326c5220-1cc9-4525-896f-474861597165" className="font-bold">{item.name}</h3>
                                    <p data-curate-edit-id="70688efe-da6e-48f1-8656-51720ec8f793" className="text-sm">{item.description}</p>
                                </div>
                                <span data-curate-edit-id="301c6db8-ef1d-4600-85c0-e15cc5de839f" className="font-bold">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;