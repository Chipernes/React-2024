import { Link } from "react-router-dom";
import products from "../../../storage/products.json";


const Main = () => {
  return (
    <div className="main-page max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
        Welcome to something like Rozetka store!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {product.name}
            </h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <Link
              to={`/product/${product.id}`}
              className="text-blue-500 hover:underline"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
