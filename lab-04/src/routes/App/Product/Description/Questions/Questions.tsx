import { useParams } from "react-router-dom";
import products from "../../../../../storage/products.json";

const Questions = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  return (
    <>
      { product ?
        <div className="product-page max-w-3xl mx-auto py-8">
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Questions about {product.name}</h2>
            <ul className="mt-4 space-y-4">
              {product.questions.map((q, index) => (
                <li key={index} className="bg-gray-100 p-4 rounded">
                  <p>
                    <strong>Q:</strong> {q.question}
                  </p>
                  <p>
                    <strong>A:</strong> {q.answer}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        : <p>Questions not found</p>
      }
    </>
  );
};

export default Questions;
