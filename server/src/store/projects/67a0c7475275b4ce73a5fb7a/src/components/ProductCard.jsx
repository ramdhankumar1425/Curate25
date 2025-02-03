import React from 'react';

const ProductCard = ({ name, price, image }) => {
    return (
        <div data-curate-edit-id="c1a62a92-a070-4735-a280-22f01a565f05" className="card w-80 bg-base-100 shadow-xl">
            <figure data-curate-edit-id="d3c2488b-72e0-4ec0-a1de-3751d98362f4"><img data-curate-edit-id="b9c731dd-0dc2-4c7c-bc83-5096ea09c6fe" src={image} alt={name} className="h-48 w-full object-cover" /></figure>
            <div data-curate-edit-id="73a3df66-6603-4f43-ab0f-a204770b1d6b" className="card-body">
                <h2 data-curate-edit-id="c20d11ba-bbab-4c56-a56b-3f073d86328b" className="card-title">{name}</h2>
                <p data-curate-edit-id="788798ae-fb38-40fd-aa69-412d287cb1af">${price}</p>
                <div data-curate-edit-id="4b458c79-0f12-43a4-9a53-c61649634b6c" className="card-actions justify-end">
                    <button data-curate-edit-id="78f06c80-c92d-4e62-8ef5-5d955e9c089d" className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;