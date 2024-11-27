import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="product-page max-w-3xl mx-auto py-8">
      <div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-100">
        <p className="text-6xl font-bold text-red-500 mb-4">404 Error</p>
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Page Not Found :(
        </h1>
        <p className="text-gray-600">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
