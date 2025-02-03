import React from 'react';

const Products = () => {
  const products = [
    { id: 1, name: "Fresh Apples", price: 2.99, image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6" },
    { id: 2, name: "Organic Bananas", price: 1.99, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e" },
    { id: 3, name: "Fresh Tomatoes", price: 3.99, image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337" }
  ];

  return (
    <div data-curate-edit-id="adfc5c8b-b840-424f-9445-2820d3084302" className="container mx-auto px-4 py-8">
      <div data-curate-edit-id="ffd5dd0e-ce6e-4228-8b4e-b95a037f0b99" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div data-curate-edit-id="e63ac7f4-4689-44c0-9feb-15c6eb39c52d" key={product.id} className="card bg-base-100 shadow-xl">
            <figure data-curate-edit-id="6a2ba04c-d9dc-4a65-b8b2-c3b0f447b63b"><img data-curate-edit-id="8fc6e69f-30ef-48bd-8e1d-2c23d88d51ad" src={product.image} alt={product.name} className="h-48 w-full object-cover" /></figure>
            <div data-curate-edit-id="f549d367-aff2-4631-9642-1ab7f70c6654" className="card-body">
              <h2 data-curate-edit-id="7ac487d5-a0d6-4e18-ad8f-8e3707168a41" className="card-title">{product.name}</h2>
              <p data-curate-edit-id="4a266bdb-5dde-445a-a627-15dc6ef1453d">${product.price}</p>
              <div data-curate-edit-id="d5600d57-fb05-4b28-972d-caa0c9a576e0" className="card-actions justify-end">
                <button data-curate-edit-id="f2164eb6-7e27-4db7-b925-4b470e917511" className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;