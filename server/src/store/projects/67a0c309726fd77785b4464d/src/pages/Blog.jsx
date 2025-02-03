import React from 'react';

const Blog = () => {
    const posts = [
        {
            title: "5 Essential Morning Workout Tips",
            image: "https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg",
            excerpt: "Start your day right with these effective morning workout routines..."
        },
        {
            title: "Nutrition Tips for Muscle Gain",
            image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
            excerpt: "Learn about the best foods to support your muscle building journey..."
        }
    ];

    return (
        <div data-curate-edit-id="0f30489c-7ed6-4634-89f0-885f205baff3" className="container mx-auto px-4 py-8">
            <h1 data-curate-edit-id="710248dc-05ba-44aa-83cb-1372a1500224" className="text-4xl font-bold text-center mb-8">Latest Blog Posts</h1>
            <div data-curate-edit-id="6a4776dd-a785-4239-bcd7-1ab087a9fec5" className="grid md:grid-cols-2 gap-8">
                {posts.map((post, index) => (
                    <div data-curate-edit-id="e2f50143-f53d-4d4b-a88c-a4bf51880144" key={index} className="card bg-base-100 shadow-xl">
                        <figure data-curate-edit-id="f016d11a-7b41-481b-843a-d2d541bbdb6f"><img data-curate-edit-id="28857afe-433a-4300-b3e8-2f59863178f3" src={post.image} alt={post.title} className="h-64 w-full object-cover"/></figure>
                        <div data-curate-edit-id="f36ccd03-aae8-4a2f-85e0-ff7e26592edb" className="card-body">
                            <h2 data-curate-edit-id="92298f13-e17a-406e-b9e9-f171584c97f0" className="card-title">{post.title}</h2>
                            <p data-curate-edit-id="08570c61-2fb0-47af-82b3-9c15e280d2ec">{post.excerpt}</p>
                            <div data-curate-edit-id="7d4b667d-26a9-4942-b6d9-0b66805b8f95" className="card-actions justify-end">
                                <button data-curate-edit-id="c1e500a2-1558-460f-aab9-e0d959a1c746" className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;