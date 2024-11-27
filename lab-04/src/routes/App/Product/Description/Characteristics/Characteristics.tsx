import { useParams } from "react-router-dom";
import products from "../../../../../storage/products.json";

const Characteristics = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  return (
    <>
      { product ?
        <div className="product-page max-w-3xl mx-auto py-8">
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Characteristics of {product.name}</h2>
            <ul className="mt-4">
              {Object.entries(product.characteristics).map(([key, value]) => (
                <li key={key} className="capitalize">
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
        : <p>Characteristics not found</p>
      }
    </>
  );
};

export default Characteristics;
