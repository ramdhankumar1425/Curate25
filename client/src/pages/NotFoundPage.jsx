import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <div className="absolute top-0 z-[1001] flex flex-col items-center justify-center h-screen w-full px-3 text-center bg-gray-100 text-gray-800">
        <h1 className="text-6xl font-extrabold">404</h1>
        <p className="mt-4 text-lg">
            Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-sm mt-2 text-gray-600">
            It might have been moved or deleted.
        </p>
        <Link
            to="/"
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
        >
            Go Back Home
        </Link>
    </div>
);

export default NotFoundPage;
