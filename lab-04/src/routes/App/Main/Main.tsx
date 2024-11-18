import { Link } from "react-router-dom";
import {ProductType} from '../Product/Description/Product.type';

const Main = () => {
  const products: ProductType[] = [
    { id: 1, name: "Product 1", description: "This is Product 1" },
    { id: 2, name: "Product 2", description: "This is Product 2" },
    { id: 3, name: "Product 3", description: "This is Product 3" },
  ];

  return (
    <div className="main-page">
      <h1>Welcome to something like Rozetka store!</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`}>View Product</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
