import { useParams, Link } from "react-router-dom";
import products from "../../../storage/products.json";

const Product = () => {
  const { id } = useParams();
  const product = products.find(product => product.id === Number(id));

  return (
    <>
      { product ?
        <div className="product-page max-w-3xl mx-auto py-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>
          <p>{product.description}</p>

          <nav className="mt-6">
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="characteristics"
                  className="text-cyan-600 hover:underline"
                >
                  Characteristics
                </Link>
              </li>
              <li>
                <Link to="comments" className="text-cyan-600 hover:underline">
                  Comments
                </Link>
              </li>
              <li>
                <Link to="questions" className="text-cyan-600 hover:underline">
                  Questions
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        : <p>Product not found</p>
      }
    </>
  );
};

export default Product;
